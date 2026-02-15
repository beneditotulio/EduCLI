import { promises as fs } from "fs";
import path from "path";
import { LessonContent } from "../services/contentService";

export async function generateQuizFile(lesson: LessonContent, outputRoot: string): Promise<string> {
  const lessonDir = path.join(outputRoot, lesson.slug);
  await fs.mkdir(lessonDir, { recursive: true });

  const targetPath = path.join(lessonDir, "quiz.json");
  const payload = {
    title: lesson.title,
    level: lesson.level,
    language: lesson.language,
    difficulty: lesson.level,
    questions: lesson.quiz,
  };

  await fs.writeFile(targetPath, JSON.stringify(payload, null, 2), { encoding: "utf8" });

  return targetPath;
}


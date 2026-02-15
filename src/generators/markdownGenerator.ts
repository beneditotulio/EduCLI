import { promises as fs } from "fs";
import path from "path";
import { LessonContent } from "../services/contentService";
import { renderMarkdownLesson } from "../templates/markdownTemplate";

export async function generateMarkdownFile(lesson: LessonContent, outputRoot: string): Promise<string> {
  const lessonDir = path.join(outputRoot, lesson.slug);
  await fs.mkdir(lessonDir, { recursive: true });

  const markdownContent = renderMarkdownLesson(lesson);
  const targetPath = path.join(lessonDir, "roteiro.md");

  await fs.writeFile(targetPath, markdownContent, { encoding: "utf8" });

  return targetPath;
}


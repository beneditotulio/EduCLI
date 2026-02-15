import { promises as fs } from "fs";
import path from "path";
import { LessonContent } from "../services/contentService";
import { renderHtmlLesson } from "../templates/htmlTemplate";

export async function generateHtmlFile(lesson: LessonContent, outputRoot: string): Promise<string> {
  const lessonDir = path.join(outputRoot, lesson.slug);
  await fs.mkdir(lessonDir, { recursive: true });

  const htmlContent = renderHtmlLesson(lesson);
  const targetPath = path.join(lessonDir, "index.html");

  await fs.writeFile(targetPath, htmlContent, { encoding: "utf8" });

  return targetPath;
}


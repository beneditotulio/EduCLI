import { describe, expect, it } from "vitest";
import {
  generateLessonContent,
  LessonContent,
  LessonLanguage,
  LessonLevel,
} from "../src/services/contentService";

function buildParams(title: string, level: LessonLevel, language: LessonLanguage) {
  return {
    title,
    level,
    language,
    slug: "example-slug",
  };
}

describe("generateLessonContent", () => {
  it("generates content in Portuguese by default when language is pt", () => {
    const lesson: LessonContent = generateLessonContent(
      buildParams("Introdução à Programação", "beginner", "pt"),
    );

    expect(lesson.language).toBe("pt");
    expect(lesson.learningObjectives.length).toBeGreaterThanOrEqual(1);
    expect(lesson.quiz.length).toBeGreaterThanOrEqual(5);
  });

  it("generates content in English when language is en", () => {
    const lesson: LessonContent = generateLessonContent(
      buildParams("Introduction to Programming", "beginner", "en"),
    );

    expect(lesson.language).toBe("en");
    expect(lesson.learningObjectives.length).toBeGreaterThanOrEqual(1);
    expect(lesson.quiz.length).toBeGreaterThanOrEqual(5);
  });

  it("includes the provided slug in the result", () => {
    const lesson: LessonContent = generateLessonContent(
      buildParams("Title", "intermediate", "pt"),
    );

    expect(lesson.slug).toBe("example-slug");
  });
});


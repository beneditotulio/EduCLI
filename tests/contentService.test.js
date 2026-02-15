"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const contentService_1 = require("../src/services/contentService");
function buildParams(title, level, language) {
    return {
        title,
        level,
        language,
        slug: "example-slug",
    };
}
(0, vitest_1.describe)("generateLessonContent", () => {
    (0, vitest_1.it)("generates content in Portuguese by default when language is pt", () => {
        const lesson = (0, contentService_1.generateLessonContent)(buildParams("Introdução à Programação", "beginner", "pt"));
        (0, vitest_1.expect)(lesson.language).toBe("pt");
        (0, vitest_1.expect)(lesson.learningObjectives.length).toBeGreaterThanOrEqual(1);
        (0, vitest_1.expect)(lesson.quiz.length).toBeGreaterThanOrEqual(5);
    });
    (0, vitest_1.it)("generates content in English when language is en", () => {
        const lesson = (0, contentService_1.generateLessonContent)(buildParams("Introduction to Programming", "beginner", "en"));
        (0, vitest_1.expect)(lesson.language).toBe("en");
        (0, vitest_1.expect)(lesson.learningObjectives.length).toBeGreaterThanOrEqual(1);
        (0, vitest_1.expect)(lesson.quiz.length).toBeGreaterThanOrEqual(5);
    });
    (0, vitest_1.it)("includes the provided slug in the result", () => {
        const lesson = (0, contentService_1.generateLessonContent)(buildParams("Title", "intermediate", "pt"));
        (0, vitest_1.expect)(lesson.slug).toBe("example-slug");
    });
});

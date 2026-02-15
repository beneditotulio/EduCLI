"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const validation_1 = require("../src/utils/validation");
(0, vitest_1.describe)("parseLessonLevel", () => {
    (0, vitest_1.it)("defaults to beginner when level is not provided", () => {
        (0, vitest_1.expect)((0, validation_1.parseLessonLevel)(undefined)).toBe("beginner");
    });
    (0, vitest_1.it)("parses Portuguese level names", () => {
        (0, vitest_1.expect)((0, validation_1.parseLessonLevel)("iniciante")).toBe("beginner");
        (0, vitest_1.expect)((0, validation_1.parseLessonLevel)("intermediario")).toBe("intermediate");
        (0, vitest_1.expect)((0, validation_1.parseLessonLevel)("avancado")).toBe("advanced");
    });
    (0, vitest_1.it)("parses English level names", () => {
        (0, vitest_1.expect)((0, validation_1.parseLessonLevel)("beginner")).toBe("beginner");
        (0, vitest_1.expect)((0, validation_1.parseLessonLevel)("intermediate")).toBe("intermediate");
        (0, vitest_1.expect)((0, validation_1.parseLessonLevel)("advanced")).toBe("advanced");
    });
    (0, vitest_1.it)("throws a validation error for unsupported levels", () => {
        (0, vitest_1.expect)(() => (0, validation_1.parseLessonLevel)("expert")).toThrow(validation_1.ValidationError);
    });
});
(0, vitest_1.describe)("parseLessonLanguage", () => {
    (0, vitest_1.it)("defaults to Portuguese when language is not provided", () => {
        (0, vitest_1.expect)((0, validation_1.parseLessonLanguage)(undefined)).toBe("pt");
    });
    (0, vitest_1.it)("parses supported language codes", () => {
        (0, vitest_1.expect)((0, validation_1.parseLessonLanguage)("pt")).toBe("pt");
        (0, vitest_1.expect)((0, validation_1.parseLessonLanguage)("en")).toBe("en");
    });
    (0, vitest_1.it)("throws a validation error for unsupported languages", () => {
        (0, vitest_1.expect)(() => (0, validation_1.parseLessonLanguage)("es")).toThrow(validation_1.ValidationError);
    });
});

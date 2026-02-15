import { describe, expect, it } from "vitest";
import { parseLessonLanguage, parseLessonLevel, ValidationError } from "../src/utils/validation";

describe("parseLessonLevel", () => {
  it("defaults to beginner when level is not provided", () => {
    expect(parseLessonLevel(undefined)).toBe("beginner");
  });

  it("parses Portuguese level names", () => {
    expect(parseLessonLevel("iniciante")).toBe("beginner");
    expect(parseLessonLevel("intermediario")).toBe("intermediate");
    expect(parseLessonLevel("avancado")).toBe("advanced");
  });

  it("parses English level names", () => {
    expect(parseLessonLevel("beginner")).toBe("beginner");
    expect(parseLessonLevel("intermediate")).toBe("intermediate");
    expect(parseLessonLevel("advanced")).toBe("advanced");
  });

  it("throws a validation error for unsupported levels", () => {
    expect(() => parseLessonLevel("expert")).toThrow(ValidationError);
  });
});

describe("parseLessonLanguage", () => {
  it("defaults to Portuguese when language is not provided", () => {
    expect(parseLessonLanguage(undefined)).toBe("pt");
  });

  it("parses supported language codes", () => {
    expect(parseLessonLanguage("pt")).toBe("pt");
    expect(parseLessonLanguage("en")).toBe("en");
  });

  it("throws a validation error for unsupported languages", () => {
    expect(() => parseLessonLanguage("es")).toThrow(ValidationError);
  });
});


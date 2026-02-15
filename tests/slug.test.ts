import { describe, expect, it } from "vitest";
import { generateSlug } from "../src/utils/slug";

describe("generateSlug", () => {
  it("converts title to a URL-friendly slug", () => {
    const slug = generateSlug("Introdução à Programação em C#");
    expect(slug).toBe("introducao-a-programacao-em-c");
  });

  it("removes leading and trailing separators", () => {
    const slug = generateSlug("  Aula de Teste  ");
    expect(slug).toBe("aula-de-teste");
  });

  it("falls back to default when input becomes empty", () => {
    const slug = generateSlug("!!!");
    expect(slug).toBe("lesson");
  });
}
);


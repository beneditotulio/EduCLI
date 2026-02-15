"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const slug_1 = require("../src/utils/slug");
(0, vitest_1.describe)("generateSlug", () => {
    (0, vitest_1.it)("converts title to a URL-friendly slug", () => {
        const slug = (0, slug_1.generateSlug)("Introdução à Programação em C#");
        (0, vitest_1.expect)(slug).toBe("introducao-a-programacao-em-c");
    });
    (0, vitest_1.it)("removes leading and trailing separators", () => {
        const slug = (0, slug_1.generateSlug)("  Aula de Teste  ");
        (0, vitest_1.expect)(slug).toBe("aula-de-teste");
    });
    (0, vitest_1.it)("falls back to default when input becomes empty", () => {
        const slug = (0, slug_1.generateSlug)("!!!");
        (0, vitest_1.expect)(slug).toBe("lesson");
    });
});

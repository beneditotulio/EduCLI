import path from "path";
import { Command } from "commander";
import { generateLessonContent } from "../services/contentService";
import { generateSlug } from "../utils/slug";
import { generateHtmlFile } from "../generators/htmlGenerator";
import { generateMarkdownFile } from "../generators/markdownGenerator";
import { generateQuizFile } from "../generators/quizGenerator";
import { parseLessonLanguage, parseLessonLevel, ValidationError } from "../utils/validation";

interface CreateLessonOptions {
  level?: string;
  lang?: string;
  output?: string;
}

export function registerCreateLessonCommand(program: Command): void {
  const create = program.command("create").description("Create learning resources");

  create
    .command("lesson")
    .description("Create a complete offline-ready lesson package")
    .argument("<title>", "Lesson title")
    .option(
      "--level <level>",
      "Difficulty level (iniciante, intermediario, avancado, beginner, intermediate, advanced)",
    )
    .option("--lang <lang>", "Language code (pt or en)", "pt")
    .option("--output <path>", "Output base directory", "output")
    .action(async (title: string, options: CreateLessonOptions) => {
      try {
        const level = parseLessonLevel(options.level);
        const language = parseLessonLanguage(options.lang);
        const slug = generateSlug(title);
        const outputRoot = path.resolve(process.cwd(), options.output ?? "output");

        console.log("Gerando conteúdo da aula...");
        const lesson = generateLessonContent({
          title,
          level,
          language,
          slug,
        });

        console.log("Gerando arquivos offline...");
        const [htmlPath, markdownPath, quizPath] = await Promise.all([
          generateHtmlFile(lesson, outputRoot),
          generateMarkdownFile(lesson, outputRoot),
          generateQuizFile(lesson, outputRoot),
        ]);

        console.log("");
        console.log("Arquivos gerados com sucesso:");
        console.log(`- HTML: ${htmlPath}`);
        console.log(`- Roteiro: ${markdownPath}`);
        console.log(`- Quiz: ${quizPath}`);
      } catch (error) {
        if (error instanceof ValidationError) {
          console.error(`Erro de validação: ${error.message}`);
          process.exitCode = 1;
          return;
        }

        console.error("Ocorreu um erro ao criar a aula.");
        if (error instanceof Error) {
          console.error(error.message);
        }
        process.exitCode = 1;
      }
    });
}


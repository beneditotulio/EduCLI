#!/usr/bin/env node
import { Command } from "commander";
import { registerCreateLessonCommand } from "./commands/createLesson";

export function buildCli(): Command {
  const program = new Command();

  program
    .name("educli")
    .description("Offline-first learning content generator for low-connectivity environments")
    .version("1.0.0");

  registerCreateLessonCommand(program);

  program.addHelpText(
    "after",
    `

Examples:
  $ educli create lesson "Introdução à Programação em C#" --level iniciante --lang pt
  $ educli create lesson "Introduction to Networking" --level beginner --lang en
`,
  );

  return program;
}

export async function runCli(argv: string[]): Promise<void> {
  const program = buildCli();
  await program.parseAsync(argv);
}

if (require.main === module) {
  runCli(process.argv);
}


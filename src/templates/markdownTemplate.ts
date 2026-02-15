import Handlebars from "handlebars";
import { LessonContent } from "../services/contentService";

const templateSource = `
# {{title}}

{{#if isPortuguese}}
Nível: {{levelLabelPt}}

Idioma: Português
{{else}}
Level: {{levelLabelEn}}

Language: English
{{/if}}

---

## {{sectionTitles.objectives}}

{{#each learningObjectives}}
- {{this}}
{{/each}}

---

## {{sectionTitles.introduction}}

{{introduction}}

---

## {{sectionTitles.theory}}

{{theory}}

---

## {{sectionTitles.examples}}

{{#each examples}}
- {{this}}
{{/each}}

---

## {{sectionTitles.exercises}}

{{#each exercises}}
1. {{this}}
{{/each}}

---

## {{sectionTitles.summary}}

{{summary}}

---

## {{sectionTitles.quiz}}

{{#each quiz}}
{{../sectionTitles.question}} {{@indexPlusOne}} ({{../sectionTitles.difficulty}}: {{difficulty}})

{{question}}

{{#each options}}
- {{this.text}}
{{/each}}

{{/each}}
`;
Handlebars.registerHelper("indexPlusOne", function (this: unknown, index: number) {
  return index + 1;
});

const template = Handlebars.compile(templateSource.trim());

function getSectionTitles(language: string) {
  if (language === "pt") {
    return {
      objectives: "Objetivos de aprendizagem",
      introduction: "Introdução",
      theory: "Conteúdo teórico",
      examples: "Exemplos",
      exercises: "Exercícios práticos",
      summary: "Resumo da aula",
      quiz: "Questionário",
      question: "Questão",
      difficulty: "Dificuldade",
    };
  }

  return {
    objectives: "Learning objectives",
    introduction: "Introduction",
    theory: "Theory",
    examples: "Examples",
    exercises: "Practice exercises",
    summary: "Summary",
    quiz: "Quiz",
    question: "Question",
    difficulty: "Difficulty",
  };
}

function getLevelLabelPt(level: LessonContent["level"]): string {
  if (level === "beginner") return "iniciante";
  if (level === "intermediate") return "intermediário";
  return "avançado";
}

function getLevelLabelEn(level: LessonContent["level"]): string {
  if (level === "beginner") return "beginner";
  if (level === "intermediate") return "intermediate";
  return "advanced";
}

export function renderMarkdownLesson(lesson: LessonContent): string {
  const sectionTitles = getSectionTitles(lesson.language);

  return template({
    ...lesson,
    isPortuguese: lesson.language === "pt",
    levelLabelPt: getLevelLabelPt(lesson.level),
    levelLabelEn: getLevelLabelEn(lesson.level),
    sectionTitles,
  });
}

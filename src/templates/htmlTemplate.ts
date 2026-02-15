import Handlebars from "handlebars";
import { LessonContent } from "../services/contentService";

const templateSource = `
<!DOCTYPE html>
<html lang="{{language}}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{title}}</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      margin: 0;
      padding: 1.5rem;
      line-height: 1.6;
      background-color: #f5f5f5;
      color: #222222;
    }
    .lesson {
      max-width: 960px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }
    h1, h2, h3 {
      color: #1f2933;
    }
    h1 {
      margin-top: 0;
      font-size: 1.8rem;
    }
    h2 {
      margin-top: 1.5rem;
      font-size: 1.4rem;
    }
    ul {
      padding-left: 1.25rem;
    }
    .meta {
      font-size: 0.9rem;
      color: #555555;
      margin-bottom: 1rem;
    }
    .section {
      margin-top: 1.25rem;
    }
    .quiz-question {
      margin-bottom: 1rem;
      padding: 0.75rem;
      border-radius: 4px;
      background-color: #f9fafb;
    }
    .quiz-meta {
      font-size: 0.8rem;
      color: #666666;
      margin-bottom: 0.25rem;
    }
  </style>
</head>
<body>
  <article class="lesson">
    <header>
      <h1>{{title}}</h1>
      <div class="meta">
        <span>
          {{#if isPortuguese}}
            Nível: {{levelLabelPt}}
          {{else}}
            Level: {{levelLabelEn}}
          {{/if}}
        </span>
        <span> | </span>
        <span>
          {{#if isPortuguese}}
            Idioma: Português
          {{else}}
            Language: English
          {{/if}}
        </span>
      </div>
    </header>

    <section class="section">
      <h2>{{sectionTitles.objectives}}</h2>
      <ul>
        {{#each learningObjectives}}
          <li>{{this}}</li>
        {{/each}}
      </ul>
    </section>

    <section class="section">
      <h2>{{sectionTitles.introduction}}</h2>
      <p>{{introduction}}</p>
    </section>

    <section class="section">
      <h2>{{sectionTitles.theory}}</h2>
      <p>{{theory}}</p>
    </section>

    <section class="section">
      <h2>{{sectionTitles.examples}}</h2>
      <ul>
        {{#each examples}}
          <li>{{this}}</li>
        {{/each}}
      </ul>
    </section>

    <section class="section">
      <h2>{{sectionTitles.exercises}}</h2>
      <ol>
        {{#each exercises}}
          <li>{{this}}</li>
        {{/each}}
      </ol>
    </section>

    <section class="section">
      <h2>{{sectionTitles.summary}}</h2>
      <p>{{summary}}</p>
    </section>

    <section class="section">
      <h2>{{sectionTitles.quiz}}</h2>
      {{#each quiz}}
        <div class="quiz-question">
          <div class="quiz-meta">
            {{../sectionTitles.question}} {{@indexPlusOne}} • {{../sectionTitles.difficulty}}: {{difficulty}}
          </div>
          <div>{{question}}</div>
          <ul>
            {{#each options}}
              <li>{{this.text}}</li>
            {{/each}}
          </ul>
        </div>
      {{/each}}
    </section>
  </article>
  <script>
    document.querySelectorAll(".quiz-question").forEach(function (element, index) {
      if (!element.querySelector("strong")) {
        var label = document.createElement("div");
        label.style.fontSize = "0.8rem";
        label.style.color = "#999999";
        label.style.marginTop = "0.25rem";
        label.textContent = "";
        element.appendChild(label);
      }
    });
  </script>
</body>
</html>
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

export function renderHtmlLesson(lesson: LessonContent): string {
  const sectionTitles = getSectionTitles(lesson.language);

  return template({
    ...lesson,
    isPortuguese: lesson.language === "pt",
    levelLabelPt: getLevelLabelPt(lesson.level),
    levelLabelEn: getLevelLabelEn(lesson.level),
    sectionTitles,
  });
}


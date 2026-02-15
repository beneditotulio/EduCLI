export type LessonLevel = "beginner" | "intermediate" | "advanced";

export type LessonLanguage = "pt" | "en";

export type QuizDifficulty = "easy" | "medium" | "hard";

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  difficulty: QuizDifficulty;
}

export interface LessonContent {
  title: string;
  level: LessonLevel;
  language: LessonLanguage;
  slug: string;
  learningObjectives: string[];
  introduction: string;
  theory: string;
  examples: string[];
  exercises: string[];
  summary: string;
  quiz: QuizQuestion[];
}

export interface GenerateLessonParams {
  title: string;
  level: LessonLevel;
  language: LessonLanguage;
  slug: string;
}

export function generateLessonContent(params: GenerateLessonParams): LessonContent {
  if (params.language === "pt") {
    return generatePortugueseLesson(params);
  }
  return generateEnglishLesson(params);
}

function generatePortugueseLesson(params: GenerateLessonParams): LessonContent {
  const levelLabel =
    params.level === "beginner"
      ? "iniciante"
      : params.level === "intermediate"
      ? "intermediário"
      : "avançado";

  const learningObjectives = [
    `Compreender os conceitos básicos do tema "${params.title}".`,
    "Identificar os principais termos e definições fundamentais.",
    "Aplicar os conceitos apresentados em exemplos simples.",
    "Resolver exercícios práticos relacionados ao conteúdo.",
  ];

  const introduction = `Nesta aula de nível ${levelLabel}, vamos explorar o tema "${params.title}". O objetivo é oferecer uma visão clara e acessível, adequada a ambientes de baixa conectividade e recursos limitados.`;

  const theory = `Nesta seção teórica, apresentamos os principais conceitos necessários para compreender "${params.title}". Os conteúdos devem ser apresentados em pequenos blocos de texto, com linguagem direta e exemplos próximos da realidade do aluno.`;

  const examples = [
    `Exemplo 1: Demonstração simples de um conceito central de "${params.title}".`,
    "Exemplo 2: Situação prática em que o conceito é aplicado no dia a dia.",
  ];

  const exercises = [
    "Exercício 1: Descreva, com suas próprias palavras, o conceito principal estudado.",
    "Exercício 2: Crie um exemplo prático onde o conteúdo da aula possa ser aplicado.",
    "Exercício 3: Resolva um pequeno problema utilizando a teoria apresentada.",
  ];

  const summary = `Nesta aula sobre "${params.title}", revisamos os conceitos principais, observamos exemplos práticos e realizamos exercícios para consolidar o aprendizado. Retome os objetivos de aprendizagem e verifique se cada um deles foi alcançado.`;

  const quiz = buildQuiz(params, "pt");

  return {
    title: params.title,
    level: params.level,
    language: params.language,
    slug: params.slug,
    learningObjectives,
    introduction,
    theory,
    examples,
    exercises,
    summary,
    quiz,
  };
}

function generateEnglishLesson(params: GenerateLessonParams): LessonContent {
  const levelLabel =
    params.level === "beginner"
      ? "beginner"
      : params.level === "intermediate"
      ? "intermediate"
      : "advanced";

  const learningObjectives = [
    `Understand the basic concepts of "${params.title}".`,
    "Identify key terms and fundamental definitions.",
    "Apply the presented concepts in simple examples.",
    "Solve practical exercises related to the lesson content.",
  ];

  const introduction = `In this ${levelLabel}-level lesson, we will explore the topic "${params.title}". The goal is to provide a clear and accessible overview, suitable for low-connectivity and low-resource environments.`;

  const theory = `This theory section introduces the main concepts required to understand "${params.title}". Content should be presented in short text blocks, using direct language and examples close to the learner's reality.`;

  const examples = [
    `Example 1: Simple demonstration of a central concept from "${params.title}".`,
    "Example 2: Practical situation where the concept is applied in everyday life.",
  ];

  const exercises = [
    "Exercise 1: Describe the main concept studied using your own words.",
    "Exercise 2: Create a practical example where the lesson content can be applied.",
    "Exercise 3: Solve a small problem using the theory presented in this lesson.",
  ];

  const summary = `In this lesson about "${params.title}", we reviewed the main concepts, explored practical examples, and solved exercises to consolidate learning. Revisit the learning objectives and check if each one has been achieved.`;

  const quiz = buildQuiz(params, "en");

  return {
    title: params.title,
    level: params.level,
    language: params.language,
    slug: params.slug,
    learningObjectives,
    introduction,
    theory,
    examples,
    exercises,
    summary,
    quiz,
  };
}

function buildQuiz(params: GenerateLessonParams, language: LessonLanguage): QuizQuestion[] {
  if (language === "pt") {
    return [
      {
        id: "q1",
        question: `Qual é o principal objetivo da aula "${params.title}"?`,
        options: [
          { id: "a", text: "Memorizar fórmulas sem contexto." },
          { id: "b", text: "Compreender conceitos e aplicá-los em exemplos práticos." },
          { id: "c", text: "Copiar códigos prontos sem entender." },
          { id: "d", text: "Apenas decorar definições isoladas." },
        ],
        correctOptionId: "b",
        difficulty: "easy",
      },
      {
        id: "q2",
        question: "O que é recomendado em ambientes de baixa conectividade?",
        options: [
          { id: "a", text: "Depender de vídeos online a todo momento." },
          { id: "b", text: "Usar materiais offline bem estruturados." },
          { id: "c", text: "Aguardar conexão estável para estudar." },
          { id: "d", text: "Não utilizar recursos digitais." },
        ],
        correctOptionId: "b",
        difficulty: "easy",
      },
      {
        id: "q3",
        question: "Por que exemplos simples são importantes no processo de aprendizagem?",
        options: [
          { id: "a", text: "Porque substituem completamente a teoria." },
          { id: "b", text: "Porque deixam o conteúdo mais confuso." },
          { id: "c", text: "Porque ajudam a conectar teoria e prática." },
          { id: "d", text: "Porque evitam que o aluno pense criticamente." },
        ],
        correctOptionId: "c",
        difficulty: "medium",
      },
      {
        id: "q4",
        question: "Qual é a melhor forma de verificar se os objetivos de aprendizagem foram alcançados?",
        options: [
          { id: "a", text: "Ignorar os exercícios propostos." },
          { id: "b", text: "Refletir sobre os objetivos e revisar os exercícios." },
          { id: "c", text: "Focar apenas na introdução da aula." },
          { id: "d", text: "Pular diretamente para o resumo." },
        ],
        correctOptionId: "b",
        difficulty: "medium",
      },
      {
        id: "q5",
        question: "Em um contexto educacional, o que significa uma abordagem offline-first?",
        options: [
          { id: "a", text: "Depender de conexão constante com a internet." },
          { id: "b", text: "Garantir que o conteúdo funcione bem sem internet." },
          { id: "c", text: "Utilizar apenas redes sociais para ensino." },
          { id: "d", text: "Impedir o uso de qualquer recurso digital." },
        ],
        correctOptionId: "b",
        difficulty: "hard",
      },
    ];
  }

  return [
    {
      id: "q1",
      question: `What is the main goal of the lesson "${params.title}"?`,
      options: [
        { id: "a", text: "To memorize formulas without context." },
        { id: "b", text: "To understand concepts and apply them in practice." },
        { id: "c", text: "To copy ready-made code without understanding it." },
        { id: "d", text: "To focus only on isolated definitions." },
      ],
      correctOptionId: "b",
      difficulty: "easy",
    },
    {
      id: "q2",
      question: "What is recommended in low-connectivity environments?",
      options: [
        { id: "a", text: "Rely on online videos all the time." },
        { id: "b", text: "Use well-structured offline materials." },
        { id: "c", text: "Wait for a stable connection before studying." },
        { id: "d", text: "Avoid using any digital resources." },
      ],
      correctOptionId: "b",
      difficulty: "easy",
    },
    {
      id: "q3",
      question: "Why are simple examples important during the learning process?",
      options: [
        { id: "a", text: "Because they completely replace theory." },
        { id: "b", text: "Because they make the content more confusing." },
        { id: "c", text: "Because they connect theory with practice." },
        { id: "d", text: "Because they prevent critical thinking." },
      ],
      correctOptionId: "c",
      difficulty: "medium",
    },
    {
      id: "q4",
      question: "What is a good way to check if learning objectives were achieved?",
      options: [
        { id: "a", text: "Ignoring all proposed exercises." },
        { id: "b", text: "Reviewing the objectives and completed exercises." },
        { id: "c", text: "Focusing only on the introduction." },
        { id: "d", text: "Skipping directly to the summary." },
      ],
      correctOptionId: "b",
      difficulty: "medium",
    },
    {
      id: "q5",
      question: "In an educational context, what does offline-first mean?",
      options: [
        { id: "a", text: "Depending on constant internet access." },
        { id: "b", text: "Ensuring content works well without internet." },
        { id: "c", text: "Using only social networks for teaching." },
        { id: "d", text: "Blocking all digital resources." },
      ],
      correctOptionId: "b",
      difficulty: "hard",
    },
  ];
}


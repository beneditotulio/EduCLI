# GitHub Copilot CLI Workflow for EduCLI

Este projeto demonstra como o GitHub Copilot CLI pode apoiar o desenvolvimento de uma aplicação de linha de comando em TypeScript focada em educação offline.

## 1. Exploração e desenho de comandos

Para explorar ideias de comandos, opções e experiência de uso:

```bash
gh copilot suggest -t "Design a TypeScript CLI for an offline-first lesson generator called EduCLI using commander"
```

Esse tipo de comando ajuda a obter rascunhos de estrutura de CLI, incluindo nomenclatura de subcomandos e exemplos de uso.

## 2. Geração de código base

Para gerar esboços de código de forma guiada:

```bash
gh copilot suggest -t "Create a contentService in TypeScript that builds a LessonContent model with objectives, introduction, theory, examples, exercises and quiz questions in pt and en"
```

O objetivo é obter um ponto de partida que depois é refinado manualmente para atender aos requisitos de arquitetura limpa e separação de camadas.

## 3. Explicação de erros e mensagens de compilação

Quando surgem erros de TypeScript ou falhas de build:

```bash
gh copilot explain "tsc error TS2322 in src/services/contentService.ts"
```

Isso ajuda a interpretar mensagens de erro extensas e a sugerir correções seguras, mantendo o foco em tipagem estrita.

## 4. Refatoração guiada

Para reorganizar código em camadas mais coesas (por exemplo, separar validação de argumentos em utils):

```bash
gh copilot suggest -t "Refactor CLI argument parsing into reusable validation utilities with tests for EduCLI"
```

Em seguida o código sugerido é adaptado ao estilo do projeto, garantindo que nomes e responsabilidades se mantenham consistentes.

## 5. Criação de testes

Para acelerar a escrita de testes de unidade:

```bash
gh copilot suggest -t "Write vitest unit tests for a slug generator that normalizes accents and spaces for EduCLI"
```

Os testes gerados são revisados, simplificados e alinhados com os casos reais do domínio (níveis de dificuldade, idiomas suportados, etc.).


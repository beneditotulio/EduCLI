# EduCLI – Offline-First Learning Content Generator

Built for the GitHub Copilot CLI Challenge by **GitHub**.

EduCLI is a command-line tool that helps teachers and training centers generate **offline-ready learning materials** (HTML lessons, lesson scripts and quizzes) using simple natural-language commands.

The tool is designed especially for low-connectivity and low-resource environments, where preparing structured digital learning content is often difficult.

---

## ✨ Key Features

* Generate complete learning packages from a single command
* Offline-first HTML output (no CDN or internet dependency)
* Lesson script in Markdown for teachers
* Quiz file in JSON format
* Portuguese as the default language
* Clean and simple CLI user experience
* Extensible architecture for future features (PDF, ZIP packages, modules, etc.)

---

## 📦 What EduCLI Generates

For each lesson, EduCLI creates:

* an HTML lesson page
* a teacher’s lesson script (Markdown)
* a quiz file (JSON)

---

## 📁 Output Structure

```
output/
  <lesson-slug>/
      index.html
      roteiro.md
      quiz.json
```

---

## 🧠 Supported Use Case

EduCLI is intended for:

* teachers
* technical trainers
* community training centers
* vocational and ICT schools

who need fast, structured and reusable learning materials that can be shared locally (USB, local network, offline computers).

---

## 🚀 Installation

### Prerequisites

* Node.js (LTS)

### Install dependencies

```bash
npm install
```

### Build the project

```bash
npm run build
```

### Link the CLI locally

```bash
npm link
```

---

## ▶️ Usage

### Create a lesson

```bash
educli create lesson "Introdução à Programação em C#" --level iniciante --lang pt
```

### Parameters

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| title     | Lesson title                                          |
| level     | Difficulty level (iniciante, intermediario, avancado) |
| lang      | Language code (pt or en)                              |

### Example

```bash
educli create lesson "Introdução à Programação" --level iniciante
```

Portuguese is used by default if `--lang` is not provided.

---

## 📝 Generated Content Structure

Each lesson contains:

* learning objectives
* short introduction
* theory explanation
* simple examples
* practice exercises
* summary
* quiz with multiple-choice questions

---

## 🌍 Language Support

Currently supported languages:

* Portuguese (pt) – default
* English (en)

The architecture allows easy addition of new languages in the future.

---

## 🧱 Project Architecture

```
src/
 ├─ commands/
 │     createLesson.ts
 ├─ generators/
 │     htmlGenerator.ts
 │     markdownGenerator.ts
 │     quizGenerator.ts
 ├─ services/
 │     contentService.ts
 ├─ templates/
 ├─ utils/
 └─ index.ts
```

### Layer responsibilities

* **commands** – CLI input and argument validation
* **services** – business logic and content modeling
* **generators** – file and content generation
* **templates** – presentation layer
* **utils** – shared helpers

---

## ⚙️ Design Principles

* Offline-first
* Simple and clear user interaction
* Separation of concerns
* Extensible structure
* Testable core logic

---

## 🧪 Tests

Basic unit tests cover:

* lesson content generation
* slug generation
* input validation

Run tests with:

```bash
npm test
```

---

## 📄 GitHub Copilot CLI Workflow

This project documents how GitHub Copilot CLI was used during development.

See:

```
COPILOT_WORKFLOW.md
```

The file includes:

* examples of prompt-driven code generation
* error explanations
* refactoring prompts
* CLI design assistance

---

## 📌 Example Generated Output

An example generated lesson package is available in:

```
examples/output/
```

---

## 🛣️ Roadmap

Planned future features:

* PDF export
* ZIP offline packages
* module and course generation
* standalone quiz generation
* custom templates per institution

---

## ⚠️ Limitations

* Content is generated using simple structured templates (not connected to online APIs)
* The tool does not yet support rich media (images, videos)
* PDF export is not implemented in the current version

---

## 🎯 Project Goal

EduCLI demonstrates how AI-assisted development and CLI tooling can be used to build practical and socially relevant software, especially for educational environments where simplicity, robustness and offline usability are critical.

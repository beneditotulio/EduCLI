import { LessonLanguage, LessonLevel } from "../services/contentService";

export type RawLevel =
  | "iniciante"
  | "intermediario"
  | "intermediário"
  | "avancado"
  | "avançado"
  | "beginner"
  | "intermediate"
  | "advanced";

export type RawLanguage = "pt" | "en";

export interface ParsedCliArgs {
  title: string;
  level: LessonLevel;
  language: LessonLanguage;
}

export class ValidationError extends Error {}

export function parseLessonLevel(rawLevel: string | undefined): LessonLevel {
  if (!rawLevel) {
    return "beginner";
  }

  const normalized = rawLevel.toLowerCase();

  if (normalized === "iniciante" || normalized === "beginner") {
    return "beginner";
  }

  if (
    normalized === "intermediario" ||
    normalized === "intermediário" ||
    normalized === "intermediate"
  ) {
    return "intermediate";
  }

  if (normalized === "avancado" || normalized === "avançado" || normalized === "advanced") {
    return "advanced";
  }

  throw new ValidationError(
    `Unsupported level "${rawLevel}". Use iniciante, intermediario, avancado, beginner, intermediate or advanced.`,
  );
}

export function parseLessonLanguage(rawLanguage: string | undefined): LessonLanguage {
  if (!rawLanguage) {
    return "pt";
  }

  const normalized = rawLanguage.toLowerCase();

  if (normalized === "pt" || normalized === "pt-br" || normalized === "ptbr") {
    return "pt";
  }

  if (normalized === "en" || normalized === "en-us" || normalized === "enus") {
    return "en";
  }

  throw new ValidationError(`Unsupported language "${rawLanguage}". Use pt or en.`);
}


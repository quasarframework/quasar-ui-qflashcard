---
title: Introduction
desc: What is QFlashcard
keys: Getting Started
related:
  - /getting-started/installation-types
  - /other/upgrade-guide
  - /developing/using-qflashcard
---

## What is QFlashcard

QFlashcard is a small Quasar component package for building CSS-driven flashcard transitions. It provides a wrapper component, `QFlashcard`, and transition panels, `QFlashcardSection`, that can react to hover state or an explicit `active` model.

Use it for compact reveal cards, onboarding snippets, promotional panels, before/after effects, or any place where a lightweight animated content swap is useful.

If you are moving from QFlashcard v1 or v2, start with the [Upgrade Guide](/other/upgrade-guide). It covers the Quasar CLI Vite 3 baseline, package changes, and boot-file import updates.

## Components

- `QFlashcard` provides the card container and optional hover behavior.
- `QFlashcardSection` represents an animated panel inside the card.

## Transition Names

Transition names can be passed with or without the `fc-` prefix. For example, `fade-in` and `fc-fade-in` resolve to the same base transition.

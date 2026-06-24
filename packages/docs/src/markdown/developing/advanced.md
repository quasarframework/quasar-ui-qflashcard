---
title: Advanced
desc: Advanced QFlashcard patterns
keys: developing
examples: QFlashcard
---

Use the advanced patterns when the built-in transitions are close, but the card needs a project-specific motion language or programmatic control.

## Custom Transitions

QFlashcard turns a transition name into CSS classes. Passing `custom-pulse-in` maps to `.fc-custom-pulse-in`, and the active state maps to `.fc-custom-pulse-in--active`.

The example below defines custom transition classes inside the example component and uses `no-hover` plus `active` so the toggle controls the reveal.

<MarkdownExample title="Custom Transition" file="CustomTransition"/>

Custom transitions can live in scoped component styles, app-level styles, or a design-system stylesheet. Pass the transition value without the `fc-` prefix, then define matching CSS classes with the `fc-` prefix:

```scss
.fc-my-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fc-my-reveal--active {
  opacity: 1;
  transform: translateY(0);
}
```

## Programmatic Control

Use `no-hover` on `QFlashcard` when hover should not drive the card. Then pass `active` to each `QFlashcardSection` that should respond to your state.

This pattern is useful for touch-first interfaces, quizzes, steppers, guided tours, and cards that reveal content after validation or another app event.

## Combining Transitions

`transition` accepts a single name, a space-separated string, or an array. These are equivalent:

```vue
<q-flashcard-section transition="fade-in zoom-in" />
<q-flashcard-section :transition="['fade-in', 'zoom-in']" />
```

Use array syntax when the transition list is computed. Use string syntax when the transition list is static and easy to read.

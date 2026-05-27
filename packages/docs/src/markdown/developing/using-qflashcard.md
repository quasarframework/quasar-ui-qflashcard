---
title: Using QFlashcard
desc: How to use QFlashcard
keys: developing
examples: QFlashcard
---

QFlashcard gives you a small, focused way to turn ordinary content into interactive reveal cards. Use it for study cards, product teasers, image overlays, guided choices, comparison panels, or any place where the second state should feel intentional instead of simply appearing.

## API

The API is intentionally compact. `QFlashcard` owns the hover behavior for the card, while each `QFlashcardSection` controls its own transition and active state. That split lets you keep simple cards simple, then layer in more advanced effects only when the design needs them.

<script import>
import QFlashcardApi from '@quasar/quasar-ui-qflashcard/dist/api/QFlashcard.json'
import QFlashcardSectionApi from '@quasar/quasar-ui-qflashcard/dist/api/QFlashcardSection.json'
</script>

<MarkdownApi :api="QFlashcardApi" name="QFlashcard"/>

<MarkdownApi :api="QFlashcardSectionApi" name="QFlashcardSection"/>

## Basic Example

The basic pattern is a front section and a back section. By default, users can reveal the answer by hovering the card, and you can also drive the reveal yourself with `active` for touch interfaces, quizzes, onboarding flows, or guided interactions.

Use the `Show answer`, `Active`, or example-specific controls when you want to trigger the same transitions manually.

<MarkdownExample title="Basic" file="Basic"/>

## Transition Families

Transitions are grouped by motion style so you can match the reveal to the content. A subtle fade works well for quiet supporting details, slides feel natural for drawer-like panels, and flips or rolls make sense when the card metaphor should be more playful.

<MarkdownExample title="Transition Families" file="TransitionFamilies"/>

## Combo Example

Combo cards pair front and back sections with complementary transitions. This is the sweet spot for most production use cases: a clean front state, a useful back state, and just enough motion to make the reveal feel designed.

The examples below show a classic image flip, a sliding content card, and a combined fade/zoom transition.

<MarkdownExample title="Combo" file="Combo"/>

## Mashups

Mashups combine multiple sections and transitions to create layered reveals. This is where QFlashcard becomes more than a two-sided card: you can keep an image in place, fade in a scrim, slide in content, or animate a smaller callout independently.

These patterns are useful for marketing cards, image galleries, guided feature tours, and dashboard tiles where different pieces of content should enter at different moments.

<MarkdownExample title="Mashups" file="Mashups"/>

## Quasar Components

QFlashcard sections can contain regular Quasar components, forms, buttons, and layouts. That means the reveal can be interactive, not just visual: a card can expose a form, toolbar, action group, or any other Quasar-powered UI.

Use this pattern when the back side should help the user do something immediately, such as subscribe, choose a mode, confirm an option, or open more details.

<MarkdownExample title="Quasar Components" file="QuasarComponents"/>

Photos by [Jeremy Bishop](https://unsplash.com/@jeremybishop) on Unsplash.

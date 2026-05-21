---
title: Using QFlashcard
desc: How to use QFlashcard
keys: developing
examples: QFlashcard
---

## API

<script import>
import QFlashcardApi from '@quasar/quasar-ui-qflashcard/dist/api/QFlashcard.json'
import QFlashcardSectionApi from '@quasar/quasar-ui-qflashcard/dist/api/QFlashcardSection.json'
</script>

<MarkdownApi :api="QFlashcardApi" name="QFlashcard"/>

<MarkdownApi :api="QFlashcardSectionApi" name="QFlashcardSection"/>

## Basic Example

<MarkdownExample title="Basic" file="Basic" no-github no-edit/>

## Transition Pairs

<MarkdownExample title="Transition Pairs" file="Transitions" no-github no-edit/>

## Transition Families

<MarkdownExample title="Transition Families" file="TransitionFamilies" no-github no-edit/>

## Combo Example

<MarkdownExample title="Combo" file="Combo" no-github no-edit/>

## Mashups

Mashups combine multiple sections and transitions to create layered reveals.

<MarkdownExample title="Mashups" file="Mashups" no-github no-edit/>

## Quasar Components

QFlashcard sections can contain regular Quasar components, forms, buttons, and layouts.

<MarkdownExample title="Quasar Components" file="QuasarComponents" no-github no-edit/>

Photos by [Jeremy Bishop](https://unsplash.com/@jeremybishop) on Unsplash.

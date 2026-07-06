import { describe, expect, it } from 'vitest'

import { QFlashcard, QFlashcardSection, version } from '../src'

function renderSection(props: { active?: boolean; transition?: string | string[] }) {
  const render = QFlashcardSection.setup?.(props, {
    attrs: {},
    emit: () => undefined,
    expose: () => undefined,
    slots: {},
  })

  if (typeof render !== 'function') {
    throw new Error('QFlashcardSection setup did not return a render function')
  }

  return render()
}

describe('QFlashcard', () => {
  it('exports the components and package version', () => {
    expect(QFlashcard.name).toBe('QFlashcard')
    expect(QFlashcardSection.name).toBe('QFlashcardSection')
    expect(version).toMatch(/^\d+\.\d+\.\d+/)
  })

  it('keeps public props aligned with the API metadata', () => {
    expect(QFlashcard.props).toHaveProperty('noHover')
    expect(QFlashcardSection.props).toHaveProperty('active')
    expect(QFlashcardSection.props).toHaveProperty('transition')
  })

  it('generates active transition classes for space-separated transition names', () => {
    const vnode = renderSection({
      active: true,
      transition: 'fade-in flip-left-in',
    })

    expect(vnode.props?.class).toBe(
      'q-flashcard__section fc-fade-in--active fc-flip-left-in--active',
    )
  })

  it('generates resting transition classes for transition arrays', () => {
    const vnode = renderSection({
      transition: ['fc-fade-in', 'flip-left-in'],
    })

    expect(vnode.props?.class).toBe('q-flashcard__section fc-fade-in fc-flip-left-in')
  })
})

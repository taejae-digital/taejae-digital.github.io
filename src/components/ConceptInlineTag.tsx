import { useState, useCallback } from 'react'
import { ConceptPopup } from './ConceptPopup'

interface Props {
  term: string
  content: string
  source?: string
}

export function ConceptInlineTag({ term, content, source }: Props) {
  const [open, setOpen] = useState(false)
  const handleClose = useCallback(() => setOpen(false), [])

  return (
    <>
      <button
        className="concept-inline-tag"
        onClick={() => setOpen(o => !o)}
      >
        <span className="concept-inline-tag-badge">학술 배경</span>
        {term}
      </button>
      {open && (
        <ConceptPopup
          term={term}
          content={content}
          source={source}
          onClose={handleClose}
        />
      )}
    </>
  )
}

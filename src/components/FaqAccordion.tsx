'use client'

import { useState } from 'react'

interface FaqItemData {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItemData[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${activeIndex === i ? ' active' : ''}`}>
          <button className="faq-question" onClick={() => toggle(i)}>
            <span>{item.question}</span>
            <i className="fas fa-plus"></i>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

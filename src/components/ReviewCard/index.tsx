import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

type Image = {
  url: string
}
type Props = {
  id: number
  name: string
  image: Image[]
  description: string
}

const ReviewCard: React.FC<Props> = ({ id, name, image, description }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        {image.map((item) => (
          <S.Image key={id} src={getImageUrl(item.url)} loading="lazy" />
        ))}
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{description}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard

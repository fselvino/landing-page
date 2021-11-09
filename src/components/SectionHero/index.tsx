import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { HeaderProps, LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoProps
  header: HeaderProps
}
const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />
      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
<<<<<<< HEAD
            <Button href={header.button.url} onClick={onClick} wide>
              {header.button.label}
=======
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=PROMONOV21"
              onClick={onClick}
              wide
            >
              Comprar
>>>>>>> be1cebdfa2d4c8fbf8110ac6553ad3a60ee61dcc
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.url)}
          alt={getImageUrl(header.image.alternativeText)}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  name: string
  photo: {
    alternativeText: string
    url: string
  }
  role: string
  description: string
  socialLinks: SocialLink[]
}

export type module = {
  title: string
  subtitle: string
  description: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: LogoProps[]
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: module[]
}
export type SectionAgendaProps = {
  sectionAgenda: {
    title: string
    description: string
  }
}
export type PricingBoxProps = {
  totalPrice: number
  priceInstallment: number
  benefits: string
  numberInstallments: number
  button: {
    label: string
    url: string
  }
}
export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  text: string
  photo: Array<{
    url: string
  }>
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
}

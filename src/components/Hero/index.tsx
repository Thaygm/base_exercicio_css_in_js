import { StyledForm, Overlay, ContentContainer, HeroTitle } from './style'

const Hero = () => (
  <StyledForm>
    <Overlay />
    <div className="container">
      <ContentContainer>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </ContentContainer>
    </div>
  </StyledForm>
)

export default Hero

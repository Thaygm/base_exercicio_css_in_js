import {
  StyledVaga,
  VagaTitulo,
  VagaInfo,
  VagaInfoItem,
  DetalhesLink
} from './style'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <StyledVaga>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaInfo>
      <VagaInfoItem>Localização: {props.localizacao}</VagaInfoItem>
      <VagaInfoItem>Senioridade: {props.nivel}</VagaInfoItem>
      <VagaInfoItem>Tipo de contratação: {props.modalidade}</VagaInfoItem>
      <VagaInfoItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </VagaInfoItem>
      <VagaInfoItem>Requisitos: {props.requisitos.join(', ')}</VagaInfoItem>
    </VagaInfo>
    <DetalhesLink href="#">Ver detalhes e candidatar-se</DetalhesLink>
  </StyledVaga>
)

export default Vaga

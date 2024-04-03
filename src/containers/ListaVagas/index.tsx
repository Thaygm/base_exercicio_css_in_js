import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { StyledListaVagas } from './style'

type VagaType = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaType[] = [
  // sua lista de vagas
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter((x) =>
    x.titulo.toLocaleLowerCase().includes(filtro)
  )

  return (
    <StyledListaVagas>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ul className="vagas">
        {vagasFiltradas.map((vaga) => (
          <Vaga
            key={vaga.id}
            titulo={vaga.titulo}
            localizacao={vaga.localizacao}
            nivel={vaga.nivel}
            modalidade={vaga.modalidade}
            salarioMin={vaga.salarioMin}
            salarioMax={vaga.salarioMax}
            requisitos={vaga.requisitos}
          />
        ))}
      </ul>
    </StyledListaVagas>
  )
}

export default ListaVagas

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

//USA OS ENUMS PARA SETAR AS PRIORIDADES E STATUS
const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <ul>
      {tarefas.map((cadaTarefa) => (
        <li key={cadaTarefa.titulo}>
          <Tarefa
            descricao={cadaTarefa.descricao}
            prioridade={cadaTarefa.prioridade}
            status={cadaTarefa.status}
            titulo={cadaTarefa.titulo}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas

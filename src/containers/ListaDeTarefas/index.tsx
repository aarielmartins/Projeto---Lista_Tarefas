import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
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

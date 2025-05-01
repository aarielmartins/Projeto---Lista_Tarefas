import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

//USA OS ENUMS PARA SETAR AS PRIORIDADES E STATUS

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
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
}

export default ListaDeTarefas

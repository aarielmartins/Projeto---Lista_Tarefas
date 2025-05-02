import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

//USA OS ENUMS PARA SETAR AS PRIORIDADES E STATUS

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <ul>
        {itens.map((cadaTarefa) => (
          <li key={cadaTarefa.titulo}>
            <Tarefa
              id={cadaTarefa.id}
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

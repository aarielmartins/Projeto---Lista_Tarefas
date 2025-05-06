import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

//USA OS ENUMS PARA SETAR AS PRIORIDADES E STATUS

const ListaDeTarefas = () => {
  //CONSTANTES CRIAM O ESTADO DO REDUCER ITENS E TERMO
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  //FUNÇÃO PARA FILTRAR TAREFAS, POIS QUANDO O SERCH NÃO ACHA RETORNA -1
  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot; categoria &ldquo; e &quot; {termo}
        &ldquo;
      </p>
      <ul>
        {filtraTarefas().map((cadaTarefa) => (
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

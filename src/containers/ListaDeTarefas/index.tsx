import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

//USA OS ENUMS PARA SETAR AS PRIORIDADES E STATUS

const ListaDeTarefas = () => {
  //CONSTANTES CRIAM O ESTADO DO REDUCER ITENS E TERMO
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  //FUNÇÃO PARA FILTRAR TAREFAS, POIS QUANDO O SERCH NÃO ACHA RETORNA -1
  //FILTRA PELOS CARDS DE PRIORIDADE OU STATUS
  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    //COMO O TERMO É OPICIONAL É NECESSÁRIO UM IF VERDADEIRO PARA EXCLUIR
    // O TERMO SE FOR 'UNDEFINED'
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      //SE O CRITERIO FOR PRIORIDADE, RETORNA A LISTA APENAS COM AS DE PRIORIDADE
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
        //SE O CRITERIO FOR STATUS, RETORNA A LISTA APENAS COM AS DE STATUS
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      //SE O TERMO NÃO FOR INFORMADO, SIMPLESMENTE RETORNA A LISTA COMPLETA DE ITENS
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot; categoria &ldquo; e &quot; {termo}
        &ldquo;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
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

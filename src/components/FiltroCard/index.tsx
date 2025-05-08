import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  //FUNÇÃO PARA TORNAR O CARD ATIVO (EM DESTAQUE)
  const verificaSeCardEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    //O '&&' VERDIFICA SE AMBOS OS ITENS SÃO VERDADEIROS
    // TRUE && TRUE = VERDADEIRO
    // TRUE && FALSE = FALSO
    // FALSE && FALSE = FALSO
    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  //COLOCA A FUNÇÃO DE VERIFICAR SE ESTA ATIVO EM VARIÁVEL
  const ativo = verificaSeCardEstaAtivo()
  //COLOCA A FUNÇÃO DE CONTAR TAREFAS EM VARIÁVEL
  const contador = contarTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard

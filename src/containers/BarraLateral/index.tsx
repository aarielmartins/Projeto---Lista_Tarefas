import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { alteraTermoBusca } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              //VALOR DO CAMPO É O ESTADO DO REDUCER FILTRO
              value={termo}
              //FUNÇÃO PARA MUDAR O ESTADO DO FILTRO
              onChange={(e) => dispatch(alteraTermoBusca(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              {/* A PROPS DE BOLEANO POR SI SÓ JA CONSIDERA VERDADEIRO */}
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          //ARROW FUNCTION PARA VOLTAR AO NAVIGAT QUANDO CLICAR NO BOTAO
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral

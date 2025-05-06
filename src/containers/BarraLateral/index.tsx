import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { alteraTermoBusca } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          //VALOR DO CAMPO É O ESTADO DO REDUCER FILTRO
          value={termo}
          //FUNÇÃO PARA MUDAR O ESTADO DO FILTRO
          onChange={(e) => dispatch(alteraTermoBusca(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={1} />
          <FiltroCard legenda="concluídas" contador={2} />
          <FiltroCard legenda="urgentes" contador={3} />
          <FiltroCard legenda="importantes" contador={4} />
          <FiltroCard legenda="normal" contador={5} />
          {/* A PROPS DE BOLEANO POR SI SÓ JA CONSIDERA VERDADEIRO */}
          <FiltroCard ativo legenda="todas" contador={10} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermoBusca: (state, action: PayloadAction<string>) => {
      //PEGA O VALOR DA ACTION.PAYLOAD (VALOR DIGITADO) E INSIRA NO TERMO
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      //PEGA O VALOR DA ACTION.PAYLOAD (VALOR CLICADO) E INSIRE NO CRITERIO E VALOR
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermoBusca, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer

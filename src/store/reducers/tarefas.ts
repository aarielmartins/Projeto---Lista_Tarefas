import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar Javascript revendo o exercício do módulo 7',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar Javascript'
    },
    {
      id: 2,
      descricao: 'Estudar material de apoio',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Typescript'
    },
    {
      id: 3,
      descricao: 'Praticar a construção de uma landing page',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Bootstrap'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    //REDUCER "EDITAR" QUE RECEBE UM ESTADO ATUAL, UMA AÇÃO E UM OBJETO DO TIPO TAREFA
    editar: (state, action: PayloadAction<Tarefa>) => {
      //PROCURA O ID QUE SEJA IGUAL O DA TAREFA RECEBIDA
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      //SE O ID NÃO É ENCONTRADO SE RETORNA "-1", OU SEJA QUANDO É
      //ENCONTRADO É MAIOR QUE 0.NESSE CASO, ATUALIZA PARA A NOVA VERSÃO
      //DOS CAMPOS ALTERADOR
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      //FUNÇÃO PARA VERIFICAR SE O TÍTULO DA TAREFA ADICIONADA JÁ EXISTE
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      //SE JA EXISTIR DA UM ALERT, SE NÃO ADICIONA A LISTA
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com este nome!')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions
export default tarefasSlice.reducer

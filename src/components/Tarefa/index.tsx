import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import { BotaoSalvar, Botao } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import TarefaClass from '../../models/Tarefas'

//IMPORTA COMO PROPS O OBJETO 'TAREFA'
type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  // USEFFECT PARA INSERIR A DESCRIÇÃO ORIGINAL, SE HOUVER
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  //FUNÇÃO QUE REVERTE A ALTERAÇÃO NA DESCRIÇÃO AO CLICAR EM CANCELAR
  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  //O CHANGE EVENT É UM EVENTO DE MUDANÇA E O HTML INPUT ELEMENT INFORMA
  //QUE O EVENTO ACONTECE EM UM ELEMENTO INPUT
  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    //CHAMA O DISPATCH PARA ALTERAR O ESTADO
    dispatch(
      // QUANDO O USUARIO CLICA NO CHECKBOX O EVENTO MUDA PARA TRUE OR FALSE
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      {/* O INPUT E TITULO DENTRO DA LABEL TORNA TODO O ELEMENTO CLICÁVEL */}
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          // SE O STATUS FOR CONCLUÍDA JÁ DA UM CHECKED
          checked={status === enums.Status.CONCLUIDA}
          //EVENTO QUE ACONTECE QUANDO OUSUÁRIO DESMARCA E MARCA O BOX
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {/* SE O 'ESTA EDITANDO' FOR TRUE(&&) RENDERIZA O 'EDITANDO'
          SE NÃO NÃO RENDERIZA NADA */}
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      {/* ESSE VALUE COMO PROPRIEDADE EXISTE APENAS NO REACT */}
      <S.Descricao
        // DESABILITA A EDIÇÃO QUANDO O ESTAEDITANDO FOR FALSO
        disabled={!estaEditando}
        value={descricao}
        // EVENTO PARA MUDAR A DESCRIÇÃO
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              //DISPACHE QUE SALVA A NOVA ALTERAÇÃO
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa

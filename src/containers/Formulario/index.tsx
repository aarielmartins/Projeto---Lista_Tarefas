import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import { cadastrar } from '../../store/reducers/tarefas'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  //FUNÇÃO PARA CADASTRAR UMA NOVA TAREFA QUE RECEBE UM FORMEVENT DO REACT
  //PARA CRIAR O PREVENTDEFAULT PARA NÃO CARREGAR A PAGINA
  //A FUNÇÃO CRIA UMA CONSTANTE DE CLASSE TAREFA, QUE TEM O TITULO,
  //A PRIORIDADE SELECIONADA, O STATUS SEMPRE COMO PENDENTE, A
  //DESCRIÇÃO SELECIONADA E O NUMERO DE ID
  //O DISPATCH ADICIONA A TAREFA AS OUTRAS
  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )

    dispatch(cadastrar(tarefaParaAdicionar))

    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          // OPCAO COM A ACIMA, MAS COM DESTRUTURAÇÃO
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        {/* PARA O JSX NÃO SE USA "FOR" E SIM "HTMLFOR" PARA NÃO DAR ERRO,
        ASSIM COMO O "CLASS" É "CLASSNAME"*/}
        <Opcoes>
          <p>Prioridade</p>
          {/* "Object.values(enums.Prioridade" PEGA TODOS OS VALORES DO ENUM "PRIORIDADE"
          E CRIA UM ARRAY COM TODOS ELES, DEPOIS O ".map((prioridade)" ITERA
          E RENDERIZA CADA VALOR DO ARRAY. O "{prioridade} SIGNIFICA CADA VALOR,
          OU SEJA, URGENTE, IMPORTANTE E NORMAL*/}
          {Object.values(enums.Prioridade).map((prioridade) => (
            // O KEY É NECESSÁRIO PARA LISTAS RENDERIZADAS DINAMICAMENTE
            <Opcao key={prioridade}>
              <input
                // DEPENDENDO DA SELEÇÃO ALTERA O SETPRIORIDADE SELECIONADO
                //PRECISA DO "AS" PARA INFORMAR QUE O VALOR SERA UM DOS ENUMS
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                //DEFINE O VALOR DO BOTÃO, OU SEJA O QUE PASSA NO ONCHANGE
                value={prioridade}
                //AGRUPA PARA QUE POSSA SELECIONAR APENAS UM POR VEZ
                name="prioridade"
                type="radio"
                id={prioridade}
                //COLOCA A PRIMEIRA SELEÇÃO COMO ENUMS NORMAL
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

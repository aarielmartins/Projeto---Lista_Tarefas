import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Título" />
      <Campo as="textarea" placeholder="Descrição da tarefa" />
      {/* PARA O JSX NÃO SE USA "FOR" E SIM "HTMLFOR" PARA NÃO DAR ERRO,
      ASSIM COMO O "CLASS" É "CLASSNAME"*/}
      <Opcoes>
        <p>Prioridade</p>
        <input name="prioridade" type="radio" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input name="prioridade" type="radio" id="importante" />{' '}
        <label htmlFor="importante">Importante</label>
        <input name="prioridade" type="radio" id="normal" />{' '}
        <label htmlFor="normal">Normal</label>
      </Opcoes>
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  </MainContainer>
)

export default Formulario

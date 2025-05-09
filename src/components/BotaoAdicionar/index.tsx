import { Circulo } from './styles'

//O ATRIBUTO "TO" É USADO PARA ADICIONAR A NOVA PAGINA PELO
//REACT ROUTER. SE USAR O "HREF" VAI ADICIONAR UMA PAGINA
//COM O CARREGAMENTO NORMAL
const BotaoAdicionar = () => <Circulo to="/novo">+</Circulo>

export default BotaoAdicionar

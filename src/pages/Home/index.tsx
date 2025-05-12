import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    {/* BARRA LATERAL MOSTRANDO OS FILTROS (TRUE) */}
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home

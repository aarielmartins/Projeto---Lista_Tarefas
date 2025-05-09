import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import store from './store/'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    //PÁGINA INICIAL
    element: <Home />
  },
  {
    path: '/novo',
    //PÁGINA DE CADASTRO
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        {/* ROTAS PARA A MUDANÇA DE PAGINAS */}
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App

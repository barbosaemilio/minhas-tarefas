import EstiloGlobal, { Container } from './styles'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'

import store from './store'
import Cadastro from './pages/Cadastro'

const rotas = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App

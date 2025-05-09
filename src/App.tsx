import { AuthProvider } from "./Hook/useAuth"
import Rotas from "./Routes/rotas"

function App() {

  return (
    <>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </>
  )
}

export default App

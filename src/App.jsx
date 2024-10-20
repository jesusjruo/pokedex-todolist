import { Link, Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar'
import Todo from './components/Todo'
import Pokemon from './components/Pokemon'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<h1>Homepage for our app</h1>}/>
        <Route path="/todo" element={ <Todo/> }/>
        <Route path="/pokemon" element={ <Pokemon/> }/>
        <Route path="/*" element={<h1>Page does not exist</h1>}/>
      </Routes>
    </>
  )
}

export default App

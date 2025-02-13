import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './layout/LayoutOne'
import HomePage from './pages/HomePage'

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element = {<LayoutOne/>}>
        <Route index element = {<HomePage/>}/>
      </Route>        
    </Route>
  ))

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App

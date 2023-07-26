import './style/app.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import Home from './pages/Home';
function App() {
const router = createBrowserRouter([
{
path:'/',
element:<Home />,
}
])
  return (
 <div>
<RouterProvider router={router} />
 </div>

  )
}

export default App

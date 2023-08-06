import './style/app.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import Home from './pages/Home';
import ShowApps from './pages/ShowApps';
import SmallApps from './pages/SmallApps';
function App() {
const router = createBrowserRouter([
{
path:'/',
element:<Home />,
},
{
path:'showApps',
element:<ShowApps />
},
{
path:'/smallApps',
element:<SmallApps />
}
])
  return (
 <div>
<RouterProvider router={router} />
 </div>

  )
}

export default App

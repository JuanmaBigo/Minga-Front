import './App.css'
import IndexLayout from './layouts/IndexLayout/IndexLayout'
import Index from './pages/Index/Index'
import { router } from './pages/index'
import { RouterProvider } from 'react-router-dom'

function App() {

	return (
		<RouterProvider router={router} />
	)
}

export default App
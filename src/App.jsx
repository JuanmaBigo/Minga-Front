import './App.css'
import { router } from './pages/index'
import { RouterProvider } from 'react-router-dom'
// import FormManga from './components/FormManga/FormManga'

function App() {

	return (
		<RouterProvider router={router} />
		// <FormManga />
	)
}

export default App
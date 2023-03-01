import './App.css'
import IndexLayout from './layouts/IndexLayout/IndexLayout'
import Index from './pages/Index/Index'
import Auth from './pages/Auth/Auth'

function App() {

	return (
		<div>
			<IndexLayout>
				<Auth/>
			</IndexLayout>
		</div>
	)
}

export default App
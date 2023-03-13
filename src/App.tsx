import './App.css'
import { Todolist } from './todolist'

function App() {
	return (
		<div className='App'>
			<Todolist title='Wath to lernes' />
			<Todolist title='Movies' />
			<Todolist title='Songs' />
		</div>
	)
}

export default App

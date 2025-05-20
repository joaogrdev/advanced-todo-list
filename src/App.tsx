import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <section className='w-screen h-screen flex flex-col items-center'>
      <Header />
      <div className='flex flex-1 items-center'><TaskForm /></div>
    </section>
  )
}

export default App

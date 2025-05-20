import { ListTodo } from "lucide-react"

const Header = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-blue-500 py-5 px-10">
      <ListTodo className="text-white"/>
      <h1 className="text-white">Advanced Todo List</h1>
    </nav>
  )
}

export default Header
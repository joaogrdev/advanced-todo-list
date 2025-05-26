import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import { useTaskStore } from "./store/useTaskStore";

function App() {
  const erro = useTaskStore((state) => state.error);

  return (
    <section className="w-screen h-screen flex flex-col items-center bg-bgAll">
      <Header />
      {erro && <p className="w-full text-center bg-border py-2 text-darkest">{erro}</p>}
      <div className="flex flex-1 w-full pt-10 px-10 sm:px-20">
        <TaskForm />
      </div>
      <Footer />
    </section>
  );
}

export default App;

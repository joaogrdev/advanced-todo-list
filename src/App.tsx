import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <section className="w-screen h-screen flex flex-col items-center">
      <Header />
      <div className="flex flex-1 w-full py-15 px-10 sm:px-20">
        <TaskForm />
      </div>
      <footer className="flex justify-center py-2 px-10 text-xs w-full">
        <p className="whitespace-nowrap">
          Criado por{" "}
          <a
            href="https://www.linkedin.com/in/joaogrs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-contrast"
          >
            João Gabriel Ribeiro
          </a>{" "}
          | Desenvolvido em 2025
        </p>
      </footer>
    </section>
  );
}

export default App;

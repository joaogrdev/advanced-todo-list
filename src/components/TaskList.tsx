import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import { cn } from "../utils/utils";
import { ArrowDownAZ, ArrowDownZA, ArrowUpDown } from "lucide-react";

const tasksMockadas = [
  { id: 1, title: "Fazer o dever de casa", completed: false, status: "todo" },
  { id: 2, title: "Lavar o quintal", completed: false, status: "todo" },
  { id: 3, title: "Passear com o cachorro", completed: false, status: "todo" },
  { id: 4, title: "Ir para academia", completed: false, status: "doing" },
  { id: 5, title: "Estudar por 2h", completed: false, status: "done" },
  {
    id: 6,
    title: "Preparar marmitas da semana",
    completed: false,
    status: "done",
  },
];

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  status: string;
};

const TaskList = ({ status = "all" }: { status?: string }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [statusColumn, setStatusColumn] = useState(status);
  const [openAddTask, setOpenAddTask] = useState(false);
  const [alphaOrder, setAlphaOrder] = useState("asc");

  useEffect(() => {
    let filteredTasks: Task[] = tasksMockadas;

    if (statusColumn !== "all") {
      filteredTasks = tasksMockadas.filter(
        (task) => task.status === statusColumn
      );
    }

    setTasks(filteredTasks);
  }, [statusColumn]);

  const sortTasksAlphabetically = (tipo: string) => {
    if (tipo === "asc") {
      setTasks((prev) =>
        [...prev].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else {
      setTasks((prev) =>
        [...prev].sort((a, b) => b.title.localeCompare(a.title))
      );
    }
    console.log(tasks);
    setAlphaOrder(tipo);
  };

  const handleChangeStatusColumn = () => {
    if (statusColumn === "all") {
      setStatusColumn("todo");
    } else if (statusColumn === "todo") {
      setStatusColumn("done");
    } else if (statusColumn === "done") {
      setStatusColumn("all");
    }
  };

  return (
    <section className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between w-full px-2">
        <h1 className="flex gap-2 items-center text-contrast text-2xl font-semibold text-center">
          <ArrowUpDown
            className="block tablet:hidden size-6 text-contrast hover:scale-115 cursor-pointer"
            onClick={handleChangeStatusColumn}
          >
            <title>Alterar coluna</title>
          </ArrowUpDown>
          {statusColumn.toUpperCase()}
        </h1>
        <div className="flex gap-3">
          {alphaOrder === "asc" ? (
            <ArrowDownAZ
              className="size-6 text-contrast hover:scale-115 cursor-pointer"
              onClick={() => sortTasksAlphabetically("desc")}
            >
              <title>Ordenar de A-Z</title>
            </ArrowDownAZ>
          ) : (
            <ArrowDownZA
              className="size-6 text-contrast hover:scale-115 cursor-pointer"
              onClick={() => sortTasksAlphabetically("asc")}
            >
              <title>Ordenar de Z-A</title>
            </ArrowDownZA>
          )}
        </div>
      </div>
      <button
        className={cn(
          "bg-contrast text-lightest py-2 text-center rounded-md",
          openAddTask ? "bg-darkest/80" : ""
        )}
        onClick={() => setOpenAddTask(!openAddTask)}
      >
        {openAddTask ? "Cancel" : "Add Task"}
      </button>
      {openAddTask && <TaskInput />}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      {/* {tasks.length === 0 ? <p className="text-center">No tasks found</p> : <p className="text-xs text-contrast mt-2">{tasks.length} tasks</p>} */}
    </section>
  );
};

export default TaskList;

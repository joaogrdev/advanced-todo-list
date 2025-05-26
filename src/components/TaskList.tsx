import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import { cn } from "../utils/utils";
import { ArrowDownAZ, ArrowDownZA, ArrowUpDown } from "lucide-react";
import { useTaskStore } from "../store/useTaskStore";

export type Task = {
  id: string;
  title: string;
  status: string;
  createdAt: Date;
};

const TaskList = ({ status = "all" }: { status?: string }) => {
  const tasksStore = useTaskStore((state) => state.tasks);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [statusColumn, setStatusColumn] = useState(status);
  const [openAddTask, setOpenAddTask] = useState(false);
  const [alphaOrder, setAlphaOrder] = useState("asc");

  useEffect(() => {
    let filteredTasks: Task[] = tasksStore;

    if (statusColumn !== "all") {
      filteredTasks = tasksStore.filter((task) => task.status === statusColumn);
    }

    const tasksOrderedByStatus = filteredTasks.sort((a, b) => {
      if (a.status === "todo" && b.status === "done") {
        return -1;
      } else if (a.status === "done" && b.status === "todo") {
        return 1;
      } else {
        return 0;
      }
    });

    setTasks(tasksOrderedByStatus);
  }, [statusColumn, tasksStore]);

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
            <title>Change column</title>
          </ArrowUpDown>
          {statusColumn.toUpperCase()}
        </h1>
        <div className="flex gap-3">
          {alphaOrder === "asc" ? (
            <ArrowDownAZ
              className="size-6 text-contrast hover:scale-115 cursor-pointer"
              onClick={() => sortTasksAlphabetically("desc")}
            >
              <title>Order from A-Z</title>
            </ArrowDownAZ>
          ) : (
            <ArrowDownZA
              className="size-6 text-contrast hover:scale-115 cursor-pointer"
              onClick={() => sortTasksAlphabetically("asc")}
            >
              <title>Order from Z-A</title>
            </ArrowDownZA>
          )}
        </div>
      </div>
      <button
        className={cn(
          "bg-contrast text-lightest py-2 text-center rounded-md",

        )}
        onClick={() => setOpenAddTask(!openAddTask)}
      >
        {openAddTask ? "Cancel" : "Add Task"}
      </button>
      {openAddTask && <TaskInput status={statusColumn} />}
      <div className="max-h-[420px] overflow-auto flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default TaskList;

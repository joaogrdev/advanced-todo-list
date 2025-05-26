import { use, useEffect, useRef, useState } from "react";
import { cn } from "../utils/utils";
import { useTaskStore } from "../store/useTaskStore";

const TaskInput = ({ status = "todo" }: { status?: string }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const addTask = useTaskStore((state: any) => state.addTask);
  const addError = useTaskStore((state: any) => state.addError);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  const handleSaveTask = () => {
    addError("");
    if (!taskTitle) {
      addError("Please, enter a task title.");
    }

    addTask({ title: taskTitle, status: status === 'done' ? 'done' : 'todo' });
    setTaskTitle("");
    inputRef.current?.focus();
  };

  return (
    <section className="flex justify-between items-end bg-border gap-2 p-4 rounded-md w-full">
      <div className="flex items-center gap-2 flex-1">
        <input
          ref={inputRef}
          placeholder="Task title"
          type="text"
          name="taskInput"
          id="taskInput"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSaveTask()}
className={cn(
  "indent-2 h-10 rounded-none bg-transparent border-b-2 border-contrast text-darkest outline-none focus:border-b-1 focus:border-contrast w-full"
)}

        />
      </div>
      <button
        className="text-sm tablet:text-base bg-contrast text-lightest px-5 h-10 rounded-md hover:scale-103 transition-all"
        onClick={handleSaveTask}
      >
        Save
      </button>
    </section>
  );
};

export default TaskInput;

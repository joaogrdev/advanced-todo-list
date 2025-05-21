import { useState } from "react";
import { cn } from "../utils/utils";

const TaskInput = () => {
  const [taskTitle, setTaskTitle] = useState("");

  return (
    <section className="flex justify-between items-end bg-border gap-2 p-4 rounded-md w-full">
      <div className="flex items-center gap-2 flex-1">
        <input
          placeholder="Task title"
          type="text"
          name="taskInput"
          id="taskInput"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className={cn(
            "indent-2 h-10 rounded-md bg-lightest outline-none border-2 border-transparent focus:border-contrast w-full"
          )}
        />
      </div>
      <button className="text-sm tablet:text-base bg-contrast text-lightest px-5 h-10 rounded-md">
        Save
      </button>
    </section>
  );
};

export default TaskInput;

import { Square, SquareCheck, Trash } from "lucide-react";
import { cn } from "../utils/utils";
import { useState } from "react";

const TaskItem = ({
  task,
}: {
  task: { id: number; title: string; completed: boolean };
}) => {
const [actualTask, setActualTask] = useState<{ id: number; title: string; completed: boolean }>(task);

  return (
    
    <div
      key={actualTask.id}
      className={cn(
          "flex border border-gray-300 p-2 w-full justify-between items-center rounded-md",
          actualTask.completed && "bg-gray-100"
      )}
    >        {actualTask.completed ? (
          <SquareCheck className="size-4 cursor-pointer hover:scale-125" onClick={() => setActualTask({...actualTask, completed: !actualTask.completed})}/>
        ) : (
          <Square className="size-4 cursor-pointer hover:scale-125" onClick={() => setActualTask({...actualTask, completed: !actualTask.completed})}/>
        )}
      <p>{actualTask.title}</p>

        <Trash className=" size-4 cursor-pointer hover:scale-125"><title>Delete</title></Trash>

    </div>
  );
};

export default TaskItem;

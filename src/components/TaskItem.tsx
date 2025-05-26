import { Circle, CircleCheckBig, Edit, Save, Trash, X } from "lucide-react";
import { cn } from "../utils/utils";
import { useEffect, useRef, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const TaskItem = ({
  key,
  task,
}: {
  key: string;
  task: { id: string; title: string; status: string; createdAt: Date };
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const updateTask = useTaskStore((state) => state.updateTask);
  const markTask = useTaskStore((state) => state.markTask);
  const addError = useTaskStore((state) => state.addError);

  const [openInputTitle, setOpenInputTitle] = useState(false);
  const [title, setTitle] = useState(task.title);

  useEffect(() => {
    if (openInputTitle && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openInputTitle]);

  const handleCheckTask = (status: string) => {
    markTask(task.id, status);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const handleSaveUpdateTask = () => {
    addError("");
    if (!title) {
      addError("Please, enter a task title.");
    }
    updateTask(task.id, { title: title });
    setOpenInputTitle(false);
  };

  return (
    <div
      key={key}
      className={cn(
        "flex border border-border p-4 w-full justify-between items-center rounded-md gap-4"
      )}
    >
      {task.status === "done" ? (
        <CircleCheckBig
          className={cn(
            "size-6 cursor-pointer hover:scale-115 text-contrast transition-all"
          )}
          onClick={() => handleCheckTask("todo")}
        >
          <title>Mark task as not done</title>
        </CircleCheckBig>
      ) : (
        <Circle
          className={cn(
            "size-6 cursor-pointer hover:scale-115 text-contrast transition-all"
          )}
          onClick={() => handleCheckTask("done")}
        >
          <title>Mark task as done</title>
        </Circle>
      )}

      <input
        ref={inputRef}
        type="text"
        name="taskTitle"
        id="taskTitle"
        defaultValue={title}
        value={title}
        onFocus={() => setOpenInputTitle(true)}
        onChange={(e) => setTitle(e.target.value)}
        disabled={task.status === "done" || !openInputTitle}
        className={cn(
          "w-full text-darkest bg-transparent outline-none border-b border-transparent",
          openInputTitle && "border-contrast"
        )}
      />

      {!openInputTitle ? (
        <>
          <Edit
            className="size-6 cursor-pointer hover:scale-115 text-contrast transition-all"
            onClick={() => setOpenInputTitle(true)}
          >
            <title>Edit task</title>
          </Edit>
          <Trash
            className="size-6 cursor-pointer hover:scale-115 text-darkest transition-all"
            onClick={handleDeleteTask}
          >
            <title>Delete task</title>
          </Trash>
        </>
      ) : (
        <>
          <Save
            className="size-6 cursor-pointer hover:scale-115 text-contrast transition-all"
            onClick={handleSaveUpdateTask}
          >
            <title>Save edit</title>
          </Save>
          <X
            className="size-6 cursor-pointer hover:scale-115 text-darkest transition-all"
            onClick={() => {
              setOpenInputTitle(false);
              setTitle(task.title);
            }}
          >
            <title>Cancel edit</title>
          </X>
        </>
      )}
    </div>
  );
};

export default TaskItem;

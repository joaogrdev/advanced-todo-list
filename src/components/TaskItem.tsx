import { Circle, CircleCheckBig, Edit, Save, Trash, X } from "lucide-react";
import { cn } from "../utils/utils";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const TaskItem = ({
  key,
  task,
}: {
  key: number; task: { id: number; title: string; completed: boolean; status: string };
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [actualTask, setActualTask] = useState<{
    id: number;
    title: string;
    completed: boolean;
    status: string;
  }>(task);
  const [openInputTitle, setOpenInputTitle] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleCheckTask = (status: string) =>
    setActualTask((prev) => ({
      ...prev,
      status: status,
    }));

  useEffect(() => {
    if (openInputTitle && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openInputTitle]);

  const handleDeleteTask = () => {};

  return (
    <div
      key={key}
      className={cn(
        "flex border border-border p-4 w-full justify-between items-center rounded-md gap-4"
      )}
    >
      {actualTask.status === "done" ? (
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
        defaultValue={actualTask.title}
        value={actualTask.title}
        onFocus={() => setOpenInputTitle(true)}
        onChange={(e) =>
          setActualTask((prev) => ({ ...prev, title: e.target.value }))
        }
        disabled={actualTask.status === "done" || !openInputTitle}
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
            onClick={() => setOpenModalDelete(true)}
          >
            <title>Delete task</title>
          </Trash>
        </>
      ) : (
        <>
          <Save
            className="size-6 cursor-pointer hover:scale-115 text-contrast transition-all"
            onClick={() => setOpenInputTitle(false)}
          >
            <title>Save edit</title>
          </Save>
          <X
            className="size-6 cursor-pointer hover:scale-115 text-darkest transition-all"
            onClick={() => {
              setOpenInputTitle(false);
              setActualTask(task);
            }}
          >
            <title>Cancel edit</title>
          </X>
        </>
      )}

      {openModalDelete && (
        <Modal
          setOpenModal={setOpenModalDelete}
          handleModal={handleDeleteTask}
          infosModal={{
            task: task,
            msg: "Are you sure you want to delete this task?",
            title: "Delete task",
          }}
        />
      )}
    </div>
  );
};

export default TaskItem;

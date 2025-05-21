import TaskList from "./TaskList";

const TaskForm = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-full">
      <div className="hidden tablet:grid grid-cols-1 tablet:grid-cols-2 gap-10 w-full">
        <TaskList status="todo" />
        <TaskList status="done" />
      </div>

      <div className="flex flex-col gap-2 w-full tablet:hidden">
        <TaskList />
      </div>
    </section>
  );
};

export default TaskForm;

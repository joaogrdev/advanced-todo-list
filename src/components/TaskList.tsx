import TaskItem from "./TaskItem";

const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];

const TaskList = () => {
  return (
    <section className="flex flex-col gap-2 w-full p-3">
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </section>
  );
};

export default TaskList;

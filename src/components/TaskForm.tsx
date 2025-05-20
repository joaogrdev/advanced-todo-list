import TaskList from "./TaskList";

const TaskForm = () => {
  return (
    <section className="flex flex-col items-center gap-5 border border-gray-300 rounded-xl">
      {/*SECTION HEADER*/}
      <h1 className="font-bold text-xl bg-blue-500 text-white w-full py-3 text-center rounded-t-xl">
        TaskForm
      </h1>

      {/*SECTION INPUT ADD NEWTASK*/}
      <div className="flex gap-2 px-3 items-end">
        <div className="flex flex-col">
          <label htmlFor="newTask">Add Task*</label>
          <input
            type="text"
            name=""
            id="newTask"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md h-fit">
          Add
        </button>
      </div>

      {/*SECTION FILTERS*/}
      <div className="grid grid-cols-3 w-full bg-blue-500">
        <button className="bg-blue-500 text-white border hover:bg-white hover:text-blue-500 p-1 transition">
          Todo
        </button>
        <button className="bg-blue-500 text-white border hover:bg-white hover:text-blue-500 p-1 transition">
          Done
        </button>
        <button className="bg-blue-500 text-white border hover:bg-white hover:text-blue-500 p-1 transition">
          All
        </button>
      </div>

      {/*SECTION TASK LIST*/}
      <TaskList />
    </section>
  );
};

export default TaskForm;

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

export interface Task {
  id: string;
  title: string;
  status: string;
  createdAt: Date;
}

interface TaskStore {
  tasks: Task[];

  getTask: (id: string) => Task | undefined;
  addTask: (task: Omit<Task, "id" | "createdAt">) => void;
  updateTask: (
    id: string,
    updates: Partial<Omit<Task, "id" | "createdAt">>
  ) => void;
  deleteTask: (id: string) => void;
  markTask: (id: string, status: string) => void;
  clearTasks: (status: string) => void;

  error: string;
  addError: (error: string) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],

      getTask: (id) => {
        return get().tasks.find((task) => task.id === id);
      },

      addTask: (taskData) => {
        const newTask: Task = {
          id: nanoid(),
          createdAt: new Date(),
          ...taskData,
        };

        set((state) => ({
          tasks: [newTask, ...state.tasks],
        }));
      },

      updateTask: (id, updates) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updates } : task
          ),
        }));
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },

      markTask: (id: string, status) => {
        set((state: any) => {
          const updatedTasks = state.tasks.map((task: any) =>
            task.id === id ? { ...task, status } : task
          );

          const taskToMove = updatedTasks.find((task: any) => task.id === id);
          const otherTasks = updatedTasks.filter((task: any) => task.id !== id);

          return {
            tasks: [taskToMove, ...otherTasks],
          };
        });
      },

      clearTasks: (status: string) => {
        if (status === "all") {
          set({ tasks: [] });
        }
        set((state) => ({
          tasks: state.tasks.filter((task) => task.status !== status),
        }));
      },

      error: "",

      addError: (error) => {
        set({ error });
      },
    }),
    {
      name: "project1-tasks", // chave usada no localStorage
      partialize: (state) => ({ tasks: state.tasks }), // apenas `tasks` será salvo
    }
  )
);

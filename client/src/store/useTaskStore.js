import {create} from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  createTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (taskId, updatedFields) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedFields } : task
      ),
    }));
  },

  deleteTask: (taskId) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
}));

export default useTaskStore;

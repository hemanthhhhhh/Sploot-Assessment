// src/types/task.ts
export interface Task {
    id: number;
    title: string;
    description?: string;
    status: "To Do" | "Pending" | "Completed";
  }
  
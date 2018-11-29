export interface Task {
  id?: number;
  name: string;
  proyect: string;
  limit: string;
  userId: number;
  comments?: string[];
  completed?: boolean;
}

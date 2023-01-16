export interface ITask {
  id: string,
  text: string,
  createdAt: Date,
  finishedAt: Date | null,
}

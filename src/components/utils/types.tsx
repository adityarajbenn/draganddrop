export interface ITaskContext {
    seed: ISeedData,
    setSeed(data: ISeedData): void
}

export interface ISeedData{
    tasks: Array<ITask>,
    columns: Array<IColumn>,
    order: Array<string>
}

export interface IColumn{
    id: string,
    title: string,
    tasks: Array<ITask>
}

export interface ITask {
    id: string,
    name: string,
    content: string,
    column: string,
    index: number
}
const tasks = [
    {
        name: 'Task-1',
        id: 'task-1',
        content: 'Create a card or List',
        column: 'col-1'
    },
    {
        name: 'Task-2',
        id: 'task-2',
        content: 'Works on Mobile Devices',
        column: 'col-1'
    },
    {
        name: 'Task-3',
        id: 'task-3',
        content: 'Sign in to save changes',
        column: 'col-1'
    },
    {
        name: 'Task-4',
        id: 'task-4',
        content: 'Edit a card, you can edit a card by clicking on the 3 dots and then click on edit and then got to edit page and get it done',
        column: 'col-1'
    },
]

const seedData = {
    tasks: tasks,
    columns: [
        {
            title: 'Welcome',
            id: 'col-1',
            tasks: [...tasks]
        },
        {
            title: 'How to use',
            id: 'col-2',
            tasks: []
        },
        {
            title: 'Feature',
            id: 'col-3',
            tasks: []
        },
    ],
    order: ['col-1', 'col-2', 'col-3']
}

export default seedData;
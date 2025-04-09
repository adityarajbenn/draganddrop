import React, { useContext } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

import Column from './Column';
import TaskContext from '../../context/task/taskContext';
import { ISeedData, ITaskContext } from '../utils/types';

const Home = () => {
    const taskContext = useContext<ITaskContext>(TaskContext);

    const reposition = (data: Array<any>, from: number, to: number): Array<any> => {
        const updated = [...data];
        const [moved] = updated.splice(from, 1);
        updated.splice(to, 0, moved);
        return updated;
    };

    const handleDragEnd = (result: DropResult) => {
        const { destination, source, draggableId, type } = result;
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
            return;
        }

        let currList: ISeedData = { ...taskContext.seed };

        if (type === 'column') {
            const newOrder = reposition([...currList.columns], source.index, destination.index);
            currList.columns = newOrder;
            taskContext.setSeed(currList);
            return;
        }

        const start = currList.columns.find((x) => x.id === source.droppableId);
        const end = currList.columns.find((x) => x.id === destination.droppableId);

        if (!start || !end) return;

        const draggedTask = start.tasks[source.index];

        if (start === end) {
            const reordered = reposition([...start.tasks], source.index, destination.index);
            start.tasks = reordered;
        } else {
            const newStartTasks = [...start.tasks];
            const newEndTasks = [...end.tasks];
            newStartTasks.splice(source.index, 1);
            newEndTasks.splice(destination.index, 0, draggedTask);
            start.tasks = newStartTasks;
            end.tasks = newEndTasks;
        }

        taskContext.setSeed(currList);
    };

    return (
        <section className="section">
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="all-columns" direction="horizontal" type="column">
                    {(provided) => (
                        <div className="container" ref={provided.innerRef} {...provided.droppableProps}>
                            {taskContext.seed.columns.map((column, index) => (
                                <Draggable key={column.id} draggableId={column.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Column
                                                id={column.id}
                                                title={column.title}
                                                tasks={column.tasks}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </section>
    );
};

export default Home;

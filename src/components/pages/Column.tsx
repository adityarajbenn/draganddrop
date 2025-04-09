import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IColumn } from '../utils/types';
import { DroppableStrict } from './DropableStrict';

import Task from './Task';

const Column = ({ id, title, tasks }: IColumn) => {

    const [disabled, setDisabled] = useState<string>('')

    useEffect(() => {

    }, [])

    const disableDrop = (e: any, id: string) => {
        if(e) { e.preventDefault() }

        if(disabled === id){
            setDisabled('')
        }else{
            setDisabled(id);
        }
        
    }

    return (
        <>

            <div className={`column ${id}`}>

                <div className='col-head'>
                    <h1>{ title }</h1>
                    {/* <Link onClick={(e) => disableDrop(e, id)} to="">{ disabled === id ? 'ed' : 'dd' }</Link> */}
                </div>

                <DroppableStrict droppableId={id} isDropDisabled={disabled === id ? true : false}>

                    { (provided, snapshot) => (

                        <div className={`task-list ${snapshot.isDraggingOver ? 'active' : ''}`}
                        ref={provided.innerRef}
                        { ...provided.droppableProps }
                        >

                            {
                                tasks.length > 0 &&
                                tasks.map((task, index) => {

                                    return <Task 
                                    key={task.id} 
                                    id={task.id} 
                                    name={task.name} 
                                    content={task.content}
                                    column={task.column}
                                    index={index}
                                    />
                                })
                            }

                            { provided.placeholder }

                        </div>

                    ) }

                </DroppableStrict>

            </div>

        </>
    )

}

export default Column;
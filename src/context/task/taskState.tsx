import React, { useReducer } from 'react';

import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import {
    SET_SEED
} from '../types';

import seedData from '../../components/helpers/seedData';
import { ISeedData } from '../../components/utils/types';

const TaskState = (props: any) => {

    const initialState = {
        seed: seedData
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const setSeed = (data: ISeedData) => {

        dispatch({
            type: SET_SEED,
            payload: data
        })

    }

    return <TaskContext.Provider
        value={{
            seed: state.seed,
            setSeed,
        }}
    >
        { props.children }
    </TaskContext.Provider>

}

export default TaskState;
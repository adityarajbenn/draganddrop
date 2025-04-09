import {
    SET_SEED
} from '../types';

const reducer = (state: any, action: any) => {

    switch(action.type){

        case SET_SEED: 
        return {
            ...state,
            seed: action.payload
        }

    }

}

export default reducer;
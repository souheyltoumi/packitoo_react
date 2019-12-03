import{ FETCH_BREIFS,NEW_BREIF} from '../actions/types'
const initialState = {
    items: [],
    item: {}
  };
  export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_BREIFS:
            console.log('reducer')
            return{
                ...state,
                items:action.payload
            };
        case NEW_BREIF:
                    console.log('new')
                    return{
                        ...state,
                        item:action.payload
                    };
        default: 
        return state;
    }}
import {
    FETCH_TICKETS_START,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILED
} from "../actions/actionTypes";

const initialState = {
    ticketsData: [],
    isLoading: true,
    errorMessage: ''
}


// @ts-ignore
function TicketReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TICKETS_START:
            return {ticketsData: [], errorMessage: '', isLoading: true}
        case FETCH_TICKETS_SUCCESS:
            return {ticketsData: action.payload, errorMessage: '', isLoading: false}
        case FETCH_TICKETS_FAILED:
            return {ticketsData: [], errorMessage: action.payload, isLoading: false}
        default:
            return state;
    }
}

export default TicketReducer;
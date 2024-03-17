import {combineReducers} from 'redux';
import TicketReducer from "./ticketReducer";


export default combineReducers({
    TicketState: TicketReducer,
})

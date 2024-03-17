import axios from "axios";
import {
    FETCH_TICKETS_START,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILED
} from "./actionTypes";

export function getAllTickets(dispatch: any) {
    const apiUrl = 'https://273ef92f06d743c9b277eba8afab1bbd.api.mockbin.io/';
    dispatch(fetchTicketStart());
    axios.get(apiUrl)
        .then(response =>
            response.data.flightList
        )
        .then(
            data =>
                dispatch(fetchTicketSuccess(data))
        )
        .catch(error =>
            dispatch(fetchTicketFailed(error))
        );
}

export const fetchTicketStart = () => ({
    type: FETCH_TICKETS_START
})
export const fetchTicketSuccess = (data: any) => ({
    type: FETCH_TICKETS_SUCCESS,
    payload: data
})
export const fetchTicketFailed = (errorMessage: any) => ({
    type: FETCH_TICKETS_FAILED,
    payload: errorMessage
})
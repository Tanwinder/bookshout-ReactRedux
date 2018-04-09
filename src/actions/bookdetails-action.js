const showdetails = (details)=> {
    return {
        type: 'details',
        payload: {
            details: details
        }
    }
}

const details=(detail)=> {
    return dispatch => {
        dispatch(showdetails(detail));
    }
}
export default details;
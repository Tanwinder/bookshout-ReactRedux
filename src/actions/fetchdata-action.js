const show = (result) => {
    return {
        type: 'data',
        payload: {
            data: result
        }
    }
}

const fetchData = () => {
    return dispatch => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res=> res.json())
        .then((result) => {
            console.log(result);
            dispatch(show(result));
        })
    }
}

export default fetchData;
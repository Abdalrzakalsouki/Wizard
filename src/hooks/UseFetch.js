//we use this customed hook to be able fetch the data from the API
//To return the data and the loading 
//we return setUrl because we need to use it inside the city selection 

import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {

    const [data, setData] = useState(null);
    const [error, SetError] = useState(null);
    const [isLoading, SetIsLoading] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        if(!url) return;
        SetIsLoading(true);
        setData(null);
        SetError(null);

        fetch(url).then((response) => response.json())
        .then((data) => {
            SetIsLoading(false);
            if(data.cod >= 400) {
                SetError(data.message);
                return;
            }
            setData(data);
        })
        .catch((error) => {
            SetIsLoading(false);
            SetError(error);
        });
    }, [url]);

    return {data, error, isLoading, setUrl};
};

export default UseFetch;
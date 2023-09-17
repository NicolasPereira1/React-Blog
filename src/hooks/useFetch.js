import {useEffect, useState} from "react";

export const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export const REQUEST_STATUS = {
    PENDING: 'PENDING',
    OK: 'OK',
    KO: 'KO'
};

const useFetch = (url, method) => {
    const [result,setResult] = useState({status: REQUEST_STATUS.PENDING, data: []});
    useEffect(() => {
        fetch(url, {method})
            .then(response => response.json())
            .then(json => {
                const data= json instanceof Array ? json : [];
                setResult({status: REQUEST_STATUS.OK, data});
                }
            ).catch(error => {
                console.log(error);
                setResult({status: REQUEST_STATUS.KO, data: []});
        });
    }, []);
    return result;
};

export default useFetch;
import {useEffect, useState} from "react";

export const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}
const useFetch = (url, method) => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch(url, {method})
            .then(response => response.json())
            .then(json => setData(json instanceof Array ? json : []))
            .catch(error => console.log(error));
    }, []);
    return data;
};

export default useFetch;
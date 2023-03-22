import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com'

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const res = await axios(url);
            setResponse(res.data.results);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    

    useEffect (() => {
        fetchData(param);
}, [param])

    return {
        response,
        loading,
        error,
        fetchData: url => fetchData(url)
    }
}

export default useAxios;
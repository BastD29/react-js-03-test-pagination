import { useState, useEffect } from "react";
import paginate from './utils';

const url = 'https://ucyldwzph9.execute-api.eu-west-1.amazonaws.com/production/v4/rooms?status=available&city=Paris';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setData(paginate(data.rooms))
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])
    return {loading, data}
}
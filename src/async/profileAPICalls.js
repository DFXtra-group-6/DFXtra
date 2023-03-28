import axios from 'axios';

export const getDataAsync = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_URL}/profile`)
        console.dir(res.data);
        if (res.data) return { data: res.data }
        return { message: 'No data received' }
    }
    catch (err) {
        throw err.message;
    }
}
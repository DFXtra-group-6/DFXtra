import axios from 'axios';

export const getDataAsync = async (user) => {
    try {
        const res = await axios
            .get(`${process.env.REACT_APP_URL}/profile/${user._id}`)

        if (res.data) return { data: res.data }
        return { message: 'No data received' }
    }
    catch (err) {
        throw err.message;
    }
}
import axios from "axios";

export const getAnswer = async (kids) => {
    const response = kids.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

    const res = await axios.all(response);

    return res.map(data => data.data);
}
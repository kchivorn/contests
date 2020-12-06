const { default: Axios } = require("axios");

import axios from 'axios';

export const fetchContest = (contestId) => {
    return axios.get(`/api/contests/${contestId}`)
                .then(resp => resp.data.contest);
}
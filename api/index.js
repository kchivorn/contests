import express from 'express';
import data from '../src/testData';


const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {})

router.get('/contests', (req, res) => {
    res.send({contests});
});

router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId];
    contest.description = 'Magna cupidatat non ad occaecat ex nulla excepteur veniam nostrud laboris amet veniam. Laborum enim aute laboris minim mollit ea do minim eu. Excepteur id deserunt commodo incididunt ipsum voluptate eiusmod nisi ea deserunt magna. Cillum nostrud nostrud id in id nostrud duis dolore.';
    res.send({contest});
});

export default router;
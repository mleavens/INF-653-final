const State = require('../model/State');
const statesJSONData = require('../model/states.json');

//GET route
const getAllStates = async (req, res) => {
    res.json(statesJSONData);
    const contig = req.query?.contig;

    const mongoStates = await State.find();

    let statesList = statesJSONData.forEach((st) => {
        const stateExists = mongoStates.find(st => st.stateCode === state.code);
        if (stateExists) {
            [...stateExists.funfacts]
        }
    });
    if(contig === 'true'){
        //return the contig states
        let statesList = statesJSONData.filter(st => st.code !== 'AK' || st.code !== 'HI');
    } else if (contig === 'false'){
        let statesList = statesJSONData.filter(st => st.code === 'AK' || st.code === 'HI');
    }
    res.json(statesList);
    // const states = await State.find();
    // if (!states) return res.status(204).json({'message': 'No states found.'});
    // // res.json(states);
}

// POST/create route
// const createStateInfo = async (req, res) => {
//     if(!req?.body?.state){
//         return res.status(400).json({message: 'stateCode ' });
//     }
//     console.log(req.body.state);
//     console.log(req.body.funFacts);

//     const foundState = await 

// }

module.exports = getAllStates;

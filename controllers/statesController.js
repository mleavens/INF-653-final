const State = require('../model/State');
const data ={};
data.statesJSONData = require('../model/states.json');

//GET route
const getAllStates = async (req, res) => {
    const mongoStates = await State.find();
    if (!mongoStates) return res.status(204).json({'message': 'No states found.'});

    const contig = req.query?.contig;

    let statesList = [];
    if(contig === 'true'){
        //return the contig states
        statesList = statesJSONData.filter(st => st.code !== 'AK' || st.code !== 'HI')
        return statesList;
    } else if (contig === 'false'){
        statesList = statesJSONData.filter(st => st.code === 'AK' || st.code === 'HI')
        return statesList;
    }

    statesList.forEach((state) => {
        const stateExists = mongoStates.find(st => st.stateCode === state.code);
        if (stateExists) {
            [...stateExists.funfacts]
        }
    });
    return res.json(statesList);
}

const getOneState = async (req, res) => {
    if (!req?.params?.code) return res.status(404);
    let myStateCode = req?.params?.code;
    const stateObj = statesJSONData.find(state => state.code === myStateCode);
    return res.json(stateObj);
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

module.exports = {
    getAllStates, 
    getOneState
};

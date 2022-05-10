const State = require('../model/State');
const statesJSONData = require('../model/states.json');

//GET route

const getAllStates = async (req, res) => {
    res.send(statesJSONData);

    const mongoStates = await State.find();
    if (!mongoStates) return res.status(204).json({'message': 'No states found.'});
    const contig = req.query?.contig;


    let statesList = [];
    if(contig === 'true'){
        //return the contig states
        statesList = statesJSONData.filter(st => st.code !== 'AK' || st.code !== 'HI');
        return;
    } else if (contig === 'false'){
        statesList = statesJSONData.filter(st => st.code === 'AK' || st.code === 'HI');
        return;
    }

    statesList.forEach((state) => {
        const stateExists = mongoStates.find(st => st.stateCode === state.code);
        if (stateExists) {
            [...stateExists.funfacts]
        }
        return;
    });
    res.json(statesList);
}


const getOneState = async (req, res) => {
    if (!req?.params?.code) return res.status(404).json({"message": "Invalid state abbreviation parameter"});
    let myStateCode = req?.params?.code;
    const stateObj = statesJSONData.find(state => state.code === myStateCode);
    return res.json(stateObj);
}

const getCapital = (req,res) => {
    const capital = statesJSONData.find(state => state.capital_city === req.params.capital);
    if(!capital) {
        return res.status(400).json({"message": `Capital ${req.params.capital} not found`})
    }
    res.json(capital);

}

const getNickname = (req,res) => {
    const nickname = statesJSONData.find(state => state.nickname === req.params.nickname);
    if(!nickname) {
        return res.status(400).json({"message": `Nickname ${req.params.nickname} not found`})
    }
    res.json(nickname);
}

const getPopulation = (req,res) => {
    const population = statesJSONData.find(state => state.population === req.params.population);
    if(!population) {
        return res.status(400).json({"message": `Population ${req.params.population} not found`})
    }
    res.json(population);
}

const getAdmission = (req,res) => {
    const admission = statesJSONData.find(state => state.admission === req.params.admission);
    if(!admission) {
        return res.status(400).json({"message": `Admission ${req.params.admission} not found`})
    }
    res.json(admission);
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
    getOneState, 
    getCapital,
    getNickname,
    getPopulation,
    getAdmission
}

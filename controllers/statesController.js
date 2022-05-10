const State = require('../model/State');
const statesJSONData = require('../model/states.json');

const getAllStates = async (req, res) => {
    //const states = await State.find();
    //if (!states) return res.status(204).json({ 'message': 'No states found.' });
    const contig = req.query?.contig;

    let statesList = [];

    if(contig === 'true'){
        //return the contig states
        statesList = statesJSONData.filter(st => st.code !== 'AK' && st.code !== 'HI')
        res.json(statesList);
    } else if (contig === 'false'){
        statesList = statesJSONData.filter(st => st.code === 'AK' || st.code === 'HI')
        res.json(statesList);
    }

    res.json(statesJSONData);
}


const getOneState = (req, res) => {
   const state = statesJSONData.find(st => st.code === req.params.state.toUpperCase());
    if (!state) {
        return res.status(400).json({ "message": "Invalid state abbreviation parameter" });
    }
    res.json(state);
    // if (!req?.params?.code) return res.status(404).json({"message": "Invalid state abbreviation parameter"});
    // let myStateCode = req?.params?.code;
    // const stateObj = statesJSONData.find(state => state.code === myStateCode);
    // res.json(stateObj);
}

const getCapital = (req,res) => {
    const capital = statesJSONData.find(state => state.capital_city === req.params.capital);
    if(!capital) {
        return res.status(400).json({"message": "Invalid state abbrviation parameter"})
    }
    res.json(capital);
}

const getNickname = (req,res) => {
    const nickname = statesJSONData.find(state => state.nickname === req.params.nickname);
    if(!nickname) 
        return res.status(400).json({"message": "Nickname not found"})
    res.json(nickname);
}

const getPopulation = (req,res) => {
    const population = statesJSONData.find(state => state.population === req.params.population);
    if(!population) {
        return res.status(400).json({"message": "Population not found"})
    }
    res.json(population);
}

const getAdmission = (req,res) => {
    const admission = statesJSONData.find(state => state.admission === req.params.admission);
    if(!admission) {
        return res.status(400).json({"message": "Admission not found"})
    }
    res.json(admission);
}

//post
const createNewFunFact = async (req, res) => {
    if (!req?.body?.stateCode || !req?.body?.funfacts) {
        return res.status(400).json({ 'message': 'State fun facts required' });
    }

    try {
        const result = await State.create({
            stateCode: req.body.stateCode,
            funfacts: req.body.funfacts
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}



module.exports = {
    getAllStates, 
    getOneState, 
    getCapital,
    getNickname,
    getPopulation,
    getAdmission,
    createNewFunFact
}






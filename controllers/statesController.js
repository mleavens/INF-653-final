const State = require('../model/State');
// const statesJSONData = require('../model/states.json');
const data = {
  states: require('../model/states.json'),
  setStates: function (data) {
    this.states = data;
  }
}

const getAllStates = async (req, res) => {
    //const states = await State.find();
    //if (!states) return res.status(204).json({ 'message': 'No states found.' });
    const contig = req.query?.contig;

    let statesList = [];

    if(contig === 'true'){
        //return the contig states
        statesList = data.states.filter(st => st.code !== 'AK' && st.code !== 'HI')
        res.json(statesList);
    } else if (contig === 'false'){
        statesList = data.states.filter(st => st.code === 'AK' || st.code === 'HI')
        res.json(statesList);
    }

    res.json(data.states);
}


const getOneState = (req, res) => {
   const state = data.states.find(st => st.code === req.params.state.toUpperCase());
    if (!state) {
        return res.status(400).json({ "message": "Invalid state abbreviation parameter" });
    }
    res.json(state);
    // if (!req?.params?.code) return res.status(404).json({"message": "Invalid state abbreviation parameter"});
    // let myStateCode = req?.params?.code;
    // const stateObj = statesJSONData.find(state => state.code === myStateCode);
    // res.json(stateObj);
}

//get capital
const getCapital = (req,res) => {
    const state = data.states.find(
    (state) => state.code === req.params.state.toUpperCase());
    if (!state) {
      return res.status(400).json({ "message": "Invalid state abbreviation parameter"});
    }
  res.json({ state: `${state.state}`, capital: `${state.capital_city}`});
}
  //end of get state and capital

//get nickname
const getNickname = (req,res) => {
      const state = data.states.find(
    (state) => state.code === req.params.state.toUpperCase());
    if (!state) {
      return res.status(400).json({ "message": "Invalid state abbreviation parameter"});
    }
  res.json({ state: `${state.state}`, nickname: `${state.nickname}`});
}
//end of get nickname

//get population
const getPopulation = (req,res) => {
       const state = data.states.find(
    (state) => state.code === req.params.state.toUpperCase());
    if (!state) {
      return res.status(400).json({ "message": "Invalid state abbreviation parameter"});
    }
  res.json({ state: `${state.state}`, population: `${state.population}`});
}
//end of get population

//get admission
const getAdmission = (req,res) => {
    const state = data.states.find(
    (state) => state.code === req.params.state.toUpperCase());
    if (!state) {
      return res.status(400).json({ "message": "Invalid state abbreviation parameter"});
    }
  res.json({ state: `${state.state}`, admission: `${state.admission}`});
}
//end of get admission



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
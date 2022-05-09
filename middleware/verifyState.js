const statesJSONData = require('../model/states.json');



const verifyState = (...allowedStates) => {
    return (req, res, next) => {
        const stateAbbr = req.params.state.toUpperCase();
        if (!stateAbbr) return res.json({ "error": "Invalid state abbreviation parameter" });
        const stateCodes = statesJSONData.map((st) => {
            return st.code
        });
        const isState = stateCodes.find((code) => {
            return code === stateAbbr
        });
        if(!isState) return res.sendStatus(401).json({"error": "State does not exist"});
        if(isState) req.code = stateAbbr;
        next();
    }
}

module.exports = verifyState;
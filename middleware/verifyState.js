const statesJSONData = require('../model/states.json');



const verifyStates = (...allowedStates) => {
    return (req, res, next) => {
        const stateAbbr = req.params.state.toUpperCase();
        if (!stateAbbr) return res.sendStatus(401);
        const stateCodes = statesJSONData.map((st) => {
            return st.code
        });
        const isState = stateCodes.find((code) => {
            return code === stateAbbr
        });
        if(!isState) return res.sendStatus(401).json({"error": "404 Not Found"});
        if(isState) req.code = stateCode;
        next();
    }
}

module.exports = verifyStates;
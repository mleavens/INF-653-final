const State = require('../model/State');

const createNewFunFact = async (req, res) => {
    if (!req?.funFacts) {
        return res.status(400).json({'message': 'A fun fact is required.'});
    }

    try {
        const result = await State.create({
            funFacts: req.funFacts
        });

        res.status(201).json(result);
    } catch (err){
        console.error(err);
    }
}

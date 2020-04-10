module.exports ={
    getHouses: (req,res) =>{
        const db = req.app.get('db');
        db.get_all_houses().then(results =>{
            res.status(200).send(results);
        })
    },
    addHouse: (req,res) =>{
        const db = req.app.get('db');
        const { housename, address, city, state, zip } = req.body;
        db.add_house(housename, address, city, state, zip).then(() =>{
            res.sendStatus(200);
        })
    },
    deleteHouse: (req,res) =>{
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_house(id).then(() =>{
            res.sendStatus(200);
        })
    }
}
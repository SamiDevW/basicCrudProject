const express = require('express');
const userDataModel = require('./userData.model');
const { log } = require('console');
const route = express.Router();

// test my server (1)
route.get('/', (req, res) => {
    res.send('Server OK')
})
//importing full collection (3)
route.get('/getUserData', async (req, res) => {
    try {
        const userDataDocument = await userDataModel.find({}) // we use an empty object for find to take all the objects data
        res.status(200).json(userDataDocument)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }


})
// get one element (4)
route.get('/getSingleDataUser/:id', async (req, res) => {
    try {
        const { id } = req.params // deconstruct my req params
        console.log(req.params);
        const userDataById = await userDataModel.findById(id)
        res.status(200).json(userDataById)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})
// modify data (5)
route.put('/updateSingleUser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const modifyUserData = await userDataModel.findByIdAndUpdate(id, req.body)
        if (!modifyUserData) {
            return res.status(400).json({
                message: `Can't find the user info with the id ${id}`
            })
        }
        res.status(200).json(modifyUserData)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }
})
// Exporting data to db (2)
route.post('/postUserData', async (req, res) => {
    try {
        const userData = await userDataModel.create(req.body) // create => mongoose method to create the model in the req body
        console.log(req.body);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})
// delete data user (6)
route.delete('/deleteUserData/:id', async (req, res) => {
    try {
        const { id } = req.params
        deleteUserData = await userDataModel.findByIdAndDelete(id);

        if (!deleteUserData) {
            return res.status(400).json({
                message: `Can't find the user info with the id ${id}`
            })
        }
        res.status(200).json(deleteUserData)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }

})





// export to server
module.exports = route;
const mongodb = require('mongoose')

const MongodbConnect = async() => {
    try{
        await mongodb.connect('mongodb://localhost:27017/animedb')
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.error(error)
    }
}

module.exports = MongodbConnect
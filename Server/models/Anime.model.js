const mongoose = require('mongoose')

const EpisodeSchema = new mongoose.Schema({
    title:{type:String,required:true},
    epNumber:{type:Number,required:true},
    videoLink:{type:String,required:true},
    thumbnail:{type:String,required:true},
    relaseDate:{type:Date,default:Date.now},
    airedOn:{type:Number}
})

const SeasonSchema = new mongoose.Schema({
    seasonNumber:{type:Number,required:true},
    episodes:[EpisodeSchema],
    createdAt:{type:Date,default:Date.now}
})

const AnimeSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    thumbnail:{type:String,required:true},
    genres:[{type:String,required:true}],
    seasons:[SeasonSchema],
    createdAt:{type:Date,default:Date.now}
})

const Anime = mongoose.model("Anime",AnimeSchema)
module.exports = Anime
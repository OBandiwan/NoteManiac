const notes = require('../../data/notes.js')
const express =  require('express')
const router = express.Router()
router.get('/notes',(req,res)=>{
    res.send(notes)
})
router.get('/notes/:id',(req,res)=>{
    const note =  notes.find((n)=> n._id===req.params.id)
    res.send(note)
})
module.exports =router;
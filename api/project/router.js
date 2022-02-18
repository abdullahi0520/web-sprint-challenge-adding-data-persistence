// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req,res,next) => {
    res.json('testing project get')
})
router.post('/', (req,res,next) => {
    res.json('testing project post')
})

module.exports = router;
// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', async (req,res,next) => {
    try {
    const resources = await Resource.find()
    res.json(resources)
    } catch (err) {
    next(err)
    }
})
router.post('/', async(req,res,next) => {
    try {
       const newResources = await Resource.create(req.body)
       res.status(201).json(newResources) 
    } catch (err) {
    next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    // DO YOUR MAGIC
   res.status(err.status || 500).json({
     message: err.message,
   })
  })

  module.exports = router;
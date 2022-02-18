// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')

router.get('/', async (req,res,next) => {
    try {
    const tasks = await Tasks.find()
    res.json(tasks)
    } catch (err) {
    next(err)
    }
})
router.post('/', async(req,res,next) => {
    try {
       const newTasks = await Tasks.create(req.body)
       res.status(201).json({
        task_id: newTasks.task_id,
        task_description: newTasks.task_description,
        task_notes: newTasks.task_notes,
        task_completed: newTasks.task_completed === 0 ? false : true,
       }) 
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
// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req,res,next) => {
    try {
    const projects = await Project.find()
    res.json(projects)
    } catch (err) {
    next(err)
    }
})
router.post('/', async(req,res,next) => {
    try {
       const newProject = await Project.create(req.body)
       res.status(201).json({
        project_id: newProject.project_id,
        project_name: newProject.project_name,
        project_description: newProject.project_description,
        project_completed: newProject.project_completed === 0 ? false : true
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
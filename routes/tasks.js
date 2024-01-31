const express = require('express')
const router = express.Router()


// load middleware functions from controllers
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../controllers/tasks')


// create routes
// different HTTP methods in the same route 

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


// export router
module.exports = router

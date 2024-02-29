const { readTasksFromFile, saveTasksToFile } = require('../tasks')
const { format } = require('date-fns')
const { v4: uuidv4 } = require('uuid')

function criarTask(req, res) {
  const { title, description } = req.body
  const id = uuidv4()
  const createdAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss', {
    timeZone: 'America/Sao_Paulo',
  })
  const updatedAt = createdAt
  const completedAt = null

  const tasks = readTasksFromFile()

  const newTask = { id, title, description, createdAt, updatedAt, completedAt }

  tasks.push(newTask)

  saveTasksToFile(tasks)

  res.status(201).json({ message: 'Task criada com sucesso', task: newTask })
}

function listarTasks(req, res) {
  const { title, description } = req.query

  const tasks = readTasksFromFile()

  let filteredTasks = [...tasks]

  if (title) {
    filteredTasks = filteredTasks.filter((task) => task.title.includes(title))
  }

  if (description) {
    filteredTasks = filteredTasks.filter((task) =>
      task.description.includes(description)
    )
  }

  res.json(filteredTasks)
}

function updateTask(req, res) {
  const taskId = req.params.id

  const tasks = readTasksFromFile()

  const taskIndex = tasks.findIndex((task) => task.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task não encontrada ou não existe' })
  }

  const { title, description } = req.body

  if (title) {
    tasks[taskIndex].title = title
  }

  if (description) {
    tasks[taskIndex].description = description
  }

  tasks[taskIndex].updatedAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss', {
    timeZone: 'America/Sao_Paulo',
  })

  saveTasksToFile(tasks)

  res.json({ message: 'Task atualizada com sucesso', task: tasks[taskIndex] })
}

function deleteTask(req, res) {
  const taskId = req.params.id

  const tasks = readTasksFromFile()

  const taskIndex = tasks.findIndex((task) => task.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task não encontrada ou não existe' })
  }

  tasks.splice(taskIndex, 1)

  saveTasksToFile(tasks)

  res.json({ message: 'Task excluída com sucesso' })
}

function completeTask(req, res) {
  const taskId = req.params.id

  const tasks = readTasksFromFile()

  const taskIndex = tasks.findIndex((task) => task.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task não encontrada ou não existe' })
  }

  const task = tasks[taskIndex]
  task.completedAt = task.completedAt
    ? null
    : format(new Date(), 'yyyy-MM-dd HH:mm:ss', {
        timeZone: 'America/Sao_Paulo',
      })
  task.updatedAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss', {
    timeZone: 'America/Sao_Paulo',
  })

  saveTasksToFile(tasks)

  res.json({ message: 'Task marcada como completa com sucesso', task })
}

module.exports = {
  criarTask,
  listarTasks,
  updateTask,
  deleteTask,
  completeTask,
}

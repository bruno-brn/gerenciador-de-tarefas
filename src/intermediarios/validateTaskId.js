function validateTaskId(tasks) {
  return function (req, res, next) {
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);

    
    if (!task) {
      return res.status(404).json({ error: 'Task não encontrada ou não existe' });
    }

    next();
  };
}

module.exports = validateTaskId;


  
const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');

async function importCSVRoute(req, res) {
  const csvFilePath = 'C:/Users/Bruno/Desktop/desafio/src/Pasta1.csv';
  const baseURL = 'http://localhost:3000/tasksControl';
  const tasks = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      const { title, description } = row;
      tasks.push({ title, description });
    })
    .on('end', async () => {
      for (const task of tasks) {
        const url = `${baseURL}`;

        try {
          const response = await axios.post(url, task);
          console.log(`Task "${task.title}" criada com sucesso!`);
        } catch (error) {
          console.error(`Erro ao criar a Task "${task.title}": ${error.message}`);
        }
      }

      res.json({ message: 'Todas as tarefas foram importadas com sucesso!' });
    });
}

module.exports = importCSVRoute;


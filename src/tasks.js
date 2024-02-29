const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './database.json');

function readTasksFromFile() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function saveTasksToFile(tasks) {
  const tasksJSON = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(filePath, tasksJSON);
}

module.exports = {
  readTasksFromFile,
  saveTasksToFile,
};

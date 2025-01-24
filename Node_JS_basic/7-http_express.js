const express = require('express');

const app = express();
const fs = require('fs');

// var args = process.argv.slice(2).toString();
const args = process.argv[2];

app.get('/', (request, response) => {
  response.status(200);
  response.setHeader('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  countStudents(args)
    .then((data) => {
      response.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      response.send(`This is the list of our students\n${err.message}`);
    });
});

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.slice(1);
      const fields = {};

      students.forEach((line) => {
        const parts = line.split(',');
        if (parts.length < 4) return;

        const firstName = parts[0].trim();
        const field = parts[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      const summary = [`Number of students: ${students.length}`];
      for (const [field, names] of Object.entries(fields)) {
        summary.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(summary.join('\n'));
    });
  });
}

app.listen('1245');

module.exports = app;

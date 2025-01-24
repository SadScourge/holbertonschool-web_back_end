import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const students = [];
        students.push('This is the list of our students');

        const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of fields) {
          const result = `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
          students.push(result);
        }

        response.status(200).send(students.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((data) => {
        if (data[major]) {
          const result = `List: ${data[major].join(', ')}`;
          response.status(200).send(result);
        } else {
          response.status(200).send('No available students');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;

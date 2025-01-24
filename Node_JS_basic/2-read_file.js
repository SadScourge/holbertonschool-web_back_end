const fs = require('node:fs');

function countStudents(path) {
    try {
        data = fs.readFileSync(path, "utf-8")

        const linearray = data.trim().split('\n').filter((line) => line.trim() !== '');
        number = linearray.slice(1);
        const fields = {};

        number.forEach((line) => {
            const split = line.split(',');
            if (split.length < 4) {
                return
            };
            const name = split[0].trim();
            const field = split[3].trim();
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(name);
        });
        console.log(`Number of students: ${number.length}`)
        for (const field in fields) {
            if (field) {
                const list = fields[field];
                console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
            }
        }
    }
    catch {
        console.log("Cannot load the database")
    }
}

module.exports = countStudents;
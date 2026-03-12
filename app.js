import express from 'express';

const PORT = 3030;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on:  ${PORT}`)
})


const students = [
    {id: 1, name: 'Gáspár Laci', subject: 'Matek'},
    {id: 2, name: 'Kuno Márió', subject: 'Irodalom'},
    {id: 3, name: 'Lakatos Brendon', subject: 'Történelem'}
]

app.get('/students', (req, res) => {
    res.status(200).json(students);
})

app.get('/students/:id', (req, res) => {
    const id = +req.params.id
    const student = students.find(student => student.id === id)
    if (!student) {
        return res.status(404).json({message: 'Student not found!!'})
    }
    res.status(200).json(student)
})

app.post('/students/:id', (req, res) => {
    const {name, subject} = req.body
    if (!name || !subject) {
        return res.status(400).json({message: 'Name and subject required!!'});
    }
    const id = students[student.lenght - 1]?.id + 1;
    const student = {id, name, subject}
    students.push(student)
    res.status(201).json(book);
})
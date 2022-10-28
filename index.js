const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require('./data/categories.json');
const courses = require("./data/courses.json")

app.get('/', (req, res) =>{
    res.send('school API running')
} )

app.get('/courses-categories', (req, res) =>{
    res.send(categories)
})

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    if(id === "10") {
        res.send(courses);
    }
    const course_category = courses.filter(course => course.category_id === id);
    res.send(course_category)
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourses = courses.find(course => course._id === id);
    res.send(selectedCourses)
})

app.listen(port, () =>{
    console.log('server running on port', port);
})
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')
const PORT = process.env.PORT || 3000

//const port = process.env.PORT || 3000
//quiere decir si no hay una variable global poner 3000

app.listen(PORT, () => console.log("server up at: http://localhost:3000/ or other"))
//en terminal: mkdir views public public/images public/css
//mkdir crea archivos, touch crea carpetas
//touch views/home.html 
app.get('/register', (req, res)=>{ 
    res.sendFile(path.join(__dirname, 'views/register.html'))
})

const publicPath = path.resolve(__dirname, 'public');
app.use/morgan
app.use(express.static(publicPath));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html')))

app.get('/register', (req, res) => res.sendFile(path.join(__dirname, '/views/register.html')))
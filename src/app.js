const hbs= require('hbs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 8002;

app.use(express.static(path.join(__dirname,"../public")))


app.set("view engine", "hbs");
app.set('views', path.join(__dirname, "../templates/views"));

hbs.registerPartials(path.join(__dirname,"../templates/partials"));

app.get('', (req,res)=>{
    res.render('index')

})

app.get('/about', (req,res)=>{
    res.render('about');
    

    
})

app.get('/weather', (req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
   res.render('404error');
})

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`);
})
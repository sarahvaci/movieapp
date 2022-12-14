const express = require('express'); 
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

//another route
app.get('/movies' , (req, res)=>{
   res.render('movies');
});


//create first route
app.get('/search', (req,res)=> {
    res.render('search');
});

app.listen(3000,()=>{
    console.log('server started at port 3000.');
});
//http://localhost:3000



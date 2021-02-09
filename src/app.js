const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000


const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicDir))
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

 app.get('', (req, res)=>{
    res.render('index',{
     title : 'TEST SITE REPEAT',
     Name : 'Andrew'
  })
})

app.get('/about', (req, res)=>{
  res.render('about',{
   title : 'Learn About me!',
   Name : 'Andrew'
})
})

app.get('/help', (req, res)=>{
  res.render('help',{
   title : 'Get all help about site from here !',
   Name : 'Andrew'
})
})

// app.get('/help', (req, res)=>{
  //   res.send([{
  //     "name": "shekhar",
  //     "age" : "30"
  //  }])
  //  })

app.get('/weather', (req, res)=>{
  res.send([{
   "forecast" : "Its lovely outside, 15 deg!",
   "location" : "London"
  }])
})

app.get('/help/*', (req, res) =>{
  res.render('PageNotFound', {
    title :' Help Document not found',
    Name : 'Andrew V',
    errorText : 'for help error details details contact help-admin'
 })
 })

app.get('*', (req, res) =>{

 res.render('404', {
    title :' this is 404 page via HBS(handlebars)',
    Name : 'Shekhar V',
    errorText : 'for error details contact admin'
 })
})

 app.listen(port, ()=>{
     console.log('server is up and running on port ' +  port)
 })
const express = require ('express');
const { ExpressHandlebars } = require('express-handlebars');
const path = require('path')
const methodOverride = require ('method-override')
const session  = require('express-session')


const exphbs = require ("express-handlebars");
const { urlencoded } = require('express');

//initializations
const app = express();
//Settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout:'main.hbs',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine', '.hbs')

//Middlewares
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('__method'))
app.use(session({
    secret:'mysecretapp ',
    resave: true,
    saveUninitialized: true
}))

//Global Variables

//Routes
app.use(require('./routes/index'))
app.use(require('./routes/notes'))
app.use(require('./routes/users'))

// Static Files configurar los archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//Server is listenning
app.listen(app.get('port'), () => {
    console.log('El servidor esta escuchando en:' , app.get('port'))
})

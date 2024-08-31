const cookieParser = require('cookie-parser');
const express = require('express');
const userModel = require('./models/user');
const freelancerModel = require('./models/freelancer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/logout', (req, res) => {
    res.cookie("Token", "");
    res.render('home');
});

app.post('/create', async (req, res) => {
    const {firstname, lastname, email, password} = req.body;
    const isClient = req.body.isclient === 'on';

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            const createdUser = await userModel.create({
                firstname,
                lastname,
                email,
                password: hash,
                isClient,
            });

            let token = jwt.sign({email}, 'gigshy');
            res.cookie("Token", token);

            res.redirect('login');
        });
    });

    
});

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({email: req.body.email});
    const allfreelancer = await freelancerModel.find({});
    if (!user) return res.send("Something went wrong");
    bcrypt.compare(req.body.password, user.password, (err, sucess) => {
        if (sucess == true) {
            let token = jwt.sign({email: user.email}, "gigshy");
            if (user.isClient === true) {
                res.cookie("Token", token);
                res.render('clientportfolio', {user});
            } else {
                res.cookie('Token', token);
                res.render('makeprofile', {user})
            }
            
        } else {
            res.send("Something... ")
        }
    });
});

app.post('/freelancer', async (req, res) => {
    const {firstname, username, profileimage, email, phone, professional, bio, skills} = req.body;

    const Createdfreelancer = await freelancerModel.create({
        firstname,
        username,
        profileimage,
        email,
        phone,
        professionalTitle: professional,
        Bio: bio,
        skills,
    });

    console.log(Createdfreelancer);

    res.render('portfolio', {firstname, username, profileimage, email, phone, professional, bio, skills})
});

// const isloginin = (req, res, next) => {
//     console.log(req.body.token);
//     next();
// };

app.listen(PORT, () => {console.log('Server Running... ')}); 
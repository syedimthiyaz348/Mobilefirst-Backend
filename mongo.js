const mongoose = require('mongoose');
require('dotenv').config();
//const url = 'mongodb://localhost:27017/syed_imthiyaz';
//const url = 'mongodb+srv://syedimthiyaz348:syedimmu348@syedimthiyaz.ltxlzt9.mongodb.net/syed_imthiyaz'
const url = process.env.MONGO_URL
mongoose.connect(url);



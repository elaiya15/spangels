const express = require('express');
const mongoose = require('mongoose');
const shoppe=require('./module/userModules');
const cors = require('cors');
// const notesRoutes = require('./routes/notes');
// const register = require('./routes/registerRoutes');
// const auth = require("./models/auth");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use(cors());

// app.use("/note", notesRoutes);

app.get('/', async(req, res) => {
    try {
        const getNotes= await shoppe.find()
       res.status(200).json({getNotes});
      } catch (error) {
          res.status(500).send(error.message)
      }

});



// Connect to MongoDB
app.listen(PORT,()=>{
    console.log("Server is running on port",PORT)
})

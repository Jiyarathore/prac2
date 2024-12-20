const express=require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors = require('cors');
const taskRoutes=require('./routes/tasks');

const app=express();
const PORT=5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api',taskRoutes);

mongoose
  .connect('mongodb+srv://jiyar3472:aditya@cluster0.0f0kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

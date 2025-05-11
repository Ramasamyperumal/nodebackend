const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(express.json());
const TraineeRoutes = require("./routes/trainee-routes");
app.use("/v1/api/trainees", TraineeRoutes);
app.use("/*", (req,res)=>{
    res.send("Invalid Routes!!!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});

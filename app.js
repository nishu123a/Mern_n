require("dotenv").config();
const mongoose=require("mongoose")
const express=require('express')
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const app=express();

const authRoutes=require("./routes/auth.js")
mongoose
     .connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,//for creating database connection alive
    useCreateIndex:true
}).then(()=>{
    console.log("DB Connected")
});
//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api",authRoutes);



//port
const port=process.env.PORT||8080;
//starting a server
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

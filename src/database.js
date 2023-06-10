const mongoose =require('mongoose');
//mongoose.connect("mongodb+srv://dbUser:230486PRO@cluster0.qjy1x.mongodb.net/abarrotesdb?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://are24:arely2409@arely24.yw52a.mongodb.net/abarrotesdb?retryWrites=true&w=majority")
.then(db=>console.log("Mongodb connected..."))
.catch(err=>console.error(err));
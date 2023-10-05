const mongoose = require('mongoose')

export default async function dbConnect(){
    await mongoose.connect("mongodb+srv://ankitkushwahahacker99109:ankitkushwaha99109@cluster0.ksrvanm.mongodb.net/cure_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
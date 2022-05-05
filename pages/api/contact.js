
import { MongoClient }  from 'mongodb';
async function postMessageToMongoDb(res,message) {
  let client;
  
  try{
    // const url = 'mongodb+srv://mudasir:WhN5MMGOKQQnbuZT@cluster0.gxnuf.mongodb.net/next-blogs?retryWrites=true&w=majority';
    const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.gxnuf.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    client = await MongoClient.connect(url);
  }catch(error){
    res.status(500).json({message:'Could not connnect to database'})
    return;
  }

  const db = client.db();

  try{
    const result = await db.collection('messages').insertOne(message);
    // client.close();
    // return;
  }catch(error){
    // client.close();
    res.status(500).json({message:'Storing message failed'})
    // return;
  }finally{
    client.close();
    return;
  }
}

export default async function handler(req, res) {
  const {username, email, message} = req.body;

  if(req.method==='POST'){
    if(
      !username||
      username.trim() === '' ||
      !email || 
      !email.includes('@') ||
      !message ||
      message.trim()=== ''){
        return res.status(401).json({message:'invalid input'})
      }

      const newMessage = {
        username,
        email,
        message
      }
      
      await postMessageToMongoDb(res,newMessage);
      res.status(201).json({message:'Message Sent Succesfully',newMessage})
      return;
  }

  res.status(411).json({ message: 'this api does not support your current request, please change request method to (POST)' })
}

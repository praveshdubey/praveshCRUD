import User from "../schema/user_schema.js";

// Add User in the database
export const addUser = async(request,response) =>{
  const user = request.body;

  const newUser=new User (user);
  try{
      await newUser.save();
      response.status(201).json(newUser);
  }catch(error){
    response.status(409).json({message:error.message});
  }
}

// get all the user from the Database
export const getUsers= async (request, response)=>{
  try{
    const users = await User.find({});
    response.status(200).json(users);
  }catch(error){
    response.status(404).json({message:error.message});
  }
}

// get single records from the database.
export const getUser= async (request, response)=>{
  try{
    const user = await User.findById({_id: request.params.id});
    response.status(200).json(user);
  }catch(error){
    response.status(404).json({message:error.message});
  
}
}

// edit the records
export const editUser = async(request,res)=>{
  let users = request.body;
  const editUser = new User(users);
  try{
     await User.updateOne({_id:request.params.id},editUser)
     res.status(201).json(editUser)
  }catch(error){
    res.status(409).json({mesaage:error.mesaage});
  }

}

// delete the records by the ID
export const deleteUser = async(req,res)=>{
  let users = req.body;
  const deleteUser = new User(users);
  try{
     await User.deleteOne({_id:req.params.id},deleteUser)
     res.status(201).json(deleteUser)
  }catch(error){
    res.status(409).json({mesaage:error.mesaage});
  }
}
import mongoose, { mongo } from "mongoose" ;

const UserSchema = new mongoose.Schema({

})

const User = mongoose.models.users || mongoose.model('User',UserSchema) ;
export default User ;
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  // _id: {
  //   // type: Schema.Types.Mixed,
  //   type: String,
  //   required: true,
  //   unique: true
  // },

  name: {
    type: String,
    required: true,
    trim: true,
    unique: false
  },

  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  
  password: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }

}, {
  versionKey: false,
  timestamps: true
}
)

const userModel = new model('user', userSchema);
export default userModel;
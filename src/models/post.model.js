import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    // id: {
    //   type: Schema.Types.Mixed,
    //   required: true,
    //   unique: true,
    // },

    user_id: {
      type: Schema.Types.Mixed,
      required: true,
      unique: true,
    },
    
    author: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const PostModel = new model('post', postSchema);

export default PostModel;
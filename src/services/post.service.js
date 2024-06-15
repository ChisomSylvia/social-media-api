import PostModel from "../models/post.model.js";

class PostService {
  // to create a new post
  async createPost (post) {
    const newPost = await PostModel.create(post);
    return newPost;
  }

  // to get all posts
  async getPosts () {
    const posts = await PostModel.find();
    return posts;
  }

// to get a post with it's title
  async getPost (query) {
    const post = await PostModel.findOne(query);
    return post;
  }

// to update a post
  async updatePostById (id, data) {
    const updatedPost = await PostModel.findByIdAndUpdate(id, data, {new: true});
    return updatedPost;
  }

  // to delete a post
  async deletePostById (id) {
    const deletedPost = await PostModel.findByIdAndDelete(id);
    return deletedPost;
  }
  
}

export default new PostService();
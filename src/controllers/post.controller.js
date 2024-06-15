import PostService from "../services/post.service.js";


class PostController {
  // to create a new post
  async createPost(req, res) {
    const postData = req.body;
    const newPost = await PostService.createPost(postData);
    res.status(201).send({
      success: true,
      newPost
    })
  }

  // to get all posts
  async getPosts(req, res) {
    const posts = await PostService.getPosts();
    res.status(200).send({
      success: true,
      posts
    })
  }

  // to get one post with query
  async getPost(req, res) {
    const postQuery = req.query;
    const queriedPost = await PostService.getPost(postQuery);
    res.status(200).send({
      success: true,
      queriedPost
    })
  }

  // to update a post
  async updatePostById(req, res) {
    const postId = req.params.id;
    const data = req.body;
    const updatedPost = await PostService.updatePostById(postId, data);
    res.status(200).send({
      success: true,
      updatedPost
    })
  }

  // to delete a post
  async deletePostById(req, res) {
    const postId = req.params.id;
    const deletedPost = await PostService.deletePostById(postId);
    res.status(200).send({
      success: true,
      deletedPost
    })
  }
}

export default new PostController();
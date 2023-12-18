require 'rails_helper'

RSpec.describe "Posts", type: :request do
    describe "POST /posts" do
      it "creates a new post with valid parameters" do
        post_params = { post: { title: "Test Title", body: "Test Body" } }
  
        expect {
          post posts_path, params: post_params
        }.to change(Post, :count).by(1)
  
        expect(response).to have_http_status(:redirect)
      follow_redirect!
      expect(response).to have_http_status(:success)
      expect(response.body).to include("Post was successfully created.")
    end
  
      it "does not create a new post with invalid parameters" do
        post_params = { post: { title: "", body: "" } }
  
        expect {
          post posts_path, params: post_params
        }.not_to change(Post, :count)
  
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.body).to include("prohibited this post from being saved")
      end
    end
  
    describe "PUT /posts/:id" do
      let!(:post) { Post.create(title: "Existing Title", body: "Existing Body") }
  
      it "updates a post with valid parameters" do
        put post_path(post), params: { post: { title: "Updated Title" } }
  
        post.reload
        expect(post.title).to eq("Updated Title")
        expect(response).to redirect_to(post_path(post))
        follow_redirect!
        expect(response).to have_http_status(:success)
        expect(response.body).to include("Post was successfully updated.")
      end
  
      it "does not update a post with invalid parameters" do
        put post_path(post), params: { post: { title: "" } }
  
        post.reload
        expect(post.title).to eq("Existing Title")
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.body).to include("prohibited this post from being saved")
      end
    end
  
    describe "DELETE /posts/:id" do
      let!(:post) { Post.create(title: "Test Title", body: "Test Body") }
  
      it "destroys a post" do
        expect {
          delete post_path(post)
        }.to change(Post, :count).by(-1)
  
        expect(response).to redirect_to(posts_path)
        follow_redirect!
        expect(response.body).to include("Post was successfully destroyed.")
      end
    end
  end
  
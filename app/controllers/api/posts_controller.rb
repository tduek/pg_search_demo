class Api::PostsController < ApplicationController
  
  def index
    @posts = User.find(params[:user_id]).posts
  end
  
  def show
    @post = Post.find(params[:id])
  end
  
  def create
    @post = current_user.posts.new(post_params)
    
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end
  
  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
  
end

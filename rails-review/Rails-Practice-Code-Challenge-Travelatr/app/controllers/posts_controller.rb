class PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    
    if @post.save
      redirect_to post_path(@post)
    else 
      render :new
    end
  end

  def like
    post = Post.find(params[:id])
    post.increment(:likes)
    post.save
    redirect_to post_path(post)
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :blogger_id, :destination_id)
  end
end
class UsersController < ApplicationController
  def create
    if @user.valid?
      
      redirect_to notes_path
    else
      render 'new'
    end
  end

  def new
    @user = @user.new
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

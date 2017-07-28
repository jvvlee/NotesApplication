class UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to home_path
    else
      render 'new'
    end
  end

  def new
    @user = User.new
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

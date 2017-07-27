class UsersController < ApplicationController
  def create
    @user = @user.new(user_params)

    if @user.save
      login(@user)
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

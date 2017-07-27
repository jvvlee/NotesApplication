class SessionsController < ApplicationController
  def new
  	@session = Session.new
  end

  def create
    user = User.find_by(username: session_params[:username])

    if user && user.login(session_params[:password])
      redirect_to notes_path && return
    else
      render 'new'
    end

  end

  def destroy
  end

  def session_params
    params.require(:session).permit(:username, :password)
  end
end

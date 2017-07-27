class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: session_params[:username])

    if user && user.authenticate(session_params[:password])
      login(user)
      redirect_to notes_path && return
    else
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end

  def session_params
    params.require(:session).permit(:username, :password)
  end
end

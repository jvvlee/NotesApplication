class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def signed_in?
  	if !current_user
  		redirect_to '/login'
  	end
  end

end

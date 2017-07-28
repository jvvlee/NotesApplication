class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include SessionsHelper

  def signed_in?
  	if !helpers.current_user
  		redirect_to '/login'
  	end
  end

end

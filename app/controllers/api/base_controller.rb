class Api::BaseController < ApplicationController 
	protect_from_forgery with: :null_session 

	respond_to :json
	before_action :verify_requested_format!
	before_action :signed_in?

	def signed_in?
		if !current_user
			render json: {unauthorized: true}
			return false
		end
	end 

	protected

	def can_change?(obj)
    allowed_users = obj.writable_users

    if allowed_users.include?(current_user) || obj.owner == current_user
    	return true
    else
    	return false
    end
  end

end
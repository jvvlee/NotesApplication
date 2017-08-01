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
    obj.user_id == current_user.id
  end

end
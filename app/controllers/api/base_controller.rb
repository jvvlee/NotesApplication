class Api::BaseController < ApplicationController 
	respond_to :json

	before_action :authenticate_user

	def signed_in?
		if !current_user
			render json: {unauthorized: true}
			return false
		end
	end 
end
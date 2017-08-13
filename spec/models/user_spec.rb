require 'rails_helper'

RSpec.describe User, :type => :model do
	it "is valid with valid attributes" do
		user = build(:user)
		expect(user).to be_valid
	end

	it "requires a unique username" do
    	user = create(:user)
    	expect(build(:user)).to be_invalid
    	expect(build(:user, username: "username1")).to be_valid
  	end
end
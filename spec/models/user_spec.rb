require 'support/factory_girl'
require 'rails_helper'

RSpec.describe User, :type => :model do
	it "is valid with valid attributes" do
		expect(User.new(username: 'username', password: 'password')).to be_valid
	end

	it "requires a unique username" do
    user = create(:user)
    expect { create(:user) }.to raise_error
  end

	it "turns a password into a password hash" do
    
  end
end
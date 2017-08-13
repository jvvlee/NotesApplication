require 'rails_helper'

RSpec.describe Note, :type => :model do
  before(:each) do
  	@note = build(:note)
  end

  it "is valid with valid attributes" do
  	expect(@note).to be_valid
  end

  it "should have a title and content" do
  	@note.content.should eq("Content")
  	@note.title.should eq("Title")
  end

  it "should belong to a user" do
  	@note.owner.username.should eq("username")
  end
end
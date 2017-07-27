class NotesController < ApplicationController
  def index
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def variables
    @notes = current_user.notes
    #@shared_notes = current_user.
    @users = User.all
  end

  # TODO: A reminder!
  #   respond_to do |format|
  #     format.html {render html}
  #     format.json {render json}
  #   end
  # end
end

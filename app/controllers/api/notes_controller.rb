class Api::NotesController < Api::BaseController
  def index
    respond_with Note.all

    # @notes = current_user.notes
    # @shared_notes = current_user.shared_notes
  end

  def create
    @note = Note.new()

    respond_with @note
  end

  def update
    respond_with @note
  end

  def destroy
    note = Note.find(params[:id])

    if note.destroy
      respond_with params[:id]
    else
      render :json => {error: "true"}
    end
  end

  def note_params
    params.require(:note).permit(:content, :user_id)
  end

  # TODO: A reminder!
  #   respond_to do |format|
  #     format.html {render html}
  #     format.json {render json}
  #   end
  # end
end

class Api::NotesController < Api::BaseController
  def index
    respond_with Note.all

    # @notes = current_user.notes
    # @shared_notes = current_user.shared_notes
  end

  def create
    @note = current_user.notes.create(note_params)
    respond_with :api, @note
  end

  def update
    @note.find(params[:note][:id])
    respond_with :api, @note
  end

  def destroy
    @note = Note.find(params[:id])

    if @note.destroy!
      respond_with @note
    end
  end

  def note_params
    params.require(:note).permit(:content, :title)
  end
end

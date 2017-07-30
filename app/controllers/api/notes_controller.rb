class Api::NotesController < Api::BaseController
  def index
    respond_with({:notes => current_user.notes, :writable => current_user.writable_notes, :readable => current_user.readable_notes})
  end

  def create
    @note = current_user.notes.create(note_params)
    respond_with :api, @note
  end

  def update
    @note = Note.find(params[:id]).update_attributes(note_params)
    respond_with :api, @note
  end

  def destroy
    @note = Note.find(params[:id])

    if @note.destroy!
      respond_with :api, @note
    end
  end

  def note_params
    params.require(:note).permit(:content, :title)
  end
end

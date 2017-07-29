class Api::NotesUsersController < Api::BaseController
  def create
    @note = Note.new()

    respond_with @note
  end

  def update
    #probably to change permission level
  end

  def destroy
    note = Note.find(params[:id])

    if note.destroy
      respond_with params[:id]
    else
      respond_with {error: true}
    end
  end

  def notes_users_params
    params.require(:permission).permit(:note_id, :user_id, :level)
  end

  # TODO: A reminder!
  #   respond_to do |format|
  #     format.html {render html}
  #     format.json {render json}
  #   end
  # end
end

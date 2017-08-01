class Api::NotesUsersController < Api::BaseController
  def index
    @permissions = current_user.given_permissions

    respond_with :api, @permissions
  end

  def create
    @permission = NotesUsers.new(notes_users_params)

    respond_with :api, @permission
  end

  def update
    @permission = NotesUsers.find(params[:id]).update_attributes(notes_users_params)
    respond_with :api, @permission
  end

  def destroy
    @permission = NotesUsers.find(params[:id])

    if @permission.destroy!
      respond_with :api, @permission
    end
  end

  protected

  def notes_users_params
    params.require(:permission).permit(:email, :level, :note_id)
  end

  def 
end

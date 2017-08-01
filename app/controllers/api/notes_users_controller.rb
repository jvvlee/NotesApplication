class Api::NotesUsersController < Api::BaseController
  def index
    @permissions = current_user.given_permissions

    respond_with :api, @permissions
  end

  def create
    user = User.find_by_username(params[:email])

    @permission = NotesUsers.new({user_id: user.id}.merge(notes_users_params))

    respond_with :api, @permission
  end

  def update
    @permission = NotesUsers.find(params[:id])

    if can_change?(@permission) && update_attributes(notes_users_params)
      respond_with :api, @permission
    end
  end

  def destroy
    @permission = NotesUsers.find(params[:id])

    if can_change?(@permission) && @permission.destroy!
      respond_with :api, @permission
    end
  end

  protected

  def notes_users_params
    params.require(:permission).permit(:level, :note_id)
  end
end

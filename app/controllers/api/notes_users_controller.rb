class Api::NotesUsersController < Api::BaseController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def index
    @permissions = current_user.given_permissions

    respond_with :api, @permissions
  end

  def create
    user = User.find_by_username!(params[:email])

    @permission = NotesUsers.new({user_id: user.id}.merge(notes_users_params))
    if @permission.save
      render json: @permission
    else
      render :json => { :errors => "true" }, :status => 422
    end
  end

  def update
    @permission = NotesUsers.find(params[:id])

    if can_change_permission?(@permission) && @permission.update_attributes(notes_users_params)
      render json: @permission
    else
      render :json => { :errors => "true" }, :status => 422
    end
  end

  def destroy
    @permission = NotesUsers.find(params[:id])

    if can_change_permission?(@permission) && @permission.destroy!
      render json: @permission
    else
      render :json => { :errors => "true" }, :status => 422
    end
  end

  def show
    render json: @permission
  end

  def not_found
    render :json => { :errors => "true" }, :status => 422
  end

  protected

  def notes_users_params
    params.require(:permission).permit(:level, :note_id)
  end

  def can_change_permission?(permission)
    !!current_user.given_permissions.find(permission.id)
  end

end

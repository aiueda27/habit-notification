class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @posts = User.all
  end

  def create
    @user = User.find_by(username: params[:username])

    if !!@user && passwords_match?(@user.password, params[:password])
        logger.debug "********* success *******"

        # Generate a token (replace this with your token generation logic)
        token = generate_token(@user)

        session[:user_id] = @user.id
        # redirect_to user_path

        # Respond with the token (or use it as needed)
        render json: { token: token, user_id: @user.id}, status: 200

      else
        logger.debug "********* error *******"
        message = "Make sure your username and password are correct"
        # redirect_to login_path, notice: message
        # notice: message

        render json: {status: 500}
    end
  end


  # Check if the plain password matches the stored password
  def passwords_match?(password, plain_password)
    password == plain_password
    # hashed_password == hash_password(plain_password)
  end

  # Simulating token generation (replace this with your token generation logic)
  def generate_token(user)
    # TODO: This is a dummy token generation, replace it with a secure token generation method
    return SecureRandom.hex(20)
  end

    # private
  def user_params
      params.require(:user).permit(:username, :password)
  end
end
  
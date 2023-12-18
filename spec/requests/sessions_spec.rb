RSpec.describe "Sessions", type: :request do
    describe "POST /login" do
      it "creates a session with valid credentials" do
        user = User.create(username: "test_user", password: "test_password")
  
        post "/login", params: { username: "test_user", password: "test_password" }
  
        expect(response).to have_http_status(:success)
        expect(response.body).to include("token")
        expect(response.body).to include("user_id")
      end
  
      it "does not create a session with invalid credentials" do
        user = User.create(username: "test_user", password: "test_password")
  
        post "/login", params: { username: "invalid_user", password: "invalid_password" }
  
        expect(response).to have_http_status(401)
        expect(response.body).to include("Make sure your username and password are correct")
      end
    end
  end
  
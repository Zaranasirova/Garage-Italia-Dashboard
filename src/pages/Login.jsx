const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <h2>Login Page</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input type="email" name="email" />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input type="password" name="password" />
                <label>Password</label>
              </div>
              <div>
                <button>
                  Login
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

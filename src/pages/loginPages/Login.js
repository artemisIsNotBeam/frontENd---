const Login = () => {
    return (
      <>
        <section class="prompt">
			<h1>nice Company</h1>
			<h2>Sign in</h2>
			<form action="http://localhost:3000/login/password" method="post">

			
				<p>eg user,pwd: alice, letmein</p>
				<section>
					<label for="username">Username</label>
					<input id="username" name="username" type="text" autocomplete="username" required autofocus></input>
				</section>
				<section>
					<label for="current-password">Password</label>
					<input id="current-password" name="password" type="password" autocomplete="current-password" required></input>
				</section>
				<button type="submit">Sign in</button>
			</form>
			
			<p class="help">Don't have an account? <a href="/signup">Sign up</a></p>
		</section>
      </>
    )
  };
  
  export default Login;
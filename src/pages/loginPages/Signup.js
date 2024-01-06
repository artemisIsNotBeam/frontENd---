const Signup = () => {
    return (
      <>
        <section class="prompt">
			<h3>nice Company</h3>
			<h1>Sign up</h1>
			<form action="http://localhost:3000/signup" method="post">
				<section>
					<label for="username">Username</label>
					<input id="username" name="username" type="text" autocomplete="username" required></input>
				</section>
				<section>
					<label for="new-password">Password</label>
					<input id="new-password" name="password" type="password" autocomplete="new-password" required></input>
				</section>
				<button type="submit">Sign up</button>
			</form>
			<hr></hr>
			<p class="help">Already have an account? <a href="/login">Sign in</a></p>
		</section>
      </>
    )
  };
  
  export default Signup;
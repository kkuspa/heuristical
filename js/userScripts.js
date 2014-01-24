function SignUp() {
	var user = new Parse.User();
	var form = document.getElementById("signupForm");

	var firstname = form.elements[0].value;
	var lastname = form.elements[1].value;
	var password = form.elements[3].value;
	var email = form.elements[2].value;
	user.set("username", email);
	user.set("password", password);
	user.set("email", email);
	 
	// other fields can be set just like with Parse.Object
	user.set("firstname", firstname);
	user.set("lastname", lastname);
	user.set("fullname", firstname + " " + lastname);
	 
	user.signUp(null, {
	  success: function(user) {
		// Hooray! Let them use the app now.
		alert("Thank you for signing up. We'll keep you updated!");
	  },
	  error: function(user, error) {
		// Show the error message somewhere and let the user try again.
		alert("Error: " + error.code + " " + error.message);
	  }

	});
}

const form = $("#form-el")[0];
const swapSignInUpBtn = $("#swap-sign-in-up")[0];
const heading = $("#heading")[0];
const formSubmitBtn = $("#form-submit-btn")[0];
const switchNote = $("#switch-note")[0];
const authText = $("#auth-text")[0];
const formContainer = $('#form-container')[0];
const signOutBtn = $('#sign-out-btn')[0];
const errorModal = $('#error-modal');
const verifyEmailBtn = $('#email-verify-btn')[0];
const forgotPassBtn = $('#forgot-pass-btn')[0];
const googleAuthBtn = $('#google-auth')[0];

let submitAction = "sign-up", forceToSignIn = false

const switchSignInSignUp = (swapTo) => {
	if (swapTo === "sign-in") {
		heading.innerText = "Sign In";
		formSubmitBtn.innerText = "Sign In";
		swapSignInUpBtn.innerText = "Sign Up";
		switchNote.innerText = "Don't have an account ?";
		submitAction = "sign-in"
		forgotPassBtn.classList.remove('d-none')
		form['passwordInput'].classList.remove('d-none')
		forceToSignIn = false
		return "sign-up";
	} else {
		heading.innerText = "Sign Up";
		formSubmitBtn.innerText = "Sign Up";
		swapSignInUpBtn.innerText = "Sign In";
		switchNote.innerText = "Already have an account ?";
		submitAction = "sign-up"
		forgotPassBtn.classList.add('d-none')
		form['passwordInput'].classList.remove('d-none')
		forceToSignIn = false
		return "sign-in";
	}
}

const validateForm = (email, pass = {length: 8}) => {
	const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	return pattern.test(email) && pass.length >= 8
}

const updateUiForResetPass = () => {
	heading.innerText = "Reset Password";
	formSubmitBtn.innerText = "Reset";
	swapSignInUpBtn.innerText = "Sign In";
	switchNote.innerText = "Back to";
	submitAction = "reset-pass"
	forgotPassBtn.classList.add('d-none')
	form['passwordInput'].classList.add('d-none')
	forceToSignIn = true
}

swapSignInUpBtn.addEventListener("click", () => {
	let currentData = swapSignInUpBtn.attributes['aria-data'].value;
	currentData = switchSignInSignUp(forceToSignIn ? "sign-in" : currentData);
	swapSignInUpBtn.attributes['aria-data'].value = currentData;
})

form.addEventListener("submit", e => e.preventDefault())

formSubmitBtn.addEventListener("click", (e) => {
	const email = form['emailInput'].value
	const pass = form['passwordInput'].value
	if (submitAction === "sign-up") {
		if (validateForm(email, pass)) {
			signUpUser(email, pass)
		}
	} else if (submitAction === "sign-in") {
		if (validateForm(email, pass)) {
			signInUser(email, pass)
		}
	} else if (submitAction === "reset-pass") {
		if (validateForm(email)) {
			resetPassword(email)
		}
	}
})

signOutBtn.addEventListener("click", () => {
	signOutUser();
})

verifyEmailBtn.addEventListener("click", () => {
	verifyEmail()
})

forgotPassBtn.addEventListener("click", () => {
	updateUiForResetPass();
})

googleAuthBtn.addEventListener("click", () => {
	signInUserWithGoogle();
})
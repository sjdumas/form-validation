const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");
const errorMessage = document.querySelector(".error");

email.addEventListener("input", (event) => {
	if (email.validity.valid) {
		errorMessage.textContent = "";
		errorMessage.className = "error";
	} else {
		showError();
	}
});

country.addEventListener("input", (event) => {
	if (country.validity.valid) {
		errorMessage.textContent = "";
		errorMessage.className = "error";
	} else {
		showError();
	}
});

zip.addEventListener("input", (event) => {
	if (zip.validity.valid) {
		errorMessage.textContent = "";
		errorMessage.className = "error";
	} else {
		showError();
	}
});

password.addEventListener("input", (event) => {
	if (password.validity.valid) {
		errorMessage.textContent = "";
		errorMessage.className = "error";
	} else {
		showError();
	}
});

confirmPassword.addEventListener("input", (event) => {
	if (confirmPassword.validity.valid) {
		errorMessage.textContent = "";
		errorMessage.className = "error";
	} else {
		showError();
	}
});

form.addEventListener("submit", (event) => {
	if (
		!email.validity.valid ||
		!country.validity.valid ||
		!zip.validity.valid ||
		!password.validity.valid ||
		!confirmPassword.validity.valid
	) {
		showError();
		event.preventDefault();
	} else {
        alert("Thanks for submitting the form to nowhere!");
    }
});

const showError = () => {
	if (email.validity.valueMissing) {
		errorMessage.textContent = "Please enter an email address.";
	} else if (email.validity.typeMismatch) {
		errorMessage.textContent =
			"Entered value needs to be an email address.";
	} else if (country.validity.valueMissing) {
		errorMessage.textContent = "Please enter a country.";
	} else if (country.validity.tooShort) {
		errorMessage.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
	} else if (zip.validity.valueMissing) {
		errorMessage.textContent = "Please enter a zip code.";
	} else if (zip.validity.tooShort) {
		errorMessage.textContent = `Zip code should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
	} else if (password.validity.valueMissing) {
		errorMessage.textContent = "Please enter a password.";
	} else if (password.validity.tooShort) {
		errorMessage.textContent = `Passwords should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
	} else if (confirmPassword.validity.valueMissing) {
		errorMessage.textContent = "Please confirm your password.";
	} else if (confirmPassword.validity.tooShort) {
		errorMessage.textContent = `Passwords should be at least ${confirmPassword.minLength} characters; you entered ${confirmPassword.value.length}.`;
	} else if (password.value !== confirmPassword.value) {
		errorMessage.textContent = "Passwords do not match.";
	}
	errorMessage.className = "error active";
};

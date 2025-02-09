const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");

const getErrorElement = (input) => {
	return input.nextElementSibling;
};

email.addEventListener("input", (event) => {
	const errorElement = getErrorElement(email);

	if (email.validity.valid) {
		errorElement.textContent = "";
		errorElement.className = "error";
	} else {
		showError(email, errorElement);
	}
});

country.addEventListener("input", (event) => {
	const errorElement = getErrorElement(country);

	if (country.validity.valid) {
		errorElement.textContent = "";
		errorElement.className = "error";
	} else {
		showError(country, errorElement);
	}
});

zip.addEventListener("input", (event) => {
	const errorElement = getErrorElement(zip);

	if (zip.validity.valid) {
		errorElement.textContent = "";
		errorElement.className = "error";
	} else {
		showError(zip, errorElement);
	}
});

password.addEventListener("input", (event) => {
	const errorElement = getErrorElement(password);

	if (password.validity.valid) {
		errorElement.textContent = "";
		errorElement.className = "error";
	} else {
		showError(password, errorElement);
	}
});

confirmPassword.addEventListener("input", (event) => {
	const errorElement = getErrorElement(confirmPassword);

	if (confirmPassword.validity.valid) {
		errorElement.textContent = "";
		errorElement.className = "error";
	} else {
		showError(confirmPassword, errorElement);
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
		event.preventDefault();

		let inputs = document.querySelectorAll("input");
		inputs.forEach((input) => (input.value = ""));
	}
});

const showError = (input, errorElement) => {
	if (input.validity.valueMissing) {
		errorElement.textContent = `Please enter ${input.name}.`;
	} else if (input.validity.typeMismatch) {
		errorElement.textContent = `The entered value needs to be an ${input.name}.`;
	} else if (input.validity.tooShort) {
		errorElement.textContent = `There should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
	} else if (input.validity.tooLong) {
		errorElement.textContent = `There should be at least ${input.maxLength} characters; you entered ${input.value.length}.`;
	} else if (input.validity.patternMismatch) {
		errorElement.textContent = `The entered value does not match the required zip code length.`;
	}

	if (input.id === "password-confirm" && input.value !== password.value) {
		errorElement.textContent = "Your passwords do not match.";
	}

	errorElement.className = "error active";
};

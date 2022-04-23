const submitBtn = document.getElementById('submitBtn');
const subscribeForm = document.getElementById('subscribe');
const emailEl = document.getElementById('email');

subscribeForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const emailValidation = emailEl.value;

	if (!validateEmail(emailValidation)) {
		subscribeForm.classList.add('error');
	} else {
		subscribeForm.classList.remove('error');
	}
});

submitBtn.addEventListener('click', () => {});

function validateEmail(emailEl) {
	const emailRegex =
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	return emailRegex.test(String(emailEl).toLowerCase());
}

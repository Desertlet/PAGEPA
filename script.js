const lengthRange = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const passwordInput = document.getElementById("password");
const copyButton = document.getElementById("copy");

function generatePassword(length) {
	let password = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/~`";
	for (let i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return password;
}

lengthRange.addEventListener("input", () => {
	lengthValue.textContent = lengthRange.value;
});

copyButton.addEventListener("click", () => {
	passwordInput.select();
	document.execCommand("copy");
	alert("Contraseña copiada al portapapeles");
});

const initialLength = lengthRange.value;
lengthValue.textContent = initialLength;
passwordInput.value = generatePassword(initialLength);

lengthRange.addEventListener("input", () => {
	const length = lengthRange.value;
	lengthValue.textContent = length;
	passwordInput.value = generatePassword(length);
});
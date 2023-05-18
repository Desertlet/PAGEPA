const lengthRange = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const passwordInput = document.getElementById("password");
const copyButton = document.getElementById("copy");
const generateButton = document.getElementById("generate");

// Función para generar una contraseña aleatoria
function generatePassword(length) {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
	let password = "";
	for (let i = 0; i < length; i++) {
		password += charset.charAt(Math.floor(Math.random() * charset.length));
	}
	return password;
}

// Actualizar la longitud de la contraseña y el valor del input al mover el slider
lengthRange.addEventListener("input", () => {
	lengthValue.textContent = lengthRange.value;
	passwordInput.value = generatePassword(lengthRange.value);
});

// Generar una nueva contraseña al hacer clic en el botón "Generar"
generateButton.addEventListener("click", () => {
	passwordInput.value = generatePassword(lengthRange.value);
});

// Copiar la contraseña al portapapeles al hacer clic en el botón "Copiar"
copyButton.addEventListener("click", () => {
	passwordInput.select();
	document.execCommand("copy");
	alert("Contraseña copiada al portapapeles");
});
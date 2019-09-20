function sum(){
	let i = parseInt(document.querySelector("#i").value);
	const n = parseInt(document.querySelector("#to").value);
	let result = 0;
	for (i; i <= n; i++) {
		result += i;
	}
	document.querySelector("#equals").value = result;
}

document.querySelector("#i").addEventListener("change", () => {
	sum();
});

document.querySelector("#to").addEventListener("change", () => {
	sum();
});
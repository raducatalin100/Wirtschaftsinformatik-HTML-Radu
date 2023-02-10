window.onload = () => {
	let button = document.querySelector("#btn-bmi");
	//function to calculate BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
	let height = parseInt(document.querySelector("#height").value);
	let weight = parseInt(document.querySelector("#weight").value);
	let result = document.querySelector("#result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid height!";
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid weight!";
	else {
		let bmi = (weight / ((height * height) / 10000)).toFixed(2);

		if (bmi < 18.6) result.innerHTML = "BMI: " + bmi + " --Under Weight--";
		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML = "BMI: " + bmi + " --Normal--";
		else result.innerHTML = "BMI: " + bmi + " --Over Weight--";
	}
}

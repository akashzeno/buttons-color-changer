let dropdown = document.querySelector(".dropdown");
let buttonsList = document.querySelectorAll(".btn");
let colorList = ["red", "skyblue", "green", "purple"];

function randomSelect() {
	return Math.floor(Math.random() * colorList.length);
}

dropdown.addEventListener("change", () => {
	if (dropdown.value === "random") {
		buttonsList.forEach((button) => {
			button.style.backgroundColor = colorList[randomSelect()];
		});
	} else if (dropdown.value === "reset") {
		buttonsList.forEach((button) => {
			button.style.backgroundColor = null;
		});
	} else {
		buttonsList.forEach((button) => {
			button.style.backgroundColor = dropdown.value;
		});
	}
});

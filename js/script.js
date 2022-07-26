const listNumbers = document.querySelector("ul");
const numbers = document.querySelectorAll(".icon-number");
const buttonSubmit = document.querySelector(".btn-submit");
const containerRating = document.querySelector(".container-rating");
const containerThankYou = document.querySelector(".container-thank-you");

numbers.forEach((number) => {
	number.addEventListener("click", handleRatingClickNumber)
});

buttonSubmit.addEventListener("click", onSubmit);

function handleRatingClickNumber(event) {
	const classNumber = event.target.classList;
	const numberValue = event.target.getAttribute("data-value")
	const ratingResult = document.querySelector(".rating-result");

	numbers.forEach((number) => {
		number.classList.remove("active")
	});

	if (!classNumber.contains("active")) {
		classNumber.add("active")
		buttonSubmit.removeAttribute("disabled")
		ratingResult.innerHTML = numberValue;
	};
};

function onSubmit() {
	containerRating.style.display = "none";
	containerThankYou.style.display = "block";
};
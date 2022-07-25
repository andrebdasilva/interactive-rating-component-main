const listRating = document.querySelector("ul");
const burronSubmit = document.querySelector(".btn-submit");
const containerRating = document.querySelector(".container-rating");
const containerThankYou = document.querySelector(".container-thank-you");



listRating.addEventListener("click", function(event){
	const liText = event.target.textContent;
	event.target.classList.toggle("select")
	const ratingResult = document.querySelector(".rating-result");
	ratingResult.innerHTML = parseInt(liText);	
});

burronSubmit.addEventListener("click", function(){
	containerRating.style.display = "none";
	containerThankYou.style.display = "block";	
});
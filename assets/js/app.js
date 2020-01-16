// https://source.unsplash.com/random
const photos = document.querySelector("#photos-div");
const fetchBtn = document.querySelector("#image-gen-btn");

/* 
	Everytime the user clicks it must fetch new images
*/


fetchBtn.addEventListener('click', () => {
	// alert("Clicked");
	let newDiv = document.createElement("div");
	let img = document.createElement("img");
	fetch("https://source.unsplash.com/random/500x400")
		.then(data => {
			img.src = data.url;
		})
		.catch(err => console.log(err));
	newDiv.appendChild(img);
	photos.appendChild(newDiv);
});


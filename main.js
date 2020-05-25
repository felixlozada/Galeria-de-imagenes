// Filtro galeria

let categorias = document.querySelectorAll('.filter');
let active = document.querySelector('.active');
let trabajos = document.querySelectorAll('.trabajo');

categorias.forEach((categoria)=>{
	categoria.addEventListener('click', ()=>{
		active.classList.remove('active');

		categoria.classList.add('active');

		active = document.querySelector('.active');

		let filter = active.getAttribute('data-nombre');

		console.log(filter);

		for(let i=0; i < trabajos.length; i++){
			if (trabajos[i].getAttribute('data-nombre') == filter) {
				trabajos[i].style.transform = "scale(0)";
				trabajos[i].style.opacity = "0";

				setTimeout(()=>{
					trabajos[i].style.display = "flex";
				}, 500);

				setTimeout(()=>{
					trabajos[i].style.transform = "scale(1)";
					trabajos[i].style.opacity = "1";
				}, 700);
			}else if(filter == 'todos'){
				trabajos[i].style.transform = "scale(0)";
				trabajos[i].style.opacity = "0";

				setTimeout(()=>{
					trabajos[i].style.display = "flex";
				}, 500);

				setTimeout(()=>{
					trabajos[i].style.transform = "scale(1)";
					trabajos[i].style.opacity = "1";
				}, 700);
			}else if(trabajos[i].getAttribute('data-nombre') != filter){
				trabajos[i].style.transform = "scale(0)";
				trabajos[i].style.opacity = "0";

				setTimeout(()=>{
					trabajos[i].style.display = "none";
				}, 500);
			}
		}
	});
});

// Galeria Ligthbox

let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let modalImg = document.querySelector('.modal-img');
let modalText = document.querySelector('.modal-tex');
let images = document.querySelectorAll('.img-trabajo');
let imagesList = document.querySelectorAll('.modal-list img');

images.forEach((image)=>{
	image.addEventListener('click', ()=>{
		modalImg.src = image.src;

		modal.style.display = "flex";
		modal.style.zIndex = "100";

		setTimeout(()=>{
			modal.style.opacity = "1";
		}, 500);
	});
});

close.addEventListener('click', ()=>{
	modal.style.opacity = "0";
	modal.style.zIndex = "100";

	setTimeout(()=>{
		modal.style.display = "none";
	}, 500);
});
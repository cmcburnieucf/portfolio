function loadComponent(id, file) {
    fetch(`https://cmcburnieucf.github.io/portfolio/${file}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading /portfolio/${file}:`, error));
}

function loadSlider() {
	const pageSliderConfigs = {
        '/portfolio/':
	    {
			numItems: 3,
            1:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'},
            2:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'},
            3:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'}
		},
	'/portfolio/index.html':
	    {
			numItems: 3,
            1:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'},
            2:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'},
            3:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'}
		},
        '/portfolio/projects/home.html':
		{
			numItems: 3,
            1:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'},
            2:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'},
            3:{imgSrc:'https://cmcburnieucf.github.io/portfolio/images/tobesoon.png', imgAlt:'Coming Soon'}
		}
	};

	let sliderPart1 = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
		                    <ol class="carousel-indicators">`;
	let sliderPart2 = `</ol>
	                  <div class="carousel-inner">`;
	let sliderPart3 = `</div>
	                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			            <span class="sr-only">Previous</span>
                    </a>
			        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>`;

	const currentPage = window.location.pathname;
	console.log(`For the Slider: ${currentPage}`);
	const config = pageSliderConfigs[currentPage];

	if (config) {
	    
	    
		for (let i = 1; i <= config.numItems; i++) {
			const item = config[i];
			//console.log(`Item ${i}:`, item.imgSrc, item.imgAlt);
			if(i == 1) {
				sliderPart1 += `<li data-target="#carouselExampleIndicators" data-slide-to="${i-1}" class="active"></li>`;
				sliderPart2 += `<div class="carousel-item active"><img class="d-block w-100" src="${item.imgSrc}" alt="${item.imgAlt}"></div>`;
			}
			else {
				sliderPart1 += `<li data-target="#carouselExampleIndicators" data-slide-to="${i-1}"></li>`;
				sliderPart2 += `<div class="carousel-item"><img class="d-block w-100" src="${item.imgSrc}" alt="${item.imgAlt}"></div>`;
			}
		}

		sliderPart1 += sliderPart2;
		sliderPart1 += sliderPart3;

		document.getElementById('slider-container').innerHTML += sliderPart1;
	}
}

// Using DOMContentLoaded instead of window.onload
document.addEventListener('DOMContentLoaded', function() {
    loadComponent("website-navbar", "navfile.html");
    loadSlider();
    // loadComponent("website-footer", "footerfile.html");
});



new fullpage('#fullpage',{

    scrollOverflow: true,
    anchors: ['page__section__top','page__section__who','page__section__characteristics','page__section__advantages','page__section__question','page__section__content__contact'],
    menu: '#myMenu',
    //responsiveWidth: 960,
    //navigation: true,
    
});
fullpage_api.setAllowScrolling(false);
function pageScrollOverflow() {
    const screenWidth = window.screen.width;

    if(screenWidth < 768){

        //fullpage_api.setResponsive(true);

    }
}
pageScrollOverflow();


document.querySelector('.header_burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.header__list').classList.toggle('active');
})


document.addEventListener('DOMContentLoaded', ()=>{
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach((el)=>{
        el.addEventListener('click', (e)=>{

           const self = e.currentTarget;

           const control = self.querySelector('.accordion__control');

           const content = self.querySelector('.accordion__content');

           self.classList.toggle('open');

           if(self.classList.contains('open')){
                control.setAttribute('aria-expanded',true);
                content.setAttribute('aria-hidden',false);
                content.style.maxHeight = content.scrollHeight + "px";

           }else{
            control.setAttribute('aria-expanded',false);
            content.setAttribute('aria-hidden',true);
            content.style.maxHeight = null;
           }

        })
    })
})



/*

const gallery = document.querySelector('.gallery');
const galleryResize = document.querySelector('.gallery__resize');
const galleryBefore = document.querySelector('#before');
const galleryAfter = document.querySelector('#after');


gallery.addEventListener('mousemove',(event) => {
    let x = event.offsetX;
    galleryResize.style.width = x + 'px';
})

gallery.addEventListener('mouseleave',(event) => {
    galleryResize.style.width = 50 + '%';
})*/
/*let wrapper = document.querySelector('.wrapper');
let pageSlider = new Swiper('.page',{
  
    wrapperClass: 'page__wrapper',
    slideClass: 'page_screen',

    direction: 'vertical',

    slidesPerView:1,

    parallax:true,

    keyboard:{
        enabled:true,

        onlyInViewport:true,

        pageUpDown:true,
    },

    mousewheel:{
        sensitivity:1,
        releaseOnEdges: false,
    },

    watchOverflow:true,

    speed:800,
    observer:true,

    observerParents:true,
    observeSlideChildren:true,
    pagination:{
        el:'.page__pagination',
        type:'bullets',
        bulletClass:"page__bullet",
        bulletActiveClass:"page__bullet_active",
        clickable: true,
    },
    scrollbar:{
        el:'.page__scroll',
        dragClass:"page__drag-scroll",
        draggable:true
    },
    init:false,
    
    on:{
        init:function(){
            wrapper.classList.add('_loaded');
            setScrollType();
            
        },
        resize:function(){
            setScrollType();
        }
    },
    
});


function setScrollType(){
    if(wrapper.classList.contains('_free')){
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
        pageSlider.params.parallax = true;
       

    }

    let widthWindow = window.innerWidth;
   
    
    if(widthWindow < 770){
        wrapper.classList.add('_free');
        pageSlider.params.freeMode = true;
        
        pageSlider.params.parallax = false;
    }
    /*for(let index = 0; index < pageSlider.slider.length; index ++){
        const pageSlide = pageSlider.slider[index];
        const pageSlideContent = pageSlide.querySelector('.screen_content');
        if(pageSlideContent){
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if(pageSlideContentHeight < window.innerHeight){
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = true;

                break;
            }
        }
    }*/
//}
//pageSlider.init();








//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_about = new Swiper('.about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


let swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	 
 //slidesPerColumnFill: "row",
 breakpoints: {
	320: {
		
	},
	768: {
		slidesPerView: 1,
	
	
	},
	767: {
		slidesPerView: 1,
		
	},
	320: {
		slidesPerView: 1,
		
		
	},
	1268: {
		
	},
},


  });


  let swiper2 = new Swiper('.slider2', {
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		768: {
			slidesPerView: 3,
			
		
		},
		320: {
			slidesPerView: 1,
		},
		
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  });


// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());
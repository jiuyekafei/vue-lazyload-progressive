import Progressive from './progressive'

const $lazyload = new Set();
const $winHeight = window.innerHeight;

window.addEventListener('scroll', function (e) {
	$lazyload.forEach((fn)=>{
		fn();
	})
}, true);

const checkview = (elm)=>{
	const elmInfo = elm.getBoundingClientRect();

	if((elmInfo.bottom >= 0 && $winHeight >= elmInfo.bottom) || (elmInfo.top >= 0 && $winHeight >= elmInfo.top)){
		const parentElm = closest(elm ,'span.progressive'),
			  datesrc = parentElm.getAttribute('date-src'),
			  images = new Image();

		images.src = datesrc;
		images.classList.add('reveal');
		elm.$loading = true;
		
		images.onload =()=>{
			parentElm.appendChild(images);
			images.addEventListener('animationend', (e)=>{
				parentElm.removeAttribute('loading');
				$lazyload.delete(elm.$listener);
				elm.$listener = null;
				elm.$loading = null;
			});
		}
	}
}

const closest = (el, selector)=>{
	const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	while (el) {
		if (matchesSelector.call(el, selector)) {
			return el;
		} else {
			el = el.parentElement;
		}
	}
	return null;
}

const progressive = {
	install : (Vue ,options)=>{
		Vue.component(Progressive.name ,Progressive);

		Vue.directive('lazyprogressive', {
			inserted(elm, binding){
				const parentElm = closest(elm ,'span.progressive');
				const fn = ()=>{
					!elm.$loading && checkview(elm);
				}
				elm.$listener = fn;
				elm.onload = ()=>{
					checkview(elm);
					$lazyload.add(fn);
				}
			}
		});
	}
};

if(typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(progressive);
}

export default progressive;
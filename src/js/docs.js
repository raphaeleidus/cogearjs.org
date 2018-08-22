import '../fonts/google-fonts-1534515193737.css'
import '../fonts/google-fonts-1534515231222.css'
import '../css/bulma.sass'
import 'github-markdown-css/github-markdown.css'
import '../css/docs.styl'
import 'animate.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import ScrollSpy from './lib/scrollspy'
import AutoSubmenu from './lib/autosubmenu'
import NavButtons from './lib/navbuttons'
import Anchors from './lib/anchors'
import SmoothScroll from 'smooth-scroll'
import './lib/burger.js'
import './lib/version.js'
import fitVids from 'fitvids'
import Turbolinks from 'turbolinks'
// import 'turbolinks-animate';

let init = ()=>{
	
	fitVids()
	hljs.initHighlightingOnLoad()
	document.querySelectorAll("pre code").forEach(block=>{
		hljs.highlightBlock(block)
	})
  new NavButtons()  
  new AutoSubmenu()
  const anchors = new Anchors()
  anchors.init().then(()=>{
    new SmoothScroll('article a[href*="#"]')
  })
	new ScrollSpy({
		selector: "article > h1",
		linkSelector: "aside.menu a[href*='#']",	
		offset: 100,
		throttle: 50
	})
// 	TurbolinksAnimate.init({
// 		element: document.querySelector('main'),
// 		animation: 'slideInUp',
// 		delay: 500
//  })
}

document.addEventListener('DOMContentLoaded',()=>{
	let scripts = document.querySelectorAll('script')
	let styles = document.querySelectorAll('link[rel="stylesheet"]')
	scripts.forEach((script)=>{
		script.dataset.turbolinksTrack = "true"
		script.dataset.turbolinksPermanent = "true"
	})
	styles.forEach((style)=>{
		style.dataset.turbolinksTrack = "true"
		style.dataset.turbolinksPermanent = "true"
	})
})
document.addEventListener('turbolinks:load',init)
window.Turbolinks = Turbolinks
window.Turbolinks.start()


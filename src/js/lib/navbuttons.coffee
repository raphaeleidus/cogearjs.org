import findIndex from 'lodash/findIndex'
export default class Navbuttons
	constructor: (options)->
		defaults =
			selector: "aside.menu"
		@options = if options then Object.assign(defaults,options) else defaults
		@build()
	build: ->
		return if document.getElementById('pagesNav')
		links = document.querySelectorAll(@options.selector + " ul > li > a")
		index = findIndex(links,(link) -> link.classList.contains("is-active"))
		if index > 0
			if index < links.length-1
				next = links[index+1]
				prev = links[index-1]
			else
				next = null
				prev = links[index-1]
		else
			next = links[index+1]
			prev = null
		
		el = document.createElement 'nav'
		el.id = "pagesNav"
		el.classList.add('prevnext')
		if prev
			prevLink = document.createElement 'a'
			prevLink.classList.add('button')
			prevLink.classList.add('is-link')
			prevLink.href = prev.href
			prevLink.dataset.turbolinksAnimateAnimation='fadeInRight'
			prevLink.innerHTML = "<span class=\"icon is-small\"><i class=\"fas fa-arrow-left\"></i></span><span class=\"step\">#{prev.innerText}</span>"
		else
			prevLink = document.createElement 'span'
		if next
			nextLink = document.createElement 'a'
			nextLink.classList.add('button')
			nextLink.classList.add('is-link')
			nextLink.href = next.href
			nextLink.dataset.turbolinksAnimateAnimation='fadeInLeft'
			nextLink.innerHTML = "<span class=\"step\">#{next.innerText}</span><span class=\"icon is-small\"><i class=\"fas fa-arrow-right\"></i></span>"
		else
			nextLink = document.createElement 'span'
		el.appendChild(prevLink)
		el.appendChild(nextLink)
		document.querySelector(".markdown-body").appendChild(el)
		document.addEventListener "keydown", (e) =>
			if e.key == 'ArrowRight' && next
				window.location.href = next.href
				# window.Turbolinks.visit(next.href)
			if e.key == 'ArrowLeft' && prev
				window.location.href = prev.href
				# window.Turbolinks.visit(prev.href)
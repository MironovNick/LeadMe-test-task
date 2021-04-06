window.onload = function(){
	
	let elems = document.getElementsByClassName("wrapper_dropdown");
	for(let i = 0; i < elems.length; i++) {
		let child = elems[i].firstElementChild;
		child.addEventListener("click", dropdownClc);
		if(child.className != 'bell_icon') {
			child.addEventListener("mouseover", onHover, true);
			child.addEventListener("mouseout", outHover, true);
		}
	}
	
	let elem_search = document.getElementById('search_icon1');
	elem_search.addEventListener("click", searchWindowTogle);
	
	elem_search = document.getElementById('search_icon11');
	elem_search.addEventListener("click", searchWindowTogle1);
	
};

document.onmousemove=function(event) {
    var target = event.target; 
    console.log(event.target);
    if (target.className!='wrapper_dropdown' && target.className!='dropdown'
		&& target.className!='ddwn' && target.className!='dropdown4_str'
		&& target.tagName!='INPUT' && target.tagName!='LABEL' && target.tagName!='SPAN'
		&& target.tagName!='A' && target.className!='current_order' 
		&& target.className!='other_order' && target.tagName!='IMG'
		&& target.tagName!='h3' && target.tagName!='h4' && target.tagName!='P'
		&& target.className!='dropdown7_str' && target.className!='search_window'
		&& target.className!='search_pole' && target.className!='search_window_button_bar'
		&& target.className!='search_window_button_bar_str' && target.className!='search_window_str'
		&& target.tagName!='HEADER' && target.className!='dropdown_str' && target.className!='user_dropdown_str'
		&& target.className!='inner_dropdown' && target.className!='dropdown_button'
		&& target.className!='search_window1' && target.className!='search_window_button_bar1'
		&& target.className!='search_window_button_bar_str1' && target.className!='search_window_str1') {
        setDropdownBefore();
    }
}


function dropdownClc(e){
	
	setDropdownBefore();

	let elem = e.target;
	let next_elem = elem.nextElementSibling;
	
	if(elem.className === 'bell_icon'){
	
		next_elem.setAttribute("style", "display: none;");
		next_elem = next_elem.nextElementSibling;
		elem.setAttribute("src", "icons/bell_blue.png");
		
	} else {
		let child_elem = elem.firstElementChild;
		if(child_elem && child_elem.tagName === "IMG")
			child_elem.setAttribute("src", "icons/arrowup.png");
	}

	if(next_elem)
		next_elem.setAttribute("style", "display: block;");
	
}

function onHover(e){
	
	let elem = e.currentTarget;
	
	let child_elem = elem.firstElementChild;
	if(child_elem && child_elem.tagName === "IMG")
		child_elem.setAttribute("src", "icons/arrowdown_blue.png");
	
}

function outHover(e){
	
	let elem = e.currentTarget;
	
	let child_elem = elem.firstElementChild;
	let next_elem = elem.nextElementSibling;
	
	if(next_elem){
		let attr = next_elem.getAttribute("style");//, "display: block;");
		if(child_elem && child_elem.tagName === "IMG") {
			if(attr === "display: block;") {
				child_elem.setAttribute("src", "icons/arrowblackup.png");
			} else 
				child_elem.setAttribute("src", "icons/arrowdown.png");
		}
	}
}

function setDropdownBefore(){
	
	let elems = document.getElementsByClassName('dropdown');
	
	for(let i = 0; i < elems.length; i++){
		elems[i].setAttribute("style", "display: none;");
		let parent = elems[i].previousElementSibling;
		let child_elem = parent.firstElementChild;
		if(child_elem && child_elem.tagName === "IMG")
			child_elem.setAttribute("src", "icons/arrowdown.png");
	}
	
	let elem_window = document.getElementsByClassName('search_window');
	let nav_window = document.getElementsByClassName('navigation_bar');
	let elem_search = document.getElementById('search_icon1');
	
	elem_window[0].setAttribute("style", "visibility: hidden; opacity: 0;");
	nav_window[0].setAttribute("style", "visibility: visible; opacity: 1");
	elem_search.setAttribute("style", "visibility: visible; opacity: 1");
	
	let elem_window1 = document.getElementsByClassName('search_window1');
	let nav_window1 = document.getElementsByClassName('navigation_bar');
	let elem_search1 = document.getElementById('search_icon11');
	
	elem_window1[0].setAttribute("style", "visibility: hidden; opacity: 0;");
	nav_window1[0].setAttribute("style", "visibility: visible; opacity: 1");
	elem_search1.setAttribute("style", "visibility: visible; opacity: 1");
	
}

function searchWindowTogle(e){
	
	e.target.setAttribute("style", "visibility: hidden;");
	
	let elem_window = document.getElementsByClassName('search_window');
	let nav_window = document.getElementsByClassName('navigation_bar');
	
	elem_window[0].setAttribute("style", "visibility: visible;  opacity: 1");
	nav_window[0].setAttribute("style", "visibility: hidden; opacity: 0;");
	
}

function searchWindowTogle1(e){
	
	e.target.setAttribute("style", "visibility: hidden;");
	
	let elem_window = document.getElementsByClassName('search_window1');
	let nav_window = document.getElementsByClassName('navigation_bar');
	
	elem_window[0].setAttribute("style", "visibility: visible;  opacity: 1");
	nav_window[0].setAttribute("style", "visibility: hidden; opacity: 0;");
	
}

function languageCheck(e) {
	let propArr = [{id: "check5", lang: "Ru"}, {id: "check6", lang: "Eng"}, {id: "check7", lang: "Pl"}, {id: "check8", lang: "By"}];
	let id = e.target.id;
	for(let i = 0; i < propArr.length; i++) {
		if(propArr[i].id === id) {
			document.getElementById("lang_name").innerHTML = propArr[i].lang + ' <img class="ddwn" src="icons/arrowdown.png" alt="arrow before">';
		} else
			document.getElementById(propArr[i].id).checked = false;
	}
	//setDropdownBefore();
}

function languageCheck0(e) {
	let propArr = [{id: "check01", lang: "Ru"}, {id: "check02", lang: "Eng"}, {id: "check03", lang: "Pl"}, {id: "check04", lang: "By"}];
	let id = e.target.id;
	for(let i = 0; i < propArr.length; i++) {
		if(propArr[i].id === id) {
			document.getElementById("lang_name0").innerHTML = propArr[i].lang + ' <img class="ddwn" src="icons/arrowdown.png" alt="arrow before">';
		} else
			document.getElementById(propArr[i].id).checked = false;
	}
	//setDropdownBefore();
}

function currencyCheck(e) {
	let propArr = [{id: "check1", curr: "Eur"}, {id: "check2", curr: "Usd"}, {id: "check3", curr: "Zl"}, {id: "check4", curr: "Byn"}];
	let id = e.target.id;
	for(let i = 0; i < propArr.length; i++) {
		if(propArr[i].id === id) {
			document.getElementById("currency_name").innerHTML = propArr[i].curr + ' <img class="ddwn" src="icons/arrowdown.png" alt="arrow before">';
		} else
			document.getElementById(propArr[i].id).checked = false;
	}
	//setDropdownBefore();
}

function buttonEnterClick() {
	let elems = document.getElementsByClassName("tools_bar");
	for(let i = 0; i < elems.length; i++)
		elems[i].setAttribute("style", "display: flex");
	elems = document.getElementsByClassName("tools_bar1");
	for(let i = 0; i < elems.length; i++)
		elems[i].setAttribute("style", "display: none");
}

function buttonExitClick() {
	let elems = document.getElementsByClassName("tools_bar");
	for(let i = 0; i < elems.length; i++)
		elems[i].setAttribute("style", "display: none");
	elems = document.getElementsByClassName("tools_bar1");
	for(let i = 0; i < elems.length; i++)
		elems[i].setAttribute("style", "display: flex");
}

function inner_dropdown2Click(e) {
	let elem = document.getElementById("inner_dropdown2");//e.target.nextElementSibling;
	let style = elem.getAttribute("style");
	if( style === "display: none") {
		elem.setAttribute("style", "display: block");
		document.getElementById("arrow_inner_dropdown2").setAttribute("src", "icons/arrowblackup.png");
	} else	{
		elem.setAttribute("style", "display: none");
		document.getElementById("arrow_inner_dropdown2").setAttribute("src", "icons/arrowdown.png");
	}
}



















function togglemenu(width){
	 document.getElementById('sidebar').style.width =`${width}px`;
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const btn = document.getElementById('scroll-arrow')
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
window.onscroll = () => {
    let scroll = document.getElementById('navbar');
    if (this.scrollY <= 300) {
        scroll.className = "nav-bar";
    } else {
        scroll.className = "navbar";
    }
}

function topFunction() {

	const down = document.getElementById('scroll-arrow')
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	this.style.scroll-behavior; "smooth";
  }
function visit(){
  document.getElementById('sidebar').style.width = 0;
}

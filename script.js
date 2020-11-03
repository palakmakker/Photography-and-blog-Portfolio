const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
	function social1(){
	 window.open("https://www.instagram.com/palakmakkar4936/");
}
function social2(){
	 window.open("https://twitter.com/palakmakkar4936");
}

});

function mysend(){
	window.alert("Data Submitted Successfully.");
}

var app = document.getElementById('app');
var toggle_nav = function(x) {
  nav = document.getElementById("side-nav");
  button = document.getElementById("toggle-nav");
  if(nav.style.width == '40%') {
    $('.menu-items').fadeOut('fast');
    nav.style.width = 0;
    button.classList.toggle('animate');
  }
  else {
    nav.style.width = '40%';
    $('.menu-items').fadeIn();
    button.classList.toggle('animate');
  }
}
var navigate = function(e) {
		var currentAttrValue = $(this).attr('href');		
		// Show/Hide Tabs
		$(currentAttrValue).addClass('active').fadeIn().siblings().fadeOut().removeClass('active');    
		// // Change/remove current tab to active
		$(this).addClass('highlighted').siblings().removeClass('highlighted');		
}
var redirect = function(e) {
	var currentAttrValue = $(this).attr('href');
  $(currentAttrValue).addClass('active').fadeIn().siblings().fadeOut().removeClass('active');
  $('a[href="' + currentAttrValue + '"]').addClass('highlighted').siblings().removeClass('highlighted');  
}
var back = function(a) {
  var target = '#' + a;
  $(target).siblings().hide().removeClass('active')
  $(target).addClass('active').fadeIn();
  $('a[href="' + target + '"]').addClass('highlighted').siblings().removeClass('highlighted');  

}
const links = document.querySelectorAll('.copy-click');
const cls = {
  copied: 'is-copied',
  hover: 'is-hovered'
}
const copyToClipboard = str => {
  const el = document.createElement('input');
  str.dataset.copyString ? el.value = str.dataset.copyString : el.value = str.text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.opacity = 0;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

const clickInteraction = (e) => {
  e.preventDefault();
  copyToClipboard(e.target);
  e.target.classList.add(cls.copied);
  setTimeout(() => e.target.classList.remove(cls.copied), 1000);
  setTimeout(() => e.target.classList.remove(cls.hover), 700);  
}
Array.from(links).forEach(link => {
  link.addEventListener('click', e => clickInteraction(e));
  link.addEventListener('keypress', e => {
    if (e.keyCode === 13) clickInteraction(e);
  });
  link.addEventListener('mouseover', e => e.target.classList.add(cls.hover));
  link.addEventListener('mouseleave', e => {
    if (!e.target.classList.contains(cls.copied)) {
     e.target.classList.remove(cls.hover); 
    }
  });
});

$(document).ready(function() {
  $('#home').siblings().hide();
  $("#learn-more").on('click', redirect);
  $('.menu a').on('click', navigate);
  $(".mobile-nav a").on('click', navigate);
  $('#work_link').on('click', redirect);  
});


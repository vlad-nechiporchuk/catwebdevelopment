	var result= 0;
	var stop=0;




function position(){
                                   
 document.getElementById("preloader_first").style.cssText="left: 100%; \
opacity:0;\
  ";
document.getElementById("hr_preloader").style.cssText="width: 100%; \
opacity:0;\
  "; 
   document.getElementById("preloader_second").style.cssText="right: 100%; \
opacity:0;\
  "; 
document.getElementById("text_preloader").style.cssText="right: 100%; \
  ";};






function slide_menu_open(){


 result=result+1;
  if(result%2==1){


document.getElementById("slide_menu").style.cssText="right : 0; \
  position: fixed; \
  ";
    document.getElementById("toglle_element_0").style.cssText="transform: rotate(-220deg); \
transform-origin: 50% 50% 0; \
margin-top: 10px;\
matgin-bottom:-6px; \
  ";
  document.getElementById("toglle_element_1").style.cssText="opacity: 0; \
 margin-top: 0px;\
  ";
  document.getElementById("toglle_element_2").style.cssText="transform: rotate(220deg); \
 transform-origin: 50% 50% 0;\
 margin-top: -6px;  \
 ";
  document.getElementById("toglle_element_3").style.cssText="display:none; \
  ";
  document.getElementById("toglle_element_4").style.cssText="display: block; \
  ";

  

  stop=0;
click_load_logo();




 
}
  else{
  	stop=1;

    document.getElementById("slide_menu").style.right = "-225px";
       document.getElementById("toglle_element_0").style.cssText="transform: rotate(0deg); \ \
  ";
  document.getElementById("toglle_element_1").style.cssText="opacity: 1; \
display: block;\
  ";
  document.getElementById("toglle_element_2").style.cssText="transform: rotate(0deg); \
 \
 ";
 document.getElementById("toglle_element_3").style.cssText="display: block; \
  ";
  document.getElementById("toglle_element_4").style.cssText="display:none;  \
  ";

  }


}



 
function timer(){
	setTimeout(function run() {
		$(this.document.body.firstChild.childNodes[0]).attr('id', 'active0');
		$(this.document.body.firstChild.childNodes[1]).attr('id', 'active1');
		$(this.document.body.firstChild.childNodes[2]).attr('id', 'active2');
		$(this.document.body.firstChild.childNodes[3]).attr('id', 'active3');
		$(this.document.body.firstChild.childNodes[4]).attr('id', 'active4');
		if(this.document.getElementById("active2").firstChild.classList.contains('active')){
			document.getElementById("first_info_block").style.cssText="margin-left: 7.5%; \
			left:0; \
			position:block;\
			";
			document.getElementById("second_info_block").style.cssText=" margin-right: 7.5%;\
			right: 0;\
			position:block;\
			";

			document.getElementById("slide_menu").style.background="white";
			document.getElementById("toglle_element_0").style.background="black";
			document.getElementById("toglle_element_1").style.background="black";
			document.getElementById("toglle_element_2").style.background="black";
			document.getElementById("toglle_element_3").style.color="black";
			document.getElementById("toglle_element_4").style.color="black";
			document.getElementById("text_logo_big").style.color="black";
			document.getElementById("go_to_slide0").style.color="black";
			document.getElementById("go_to_slide1").style.color="black";
			document.getElementById("go_to_slide2").style.color="black";
			document.getElementById("go_to_slide3").style.color="black";
			document.getElementById("go_to_slide4").style.color="black";
			document.getElementById('slide_menu_bott').style.color="black";
			document.getElementById('slide_menu_bott1').style.color="black";
			document.getElementById('slide_menu_bott2').style.color="black";





			}
		else{
			document.getElementById("first_info_block").style.cssText="left: -510px;\
			position: fixed;\
			\
			";
			document.getElementById("second_info_block").style.cssText="right: -510px;\
			position: fixed;\
			";

			document.getElementById("slide_menu").style.background="black";

			document.getElementById("toglle_element_0").style.background="white";
			document.getElementById("toglle_element_1").style.background="white";
			document.getElementById("toglle_element_2").style.background="white";
			document.getElementById("toglle_element_3").style.color="white";
			document.getElementById("toglle_element_4").style.color="white";
			document.getElementById("text_logo_big").style.color="white";
			document.getElementById("go_to_slide0").style.color="white";
			document.getElementById("go_to_slide1").style.color="white";
			document.getElementById("go_to_slide2").style.color="white";
			document.getElementById("go_to_slide3").style.color="white";
			document.getElementById("go_to_slide4").style.color="white";
			document.getElementById('slide_menu_bott').style.color="white";
			document.getElementById('slide_menu_bott1').style.color="white";
			document.getElementById('slide_menu_bott2').style.color="white";



			}

		setTimeout(timer(), 10);
	}, 10);

}


 /*печатанное лого*/

 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 100) || 111111111111111;
  this.txt = '';
  this.tick();
  this.isDeleting = true;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  
  if(stop==1)return;
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

function click_load_logo() {

  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
  	
  	if(stop==0){
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }

}
  
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { }";
  document.body.appendChild(css);

};


};

//переходы на части страницы

function go_to_slide0(){
	$(this.document.getElementById("active0").firstChild).trigger('click');

}

function go_to_slide1(){
	$(this.document.getElementById("active1").firstChild).trigger('click');

}
function go_to_slide2(){
	$(this.document.getElementById("active2").firstChild).trigger('click');

}
function go_to_slide3(){
	$(this.document.getElementById("active3").firstChild).trigger('click');

}
function go_to_slide4(){
	$(this.document.getElementById("active4").firstChild).trigger('click');

}

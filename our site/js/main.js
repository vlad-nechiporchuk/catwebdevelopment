	var result= 0;

function slide_menu_open(){

 result=result+1;
  if(result%2==1){
document.getElementById("slide_menu").style.cssText="right : 0; \
  position: fixed; \
  ";}
  else{
    document.getElementById("slide_menu").style.right = "-250px";
  }
}


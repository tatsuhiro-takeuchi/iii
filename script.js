

const src = ["fruit2.jpg","fruit3.jpg","showdown1.jpg","fruit1.jpg"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 3){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("sheet").src = src[num];
}
 
setInterval(slideshow_timer, 1000);

function ProfileOpen() {
  var open = document.getElementById('Profile2');
  if(!Profile) return;
  var showBtn = document.getElementById('Profile');

  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage();

$('#Profile').click(
  function(){
    $('#Profile2').fadeIn();
  }
);
var a = document.getElementById('scroll');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 30) {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
  }

a.addEventListener('click',function() {

    document.documentElement.scrollTop = 0;
    console.log(self.pageYOffset);
  
               


})
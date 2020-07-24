var slideIndex = 0;       //ini int
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex +=n); //slideIndex = slideIndex + n;

  //    var a = 1;
  //    var b = a+1;    //output-nya b: 2

  //    var a = 1;
  //    var a = a+1;    //output-nya a: 2

  //    var a = 1;
  //    var b = a+1;
  //    var a = b;    //output-nya a: 2

  // var n = 2;
  // var slideIndex = 1;
  // var slideIndex = slideIndex + n;  //3

}

function currentSlides(n){
  showSlides(slideIndex=n);
}

function showSlides(n) {
  var i;
  //slides akan jadi array yg menampung semua mySlides (div)
  //      let slides = [
  //      mySlides1,mySlides2
  //     ];
  var slides = document.getElementsByClassName("mySlides");
  //  style.length => 2;
  if (n > slides.length-1) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++)  { //i = i + 1;

      //slides[0] adalah mySlides1; //elemen pertama, index = 0
      //slides[1] adalah mySlides2; //elemen kedua, index = 1

      slides[i].style.display = "none"; //nd kelihatan
  }
  slides[slideIndex].style.display= "grid"; //kita pakai grid
}

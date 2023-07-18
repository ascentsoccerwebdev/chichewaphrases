function printName(name) {
    console.log(name);
    }
    
    function changeTitle() {
      var title = document.getElementById('title');
      if(title.style.color== 'black'){
        title.style.color = 'red';
      }else if (title.style.color == 'red') {
        title.style.color = 'yellow';
      } else{
        title.style.color = 'black';
      }
    }
      function searchPhrase(){
        alert('You are searching the phrase: ' +         	document.getElementById('searchString').value);
      }
    function searchPhrase() {   var searchString = document.getElementById('searchString').value;   var phrases = document.getElementsByClassName('container');       for (var i = 0; i < phrases.length; i++) {        var phrase = phrases[i].innerText;        if ( phrase.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ) {            updateResult(phrase)            return true;       }   }}
    
    function updateResult(result) {    document.getElementById('searchResults').innerText = result;}
    
    var index = 0;
    var slides = document.querySelectorAll(".slides");
    var dot = document.querySelectorAll(".dot");
    
    function changeSlide(){
    
      if(index<0){
        index = slides.length-1;
      }
      
      if(index>slides.length-1){
        index = 0;
      }
      
      for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
        dot[i].classList.remove("active");
      }
      
      slides[index].style.display= "block";
      dot[index].classList.add("active");
      
      index++;
      
      setTimeout(changeSlide,2000);
      
    }
    
    changeSlide();
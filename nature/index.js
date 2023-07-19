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
    //   function searchPhrase(){
    //     alert('You are searching the phrase: ' +         	document.getElementById('searchString').value);
    //   }
    function searchPhrase() {   var searchString = document.getElementById('searchString').value;   var phrases = document.getElementsByClassName('container');       for (var i = 0; i < phrases.length; i++) {        var phrase = phrases[i].innerText;        if ( phrase.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ) {            updateResult(phrase)            return true;       }   }}
    
    function updateResult(result) {    document.getElementById('searchResults').innerText = result;}
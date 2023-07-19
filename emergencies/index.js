function printName(name) {
    console.log(name); 
  }
  
  function changeTitle() {
    var title =
  document.getElementById('title'); 
    if(title.style.color== 'yellow'){
      title.style.color='green';
    }else if (title.style.color == 'yellow') {
      title.style.color= 'red';
    } else{
      title.style.color = 'black';
    }
  }
  function searchPhrase() {   
    var searchString = document.getElementById('searchString').value;
    var phrases = document.getElementsByClassName('container');       
    for (var i = 0; i < phrases.length; i++) {        
        var phrase = phrases[i].innerText;        
        if ( phrase.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ) {
            updateResult(phrase);            
            return true;       
        }   
    }
}

function updateResult(result) {    
    document.getElementById('searchResults').innerText = result;
}

var i = 0;
var txt = "Lorem ipsum typing effect!";
var speed = 100;

const textList = [
  'Lorem ipsum typing effect!',
  'test blablabla',
  'rick hunter avocat d\'avenir !'
];

function typeWriter() {
  console.log("typewriter");
  if (i < txt.length) {
    document.getElementById("desc").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriter2() {
  console.log("typewriter");
  console.log(textList);
  var i  = 0;
  var flag = true;

  for (var ii = 0 ; ii  < textList.length; i++ ){

    if (flag) {
      if (i < txt.length) {
        document.getElementById("desc").innerHTML += txt.charAt(i);
        i++;
        if (i == txt.length) {
          flag = false;
        }
        setTimeout(typeWriter, speed);
      }
    } else {

    }
   
  }
 
}

function eraser() {
  console.log("eraser");
  var j = txt.length;
  if (j > txt.length) {
    str = str.slice(0, -1);
    document.getElementById("desc").innerHTML = str;
    j--;
    setTimeout(eraser, speed);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  


  //txt = "test";
  /* document.getElementById("desc").innerHTML += txt.charAt(i); */
});


class Chainable {
  typeWriter(txt) {
    console.log("typewriter");
    if (i < txt.length) {
      document.getElementById("desc").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    return this;
  }
  
  eraser(txt) {
    console.log("eraser");
    var j = txt.length;
    if (j > txt.length) {
      str = str.slice(0, -1);
      document.getElementById("desc").innerHTML = str;
      j--;
      setTimeout(eraser, speed);
    }
  }
}

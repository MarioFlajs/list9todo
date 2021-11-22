const plus = document.getElementById('plus');
const bin = document.getElementById('bin');
const dotDot = document.getElementById('dotDot');
let newTextArr = document.getElementById('newTextAr');

//add text area


document.getElementById("plus").addEventListener("click", function() {
    
    node = document.createElement('textarea') ;
    node.className = "newTextAr"; 
    node.setAttribute("id", "texy")
    
    document.getElementById("textGrid").appendChild(node);
    if(node === node){
      
      node.classList.add('transform')
      
    }
      node = document.createElement('button') ;
      node.className = "yes"; 
     
      document.getElementById("textGrid").appendChild(node);
      node.setAttribute("id", "noo")
      
      document.getElementById("noo").addEventListener("click", function() {
        let destroy = document.getElementsByClassName("transform");
        while (destroy.length) {
          destroy[0].classList.remove("transform");
      }
      
        let destroy2 = document.getElementById("noo");
        destroy2.remove();
    
      });
       
  });

// remove text area


  document.getElementById("bin").addEventListener("click", function() {
    
    node = document.createElement('button') ;
    node.setAttribute("id", "bin2")

    document.getElementById("textGrid").appendChild(node);

    document.getElementById("bin2").addEventListener("click", function() {
      let destroy = document.getElementById("texy");
      destroy.remove();
    
      let destroy2 = document.getElementById("noo");
      destroy2.remove();

      let destroy3 = document.getElementById("bin2");
      destroy3.remove();
  
      
    });
       
  });

// click on text area






  
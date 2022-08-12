function myFunction() {
  var x = document.getElementById("myDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


var i = 0;
var original = document.getElementById('duplicater');

function duplicate() {
  const  numbers = document.querySelector('.number').textContent=`cloneOfPart (${++i})`;
    var clone = original.cloneNode(true); // "deep" clone

    original.parentNode.append(clone);
}


var modal = document.querySelectorAll(".seamless-parent");

        
console.log(modal)

for (let i = 0 ; i < modal.length; i++) {
    console.log(i)
    modal[i].addEventListener('click' , function() {
        let dialogPart = modal[i]
        let removed = document.querySelector('.add-section');
        removed.classList.remove('d-none')

        let addClone = dialogPart.cloneNode(true);
        removed.append(addClone)
      
    })

}
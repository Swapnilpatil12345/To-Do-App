let btn = document.querySelector("Button");
let input = document.querySelector("input");
let ol = document.querySelector("ol");
btn.addEventListener("click", function () {
  let newli = document.createElement("li");
  let delbtn = document.createElement("Button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");
  

  newli.innerText = input.value;
  newli.appendChild(delbtn);
  ol.appendChild(newli);

  input.value = "";
});

ol.addEventListener("click",function(event){
   if( event.target.nodeName=="BUTTON" ){
    event.target.parentElement.remove();
   }
})

// let delbtns = document.querySelectorAll(".delete");
// for(btn of delbtns){
//     btn.addEventListener("click",function(){
//         this.parentElement.remove();
//     })
// }
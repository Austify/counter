let decrease = document.querySelector(".decrease")
let counter =  document.getElementById("value");
//console.log(decrease);

//get the value of the current count
//decrement by 1;
function Decrease(){
    let currentCount =  counter.textContent;
    let UpdatedCount = --currentCount;
    counter.textContent = UpdatedCount;
 
}

decrease.addEventListener('click',function(){Decrease()});

let resetBtn = document.querySelector(".reset");

function reset(){
  //  console.log("reset");
  counter.textContent = 0;
}

resetBtn.addEventListener("click",function(){reset()});

let increaseBtn =  document.querySelector(".increase");

function Increase(){
     
    counter.textContent = ++counter.textContent;

}

increaseBtn.addEventListener("click", function(){ Increase() });
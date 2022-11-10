const scoreEl= document.getElementById("score")
console.log(scoreEl)
const num1=Math.floor(Math.random()*10) 
const num2=Math.floor(Math.random()*10) 
const inputEl= document.getElementById("input")
const formEl= document.getElementById("form")
const questionEl=document.getElementById("question")

const result= num1*num2;

questionEl.innerHTML=`What is ${num1} multiply by ${num2} ?`

let score=JSON.parse(localStorage.getItem("score"))
console.log(score)
if(!score){
    score=0;
}
scoreEl.innerText=`Score is ${score}`

formEl.addEventListener("submit",()=>{
        const userAns=+inputEl.value;
        if(userAns===result){
            score++
            updateLocalstorage()
        }
        else{
            score--
            updateLocalstorage()
        }
})

function updateLocalstorage() {
    localStorage.setItem("score",JSON.stringify(score))
}

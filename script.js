

document.getElementsByClassName("rock")[0].addEventListener("click",()=>{
    ran("rock")
})
document.getElementsByClassName("paper")[0].addEventListener("click",()=>{
    ran("paper")
})
document.getElementsByClassName("scissors")[0].addEventListener("click",()=>{
    ran("scissors")
})


//mode changing

function theme() {
    let modeElement = document.getElementsByClassName("mode")[0]; 
    if (!modeElement) return; // Prevent errors if element is missing

    let mode = modeElement.innerText.trim().toLowerCase(); // Normalize text

    if (mode === "light") {
        document.documentElement.style.setProperty("--white", "black");
        document.documentElement.style.setProperty("--black", "white");
        modeElement.innerText = "dark"; // Update mode text
    } else {
        document.documentElement.style.setProperty("--white", "white");
        document.documentElement.style.setProperty("--black", "black");
        modeElement.innerText = "light"; // Update mode text
    }
}





function ran(hc){
    let cc;
    let num = Math.random()*10;
    if(0<num && num<=3.33){
        cc = "rock"
    }
    else if(3.33<num && num<=6.66){
        cc = "paper"
    }
    else{
        cc = "scissors"   
    }




    if(hc == cc){
        document.getElementsByClassName("select")[0].innerText = "Its a Draw!!"
        document.getElementsByClassName(hc)[0].classList.add("draw");
    }
    if(hc=="scissors" && cc=="paper"){
        let scr = parseInt(document.getElementsByClassName("humscr")[0].innerText)
        scr = scr+1
        document.getElementsByClassName("humscr")[0].innerHTML = scr;
        document.getElementsByClassName("select")[0].innerText = "You Win!!"
        document.getElementsByClassName(hc)[0].classList.add("win");


    }
    if(hc=="paper" && cc=="scissors"){
        let scr = parseInt(document.getElementsByClassName("compscr")[0].innerText)
        scr = scr+1
        document.getElementsByClassName("compscr")[0].innerHTML = scr;
        document.getElementsByClassName("select")[0].innerText = "You lost😢"
        document.getElementsByClassName(hc)[0].classList.add("lost");
    }
    if(hc=="rock" && cc=="paper"){
        let scr = parseInt(document.getElementsByClassName("compscr")[0].innerText)
        scr = scr+1
        document.getElementsByClassName("compscr")[0].innerHTML = scr;
        document.getElementsByClassName("select")[0].innerText = "You lost😢"
        document.getElementsByClassName(hc)[0].classList.add("lost");
    }
    if(hc=="paper" && cc=="rock"){
        let scr = parseInt(document.getElementsByClassName("humscr")[0].innerText)
        scr = scr+1
        document.getElementsByClassName("humscr")[0].innerHTML = scr;
        document.getElementsByClassName("select")[0].innerText = "You Win🥳!!"
        document.getElementsByClassName(hc)[0].classList.add("win");

    }
    if(hc=="scissors" && cc=="rock"){
        let scr = parseInt(document.getElementsByClassName("compscr")[0].innerText)
        scr = scr+1
        document.getElementsByClassName("compscr")[0].innerHTML = scr;
        document.getElementsByClassName("select")[0].innerText = "You lost😢"
        document.getElementsByClassName(hc)[0].classList.add("lost");
    }
    if(hc=="rock" && cc=="scissors"){
        let scr = parseInt(document.getElementsByClassName("humscr")[0].innerText)
        scr = scr+1
        document.getElementsByClassName("humscr")[0].innerHTML = scr;
        document.getElementsByClassName("select")[0].innerText = "You Win!!"
        document.getElementsByClassName(hc)[0].classList.add("win");

    }

    document.getElementsByClassName(cc)[0].classList.add("compselected")

    setTimeout(
        () => {
            document.getElementsByClassName(cc)[0].classList.remove("compselected");
            document.getElementsByClassName(hc)[0].classList.remove("humselected");
            document.getElementsByClassName(hc)[0].classList.remove("win");
            document.getElementsByClassName(hc)[0].classList.remove("lost");
            document.getElementsByClassName(hc)[0].classList.remove("draw");
        } ,2000
    )
    
}  

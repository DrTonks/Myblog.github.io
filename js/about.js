function boxtext(){
    let boxtext=document.getElementsByClassName('boxtext')

    if (window.innerWidth<= 768){
        boxtext[0].innerText=''
        boxtext[1].innerText='NEW!'
        boxtext[2].innerText='NEW!'
        boxtext[3].innerText='NEW!'
    }
    else{
     
    }
}
//因为工程量不大，而且人笨，所以用这种办法，空间换时间，轻喷qwq
window.onload = boxtext;
window.onresize = boxtext;

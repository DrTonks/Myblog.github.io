 //打开手机端导航栏
 function getnav(){
        let sidebar =document.getElementById("sidebar");
        let overlay =document.getElementById("overlay");
        if (sidebar.style.width === "250px"){
            sidebar.style.width = "0";
            overlay.style.display = "none";
        }
        else{
            sidebar.style.width = "250px";
            overlay.style.display = "block";
        }

    }  

 /*
 const Path = window.location.pathname;
 const nav= document.querySelectorAll('.navbar a');
  nav.forEach(link => {
    if(link.getAttribute('href') === Path) {
        link.classList.add('active');  
    }
});
能实现功能，但是比较麻烦，故采用静态active
*/

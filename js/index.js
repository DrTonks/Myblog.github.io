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

 /*// 获取当前页面的 URL 路径
 const currentPath = window.location.pathname;

 const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPath) {
        link.classList.add('active');  
    }
});
能实现功能，但是比较麻烦，故采用静态active
*/

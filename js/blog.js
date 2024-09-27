function title(){
    let title=document.getElementById('title')
    if (window.innerWidth<= 768){
        title.innerText='NEW!'
    }
    else{
        title.innerText='最近文章'
        
    }
}//尝试用js搞定移动端的适配，果然比css隐藏/显示要简单...


window.onload = title;
window.onresize = title;

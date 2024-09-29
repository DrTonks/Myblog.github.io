function title(){
    let title=document.getElementById('title')
    if (window.innerWidth<= 768){
        title.innerText='NEW!'
    }
    else{
        title.innerText='最近文章'
        
    }
}//尝试用js搞定移动端的适配，果然比css隐藏/显示要简单...
//9.28老规矩，笨方法
const links = document.querySelectorAll('.link');
const showplace = document.getElementById('showplace');
const behidden = document.getElementById('hide');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        // event.preventDefault(); //9.28：可略:把链接改成当前页面#
        const file = link.getAttribute('blogfile'); 
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('没加载出来捏');
                }
                return response.text(); 
            })
            .then(html => {
                showplace.innerHTML = html; 
                showplace.style.display="block";
                behidden.style.visibility='hidden';//去掉最新文章以获得全视窗
                behidden.style.height='15px';//仍然保留高度否则第一篇文章会不见
            });
    });
});

window.onload = title;
window.onresize = title;
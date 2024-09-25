   const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', function() {
        let query = searchBar.value.toLowerCase();
        // 在这里实现搜索逻辑
        console.log('Searching for:', query);
    })
    
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
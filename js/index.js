   const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', function() {
        let query = searchBar.value.toLowerCase();
        // 在这里实现搜索逻辑
        console.log('Searching for:', query);
    })
    
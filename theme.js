var preloader = document.getElementById('pre-loader');
    function onloadFunc(){
    preloader.style.display = 'none';
    
}

var themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', function(){
    //set background color white to black
    document.body.style.backgroundColor = '#1d1d1d';
    document.body.style.color = '#ffffff';
})


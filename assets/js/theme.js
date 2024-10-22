const rootHtml = document.documentElement
const toggleTheme = document.getElementById('toggleTheme');

function changeTheme(){
    
        const currentTheme = rootHtml.getAttribute('data-theme');
    
        currentTheme === 'dark' ? rootHtml.setAttribute('data-theme', 'light') : rootHtml.setAttribute('data-theme', 'dark');
        toggleTheme.classList.toggle('bi-moon');
        toggleTheme.classList.toggle('bi-sun');
}

toggleTheme.addEventListener("click", changeTheme);


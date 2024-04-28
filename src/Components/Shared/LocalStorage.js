const theme = localStorage.getItem('theme')
// find theme
if (theme) {
    document.documentElement.setAttribute('data-theme', theme)

}
// change theme
const changeTheme = () => {
    // get the theme from localstorage
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // change theme
    const toggleTheme = currentTheme === 'light' ? 'dark' : 'light';
    // apply
    document.documentElement.setAttribute('data-theme', toggleTheme);
    // set new theme 
    localStorage.setItem('theme', toggleTheme);
}

export default changeTheme
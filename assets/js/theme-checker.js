const theme = localStorage.getItem('theme');
if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
}
else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
}
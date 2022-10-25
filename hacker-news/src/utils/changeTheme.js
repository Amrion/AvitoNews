export const changeTheme = () => {
    const link = document.getElementById("theme-link");
    let currTheme = link.getAttribute("href");

    const lightTheme = "theme/light.css";
    const darkTheme = "theme/dark.css";

    if (currTheme === lightTheme) {
        currTheme = darkTheme
    } else {
        currTheme = lightTheme;
    }

    link.setAttribute("href", currTheme);

    localStorage.clear();
    localStorage.setItem('theme', currTheme);
}
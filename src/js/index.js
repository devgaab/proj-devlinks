function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./src/image/avatar-light.png")
    } else {
        img.setAttribute("src", "./src/image/avatar-dark.png")
    }
}
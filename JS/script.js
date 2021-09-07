var mob_responsive = document.getElementById("mob-responsive")
var icon = document.getElementById("icon")
var close = document.getElementById("close")

icon.addEventListener("click",() => {
    mob_responsive.classList.remove("hide")
    close.classList.remove("hide")
    icon.classList.add("hide")
})

close.addEventListener("click",() => {
    mob_responsive.classList.add("hide")
    close.classList.add("hide")
    icon.classList.remove("hide")
})


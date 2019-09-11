const themeSwitcher =
  "<div class='theme-switcher'>Theme: <button>Light</button></div>"
const body = window.document.body
body.childNodes[0].insertAdjacentHTML("beforebegin", themeSwitcher)

const button = body.querySelector(".theme-switcher button")
button.addEventListener(
  "click",
  () => {
    body.classList.toggle("dark")
    button.innerText = body.classList.contains("dark") ? "Dark" : "Light"
  },
  false
)

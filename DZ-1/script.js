let text = document.getElementsByClassName("SmallText-1")[0]
let textHide = document.getElementsByClassName("SmallText-2")[0]

document.getElementById("textBTN").addEventListener("click", () => {
  if (text.classList.contains("HideText")) {
    text.classList.remove("HideText");
    text.classList.add("ShowText");
    textHide.classList.remove("ShowText");
    textHide.classList.add("HideText");
  } else {
    text.classList.remove("ShowText");
    text.classList.add("HideText");
    textHide.classList.remove("HideText");
    textHide.classList.add("ShowText");
  }
})

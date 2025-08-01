 window.addEventListener("load", () => {
    const entryScreen = document.querySelector(".entry-screen");
    setTimeout(() => {
      entryScreen.style.display = "none";
    }, 5000); // after animation duration (5s)
  });
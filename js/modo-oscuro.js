// Dark and Light Mode on Switch Click
document.addEventListener("DOMContentLoaded", () => {
    const darkSwitch = document.getElementById("switch");
 
    darkSwitch.addEventListener("click", () => {
       document.documentElement.classList.toggle("darkmode");
       document.body.classList.toggle("darkmode");
    });
});
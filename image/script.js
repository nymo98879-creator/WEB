let icon = document.getElementById("icon");
let card_slide = document.getElementById("card_slide");
let close = document.getElementById("close");
let close_card = document.getElementById("close_slide")

icon.addEventListener("click", () => {
  card_slide.style.right= '0px';
  setTimeout(()=>{
    card_slide.style.display = 'block';
    close_card.style.display = "block";
  }, 100)
});
close.addEventListener("click", () => {
  card_slide.style.right= '-700px';
  setTimeout(() => {
    card_slide.style.display ="none";
  }, 300);
  close_card.style.display = "none";
});
close_card.addEventListener("click", ()=>{
  card_slide.style.right ="-700px";
  setTimeout(() => {
    card_slide.style.display = "none";
  }, 300);
  close_card.style.display ="none";
})

// const btn = document.getElementById("btn");
// const topElement = document.getElementById("top");

// btn.addEventListener("click", ()=>{   
//     topElement.scrollIntoView({
//         behavior: "smooth"
//     });
// });

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{   // ✅ Fix typo here
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


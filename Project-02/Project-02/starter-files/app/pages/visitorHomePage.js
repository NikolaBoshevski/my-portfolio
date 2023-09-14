export function animation() {
    const primary = document.querySelector(".primary");
    const secondary = document.querySelector(".secondary");
    const third = document.querySelector(".third");
    const fourth = document.querySelector(".fourth");
    primary.addEventListener("mouseover", () => {
        primary.style.animationPlayState = "paused";
        secondary.style.animationPlayState = "paused";
    });
    primary.addEventListener("mouseout", () => {
        primary.style.animationPlayState = "running";
        secondary.style.animationPlayState = "running";
    });
    third.addEventListener("mouseover", () => {
        third.style.animationPlayState = "paused";
        fourth.style.animationPlayState = "paused";
    });

    third.addEventListener("mouseout", () => {
        third.style.animationPlayState = "running";
        fourth.style.animationPlayState = "running";
    });


}
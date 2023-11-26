//window.alert("Hello User");

function windowCursor(){
    let cursor1 = document.querySelector("div.cursor1");
    let cursor2 = document.querySelector("div.cursor2");

    document.addEventListener("mousemove", e => {
        // cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        cursor1.style.cssText = cursor2.style.cssText = `
        top: ${e.clientY}px;
        left: ${e.clientX}px;    
        `;
    });
};
windowCursor();

// carousel
function certCarousel(){
    let leftBtn = document.querySelector(".left-carousel-btn");
    let rightBtn = document.querySelector(".right-carousel-btn")
    let certTrack = document.querySelector(".cert")
    
    leftBtn.addEventListener("click", (e)=>{
        certTrack.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `;

        // certTrack.style.cssText = `
        // transform: translate()
        // `
        console.log(certTrack);
    })

    rightBtn.addEventListener("click", (e)=>{
        certTrack.style.cssText = `
        transform: translate(-1000px, -50%);
        `;
        // console.log(rightBtn);
    })
};
certCarousel();
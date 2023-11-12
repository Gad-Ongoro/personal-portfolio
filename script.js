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
    
};
//import { increaseDice } from "./dice.js";

function addD2Event(button, badge) {

    button.addEventListener("click", () => {
        increaseDice("D2");
        updateBadgeCount("D2", badge);
    });

}

function addD3Event(button, badge) {

    button.addEventListener("click", () => {
        increaseDice("D3");
        updateBadgeCount("D3", badge);
    });

}

function addSendEvent(form){
    form.addEventListener("submit", () =>{
        replaceDiceSpace()
    });

}

function addTextareaEvent(textarea){
    textarea.addEventListener("keyup", (e) => {
        const d2badge = document.querySelector("#d2-badge");
        const d3badge = document.querySelector("#d3-badge");
        updateBadgeCount("D2", d2badge);
        updateBadgeCount("D3", d3badge);

    });

    textarea.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            replaceDiceSpace();
        }
    });
   
}
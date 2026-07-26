//import { getTextArea } from "./dom.js";

function increaseDice(type) {

const textarea = getTextArea();
    if (!textarea) return;
    let current = textarea.value.trim();

    if (current === "") {
        textarea.value = "1" + type;
    } else {
        const regex = new RegExp("(\\d+)" + type);
        if (regex.test(current)) {
            current = current.replace(regex, (match, num) => {
                return (parseInt(num) + 1) + type;
            });
        } else {
            current += " 1" + type;
        }
        textarea.value = current;
    }
    textarea.dispatchEvent(
        new Event("input", { bubbles: true })
    );

}

function updateBadgeCount(type, badge) {
    const textarea = getTextArea();
    if (!textarea) return;
    let current = textarea.value.trim();
    const match = current.match(new RegExp("(\\d+)" + type + "(?!\\d)"));
    if (match) {
        badge.textContent = match[1];
        badge.style.display = "flex";
    } else {
        badge.textContent = "0";
        badge.style.display = "none";
    }
}

function replaceDiceSpace() {
    const textarea = getTextArea();
    if (!textarea) return;
    let current = textarea.value.trim();

    textarea.value = current.replace(/ (\d+D\d)/gi,"+$1");

    textarea.dispatchEvent(
        new Event("input", { bubbles: true })
    );

    const d2badge = document.querySelector("#d2-badge");
    const d3badge = document.querySelector("#d3-badge");
    d2badge.textContent = "0";
    d2badge.style.display = "none";
    d3badge.textContent = "0";
    d3badge.style.display = "none";

}
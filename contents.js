//import { createDiceButtons } from "./button.js";

setTimeout(() => {
    createDiceButtons();

    const form = getForm();
    addSendEvent(form);

    const sendButton = getSendButton();
    sendButton.style.width = "40px";
    sendButton.style.minWidth = "40px";

    const textarea = getTextArea();
    addTextareaEvent(textarea);

}, 2000);
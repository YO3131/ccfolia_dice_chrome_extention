//import { addD2Event, addD3Event } from "./event.js";

function createDiceButtons() {

    const d4Button = document.querySelector('button[aria-label="D4"]');
    const target = d4Button.parentElement;
    if (!target) return;

    const d2badge = createBadge();
    d2badge.id = "d2-badge";
    const d3badge = createBadge();
    d3badge.id = "d3-badge";

    const d2Button = createButton("images/1d2.png");
    d2Button.id = "d2-button";
    d2Button.appendChild(d2badge);
    const d3Button = createButton("images/1d3.png");
    d3Button.id = "d3-button";
    d3Button.appendChild(d3badge);

    addD2Event(d2Button, d2badge);
    addD3Event(d3Button, d3badge);

    target.prepend(d3Button);
    target.prepend(d2Button);
}

function createButton(imageName) {

    const button = document.createElement("button");
    button.type = "button";

    const img = document.createElement("img");
    img.src = chrome.runtime.getURL(imageName);

    img.style.width = "22px";
    img.style.height = "22px";

    button.appendChild(img);

    button.style.border = "none";
    button.style.background = "transparent";
    button.style.padding = "3px";
    button.style.cursor = "pointer";
    button.style.marginLeft = "4px";
    button.style.position = "relative";

    return button;
}

function createBadge() {
    const badge = document.createElement("span");
    // 配置
    badge.style.position = "absolute";
    badge.style.top = "2px";
    badge.style.right = "0px";
    badge.style.transform = "translate(50%, -50%)";
    badge.style.zIndex = "1";

    // サイズ
    badge.style.width = "19px";
    badge.style.height = "19px";
    //badge.style.minWidth = "20px";
    badge.style.boxSizing = "border-box";

    // 余白
    badge.style.padding = "0 6px";

    // 色
    badge.style.backgroundColor = "rgb(220, 0, 78)";
    badge.style.color = "rgb(255, 255, 255)";

    // 形
    badge.style.borderRadius = "10px";

    // 文字
    badge.style.fontFamily = "Roboto, Helvetica, Arial, sans-serif";
    badge.style.fontSize = "12px";
    badge.style.fontWeight = "500";
    badge.style.lineHeight = "12px";
    badge.style.textAlign = "center";

    // 中央揃え
    badge.style.display = "flex";
    badge.style.alignItems = "center";
    badge.style.justifyContent = "center";

    // クリックを邪魔しない
    badge.style.pointerEvents = "none";

    // 最初は非表示
    badge.style.display = "none";
    return badge;
}
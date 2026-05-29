setTimeout(() => {
  const target = document.querySelectorAll("div.sc-geBDJh.EnvyO")[1];
  //const sendButton = document.querySelectorAll(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textWhite.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButton-root.MuiButton-text.MuiButton-textWhite.MuiButton-sizeSmall.MuiButton-textSizeSmall.css-nlkwmh")[2];

  if (target) {
    const d2dice = document.createElement("button");
    d2dice.type = "button";
    const d3dice = document.createElement("button");
    d3dice.type = "button";
    const img_1d2 = document.createElement("img");
    const img_1d3 = document.createElement("img");
    img_1d2.src = chrome.runtime.getURL("1d2.png");
    img_1d3.src = chrome.runtime.getURL("1d3.png");


    img_1d2.style.width = "20px";
    img_1d2.style.height = "20px";
    img_1d3.style.width = "20px";
    img_1d3.style.height = "20px";



    d2dice.appendChild(img_1d2);
    d2dice.style.border = "none";
    d2dice.style.background = "transparent";
    d2dice.style.padding = "2px";
    d2dice.style.cursor = "pointer";
    d2dice.style.marginRight = "8px";

    d3dice.appendChild(img_1d3);
    d3dice.style.border = "none";
    d3dice.style.background = "transparent";
    d3dice.style.padding = "2px";
    d3dice.style.cursor = "pointer";


    d2dice.addEventListener("click", () => {
        const textd2 = document.querySelector(".MuiInputBase-input.MuiInputBase-inputMultiline.css-o0s11j");
        var current=textd2.value.trim();
        if (current==""){//なにもないとき
            textd2.value = "1D2";
        }else{
            var current=textd2.value.trim();
            var d2Index = current.indexOf("D2")-1;
            if(d2Index==-2){//すでに入力されているものは合ったがd2のコマンドがなかったとき
                current += "+1D2";
                textd2.value = current;
            }else{//すでに入力されているものがあるため、ダイス数を一つ増やす
                var numd2 = parseInt(current[d2Index]);
                current = current.replace( numd2+"D2", (numd2+1)+"D2" );
                textd2.value = current;
            }
        }
        textd2.dispatchEvent(new Event("input", { bubbles: true }));
    });

    d3dice.addEventListener("click", () => {
        const textd3 = document.querySelector(".MuiInputBase-input.MuiInputBase-inputMultiline.css-o0s11j");
        var current=textd3.value.trim();
        if (current==""){
            textd3.value = "1D3";
        }else{
            var current=textd3.value.trim();
            var d3Index = current.indexOf("D3")-1;
            if(d3Index==-2){
                current += "+1D3";
                textd3.value = current;
            }else{
                var numd3 = parseInt(current[d3Index]);
                current = current.replace( numd3+"D3", (numd3+1)+"D3" );
                textd3.value = current;
            }
        }
        textd3.dispatchEvent(new Event("input", { bubbles: true }));
    });

    target.prepend(d3dice);
    target.prepend(d2dice);
    }
}, 2000);

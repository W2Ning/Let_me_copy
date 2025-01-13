//实现移除disabled-copy的功能
function Let_Me_Copy() {
    var divs = document.getElementsByClassName("disabled-copy");

    for(var i=0;i<divs.length;i++){
        divs[i].classList.remove("disabled-copy");
    }

    var divs1 = document.getElementsByClassName("js-disable-copy");
    
    for(var i = 0; i < divs1.length; i++) {
      divs1[i].classList.remove("js-disable-copy");
    }
  }

// 添加监听
let_me_copy.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: Let_Me_Copy,
      // function: addRippleEffect
    });
  });
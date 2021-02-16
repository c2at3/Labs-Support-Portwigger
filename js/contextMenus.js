var contextMenuItemKeepAlive = {
    "id": "keepalive",
    "title": "Duy trì trang này"
}

chrome.contextMenus.create(contextMenuItemKeepAlive);

chrome.contextMenus.onClicked.addListener((clickData) => {
    if (clickData.menuItemId == "keepalive") {
        keepAlive();
    }
})


//Handle
function keepAlive() {
    var str = document.location.href;
    var re = /.*:\/\/.*/i;
    var found = str.match(re);
    if (found) {
        console.log(str);
    } else {
        console.log("aaaaaaaaaaaaaaaaa");
    }
}
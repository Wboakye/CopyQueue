chrome.contextMenus.create({
    title: "Get Text!",
    type: "normal",
    contexts: ["selection"],
    onclick: getClickHandler()
});

// chrome.contextMenus.create({
//     id: "CopyQueue",
//     title: "Copy Queue",
//     contexts: ["all"]
// });

function getClickHandler() {
    return function(info, tab) {
        let selectedText = info.selectionText;
        window.superClipboard.addCopy(selectedText);

        // chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        //     const port = chrome.tabs.connect(tabs[0].id);
        //     port.postMessage({ type: "toPopup" });
        // });
    };
}

//   chrome.contextMenus.create({
//     title: "The second action to click",
//     parentId: "parent",
//     contexts:["selection"],
//     onclick: theSecondFunction
//   });

// chrome.contextMenus.onClicked.addListener(() => {
//     chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//         const port = chrome.tabs.connect(tabs[0].id);
//         let copies = window.superClipboard.getCopies();
//         port.postMessage({ type: "toPopup", data: copies });
//         port.onMessage.addListener(response => {
//             let selectedText = response.message;
//             superClipboard.addCopy(selectedText);
//             let copies = superClipboard._copies;
//             alert(copies[0]);
//             alert(copies.length);
//             alert(copies);
//         });
//     });
// });

class SuperClipboard {
    constructor() {
        this._copies = [];
    }

    getCopies() {
        return this._copies;
    }

    addCopy(copy) {
        this._copies.push(copy);
    }

    removeFirstCopy() {
        this._copies.shift();
        return this._copies;
    }

    removeLastCopy() {
        this._copies.pop();
        return this._copies;
    }

    removeSpecificCopy(i) {
        this._copies.splice(i, 1);
        return this._copies;
    }
}
window.superClipboard = new SuperClipboard();

chrome.runtime.onConnect.addListener(port => {
    port.onMessage.addListener(message => {
        //let selectedText = selection().toString();
        if (message.type == "ToContent") {
            copies = message.data;
            //port.postMessage({ message: msg.data });
        }
    });
});
let copies = [];

function updateData(updatedCopies) {
    copies = updatedCopies;

    if (
        document.readyState === "complete" ||
        document.readyState === "loaded"
    ) {
        updatePage();
    }
}

function updatePage(data) {
    let header = document.getElementById("header");
    header.innerHTML = "Hi";
    // let list = document.querySelector("#copies");
    // list.innerHTML = "";
    // data.map(item => {
    //     let listItem = document.createElement("LI");
    //     listItem.innerText = item;
    //     list.appendChild(listItem);
    // });
}

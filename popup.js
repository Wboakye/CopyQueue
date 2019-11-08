const bg = chrome.extension.getBackgroundPage();

document.addEventListener(
    "DOMContentLoaded",
    () => {
        const header = document.getElementById("header");
        const copyList = bg.superClipboard.getCopies();
        if (copyList.length === 0) {
            header.innerHTML = "Nothing Copied";
        } else {
            updatePage(copyList);
        }
    },
    false
);

function updatePage(data) {
    let list = document.querySelector("#copies");
    list.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let listItem = document.createElement("LI");
        let deleteButton = document.createElement("BUTTON");

        listItem = createListItem(listItem, data, i);

        deleteButton = createDeleteButton(deleteButton, i);

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }
}

function createListItem(listItem, data, i) {
    listItem.classList.add("list-group-item");
    listItem.classList.add("d-flex");
    listItem.classList.add("justify-content-between");
    listItem.classList.add("align-items-center");
    listItem.setAttribute("id", i);
    listItem.innerText = data[i];
    return listItem;
}

function createDeleteButton(deleteButton, i) {
    deleteButton.classList.add("badge");
    deleteButton.classList.add("badge-danger");
    deleteButton.classList.add("badge-pill");
    deleteButton.setAttribute("id", i);
    deleteButton.innerText = "X";
    deleteButton.onclick = function(event) {
        this.parentNode.removeChild(this);
        deleteItem(event);
    };
    return deleteButton;
}

function deleteItem(event) {
    let i = event.target.id;

    updatedList = bg.superClipboard.removeSpecificCopy(i);
    updatePage(updatedList);
}

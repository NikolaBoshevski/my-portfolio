import { items } from "../../Data/data.js";
import { dropDown } from "./artistHomePage.js";
import { getCurrentArtist } from "./landingPage.js";
import { takenSnapshot } from "./artistCaptureImagePage.js";

const isPublishedCheckbox = document.querySelector("#isPublishedCheckbox");
const titleItem = document.querySelector("#title");
const textAreaDescription = document.querySelector("#textAreaDescription");
const itemType = document.querySelector("#type");
const itemPrice = document.querySelector("#price");
const imageURL = document.querySelector("#url");

export function initArtistNewItemPage() {

    const form = document.querySelector("#addEditNewItem");



    form.removeEventListener("submit", onSubmit);

    form.addEventListener("submit", onSubmit);

    // const captureImageIcon = document.querySelector()
    dropDown();
}

function onSubmit(ev) {
    const form = document.querySelector("#addEditNewItem");
    let editingItem;
    ev.preventDefault();

    if (editingItem) {
        const idx = items.indexOf(editingItem);
        items[idx] = {
            id: editingItem.id,
            title: this.value,
            description: this.value,
            type: this.value,
            image: this || this.value,
            price: this.value,
            artist: this,
            dateCreated: editingItem.dateCreated,
            isPublishedCheckbox: this.checked,
            isAuctioning: false,
        };

        editingItem = undefined;
    } else {
        const newItem = {
            id: new Date().valueOf(),
            title: titleItem.value,
            description: textAreaDescription.value,
            type: itemType.value,
            image: takenSnapshot || imageURL.value,
            price: itemPrice.value,
            artist: getCurrentArtist(),
            dateCreated: new Date(),
            isPublished: isPublishedCheckbox.checked,
            isAuctioning: false,
        };
        items.unshift(newItem);
    }
    document.querySelector("#addNewItem-btn").textContent = "Add new item";
    // form.reset();

    window.location.hash = "#artistItemPage";
}

document.querySelector(".snapshot").addEventListener("click", function () {
    window.location.hash = "#artistCaptureImage";
});
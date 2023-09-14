import { items } from "../../Data/data.js";
import { dropDown } from "./artistHomePage.js";
import { getCurrentArtist } from "./landingPage.js";



export function initArtistItemPage() {

  dropDown();
  let selectedArtist;
  selectedArtist = getCurrentArtist();
  const artistNameHeader = document.querySelectorAll(".artistNameHeader")[1];
  artistNameHeader.innerHTML = selectedArtist;
  const artistItemContainer = document.getElementById("artistItemContainer");
  const itemsByArtist = items.filter(item => item.artist === selectedArtist);

  let savedItemsByArtist;
  localStorage.setItem("savedItemsByArtist", savedItemsByArtist);

  itemsByArtist.forEach(({ image, title, description, price, id, dateCreated, isPublished }) => {

    artistItemContainer.innerHTML +=
      `   <div class="artistItemsWrapper my-4 roboto bgc-light" id="${id}">
      <img src="${image}" alt="img-${id}" />
      <div class="container" >
        <div class="row justify-content-between align-items-center">
          <div class="col-5 color-primary-default ml-2 flex-sm-shrink-1">
            <h2 id="itemTitle">${title} </h2>
            <h4 id="itemDate">${dateCreated}</h4>
          </div>
          <div class="col-5">
            <div
              class=" bgc-primary-default color-light w-50 text-center float-right mr-2 rounded roboto" >
              $${price}
            </div>
          </div>
        </div>
        
      </div>
  
      <div class="color-primary-default roboto ">
        <p>${description}</p>
      </div>
      <div class="container">
        <div class="row bgc-primary-default py-3  align-items-center">
          <div class="col-3 ">
            <button  class="sendToAuctionBtn text-white btn text-center">Send to Auction</button>
          </div>
          <div class="col-3">
            <button class="publishBtn text-white btn text-center" data-itemid="${id}" data-published="${isPublished}">${isPublished ? "Unpublish" : "Publish"}</button>
          </div>
          <div class="col-3">
            <button class="removeBtn text-white btn text-center bgc-primary-contrast">Remove</button>
          </div>
          <div class="col-3">
            <button class="editBtn btn text-center bgc-light color-primary-default">Edit</button>
          </div>
        </div>
      </div>
    </div>`;

    let sendToAuctionBtn = artistItemContainer.querySelectorAll(".sendToAuction");
    sendToAuctionBtn.forEach(btn => {
      btn.addEventListener("click", () => {

      })
    })

  });


  const publishBtn = artistItemContainer.querySelectorAll('.publishBtn');
  publishBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      const itemId = btn.dataset.itemid;
      const isPublished = btn.dataset.published === 'true';
      btn.dataset.published = !isPublished;
      btn.innerHTML = !isPublished ? "Unpublish" : "Publish";

    });
  });

  const removeBtn = artistItemContainer.querySelectorAll('.removeBtn');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector("#modalDialog");
      modal.showModal();
      const closeModal = document.querySelector("#closeModal");
      closeModal.addEventListener('click', function () {
        modal.close();
      });
      const confirmBtn = document.querySelector("#confirmBtn");
      function removeObject(id) {
        console.log(id);
        const index = items.findIndex(obj => obj.id === id);
        console.log(index);
        let newList;
        if (index !== -1) {
          delete items[index];
        }
        console.log("new list:", newList);
        console.log("deleted items", items);
        modal.close();
        console.log(items.map(item => item.id));
      }
      // get the id of the item to remove
      const itemId = this.dataset.itemid;
      console.log("id", itemId);
      // attach the removeObject function
      confirmBtn.addEventListener('click', () => removeObject(itemId));
    });
  });

  // let itemDescription = 
  let editBtn = document.querySelectorAll(".editBtn");
  editBtn.forEach(button => {
    button.addEventListener('click', () => {
      location.hash = "#artistNewItemPage";
      itemsByArtist.forEach(item => {
        document.querySelector("#title").value = item.title;
        document.querySelector("#textAreaDescription").value = item.description;
        document.querySelector("#type").value = item.type;
        document.querySelector("#price").value = item.price
        document.querySelector("#url").value = item.image;

        if (item.isPublished) {
          document.querySelector("#isPublished").checked;
        }
        else {
          document.querySelector("#isPublished").checked = false;

        }
      })
    })
  })



}

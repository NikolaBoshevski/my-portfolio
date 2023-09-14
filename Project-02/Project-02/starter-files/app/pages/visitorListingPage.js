import { items } from "../../Data/data.js";


export function initVisitorListingPage() {


  const publishedItems = items.filter(item => item.isPublished);
  const filterArtist = document.querySelector('#filterArtist');
  filterArtist.style.fontSize = '15px';
  // const filterTypeArtist = document.getElementById('filterTypeArtist');
  // const submitButton = document.querySelector(".checkButton");
  // const itemTitle = document.getElementById("itemTitle");
  // const minPrice = document.getElementById("min");
  // const maxPrice = document.getElementById("max");
  // const closeButton = document.getElementById("closeButton");
  let filteredItem = JSON.parse(localStorage.getItem("filteredItem"));


  const queryParams = new URLSearchParams(window.location.search);
  console.log(queryParams);

  debugger
  const titleFilter = queryParams.get('itemTitle');
  const artistFilter = queryParams.get('filterArtist');
  const minPriceFilter = queryParams.get('min');
  const maxPriceFilter = queryParams.get('max');
  const typeFilter = queryParams.get('filterTypeArtist');

  console.log(minPriceFilter);

  let filteredItems = publishedItems.filter(
    (item) =>
      (titleFilter ? item.title.includes(titleFilter) : true) &&
      (artistFilter ? item.artist.toLowerCase().includes(artistFilter.toLowerCase()) : true) &&
      (minPriceFilter ? item.price >= minPriceFilter : true) &&
      (maxPriceFilter ? item.price <= maxPriceFilter : true) &&
      (typeFilter ? item.type === typeFilter : true)
  );


  console.log(queryParams);


  // filter items listata e prazna i zatoa dolu pravam forEach na published items. Iako na debugger mi gi dava vrednostite na sekoj filtered item

  const itemsContainer = document.querySelector("#visitorListingContainer");

  publishedItems.forEach(({ image, title, description, price, id, artist }) => {


    itemsContainer.innerHTML +=


      `<div class="listingWrapper  bgc-light" id="${id}">
        <img src="${image}" alt="img-${id}" />
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-5 color-primary-default ml-2">
              <h2>${artist} </h2>
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
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
      </div>`




  });



}
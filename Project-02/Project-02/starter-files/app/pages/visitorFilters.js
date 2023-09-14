// import { items } from "../../Data/data.js";


// const itemTypes = ['painting', 'sculpture', 'digital', 'custom'];

// export function initVisitorFilter() {
//     const publishedItems = items.filter(item => item.isPublished);
//     const filterArtist = document.querySelector('#filterArtist');
//     filterArtist.style.fontSize = '15px';
//     const filterTypeArtist = document.getElementById('filterTypeArtist');
//     const submitButton = document.querySelector(".checkButton");
//     const itemTitle = document.getElementById("itemTitle");
//     const minPrice = document.getElementById("min");
//     const maxPrice = document.getElementById("max");
//     const chooseOption = document.createElement('option');
//     chooseOption.value = 'default';
//     chooseOption.textContent = 'Choose';
//     filterArtist.appendChild(chooseOption);
//     filterTypeArtist.appendChild(chooseOption);


//     fetch(" https://jsonplaceholder.typicode.com/users"
//     )
//         .then(res => res.json())
//         .then(data => {




//             data.forEach(user => {


//                 filterArtist.innerHTML += `<option value="${user.name}"> ${user.name}</option>`;

//             });


//         });


//     itemTypes.forEach(type => {
//         filterTypeArtist.innerHTML += `<option value="${type}"> ${type}</option>`;
//     });


//     function closeHandler() {
//         location.hash = "#visitorListingPage";
//     }

//     closeButton.addEventListener("click", closeHandler);

//     // submitButton.addEventListener("click", function () {
//     //     localStorage.setItem(
//     //         "filteredItem",
//     //         JSON.stringify({
//     //             title: itemTitle.value,
//     //             filterArtist: filterArtist.value,
//     //             minPrice: minPrice.value,
//     //             maxPrice: maxPrice.value,
//     //             filterTypeArtist: filterTypeArtist.value,
//     //         })

//     //     );
//     //     location.hash = "#visitorListingPage";

//     // });


//     const form = document.querySelector('#filterForm');
//     submitButton.addEventListener('click', (event) => {

//         event.preventDefault(); // prevent the default form submission behavior

//         const formData = new FormData(form);
//         // get the form data
//         const queryParams = new URLSearchParams(formData); // construct the query parameters

//         // construct the URL with the query parameters and redirect to the next page
//         let url;

//         if (queryParams === "") {

//             url = location.hash = "#visitorListingPage";
//         }

//         else {
//             url = `http://127.0.0.1:5501/starter-files/html/?#visitorListingPage${queryParams.toString()}`;
//         }
//         window.location.href = url;
//         console.log(url);
//     });

// };

import { items } from "../../Data/data.js";

const itemTypes = ['painting', 'sculpture', 'digital', 'custom'];

export function initVisitorFilter() {
    const filterArtist = document.querySelector('#filterArtist');
    filterArtist.style.fontSize = '15px';
    const filterTypeArtist = document.getElementById('filterTypeArtist');
    const submitButton = document.querySelector(".checkButton");
    const itemTitle = document.getElementById("itemTitle");
    const minPrice = document.getElementById("min");
    const maxPrice = document.getElementById("max");
    const itemsContainer = document.querySelector("#visitorListingContainer");
    const chooseOption = document.createElement('option');
    chooseOption.value = 'default';
    chooseOption.textContent = 'Choose';
    filterArtist.appendChild(chooseOption);
    filterTypeArtist.appendChild(chooseOption);

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                filterArtist.innerHTML += `<option value="${user.name}"> ${user.name}</option>`;
            });
        });

    itemTypes.forEach(type => {
        filterTypeArtist.innerHTML += `<option value="${type}"> ${type}</option>`;
    });

    function closeHandler() {
        location.hash = "#visitorListingPage";
    }

    closeButton.addEventListener("click", closeHandler);

    const form = document.querySelector('#filterForm');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        // get the form data
        const queryParams = new URLSearchParams(formData);

        const queryParamsString = queryParams.toString();
        const url = `http://127.0.0.1:5501/starter-files/html/${queryParamsString ? `?${queryParamsString}` : ''}#visitorListingPage`;


        debugger;
        window.location.href = url;


    });
};


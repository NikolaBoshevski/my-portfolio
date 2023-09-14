import { initLandingPage } from "./pages/landingPage.js";
import { animation } from "./pages/visitorHomePage.js";
import { initVisitorListingPage } from "./pages/visitorListingPage.js";
import { initVisitorFilter } from "./pages/visitorFilters.js";
import { initArtistHomePage } from "./pages/artistHomePage.js";
import { initArtistItemPage } from "./pages/artistItemPage.js";
import { initArtistNewItemPage } from "./pages/artistNewItem.js";
import { initArtistCaptureImage } from "./pages/artistCaptureImagePage.js";

// routing

// handle routes

function handleRoute() {
    const hashWithQueryParams = location.hash === "" ? "#landingPage" : location.hash;
    const hash = hashWithQueryParams.split("?")[0]; // extract the hash value without the query params

    let allPages = document.querySelectorAll(".page");

    allPages.forEach(page => {
        page.style.display = "none";
    });
    document.querySelector(hash).style.display = "block";
    switch (hash) {
        case "#landingPage":
            initLandingPage();
            break;
        case "#visitorListingPage":
            initVisitorListingPage();
            break;
        case "#visitorFilters":
            initVisitorFilter();
            break;
        case "#artistHomePage":
            initArtistHomePage();
            break;
        case "#artistItemPage":
            initArtistItemPage();
            break;
        case "#artistNewItemPage":
            initArtistNewItemPage();
            break;
        case "#artistCaptureImage":
            initArtistCaptureImage();
            break;
        case "#auctionPage":
            initAuctionPage();
            break;
        default:
            break;
    }

}
animation();



// attach event listeners
window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);


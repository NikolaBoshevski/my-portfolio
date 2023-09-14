import { items } from "../../Data/data.js";
// import { saveCurrentArtist } from "./landingPage.js";
import { getCurrentArtist } from "./landingPage.js";
let myChart = null;



export function initArtistHomePage() {

    console.log("initArtistHomePage initialized");
    let totalItemSold = document.getElementById("totalItemSold");
    const totalIncome = document.getElementById("totalIncome");
    // const auctionItem = document.getElementById("auctionItem");
    const publishedItems = items.filter(item => item.isPublished);
    let selectedArtist;
    selectedArtist = getCurrentArtist();
    const artistNameHeader = document.querySelectorAll(".artistNameHeader")[0];
    artistNameHeader.innerHTML = selectedArtist;
    console.log(selectedArtist);


    const itemsByArtist = publishedItems.filter(item => item.artist === selectedArtist);

    dropDown();

    const soldItems = itemsByArtist.filter(item =>
        Boolean(item.dateSold)
    );
    totalItemSold.innerHTML = (`${soldItems.length}/${itemsByArtist.length}`);
    let sum = 0;

    soldItems.forEach(item => {
        sum += item.priceSold;
    })
    totalIncome.innerHTML = `$ ${sum}`

    const ctx = document.getElementById('myChart');

    if (myChart != null) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: generateLabels(7),
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
        }
    });



    const last7 = document.querySelector("#last7");
    const last14 = document.querySelector("#last14");
    const last30 = document.querySelector("#last30");

    window.addEventListener("load", function () {
        last7.style.backgroundColor = "#a16a5e";
        last14.style.backgroundColor = "#a16a5e";
        last30.style.backgroundColor = "#a16a5e";
    })

    last7.addEventListener("click", () => {
        last7.style.backgroundColor = "#d44c2e";
        last14.style.backgroundColor = "#a16a5e"
        last30.style.backgroundColor = "#a16a5e"


        const labels = generateLabels(7);

        myChart.data.labels = labels;

        const newDate = labels.map(label => {
            let sum = 0;

            soldItems.forEach(item => {
                if (label === formatDate(item.dateSold)) {
                    sum += item.priceSold;
                }
            })
            return sum;
        });

        myChart.data.datasets[0].data = newDate;


        myChart.update();
    });


    last14.addEventListener("click", () => {
        last7.style.backgroundColor = "#a16a5e";
        last14.style.backgroundColor = "#d44c2e";
        last30.style.backgroundColor = "#a16a5e";



        const labels = generateLabels(14);

        myChart.data.labels = labels;

        const newDate = labels.map(label => {
            let sum = 0;
            soldItems.forEach(item => {
                if (label === formatDate(item.dateSold)) {
                    sum += item.priceSold;
                }
            });
            return sum;
        });

        myChart.data.datasets[0].data = newDate;


        myChart.update();
    });


    last30.addEventListener("click", () => {
        last7.style.backgroundColor = "#a16a5e";
        last14.style.backgroundColor = "#a16a5e";
        last30.style.backgroundColor = "#d44c2e";



        const labels = generateLabels(30);

        myChart.data.labels = labels;

        const newDate = labels.map(label => {
            let sum = 0;
            soldItems.forEach(item => {
                if (label === formatDate(item.dateSold)) {
                    sum += item.priceSold;
                }
            });
            return sum;
        });

        myChart.data.datasets[0].data = newDate;


        myChart.update();
    });


};

function generateLabels(daysAgo) {

    const arr = [];

    for (let i = 0; i < daysAgo; i++) {
        const start = new Date();

        const startDate = start.getDate();

        const currentDate = start.setDate(startDate - i);

        const formattedDate = formatDate(currentDate);

        arr.push(formattedDate);

    }

    return arr;
}

function formatDate(date) {

    return new Date(date).toLocaleDateString("en-gb");
}

export function dropDown() {
    const hamburger = document.querySelectorAll(".hamburger");
    const dropdown = document.querySelectorAll(".dropdown");

    hamburger.forEach(button => {
        button.addEventListener("click", function () {
            dropdown.forEach(item => {
                item.style.display = "none";
                item.classList.toggle("d-block");

            });

        });
    });

}


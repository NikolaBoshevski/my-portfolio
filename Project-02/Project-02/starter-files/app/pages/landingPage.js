const artistsSelect = document.querySelector("#artists");
const joinAsArtist = document.querySelector("#joinAsArtist");

export function initLandingPage() {



    artistsSelect.style.fontSize = '15px';

    console.log("landing page initialized");


    joinAsArtist.addEventListener("click", function () {
        let currentArtist = artistsSelect.value;
        return currentArtist;

    })

    const chooseOption = document.createElement('option');
    chooseOption.value = 'default';
    chooseOption.textContent = 'Choose';
    artistsSelect.appendChild(chooseOption);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                const option = document.createElement('option');
                option.value = user.name;
                option.textContent = user.name;
                artistsSelect.appendChild(option);
            });
        });

    hashArtist();
};


export function getCurrentArtist() {
    const storedArtist = localStorage.getItem('currentArtist');
    if (storedArtist) {
        return storedArtist;
    }

    else {
        const artist = artistsSelect.value;
        localStorage.setItem('currentArtist', artist);
        return artist;
    }
}

function hashArtist() {
    if (location.hash === "#landingPage") {
        localStorage.clear();
    }
}

// export function setCurrentArtist(artist) {
//     localStorage.setItem('currentArtist', artist);
// }

function fetchTopAnime() {
    fetch("https://api.jikan.moe/v4/top/anime")
        .then(response => response.json())
        .then(dataResponse => {
            const aniData = dataResponse.data
            for (let animeCard = 0; animeCard < aniData.length; animeCard++) {
                createAnimeCard(aniData[animeCard]);
            }
        })
        .catch(console.error)
}

function createAnimeCard(animeCard) {
    const card = document.createElement("article");
    card.className = "card"
    const title = document.createElement("h3");
    title.textContent = animeCard.title_english;
    const animeImg = document.createElement("img");
    animeImg.className = "ani-card-img";
    animeImg.setAttribute("src", animeCard.images.jpg.image_url);

    card.append(
        title,
        animeImg
    )

    // card.addEventListener("click", (event) => {
    //     event.preventDefault();

    // })

    document.querySelector(".anime-list").append(card);
}

function fetchTopManga() {
    fetch("https://api.jikan.moe/v4/top/manga")
        .then(response => response.json())
        .then(dataResponse => {
            const mangaData = dataResponse.data
            for (let mangaCard = 0; mangaCard < mangaData.length; mangaCard++) {
                createMangaCard(mangaData[mangaCard]);
            }
        })
        .catch(console.error)
}

function createMangaCard(mangaCard) {
    const card = document.createElement("article");
    card.className = "card"
    const title = document.createElement("h3");
    title.textContent = mangaCard.title;
    const mangaImg = document.createElement("img");
    mangaImg.className = "manga-card-img";
    mangaImg.setAttribute("src", mangaCard.images.jpg.image_url);

    card.append(
        title,
        mangaImg
    )

    document.querySelector(".manga-list").append(card);
}

const browser = document.querySelector(".browse-options");
const anime = document.querySelector(".anime");
const manga = document.querySelector(".manga");
browser.addEventListener("change", (event) => {
    event.preventDefault();

    if (browser.value === "anime") {
        fetchTopAnime();
        manga.style.display = "none"
        anime.style.display = "block" // change if you switch in css to grid or flex
    } else if (browser.value === "manga") {
        fetchTopManga();
        manga.style.display = "block" // change if you switch in css to grid or flex
        anime.style.display = "none"
    }
})
fetchTopAnime();
manga.style.display = "none";
anime.style.display = "block";

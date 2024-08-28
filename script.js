document.getElementById('randomAnimeBtn').addEventListener('click', getRandomAnime);
document.getElementById('saveAnimeBtn').addEventListener('click', saveAnime);
document.getElementById('clearPreviousAnimeBtn').addEventListener('click', clearPreviousAnimes);
document.getElementById('clearSavedAnimeBtn').addEventListener('click', clearSavedAnimes);
document.getElementById('toggleNsfwBtn').addEventListener('click', toggleNsfw);

let nsfwEnabled = false;

function getRandomAnime() {
    fetch('https://api.jikan.moe/v4/random/anime')
        .then(response => response.json())
        .then(data => {
            const anime = data.data;
            if (anime.nsfw && !nsfwEnabled) {
                alert('This anime contains NSFW content. You must be an adult to view this.');
            } else {
                displayAnime(anime);
                saveAnimeToLocalStorage(anime);
                updatePreviousAnimeTitles(anime.title);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayAnime(anime) {
    document.getElementById('animeCard').classList.remove('hidden');
    document.getElementById('animeImage').src = anime.images.jpg.large_image_url;
    document.getElementById('animeTitle').innerText = anime.title;
    document.getElementById('animeSynopsis').innerText = anime.synopsis || "No synopsis available.";
    document.getElementById('animeGenre').innerText = anime.genres.map(genre => genre.name).join(', ');
    document.getElementById('animeEpisodes').innerText = anime.episodes || "N/A";
    document.getElementById('animeRating').innerText = anime.score || "N/A";
    document.getElementById('animeStatus').innerText = anime.status;
    document.getElementById('animeType').innerText = anime.type;
}

function saveAnimeToLocalStorage(anime) {
    let animeList = JSON.parse(localStorage.getItem('previousAnimeTitles')) || [];
    animeList.push(anime.title);
    localStorage.setItem('previousAnimeTitles', JSON.stringify(animeList));
    localStorage.setItem('randomAnime', JSON.stringify(anime));
}

function updatePreviousAnimeTitles() {
    const animeList = JSON.parse(localStorage.getItem('previousAnimeTitles')) || [];
    const animeListElement = document.getElementById('animeList');
    animeListElement.innerHTML = ''; // Clear existing list
    animeList.forEach(title => {
        const li = document.createElement('li');
        li.innerText = title;
        animeListElement.appendChild(li);
    });
}

function saveAnime() {
    const savedAnime = JSON.parse(localStorage.getItem('randomAnime'));
    let savedAnimeList = JSON.parse(localStorage.getItem('savedAnimeTitles')) || [];
    
    // Cek duplikasi
    if (savedAnime && !savedAnimeList.includes(savedAnime.title)) {
        savedAnimeList.push(savedAnime.title);
        localStorage.setItem('savedAnimeTitles', JSON.stringify(savedAnimeList));
        updateSavedAnimeTitles();
    } else {
        alert('This anime is already saved.');
    }
}

function updateSavedAnimeTitles() {
    const savedAnimeList = JSON.parse(localStorage.getItem('savedAnimeTitles')) || [];
    const savedAnimeListElement = document.getElementById('savedAnimeList');
    savedAnimeListElement.innerHTML = ''; // Clear existing list
    savedAnimeList.forEach(title => {
        const li = document.createElement('li');
        li.innerText = title;
        savedAnimeListElement.appendChild(li);
    });
}

function clearPreviousAnimes() {
    localStorage.removeItem('previousAnimeTitles');
    document.getElementById('animeList').innerHTML = ''; // Clear the list in UI
}

function clearSavedAnimes() {
    localStorage.removeItem('savedAnimeTitles');
    document.getElementById('savedAnimeList').innerHTML = ''; // Clear the list in UI
}

function toggleNsfw() {
    nsfwEnabled = !nsfwEnabled;
    const nsfwButton = document.getElementById('toggleNsfwBtn');
    if (nsfwEnabled) {
        nsfwButton.classList.add('bg-red-600');
        nsfwButton.classList.remove('bg-gray-800');
        nsfwButton.innerText = 'NSFW Enabled';
        alert('NSFW content is now enabled. You must be of legal age to view this content.');
    } else {
        nsfwButton.classList.remove('bg-red-600');
        nsfwButton.classList.add('bg-gray-800');
        nsfwButton.innerText = 'Toggle NSFW';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedAnime = JSON.parse(localStorage.getItem('randomAnime'));
    if (savedAnime) {
        displayAnime(savedAnime);
    }
    updatePreviousAnimeTitles();
    updateSavedAnimeTitles();
});

function _0x51e4(){const _0x4f8aaa=['addEventListener','toggleNsfwBtn','hidden','372318LlYFzv','21QqaAHi','click','405546GqdgXV','toLowerCase','406744hAYrUv','258459AJZAKD','slice','9NvLXXV','30376hKRgkg','1360260Iladvx','classList','remove','2aWbRSu','keydown','key','93370MXhFVR'];_0x51e4=function(){return _0x4f8aaa;};return _0x51e4();}function _0x4603(_0x2dd63f,_0xa18a){const _0x51e46d=_0x51e4();return _0x4603=function(_0x460344,_0x120cbb){_0x460344=_0x460344-0x173;let _0x2e9e0c=_0x51e46d[_0x460344];return _0x2e9e0c;},_0x4603(_0x2dd63f,_0xa18a);}const _0x3bdd63=_0x4603;(function(_0x5725d2,_0x3db543){const _0x26fc20=_0x4603,_0x31a015=_0x5725d2();while(!![]){try{const _0x52dbac=parseInt(_0x26fc20(0x176))/0x1*(parseInt(_0x26fc20(0x17d))/0x2)+parseInt(_0x26fc20(0x184))/0x3+parseInt(_0x26fc20(0x175))/0x4+-parseInt(_0x26fc20(0x180))/0x5+parseInt(_0x26fc20(0x173))/0x6*(-parseInt(_0x26fc20(0x185))/0x7)+-parseInt(_0x26fc20(0x179))/0x8*(-parseInt(_0x26fc20(0x178))/0x9)+-parseInt(_0x26fc20(0x17a))/0xa;if(_0x52dbac===_0x3db543)break;else _0x31a015['push'](_0x31a015['shift']());}catch(_0x44e870){_0x31a015['push'](_0x31a015['shift']());}}}(_0x51e4,0x1fe0f));const toggleNsfwBtn=document['getElementById'](_0x3bdd63(0x182));let inputSequence='',clickCount=0x0;document[_0x3bdd63(0x181)](_0x3bdd63(0x17e),function(_0x323c4a){const _0x383550=_0x3bdd63;inputSequence+=_0x323c4a[_0x383550(0x17f)][_0x383550(0x174)](),inputSequence[_0x383550(0x177)](-0x6)==='nsfwon'&&toggleNsfwBtn[_0x383550(0x17b)][_0x383550(0x17c)]('hidden');});const h1Element=document['querySelector']('h1');h1Element[_0x3bdd63(0x181)](_0x3bdd63(0x186),function(){const _0x13cf55=_0x3bdd63;clickCount+=0x1,clickCount===0xa&&toggleNsfwBtn[_0x13cf55(0x17b)][_0x13cf55(0x17c)](_0x13cf55(0x183));});
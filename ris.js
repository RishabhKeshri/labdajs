const videoGallery = document.querySelector('.video-grid');
const categoryTitle = document.getElementById('category-title');

const videoData = {
    Tamil: [
        { title: "Tamil Movie 1", thumbnail: "thumbnail1.jpg" },
        { title: "Tamil Movie 2", thumbnail: "thumbnail2.jpg" },
        { title: "Tamil TV Show 1", thumbnail: "thumbnail3.jpg" },
        { title: "Tamil Movie 3", thumbnail: "thumbnail4.jpg" },
        { title: "Tamil Trending Video", thumbnail: "thumbnail5.jpg" }
    ],
    Hindi: [
        { title: "Hindi Movie 1", thumbnail: "thumbnail1.jpg" },
        { title: "Hindi Movie 2", thumbnail: "thumbnail2.jpg" },
        { title: "Hindi TV Show 1", thumbnail: "thumbnail3.jpg" },
        { title: "Hindi Movie 3", thumbnail: "thumbnail4.jpg" },
        { title: "Hindi Trending Video", thumbnail: "thumbnail5.jpg" }
    ],
};

document.querySelectorAll('.language-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedLanguage = event.target.dataset.lang;
        categoryTitle.textContent = `${selectedLanguage} Videos`;

        displayVideos(selectedLanguage);
    });
});

function displayVideos(language) {
    videoGallery.innerHTML = '';

    videoData[language].forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');

        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-info">
                <h3>${video.title}</h3>
                <button onclick="playNow()">Play Now</button>
                <button onclick="shortlist()">Shortlist</button>
                <button onclick="watchLater()">Watch Later</button>
            </div>
        `;

        videoGallery.appendChild(videoCard);
    });
}

function playNow() {
    alert("Playing video...");
}

function shortlist() {
    alert("Added to shortlist!");
}

function watchLater() {
    alert("Added to watch later!");
}

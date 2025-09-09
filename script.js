document.addEventListener("DOMContentLoaded", function() {

    // ===== 背景圖設定 =====
    const images = [
        "images/bg1.png",
        "images/bg2.png",
        "images/bg3.png",
        "images/bg4.png",
        "images/bg5.png",
        "images/bg6.png"
    ];
    const magicBtn = document.getElementById("magicBtn");

    // 預設背景圖（第一張）
    document.body.style.backgroundImage = `url(${images[0]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

    // 按鈕換背景功能
    if(magicBtn) {
        magicBtn.addEventListener("click", function() {
            const img = images[Math.floor(Math.random() * images.length)];
            document.body.style.backgroundImage = `url(${img})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";
        });
    }

    // ===== 上方導覽列載入 iframe =====
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const url = this.getAttribute("href");
            document.getElementById("content-frame").src = url;
        });
    });

    // ===== 底部導覽列載入 iframe =====
    document.querySelectorAll(".footer-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const url = this.getAttribute("href");
            document.getElementById("content-frame").src = url;
        });
    });

    // ===== 音樂播放器 =====
    const songs = [
        "music/月下獨酌.mp3",
        "music/紙鳶寄夢.mp3",
        "music/雨後幽香.mp3",
        "music/夢的方向.mp3"
    ];
    const titles = ["月下獨酌", "紙鳶寄夢", "雨後幽香", "夢的方向"];
    let currentIndex = 0;
    let isPlaying = false;

    const audio = new Audio(songs[currentIndex]);
    const playBtn = document.getElementById("play");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const titleEl = document.getElementById("current-song");

    function playSong() {
        audio.play();
        isPlaying = true;
        playBtn.textContent = "💤";
    }
    function pauseSong() {
        audio.pause();
        isPlaying = false;
        playBtn.textContent = "💖";
    }

    playBtn.addEventListener("click", () => {
        isPlaying ? pauseSong() : playSong();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + songs.length) % songs.length;
        audio.src = songs[currentIndex];
        titleEl.textContent = titles[currentIndex];
        playSong();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % songs.length;
        audio.src = songs[currentIndex];
        titleEl.textContent = titles[currentIndex];
        playSong();
    });

});

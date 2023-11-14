let currentVideo = document.getElementById('currentVideo');
let skipButton = document.getElementById('skipButton');

currentVideo.addEventListener('ended', moveToNextVideo);
skipButton.addEventListener('click', moveToNextVideo);

function moveToNextVideo() {
    // ここで次の動画のURLを設定します。
    let nextVideoPath = 'mov/RPReplay_Final1698329566.mp4';
    currentVideo.src = nextVideoPath;
    currentVideo.play();
}

document.addEventListener('DOMContentLoaded', () => {
    let videos = document.querySelectorAll('.circle-video');

    videos.forEach((video) => {
        video.addEventListener('ended', rotateCircles);
    });

    // スキップボタンにも同じ動作を追加する場合
    let skipButton = document.getElementById('skipButton');
    if(skipButton) {
        skipButton.addEventListener('click', rotateCircles);
    }
});

function rotateCircles() {
    let container = document.querySelector('.move_movie');
    container.classList.add('rotate');

    container.addEventListener('animationend', () => {
        container.classList.remove('rotate');
        // ここで動画のソースや他のプロパティを変更することができます
    });
}

function rotateCircles() {
    let containers = document.querySelectorAll('.sub_circle-container-most-left, .sub_circle-container-left, .circle-container, .sub_circle-container-right, .sub_circle-container-most-right');

    let firstChild = containers[0].innerHTML;

    // 円の内容を1つずらす
    for (let i = 0; i < containers.length - 1; i++) {
        containers[i].innerHTML = containers[i + 1].innerHTML;
    }

    containers[containers.length - 1].innerHTML = firstChild;

    // 再生する動画を最初に戻す（オプション）
    let centralVideo = document.querySelector('.circle-container .circle-video');
    centralVideo.currentTime = 0;
    centralVideo.play();
}




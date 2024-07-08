document.addEventListener('DOMContentLoaded', () => {
    const door = document.getElementById('door');
    const key = document.getElementById('key');
    const message = document.getElementById('message');
    let hasKey = false;

    key.addEventListener('click', () => {
        hasKey = true;
        key.style.display = 'none';
        message.textContent = 'You found the key!';
    });

    door.addEventListener('click', () => {
        if (hasKey) {
            door.src = 'images/door_open.png'; // 이 파일도 images 폴더에 있어야 합니다.
            message.textContent = 'You escaped!';
        } else {
            message.textContent = 'The door is locked. Find the key!';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const rooms = document.querySelectorAll('.room');
    const message = document.getElementById('message');
    let currentRoom = 0;
    let hasLightOn1 = false;
    let hasLightOn4 = false;
    let correctOrder = '1234';

    function showRoom(index) {
        rooms.forEach((room, i) => {
            room.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function resetGame() {
        currentRoom = 0;
        showRoom(currentRoom);
        message.textContent = '';
    }

    function openDoor(doorElement, callback) {
        doorElement.classList.add('opened');
        setTimeout(() => {
            callback();
        }, 1000);
    }

    document.getElementById('light-switch1').addEventListener('click', () => {
        hasLightOn1 = true;
        document.getElementById('light-switch1').src = 'images/light_on.png';
        message.textContent = '전등이 켜졌습니다. 이제 문을 클릭하세요.';
    });

    document.getElementById('door1').addEventListener('click', () => {
        if (hasLightOn1) {
            openDoor(document.getElementById('door1'), () => {
                currentRoom++;
                showRoom(currentRoom);
            });
        } else {
            message.textContent = '먼저 전등을 켜야 합니다.';
        }
    });

    document.getElementById('door2').addEventListener('click', () => {
        const codeInput = document.getElementById('code-input').value;
        if (codeInput === '1234') {
            openDoor(document.getElementById('door2'), () => {
                currentRoom++;
                showRoom(currentRoom);
            });
        } else {
            message.textContent = '잘못된 코드입니다. 다시 시도하세요.';
        }
    });

    document.getElementById('door3').addEventListener('click', () => {
        const objects = Array.from(document.querySelectorAll('.movable'));
        const order = objects.map(obj => obj.dataset.order).join('');
        if (order === correctOrder) {
            openDoor(document.getElementById('door3'), () => {
                currentRoom++;
                showRoom(currentRoom);
            });
        } else {
            message.textContent = '물체의 순서가 잘못되었습니다. 다시 시도하세요.';
        }
    });

    document.getElementById('light-switch4').addEventListener('click', () => {
        hasLightOn4 = true;
        document.getElementById('light-switch4').src = 'images/light_on.png';
        message.textContent = '전등이 켜졌습니다. 이제 문을 클릭하세요.';
    });

    document.getElementById('door4').addEventListener('click', () => {
        if (hasLightOn4) {
            openDoor(document.getElementById('door4'), () => {
                currentRoom++;
                showRoom(currentRoom);
            });
        } else {
            message.textContent = '먼저 전등을 켜야 합니다.';
        }
    });

    // WebCam part for Room 5
    const webcam = document.getElementById('webcam');
    const constraints = { video: true };

    async function initWebcam() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            webcam.srcObject = stream;
        } catch (err) {
            console.error('Error accessing webcam: ', err);
        }
    }

    const hands = new Hands({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
    });

    hands.setOptions({
        maxNumHands: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    hands.onResults(results => {
        if (results.multiHandLandmarks.length > 0) {
            openDoor(document.getElementById('door5'), () => {
                currentRoom++;
                showRoom(currentRoom);
            });
        }
    });

    const camera = new Camera(webcam, {
        onFrame: async () => {
            await hands.send({ image: webcam });
        },
        width: 640,
        height: 480
    });
    camera.start();

    showRoom(currentRoom);
    initWebcam();
});

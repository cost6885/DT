document.addEventListener('DOMContentLoaded', () => {
    const rooms = document.querySelectorAll('.room');
    const message = document.getElementById('message');
    let currentRoom = 0;

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

    document.getElementById('light-switch1').addEventListener('click', () => {
        message.textContent = 'The light is on. Now click the door to open it.';
    });

    document.getElementById('door1').addEventListener('click', () => {
        if (message.textContent === 'The light is on. Now click the door to open it.') {
            currentRoom++;
            showRoom(currentRoom);
        } else {
            message.textContent = 'You need to turn on the light first.';
        }
    });

    document.getElementById('door2').addEventListener('click', () => {
        const codeInput = document.getElementById('code-input').value;
        if (codeInput === '1234') {
            currentRoom++;
            showRoom(currentRoom);
        } else {
            message.textContent = 'Wrong code. Try again.';
        }
    });

    document.getElementById('door3').addEventListener('click', () => {
        const objects = Array.from(document.querySelectorAll('.movable'));
        const order = objects.map(obj => obj.dataset.order).join('');
        if (order === '1234') {
            currentRoom++;
            showRoom(currentRoom);
        } else {
            message.textContent = 'Objects are in the wrong order. Try again.';
        }
    });

    document.getElementById('light-switch4').addEventListener('click', () => {
        message.textContent = 'The light is on. Now click the door to open it.';
    });

    document.getElementById('door4').addEventListener('click', () => {
        if (message.textContent === 'The light is on. Now click the door to open it.') {
            currentRoom++;
            showRoom(currentRoom);
        } else {
            message.textContent = 'You need to turn on the light first.';
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

    webcam.addEventListener('loadeddata', () => {
        // Dummy check for hand presence
        message.textContent = 'Webcam is active. Show your hand to the camera to open the door.';
        setTimeout(() => {
            currentRoom++;
            showRoom(currentRoom);
        }, 5000);  // This is just a placeholder for hand detection logic.
    });

    showRoom(currentRoom);
    initWebcam();
});

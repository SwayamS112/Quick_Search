const btn = document.getElementById('btn');
const body = document.body;

btn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btn.textContent = 'Change to Light';
        body.style.backgroundImage = "url('/Search/img/dark-space.jpg')"; //dark mode background image
    } else {
        btn.textContent = 'Change to Dark';
        body.style.backgroundImage = "url('/Search/img/space-astronaut.jpg')"; //light mode background image
    }
});

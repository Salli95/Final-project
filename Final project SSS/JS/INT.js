document.getElementById('openModalBtn').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function setWelcomeMessage() {
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
        alert('Добро пожаловать, ' + username + '!');
        document.getElementById('myModal').style.display = 'none';
        
        // Обновляем текст кнопки на "Hello"
        document.getElementById('openModalBtn').textContent = 'Hello ' + username;
    } else {
        alert('Введите имя пользователя');
    }
}
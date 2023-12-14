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

        // Сохраняем имя пользователя в localStorage
        localStorage.setItem('username', username);

        // Обновляем текст кнопки на "Hello"
        document.getElementById('openModalBtn').textContent = 'Hello ' + username;
    } else {
        alert('Введите имя пользователя');
    }
}

// При загрузке страницы проверяем, есть ли сохраненное имя в localStorage
document.addEventListener('DOMContentLoaded', function () {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('openModalBtn').textContent = 'Hello ' + storedUsername;
    }
});

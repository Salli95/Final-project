// Добавляем обработчик событий для кнопки "History"
document.getElementById('openHistoryModalBtn').addEventListener('click', function () {
    document.getElementById('historyModal').style.display = 'block';
});

// Добавляем обработчик событий для закрытия модального окна истории
document.getElementById('closeHistoryModalBtn').addEventListener('click', function () {
    document.getElementById('historyModal').style.display = 'none';
});

// Функция для перенаправления пользователя на первый сервер Discord
function redirectToDiscordFirst() {
    window.location.href = 'https://discord.gg/Htt8Qemty2';
}

// Функция для перенаправления пользователя на второй сервер Discord
function redirectToDiscordSecond() {
    window.location.href = 'https://discord.gg/UxfQgMkFx2';
}

// Функция для плавного скролла к виджетам Discord
function scrollToWidget() {
    const widgets = document.getElementById('discord-widgets');
    if (!widgets.classList.contains('visible')) {
        widgets.scrollIntoView({
            behavior: 'smooth'
        });
        // Показать виджеты с анимацией
        setTimeout(() => {
            widgets.style.opacity = '1';
            widgets.style.transform = 'translateY(0)';
            widgets.classList.add('visible');
        }, 200);
    }
}

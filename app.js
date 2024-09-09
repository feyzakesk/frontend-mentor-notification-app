const unread = document.getElementById("notifications");
const markAll = document.getElementById("mark_all");

let unReadMessages = document.querySelectorAll(".unread");
unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        // Her tıklama sonrası yeniden okunmamış mesajları alalım
        unReadMessages = document.querySelectorAll(".unread");
        unread.innerText = unReadMessages.length;
    });
});

markAll.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
        message.classList.remove("unread");
    });
    // "Mark all" sonrası da güncelleyelim
    unReadMessages = document.querySelectorAll(".unread");
    unread.innerText = unReadMessages.length;
});

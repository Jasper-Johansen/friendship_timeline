document.querySelectorAll('.timeline-item').forEach(item => {
    const year = item.querySelector('.year');
    if (item.classList.contains('left')) {
        year.style.right = '-20px';
    } else {
        year.style.left = '-20px';
    }
});

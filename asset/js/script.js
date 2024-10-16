// попап

document.addEventListener('DOMContentLoaded', function () {
    event.preventDefault();
    
    document.querySelectorAll('#openForm').forEach((item) => item.addEventListener('click', function () {
        document.getElementById('popup').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }));

    document.querySelectorAll('#close').forEach((item) => item.addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflow = 'auto';
    }));
});
document.getElementById('top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
})})

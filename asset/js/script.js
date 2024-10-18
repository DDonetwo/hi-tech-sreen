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
    })
})


const header = document.getElementById('header');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__links li a'); // Получаем все ссылки
const logo = document.querySelector('.header__logo'); // Получаем логотип
const burgerMenu = document.querySelector('.button__menu img'); // Получаем изображение бургер-меню

window.addEventListener('scroll', function () {
    if (window.scrollY > 70) {
        header.style.backgroundColor = '#181818';
        nav.style.padding = "1rem 0rem";
        header.classList.add('scrolled'); // Добавляем класс при скролле
        
        // Делаем бургер-меню белым
        burgerMenu.style.filter = "brightness(0) invert(1)";
    } else {
        header.style.backgroundColor = 'transparent';
        header.classList.remove('scrolled'); // Удаляем класс при прокрутке вверх
        
        // Возвращаем бургер-меню к исходному виду
        burgerMenu.style.filter = "none";
    }
});


// samsung DC55E
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "./asset/foto-1.jpg",
        "./asset/foto-2.jpg",
        "./asset/foto-3.jpg",
        "./asset/foto-4.jpg",
        "./asset/foto-5.jpg",
        "./asset/foto-6.jpg",
    ]; // Массив с путями к изображениям
    let currentIndex = 0;

    const galleryImg = document.querySelector(".gallery__img img");
    const prevButton = document.querySelectorAll("#prev");
    const nextButton = document.querySelectorAll("#next");

    // Функция для обновления изображения
    function updateImage(index) {
        galleryImg.src = images[index];
    }

    // Обработчик клика для кнопки "назад"
    prevButton.forEach((button) => {
        button.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage(currentIndex);
        });
    });

    // Обработчик клика для кнопки "вперёд"
    nextButton.forEach((button) => {
        button.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage(currentIndex);
        });
    });

    // Инициализация слайдера с первым изображением
    updateImage(currentIndex);
});



// applicatio
document.addEventListener('DOMContentLoaded', function () {
    // Получаем все элементы с классом 'gallery2__block'
    const blocks = document.querySelectorAll('.gallery2__block');

    blocks.forEach(block => {
        block.addEventListener('click', function () {
            // Закрываем все активные блоки
            const activeBlocks = document.querySelectorAll('.gallery2__block_active');
            activeBlocks.forEach(activeBlock => {
                activeBlock.classList.remove('gallery2__active');
                activeBlock.classList.add('gallery2__none');
            });

            // Убираем класс 'gallery2__active' у всех блоков
            blocks.forEach(b => {
                if (b !== this) {
                    b.classList.remove('gallery2__active');
                }
            });
            const Blocks = document.querySelectorAll('.gallery2__block');
            Blocks.forEach(Block => {
                Block.classList.remove('gallery2__none');
                Block.classList.add('gallery2__active');
            });
            // Добавляем класс 'gallery2__active' к нажатому блоку
            this.classList.add('gallery2__none');

            // Находим следующий блок с классом 'gallery2__block_active' и отображаем его
            const nextActiveBlock = this.nextElementSibling;
            if (nextActiveBlock && nextActiveBlock.classList.contains('gallery2__block_active')) {
                nextActiveBlock.classList.remove('gallery2__none');
                nextActiveBlock.classList.add('gallery2__active');
            }
        });
    });
});



// subtitle
document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            image: "./asset/gallery3.png",
            text: "Коммерческий дисплей способен работать непрерывно и выдерживать высокие нагрузки в течение длительного времени. Он надежно защищен от пыли, влаги и других факторов окружающей среды, что позволяет использовать его в различных условиях, включая уличные."
        },
        {
            image: "./asset/gallery4.png",
            text: "Коммерческий дисплей отличается высокой яркостью и контрастностью, что делает его идеальным для использования в магазинах и офисах."

        },
        {
            image: "./asset/gallery4.png",
            text: "Коммерческие дисплеи обладают широким разнообразием входных портов, начиная HDMI, и заканчивая DisplayPort, USB, etc. Они поддерживают различные форматы контента, что делает их идеальным выбором для бизнес-среды."

        },
        {
            image: "./asset/gallery4.png",
            text: " отличие от мониторов,  телевизоры не могут решать коммерческие задачи, которые перед ними ставятся. "

        }

    ];

    let currentIndex = 0;

    const galleryImage = document.querySelector(".gallery3__block img");
    const galleryText = document.querySelector(".gallery3__text p");
    const prevButton = document.querySelector("#gallery3__prev");
    const nextButton = document.querySelector("#gallery3__next");

    // Функция для обновления изображения и текста
    function updateContent(index) {
        galleryImage.src = data[index].image;
        galleryText.innerHTML = data[index].text;
    }

    // Обработчик клика для кнопки "назад"
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + data.length) % data.length;
        updateContent(currentIndex);
    });

    // Обработчик клика для кнопки "вперёд"
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % data.length;
        updateContent(currentIndex);
    });

    // Инициализация слайдера с первым элементом
    updateContent(currentIndex);
});


// faq

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {
        const button = item.querySelector("button");
        const answer = item.querySelector("p");

        // Скрыть все ответы по умолчанию
        if (answer) {
            answer.style.display = "none";
        }

        // Добавить обработчик клика на кнопку
        button.addEventListener("click", function () {
            // Переключение видимости ответа
            if (answer.style.display === "none") {
                answer.style.display = "block";
                button.classList.add("active");
            } else {
                answer.style.display = "none";
                button.classList.remove("active");
            }

            // Переключение иконки
            const img = button.querySelector("img");
            if (img.src.includes("down")) {
                img.src = "./asset/Arrow black top.svg";
            } else {
                img.src = "./asset/Arrow black down.svg";
            }
        });
    });
});
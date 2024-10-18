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





// subtitle
document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            image: "./asset/gallery3.png",
            text: "Коммерческий дисплей способен работать непрерывно и выдерживать высокие нагрузки в течение длительного времени. <br><br> Он надежно защищен от пыли, влаги и других факторов окружающей среды, что позволяет использовать его в различных условиях, включая уличные."
        },
        {
            image: "./asset/gallery4.png",
            text: "Обычные телевизоры предназначены для домашнего использования и не рассчитаны на длительные нагрузки. <br><br> Они не имеют специальных защит от пыли и влаги, что делает их непригодными для использования в суровых условиях."
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
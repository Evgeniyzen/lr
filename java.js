document.addEventListener("DOMContentLoaded", () => {
    const lessonCard = document.getElementById("lessonCard");
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.getElementById("progressText");
    const howToBtn = document.getElementById("howToBtn");
    const backBtn = document.getElementById("backBtn");

    const lessons = [
  { 
    title: "Урок 1: Цели и планирование", 
    description: "Определите 3 главные цели на ближайший месяц и создайте пошаговый план для их достижения.",
    task: "Запишите цели и шаги в ежедневник. Уделите 30 минут для этого.",
    guide: "Используйте SMART метод для постановки целей: конкретность, измеримость, достижимость, актуальность и ограниченность во времени.",
  },
{ 
  title: "Урок 2: Управление временем", 
  description: "Научитесь управлять своим временем с помощью метода Pomodoro.", 
  task: "Попробуйте 4 сессии Pomodoro по 25 минут и запишите результаты.", 
  guide: "Установите таймер на 25 минут, работайте над одной задачей без перерывов. После 25 минут сделайте 5-минутный перерыв и далее повторите."
},
{ 
  title: "Урок 3: Работа с мотивацией", 
  description: "Научитесь поддерживать мотивацию на протяжении всего дня.", 
  task: "Найдите 3 вещи, которые мотивируют вас, и запишите их.", 
  guide: "Определите и запишите бля себя внутренние, и внешние источники мотивации, и следите за своими эмоциональными реакциями в течение дня."
},
{ 
  title: "Урок 4: Личная эффективность", 
  description: "Определите свои сильные и слабые стороны и работайте над ними.", 
  task: "Составьте список дел и выполните их по приоритетам.", 
  guide: "Используйте матрицу Эйзенхауэра для расстановки приоритетов: срочные/важные задачи должны быть выполнены первыми."
},
{ 
  title: "Урок 5: Развитие навыков", 
  description: "Выберите навык, который вы хотите развивать.", 
  task: "Уделите 30 минут на развитие нового навыка.", 
  guide: "Примените метод «10 000 часов» для постоянной практики или используйте короткие, но регулярные сессии для поддержания фокуса ежедневно."
},
{ 
  title: "Урок 6: Эмоциональный интеллект", 
  description: "Работайте над своим эмоциональным интеллектом.", 
  task: "Проанализируйте свои эмоции в течение дня и запишите свои наблюдения.", 
  guide: "Используйте методику ABC (Активное событие – Вера – Последствие) для анализа своих эмоций."
},
{ 
  title: "Урок 7: Стресс-менеджмент", 
  description: "Управляйте стрессом с помощью осознанных практик.", 
  task: "Примите участие в 10-минутной медитации.", 
  guide: "Попробуйте технику глубокого дыхания или прогрессивную мышечную релаксацию для снижения стресса."
}, 
{ 
  title: "Урок 8: Финансовая грамотность", 
  description: "Научитесь управлять личными финансами и планировать свой бюджет.", 
  task: "Создайте план бюджета на следующий месяц и разделите его на категории (доходы, расходы, сбережения).", 
  guide: "Используйте правило 50/30/20: 50% доходов на основные расходы, 30% на желания, 20% на сбережения и инвестиции. Проанализируйте свои текущие расходы и найдите, где можно оптимизировать бюджет."
},
{ 
  title: "Урок 9: Анализ и рефлексия", 
  description: "Научитесь анализировать свои успехи и неудачи.", 
  task: "Запишите 3 достижения и 3 урока, которые вы извлекли за неделю.", 
  guide: "Используйте метод обратной связи: что прошло хорошо, что можно улучшить и что нужно продолжать делать."
},
{ 
  title: "Урок 10: Заключение и новые цели", 
  description: "Оцените свой прогресс и поставьте новые цели.", 
  task: "Сформулируйте 3 новые цели на следующий месяц.", 
  guide: "Регулярно пересматривайте свои цели и корректируйте их в зависимости от обстоятельств и полученных результатов."
}

        // ... Добавь все уроки сюда
    ];

    let firstVisit = localStorage.getItem("firstVisit");
    if (!firstVisit) {
        firstVisit = new Date();
        localStorage.setItem("firstVisit", firstVisit);
    } else {
        firstVisit = new Date(firstVisit);
    }

    const today = new Date();
    const daysPassed = Math.floor((today - firstVisit) / (1000 * 60 * 60 * 24));
    const currentLessonIndex = Math.min(daysPassed, lessons.length - 1);
    const currentLesson = lessons[currentLessonIndex];

    // Обновляем содержимое карточки
    document.getElementById("lessonTitle").innerText = currentLesson.title;
    document.getElementById("lessonDescription").innerText = currentLesson.description;
    document.getElementById("lessonTask").innerText = currentLesson.task;
    document.getElementById("lessonGuide").innerText = currentLesson.guide;

    // Обновляем прогресс-бар
    const progressPercentage = ((currentLessonIndex + 1) / lessons.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.innerText = `${currentLessonIndex + 1}/${lessons.length}`;

    // Обработчик для переворота карточки
    howToBtn.addEventListener("click", () => {
        lessonCard.classList.add("flipped");
    });

    backBtn.addEventListener("click", () => {
        lessonCard.classList.remove("flipped");
    });

    // Обновляем информацию о следующем уроке
    const nextLessonInfo = document.getElementById("nextLessonInfo");
    if (currentLessonIndex >= lessons.length - 1) {
        nextLessonInfo.innerText = "Вы завершили все 10 уроков! Продолжайте применять полученные знания.";
    } else {
        nextLessonInfo.innerText = "Ваш следующий урок будет доступен завтра. Возвращайтесь на сайт, чтобы продолжить!";
    }
});
// Пример логики для отслеживания завершенных уроков
let completedLessons = 10; // Получите фактическое значение из хранилища или переменной

if (completedLessons >= 10) {
    window.location.href = "congratulations.html";
}
// Добавить дополнительные эффекты при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    const trophy = document.querySelector('.trophy');
    trophy.classList.add('animate');
});

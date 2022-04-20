// Из задачи UseState04_Props возьми компонент Card (День рождения и кнопку сокрытия можешь оттуда удалить).
// Сделай три карточки: для "John Doe", "Homer Simpson" и "Piter Parker"
// По умолчанию должна быть отображена только первая карточка ("John Doe")
// По умолчанию у карточки должен быть синий фон (класс bg-primary)
// Также на странице должны быть две кнопки "Next card" (с id "next-card") и "Next background" (с id "next-bg")
// При клике на кнопку Next card текущая карточка скрывается и отображается следующая ("Homer Simpson", затем "Piter Parker", а при следующем клике опять "John Doe")
// При клике на кнопку Next background карточка меняет фон на серый (класс bg-secondary), затем на зелёный (класс bg-success), а при следующем клике опять на синий (класс bg-primary)
// Не используй useState, вместо этого используй один useReducer
// Начальное состояние редьюсера задай как { card: 0, background: 'bg-primary' }
// Используй экшены двух типов: NEXT_CARD и NEXT_BACKGROUND
// Mockup смотри в файле ./Mockup.png

export default function UseReducer01_Cards() {

}

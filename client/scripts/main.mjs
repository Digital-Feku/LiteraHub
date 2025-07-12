import { getBookByTitle, getRecommendations } from './books.mjs'

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('button').addEventListener('click', () => {
    window.location.href = '/pages/auth.html'
});

async function init() {
    console.log('Запуск init...'); // Отладочное сообщение
    
    try {
        const recommendations = await getRecommendations(3);
        console.log('Рекомендации:', recommendations); // Отладочное сообщение

        if (!recommendations || recommendations.length === 0) {
            console.log('Рекомендации не найдены');
            return;
        }

        const firstBookTitle = recommendations[0].title;
        console.log('Название первой книги:', firstBookTitle);
        
    } catch (error) {
        console.error('Ошибка в init:', error);
    }
}
init(); 


});
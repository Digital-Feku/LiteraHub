import { getBookByTitle, getRecommendations } from './books.mjs'

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('button').addEventListener('click', () => {
    window.location.href = '/pages/auth.html'
});

async function init() {
    
    try {
        const popularBooksImages = document.querySelectorAll('.popular-image')
        const recommendations = await getRecommendations(3);

        if (recommendations.length === 0) {
            console.log('Рекомендации не найдены');
            return;
        }
        for (let i = 0; i < 3; i++) {
        popularBooksImages[i].style.background = `url('${recommendations[i].image}')`
        }

        
    } catch (error) {
        console.error('Ошибка в init:', error);
    }
}
init(); 


});
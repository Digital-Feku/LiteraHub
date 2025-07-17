import { getBookByTitle, getRecommendations } from './books.mjs'

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('button').addEventListener('click', () => {
    window.location.href = '/pages/auth.html'
});

async function init() {
    
    try {
        const popularBooksImages = document.querySelectorAll('.popular-image')
        const popularTitle = document.querySelectorAll('.popular-title')
        const popularAuthor = document.querySelectorAll('.popular-author')
        const popularDescription = document.querySelectorAll('.popular-description')
        const recommendations = await getRecommendations(3);

        if (recommendations.length === 0) {
            console.log('Рекомендации не найдены');
            return;
        }
        for (let i = 0; i < 3; i++) {
        popularBooksImages[i].style.background = `url('${recommendations[i].image}')`
        popularBooksImages[i].style.backgroundSize = 'cover'; 
        popularBooksImages[i].style.backgroundPosition = 'center';
        popularBooksImages[i].style.backgroundRepeat = 'no-repeat';

        if (recommendations[i].title.length > 12) {
            
            popularTitle[i].style.fontSize = '24px'   
            popularTitle[i].innerHTML = recommendations[i].title

        } else { popularTitle[i].innerHTML = recommendations[i].title }

        popularAuthor[i].innerHTML = recommendations[i].author

        popularDescription[i].innerHTML = recommendations[i].description.substring(0, 150) + '…'
        }

        
    } catch (error) {
        console.error('Ошибка в init:', error);
    }
}
init(); 


});
document.addEventListener('DOMContentLoaded', () => {

document.querySelector('button').addEventListener('click', () => {
    window.location.href = '/pages/auth.html'
});

async function init() {
    const recommendations = await getRecommendations(3);

        if (!recommendations || recommendations.length === 0) {
            console.log('Рекомендации не найдены');
            return;
        }

    const firstBookImage = recommendations[0].image;
    console.log('Обложка первой книги:', firstBookImage);
}
init(); 


});
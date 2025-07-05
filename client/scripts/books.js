//Получение книги через название
async function getBookByTitle(title) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}&langRestrict=ru`
        )
        const data = await response.json()
        if (data) {
            const book = data.items[0].volumeInfo

            return {
                title: book.title,
                author: book.authors[0],
                year: book.publishedDate,
                description: book.description || 'Описание отсутствует',
                isbn: book.industryIdentifiers?.find(id => id.type === 'ISBN_10')?.identifier || 'Не найден',
                id: data.items[0].id,
                image: `https://books.google.com/books/content?id=${data.items[0].id}&printsec=frontcover&img=1&zoom=2`,
                publisher: book.publisher,
                pageCount: book.pageCount || "Количество страниц не указано"
            }
        } else {
            return 'Ничего не найдено'
        }
    } catch (error) {
        console.log('Ошибка:', error )
        return null
    }
}

// getBookByTitle("аист марабу").then(book => {
//   console.log(book);
// });
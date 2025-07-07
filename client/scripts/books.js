//Получение книги через название
async function getFromGoogle(title) {
    try {
        const responseGoogle = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}&langRestrict=ru`
        )
        const dataGoogle = await responseGoogle.json()
        if (dataGoogle) {
            const book = dataGoogle.items[0].volumeInfo

            return {
                title: book.title,
                author: book.authors[0],
                year: book.publishedDate,
                description: book.description || 'Описание отсутствует',
                isbn: book.industryIdentifiers?.find(id => id.type === 'ISBN_10')?.identifier || 'Не найден',
                id: dataGoogle.items[0].id,
                image: `https://books.google.com/books/content?id=${dataGoogle.items[0].id}&printsec=frontcover&img=1&zoom=2`,
                publisher: book.publisher || "Издатель неизвестен",
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

getPopularBooks('fiction').then( books => {
    console.log(books)
})

//Получение популярных книг 

async function getPopularBooks(category = "fiction") {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&orderBy=newest&maxResults=20&langRestrict=ru&key=AIzaSyCLID0PjuG3JwDLr33ZWwj-bQUiAZ38kRY`
  );
  const data = await response.json();
  const books = data.items.volumeInfo
  
}
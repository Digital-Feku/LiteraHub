//Получение книги через название
async function getFromGoogle(title) {
    try {
        const responseGoogle = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}+lang:ru&langRestrict=ru`
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

//Получение популярных книг 

async function getPopularBooks(count) {
    try {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=en&keyes&key=AIzaSyCLID0PjuG3JwDLr33ZWwj-bQUiAZ38kRY`
  );

        if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
        }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
        console.log("Книги не найдены");
        return;
        }
for (let i = 0; i < count; i++) {

     const book = await data.items[i].volumeInfo 
        const books = {
        id: data.items[i].id,
        title: book.title,
        authors: book.authors || ["Автор неизвестен"],
      };
      console.log(books)

}
   

} catch (error) {
    console.error("Ошибка при получении книг:", error);
    return [];
  }
}

// getFromGoogle('fight club').then(book => {
//     console.log(book)
// })

getPopularBooks(3)

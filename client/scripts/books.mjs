//Получение книги через название
export async function getBookByTitle(title) {
    try {
        const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`
      );
    const data = await response.json();
     const book = data.items[0].volumeInfo

    return {
        title: book.title,
        description: book.description || 'Описание отсутствует',
        pages: book.pageCount ||  'Не указано',
        author: book.authors || 'Автор неизвестен',
        publisher: book.publisher || 'Неизвестно',
        publishedDate: book.publishedDate ? String(book.publishedDate).slice(0, 4) : 'Неизвестен',
        language: book.language || 'Не указан',
        image: `https://books.google.com/books/content?id=${data.items[0].id}&printsec=frontcover&img=1&zoom=3`
     }
    
    } catch (error) {
        console.log('Ошибка получения книги:', error)
        return null;
    }

}

export async function getRecommendations(count) {
    try {
        const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=${count}`
      );
      const data = await response.json();
      return data.items.slice(0, count).map(item => {
        const book = item.volumeInfo    
        return {
        title: book.title,
        description: book.description || 'Описание отсутствует',
        pages: book.pageCount ||  'Не указано',
        author: book.authors || 'Автор неизвестен',
        publisher: book.publisher || 'Неизвестно',
        publishedDate: book.publishedDate ? String(book.publishedDate).slice(0, 4) : 'Неизвестен',
        language: book.language || 'Не указан',
        image: `https://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=3`

     }
      })
    } catch (error) {
        console.log('Ошибка получения рекомендаций:', error)
        return [];
    }
}

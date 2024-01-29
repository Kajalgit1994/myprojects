books.array.forEach(function (book)
{
    const bookDiv=document.createElement('div')
    const Author=document.createElement('h2')
    Author.textContent=book.Author
    bookDiv.append(Author)

})
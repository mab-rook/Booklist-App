const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const table = document.querySelector('#table');
const tbody = document.querySelector('#tbody')
const btn = document.querySelector('#button');

const storeBook = [];

btn.addEventListener('click', function () {
  if (title.value === '' || author.value === '' || isbn.value === '') {
    title.value = ''
    author.value = ''
    isbn.value = ''
    alert('fill in all the fields');
  } else {
    const Row = document.createElement('tr')
    const titleData = document.createElement('td')
    titleData.innerHTML = title.value;
    const authorData = document.createElement('td')
    authorData.innerHTML = author.value;
    const isbnData = document.createElement('td')
    isbnData.innerHTML = isbn.value;
    const del = document.createElement('td')
    del.innerHTML = `<a href="#" class="btn btn-danger btn-sm delete">X</a>`
    Row.appendChild(titleData);
    Row.appendChild(authorData);
    Row.appendChild(isbnData);
    Row.appendChild(del);
    tbody.appendChild(Row)
    table.classList.remove('table-striped')
    
    storeBook.push({
      title: title.value,
      author: author.value,
      isbn: isbn.value 
    })
    
    title.value = ''
    author.value = ''
    isbn.value = '' 
  }
})

function deleteBook(book){
  if (book.classList.contains('delete')) {
    book.parentElement.parentElement.remove();
  }
}


tbody.addEventListener('click', function (e){
  deleteBook(e.target)
})


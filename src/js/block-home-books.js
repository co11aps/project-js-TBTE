let bookCategory;
export const mainContainer = document.querySelector('.main-content');

function templateBookCard({
  _id,
  author,
  contributor,
  title,
  book_image,
  list_name,
}) {
  bookCategory = list_name;
  return `<li class="book-item" id="${_id}">
                <div class="book-wrapper">
                <img class="book-img" src="${book_image}" alt="${title} ${contributor}">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${title}</p>
                <p class="book-info-author">${author}</p>
                </div>
            </li>`;
}

function templateBookCategoryEl({ books }) {
  const bookCards = books.map(templateBookCard).join('');
  const result =
    `<li class="book-item-home">
                    <h3 class="book-category-title">${bookCategory}</h3>
                    <ul class="books-category-list">` +
    bookCards +
    `</ul>
                    <button class="button see-more-btn" data-category-home="${bookCategory}">SEE MORE</button>
                </li>`;
  return result;
}

function templateHomeBookMarkup(dataPopularBooks) {
  const markup = dataPopularBooks.map(templateBookCategoryEl).join('');
  const result =
    `<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2>` +
    `<ul class="books-home-list">` +
    markup +
    `</ul>`;

  return result;
}

export function renderHomeBooksMarkup(dataPopularBooks) {
  const markup = templateHomeBookMarkup(dataPopularBooks);
  mainContainer.innerHTML = markup;
}

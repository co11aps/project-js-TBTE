const categoriesList = document.querySelector('.categories-list');

function addMarkup({ list_name }) {
  return `<li class="category-item">
          <a href="${list_name}" class="category-link">${list_name}</a>
          </li>`;
}

export function createCategoriesList(data) {
  const markup = data.map(addMarkup).join('');
  const result =
    `<li class="category-item js-current-category" data-category="all categories"><a href="./index.html" class="category-link">All categories</a> </li>` +
    markup;
  categoriesList.innerHTML = result;
}

export const categoriesList = document.querySelector('.categories-list');

function addMarkup({ list_name }) {
  return `<li class="category-item" data-category="${list_name}">${list_name}</li>`;
}

export function createCategoriesList(data) {
  const markup = data.map(addMarkup).join('');
  const result =
    `<li class="category-item js-current-category" data-category="all categories">All categories</li>` + markup;
  categoriesList.innerHTML = result;
}

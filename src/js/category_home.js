export const categoriesList = document.querySelector('.categories-list');

function addMarkup(list_name) {
  return `<li class="category-item"><button type="button" class="category-button" data-category="${list_name}" aria-label="${list_name}">${list_name}</button></li>`;
}

export function createCategoriesList(data) {
  const markup = data.map(addMarkup).join('');
  const result =
    `<li class="category-item"><button type="button" class="category-button js-current-category" data-category="all categories" aria-label="all categories">All categories</button></li>` + markup;
  categoriesList.innerHTML = result;
}

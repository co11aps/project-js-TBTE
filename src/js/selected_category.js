import { mainContainer } from "./block-home-books";
import { categoriesList } from "./category_home";
import { loaderOn } from "./preloader";
import { loaderOff } from "./preloader";
import { getCategories } from "./books-api";
import { getBooksByCategory } from "./books-api";
import { getPopularBooks } from "./books-api";
import { renderHomeBooksMarkup } from "./block-home-books";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


export async function currentCategoryTogle(value) {
    await document.querySelector('.js-current-category').classList.remove(`js-current-category`);
    document.querySelector(`li[data-category="${value}"]`).classList.add(`js-current-category`);
  };


export async function onCategoryClick(el) {
  el.preventDefault();
  console.log(el.target.dataset.category);

  if (el.target.classList.contains("category-item")) {
    // scrollToStart();
    mainContainer.innerHTML = "";
    // refBooks.insertAdjacentHTML(
    //   'afterbegin',
    //   addMarkupOfPreloader()
    // );
    
    currentCategoryTogle(el.target.dataset.category);

    if (el.target.dataset.category === `all categories`) {
      try {
        const response = (await getPopularBooks());
        loaderOn();
        renderHomeBooksMarkup(response);
        currentCategoryTogle(el.target.dataset.category);
        loaderOff();
      } catch (err) {
        iziToast.error({
            title: 'Error:',
            message: "Books was not found",
          });
      };
      return;
    } else {
      try {
        const data = (await getBooksByCategory(`${el.target.dataset.category}`));
        // .find((item) => item.list_name === el.target.dataset.category);
        console.log(data);
        mainContainer.innerHTML = (await makeCategoryPage(`${el.target.dataset.category}`, data));
        currentCategoryTogle(el.target.dataset.category);
        loaderOff();
      } catch (err) {
        iziToast.error({
            title: 'Error:',
            message: "Books was not found",
          });
      };
    }
  };
};

// export async function murkup(data) {

//     return await Promise.all(data.map(async ({ list_name, books }) => {
//       return ` 
//       <div class="item-books__home"> 
//       <h3 class="js-book-categoty">${list_name}</h3> 
//       <ul class='list-books__home'>${await makeListOfBooks(books)}</ul>  
//       <button class="button see-more" data-js="${list_name}" aria-label="See more">See more</button> 
//       </div> 
//       `;
//     }));
//   }
  
  export async function makeCategoryPage(category, data) {
  
    const title = category.split(" ");
    return ` 
    <h2 class="block_books-title"
  >${title
        .splice(0, title.length / 2)
        .join(' ')} <span class="block_books-colortitle">${title
          .splice(title.length / 2, title.length)
          .join(' ')}</span></h2> 
          <ul class="block_books-list">${await makeListOfBooks(data)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`;
  
  };
  
  export async function makeListOfBooks(data) {
    return data.map(categoryBookCard).join('');
  };
  
  export function categoryBookCard({ author, book_image, title, description, _id}) {
 
    return `<li class="books_itm" id=${_id} >  
    <div class="books_wrapper"> 
    <img class="books_image" src="${book_image}"  alt="${description}" loading="lazy"  /> 
    <div class="books_overlay"> 
    <p class="books_overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books_info">  
    <p class="books_info-title">${title}</p>  
    <p class="books_info-author">${author}</p>  
    </div>  
    </li>`;
  };
  

// refBooks.addEventListener('click', onSeeMoreClick);

// async function onSeeMoreClick(event) {
//   event.preventDefault();
//   const currentEl = event.target.closest('.books__itm');
//   if (currentEl) {
//     const bookId = currentEl.attributes.id.value;
//     modalAboutBook(bookId);
//   }

//   if (event.target.classList.contains('see-more')) {
//     scrollToStart();
//     const requestedCategory = event.target.dataset.js;
//     refBooks.innerHTML = '';
//     refBooks.insertAdjacentHTML('afterbegin', addMarkupOfPreloader());
//     startPreloader();
//     try {
//       const data = await (
//         await bookApi.getOneCategory(`${requestedCategory}`)
//       ).data;
//       refBooks.insertAdjacentHTML(
//         'beforeend',
//         await makeCategoryPage(`${requestedCategory}`, data)
//       );
//       currentCategoryTogle(`${requestedCategory}`);
//       stopPreloader();
//     } catch (error) {
//       Notiflix.Notify.failure(`Books was not found : ${error.message}`);
//     }
//   } else if (event.target.classList.contains('all-categories__btn')) {
//     scrollToStart();
//     refBooks.innerHTML = '';
//     refBooks.insertAdjacentHTML('afterbegin', addMarkupOfPreloader());
//     startPreloader();
//     try {
//       const resp = await bookApi.getTopBooks();
//       refBooks.insertAdjacentHTML(
//         'afterbegin',
//         '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'
//       );
//       refBooks.insertAdjacentHTML(
//         'beforeend',
//         (await murkup(resp.data)).join('')
//       );
//       stopPreloader();
//       currentCategoryTogle("all categories");
//     } catch (error) {
//       Notiflix.Notify.failure(`Books was not found : ${error.message}`);
//     }
//   }
// };
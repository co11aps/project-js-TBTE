import { getBookInfo } from './books-api';
import { showError } from './block-home-books';
const booksContainer = document.querySelector(".main-content");
const modalWindow = document.querySelector(".backdrop-pop-up");
const modalWindowContent = document.querySelector(".modal-pop-up-content");
const body = document.querySelector('body');
let modalBookid;
booksContainer.addEventListener("click", onBooksContainerClick);


async function onBooksContainerClick(e){
    modalBookid = e.target.closest(".book-item").id;
    if(modalBookid){
        modalWindow.classList.remove("is-hidden");
        body.classList.add("no-scroll");
        try{
            let bookInfo = await getBookInfo(modalBookid);
            console.log(bookInfo);
            renderBookInfoModal(bookInfo);
        }catch(err){
            showError(err);
        }
    }

}

function templateBookInfoModal({
    book_image,
    contributor,
    description,
    _id,
    title,
    author,
    buy_links,
}){
    return `<img class="modal-img" src="${book_image}" alt="${title} ${contributor}" id="${_id}">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${title}</h2>
                <h3 class="modal-book-author">${author}</h3>
                <p class="modal-book-desc">${description}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${buy_links[0].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="../images/amazon-logo.png" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${buy_links[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="../images/apple-books-logo.png" alt="Shop Logo">
                        </a>
                </ul>
            </div>`
}
function renderBookInfoModal(data){
    const markup = templateBookInfoModal(data);
    modalWindowContent.insertAdjacentHTML("afterbegin", markup);
}
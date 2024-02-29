import axios from 'axios';
const BASE = 'https://books-backend.p.goit.global/books';

export async function getCategories() {
  const URL = `${BASE}/category-list`;
  const response = await axios.get(URL);
  return response.data;
}
export async function getPopularBooks() {
  const URL = `${BASE}/top-books`;
  const response = await axios.get(URL);
  return response.data;
}
export async function getBooksByCategory(selectedCategory) {
  const params = { category: selectedCategory };
  const URL = `${BASE}/category`;
  const response = await axios.get(URL, { params });
  return response.data;
}
export async function getBookInfo(bookId) {
  const URL = `${BASE}/${bookId}`;
  const response = await axios.get(URL);
  return response.data;
}

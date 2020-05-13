import {elements} from '../library/base';
const element = elements;


export const renderCategoriesList = categoriesList => {

    Array.from(categoriesList).forEach(cate => {
        const markup = `
        <li class="collection__category--item" data-category="${cate.categoryID}">
            <svg class="collection__category--icon">
                <use xlink:href="./img/icons/sprite.svg#icon-read"></use> 
            </svg> 
            <div class="collection__category--name">${cate.categoryName}</div>
            <div class="collection__category--count">${cate.childBookLength}</div>
        </li>
        `
        document.querySelector(".collection__category--list").insertAdjacentHTML("beforeend",markup)
          
    })
}






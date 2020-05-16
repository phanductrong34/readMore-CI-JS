import * as detailView from "./detailView";
import * as controller from "../index";

export const renderDescription = (description) =>{
    if(description == "null") {return `Lorem ipsum dolor sit amet consectetur adipisicing elit...`}
    else{return `${description.substr(0,55)}...`}
    
    

}

export const renderTitle = (title) => {

    if(title.length > 17){
        title = title.substr(0,17) + "..."
    }
    return title;
}

export const renderStar = (ratingScore,count) => {
    ratingScore = Math.round(Number(ratingScore));
    let string = "";
    switch (ratingScore) {
        case 0: {
            string = `
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 1: {
            string = `
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 2: {
            string = `
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 3: {
            string = `
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 4: {
            string = `
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 5: {
            string = `
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
            <span class="fa fa-star checked-${count}"></span>
                                                    
            `
            break;
        }  
    }
    return string;
};

export const renderAuthorBook = (data,book) => {
    return data.authors[book.parentAuthorID].authorName;
}

export const renderImg = (imgUrl) =>{
    if(imgUrl =="null"){
        imgUrl = "./img/png/book-cover-null.jpg"
    }
    return imgUrl;


}

//data là state.main
export const renderNewlyCards = (data,arrayBookID) =>{
    getElement(".newly__container").innerHTML = "";

    console.log("gethere")
    arrayBookID.forEach((bookID,index)=> {
        let book = data.books[bookID];
        let count = 0;

        // quyết định đây là thẻ 1 hay là 3
        switch (index){
            case 0: {
                count = 1;
                break;
            }
            case 1: {
                count = 2;
                break;
            }
            case 2: {
                count = 3;
                break;
            }
            case 3: {
                count = 1;
                break;
            }
            case 4: {
                count = 2;
                break;
            }
            case 5: {
                count = 3;
                break;
            }
        }

        let markup =`
        <div class="newly__card newly__card-${count}">
                
        <div class="newly__bookmark">
            <svg class="newly__bookmark-icon">
                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
            </svg>
        </div>



        <div class="newly__img newly__img-${index+1}">
            <div class="newly__button--container">

                <a class="newly__button--listen" data-link = "${book.audioUrl}">
                    <svg class="newly__button--listen-icon">
                       ${detailView.renderIcon("listen",book.audioUrl)}
                    </svg g>
                </a>
                <a class="newly__button--read" data-link = "${book.readUrl}">
                    <svg class="newly__button--read-icon">
                        ${detailView.renderIcon("read",book.readUrl)}
                    </svg>
                </a>
                <a class="newly__button--download">
                    <svg class="newly__button--download-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                    </svg>
                </a>


            </div>
        </div>

        <div class="newly__info">
            <h3 class="newly__title">${renderTitle(book.title)}</h3>
            <h4 class="newly__author">
                <span class="newly__author--1">by</span>
                <span class="newly__author--2">${renderAuthorBook(data,book)}</span>
            </h4>
            <div class="newly__rating rating__container">

                ${renderStar(book.ratingScore,count)}

            </div>

            <p class="newly__description">${renderDescription(book.description)}</p>
            <a href="#${book.bookID}" class="newly__button btn__see-book btn__see-book-${count}">
                <span>See The Book</span>
            </a>
        </div>


    </div>
`

        getElement(".newly__container").insertAdjacentHTML("beforeend",markup);
        getElement(`.newly__img-${index+1}`).style.backgroundImage = `url(${renderImg(book.imgUrl)})`;


        controller.addEventBookButton(".newly__container",
                                    ".newly__button--container",
                                    ".newly__button--read",
                                    ".newly__button--listen");

    });


  
}

function cutString(string,start,length){
    return string.substr(start,length);
}

function getElement(selector){
    return document.querySelector(selector)
};

function getManyElement(selector){
    return document.querySelectorAll(selector)
};
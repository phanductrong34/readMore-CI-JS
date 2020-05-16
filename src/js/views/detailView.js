import {elements} from '../library/base';
import * as controller from '../index'
import { renderReadUrl } from './recommendView';

/////////data ở đây là state.main


////author RATING
export const authorRating = (data,authorID) => {
    let totalScore = 0;

    data.authors[authorID].childBookIDs.forEach(bookID => {
        
        totalScore = Number(data.books[bookID].ratingScore) + totalScore;
    })

    let averageScore =  (totalScore / Number(data.authors[authorID].childBookLength)).toFixed(1);
    return averageScore + " " + "Rates" ;

}

export const renderStar = (ratingScore) => {
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
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 2: {
            string = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 3: {
            string = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 4: {
            string = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
                                                    
            `
            break;
        }  
        case 5: {
            string = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
                                                    
            `
            break;
        }  
    }
    return string;
}


export const renderTitle = (title) => {

    if(title.length > 17){
        title = title.substr(0,14) + "..."
    }
    return title;
}

export const renderBookID = (book)=>{
    return book.bookID;
}

///// RENDER AUTHOR
export const renderAuthorBook = (data,book) => {
    return data.authors[book.parentAuthorID].authorName;
}
export const renderAuthorCollection = (data,collection) => {
    return data.authors[collection.parentAuthorID].authorName;
}



export const renderDescription = (description) =>{
    if(description == "null") {return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum dolor temporibus, nesciunt dolorem voluptate enim aut aliquid, odit nemo, sint optio minima minus ratione aspernatur adipisci laborum iste natus!"}
    else{return description};
}
export const renderDescriptionBook = (description) =>{
    if(description == "null") {return "Lorem ipsum dolor sit amet..."}
    else if(description.length >40){
        description = `${description.substr(0,36)}...`
    }
    return description
}

/////// RENDER TAG
export const renderTag = (data,tagArray) =>{
    let cateArray = tagArray.map(tagID => data.categories[tagID].categoryName);
    let string = ""
    cateArray.forEach(cateName => {
        let markup =`
        <a href="" class="detail__categories--tag">${cateName.toLowerCase()}</a>
        `
        string += markup;
    })
    return string;
} 



export const renderIcon = (type,link) =>{
    let string = "";
    if(type === "read"){
       if(link === "null"){
        string = `<use xlink:href="./img/icons/sprite.svg#icon-read-null"></use> `
       }else{
        string = `<use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> ` 
       }
    }else if(type === "listen"){
        if(link === "null"){
        string = `<use xlink:href="./img/icons/sprite.svg#icon-headphone-null"></use>`
        }else{
        string = `<use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>` 
        }
    }
    return string;
}

// RENDER READ AND AUDIO LINK COLLECTION

export const renderReadLinkCollection = (data,collection)=>{
    //chạy qua các phần tử book ở trong, bắt gặp thằng nào có link thì lấy luôn, còn nếu không sau tất cả thì trả null
    for(let bookID of collection.childBookIDs){
        let readUrl = data.books[bookID].readUrl;
        // console.log(readUrl);

        if(readUrl !== "null"){
               return [readUrl,`<use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>`]
        }
    }
    return ["null",`<use xlink:href="./img/icons/sprite.svg#icon-read-null"></use>`]
};


export const renderAudioLinkCollection = (data,collection,location)=>{
    //chạy qua các phần tử book ở trong, bắt gặp thằng nào có link thì lấy luôn, còn nếu không sau tất cả thì trả null
    for(let bookID of collection.childBookIDs){
        let audioUrl = data.books[bookID].audioUrl;
        if(audioUrl !== "null"){
               return [audioUrl,`<use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>`]
        }
    }
    return ["null",`<use xlink:href="./img/icons/sprite.svg#icon-headphone-null"></use>`]
}




/////////////////////////////////////////////// RENDER IMAGE

export const renderImg = (imgUrl) =>{
        if(imgUrl =="null"){
            imgUrl = "./img/png/book-cover-null.jpg"
        }
        return imgUrl;


}

export const renderImgCollection = (data,collection,location) =>{
    // render đủ 3 cái ảnh vào thành ngần ấy cái thẻ img bên html
    location.innerHTML = "";
    
    for(let index = 0; index < collection.childBookIDs.length; index++){
        let bookID = collection.childBookIDs[index];
        //kiểu gì cũng chèn, chỉ là sau đó thay ảnh dư lào thôi
        let string = `<div class="detail__img detail__img--collection detail__img--collection-${index}"></div>`;
        let imgUrl = data.books[bookID].imgUrl;
        location.insertAdjacentHTML("beforeend",string);

        if(imgUrl!== "null" || 
        imgUrl!== ""){
            getElement(`.detail__img--collection-${index}`).style.backgroundImage = `url(${imgUrl})`;
        }else{
            getElement(`.detail__img--collection-${index}`).style.backgroundImage = `url("./img/png/book-cover-nul.jpg")`;
        }
    }

    //căn lề các thứ
    let bookCount = Number(Array.from(getManyElement(".detail__img--collection")).length);
    console.log(`bookCount = ${bookCount}`);
    
    let bookGap = Number(6-bookCount);
    const constBookGap = bookGap;
    Array.from(getManyElement(".detail__img--collection")).forEach((bookEl,index) => {
        if(index === 0){
            bookEl.style.left = "0";
        }else{
            bookEl.style.left = `${bookGap}rem`;
            bookGap += constBookGap;
        }
    })
}

export const renderImgCollectionBg = (data,collection) => {
    for(let bookID of collection.childBookIDs){
        
        let imgUrl = data.books[bookID].imgUrl;
        if(imgUrl !== "null" ||
           imgUrl !== ""){
               return imgUrl;
           }
    }
    return "./img/png/book-cover-null.jpg";
}



///////RENDER RECOMMEND
export const renderYouMayLikeBooks =(data,book,location) =>{
    //array1 là sách cùng tác giả;
    let randomStart1 = Math.random() * (Number(data.authors[book.parentAuthorID].childBookLength) - 3)
    let array1 = data.authors[book.parentAuthorID].childBookIDs.slice(randomStart1, randomStart1+3);

    //array 2 laf sach cùng thể loại
    let randomStart2 = Math.random() * (Number(data.categories[(book.parentCategoryIDs[0])].childBookLength)-3)
    let array2 = data.categories[(book.parentCategoryIDs[0])].childBookIDs.slice(randomStart2,randomStart2+3)

    let totalArray = (array2.concat(array1));
    
    //xoa sach thua ra khoi mang
    let index = totalArray.findIndex(bookID => bookID === book.bookID);
    if(index > -1){
        totalArray.splice(index,1);
    }
    //làm trống khu vực
    location.innerHTML = "";
    totalArray.slice(0,5).forEach((bookID,index) => {
        let book = data.books[bookID];
        let markup = `

        <div class="detail__recommend--book">
        <div class="detail__recommend--img detail__recommend--img-${index}">

            <div class="detail__button--recommend-container">

                <a class="detail__button--listen" data-link = "${book.audioUrl}">
                    <svg class="detail__button--listen-icon">
                        ${renderIcon("listen",book.audioUrl)}
                    </svg>
                </a>
                <a  class="detail__button--read" data-link = "${book.readUrl}">
                    <svg class="detail__button--read-icon">
                        ${renderIcon("read",book.readUrl)} 
                    </svg>
                </a>
                <a class="detail__button--download">
                    <svg class="detail__button--download-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                    </svg>
                </a>


            </div>
        </div>

        <p class="detail__recommend--title">
           ${renderTitle(book.title)}
        </p>

        <div class="detail__recommend--star rating__container">
                ${renderStar(book.ratingScore)}
        </div>
        
        <a href = "#${renderBookID(book)}" class="detail__recommend--btn btn__see-more btn__see-more-blue">
            <span>See More</span>
            <svg class=" btn__see-more-icon icon-arrow">
                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
            </svg>
        </a>

    </div>
        `;
        location.insertAdjacentHTML("beforeend",markup);
        document.querySelectorAll(`.detail__recommend--img-${index}`)[0].style.backgroundImage = `url(${renderImg(book.imgUrl)})`
         
    })

    //add sự kiện tới trang đọc 
    
    controller.addEventBookButton(".detail__insert-book",
                                ".detail__button--recommend-container",
                                ".detail__button--read",
                                ".detail__button--listen");

    controller.addEventBookButton(".detail__insert-book",
                                ".detail__link--container-book",
                                ".detail__link--read",
                                ".detail__link--listen")
}




export const renderBookFromCollection =(data,collection,location)=>{
    location.innerHTML = "";
    collection.childBookIDs.forEach((bookID,index) => {
        let book = data.books[bookID];
        let markup = `
    
            <div class="book__card">
            <div class="book__bookmark">
                <svg class="book__bookmark-icon">
                    <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                </svg>
            </div>
            
            <div class="book__img book__img-${index}">

                    <div class="book__button--container">

                        <a class="book__button--listen" data-link = "${book.audioUrl}">
                            <svg class="book__button--listen-icon">
                                ${renderIcon("listen",book.audioUrl)}
                            </svg>
                        </a>
                        <a class="book__button--read" data-link = "${book.readUrl}"> 
                            <svg class="book__button--read-icon">
                            ${renderIcon("read",book.readUrl)} 
                            </svg>
                        </a>
                        <a class="book__button--download">
                            <svg class="book__button--download-icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                            </svg>
                        </a>


                    </div>

            </div>

            <div class="book__info">
                <h3 class="book__title">${renderTitle(book.title)}</h3>
                <h4 class="book__author">
                    <span class="book__author--1">by</span>
                    <span class="book__author--2">${renderAuthorBook(data,book)}</span>
                </h4>
                <div class="book__rating rating__container">

                        ${renderStar(book.ratingScore)}
                    
                </div>

                <p class="book__description">${renderDescriptionBook(book.description)}</p>
                <a href="#${bookID}" class="book__button btn__see-more btn__see-more-blue">
                    <span>See More</span>
                    <svg class=" btn__see-more-icon icon-arrow">
                        <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                    </svg>
                </a>
            </div>

            
        </div>
        `
        location.insertAdjacentHTML("beforeend",markup);
        document.querySelector(".detail__insert-collection").querySelector(`.book__img-${index}`).style.backgroundImage = `url(${renderImg(book.imgUrl)})`
        

    })
    controller.addEventBookButton(".detail__insert-collection",
                                ".detail__button--recommend-container",
                                ".book__button--read",
                                ".book__button--listen");

    controller.addEventBookButton(".detail__insert-collection",
                                ".book__button--container",
                                ".detail__link--read",
                                ".detail__link--listen")
    
}




export const removeDetail = ()=>{
    // remove detail book and detail collection at the same time
    getManyElement('.detail__background--container')[0].classList.remove('detail__background--container-show');
    getManyElement('.detail__button--container')[0].classList.remove('detail__button--container-show');
    getManyElement('.detail__info--container')[0].classList.remove('detail__info--container-show');
    getManyElement('.detail__img--container')[0].classList.remove('detail__img--container-show');
    getManyElement('.detail__main--container')[0].classList.remove('detail__main--container-show');

    getManyElement('.detail__background--container')[1].classList.remove('detail__background--container-show');
    getManyElement('.detail__button--container')[1].classList.remove('detail__button--container-show');
    getManyElement('.detail__info--container')[1].classList.remove('detail__info--container-show');
    getManyElement('.detail__img--container')[1].classList.remove('detail__img--container-show');
    getManyElement('.detail__main--container')[1].classList.remove('detail__main--container-show');

}

export const renderDetailBook = (data,book) => {
    console.log("render detail book")
    getManyElement(".detail__title")[0].textContent = book.title;
    getManyElement(".detail__author--name")[0].textContent = renderAuthorBook(data,book);
    getManyElement(".detail__author--publication")[0].textContent = data.authors[book["parentAuthorID"]].childBookLength + " " + "Publications";
    getManyElement(".detail__author--rate")[0].textContent = authorRating(data,book.parentAuthorID);
    getManyElement(".detail__item--rating-star")[0].innerHTML = renderStar(book.ratingScore);
    getManyElement(".detail__item--rating-count")[0].textContent = book.ratingCount;
    getManyElement(".detail__about--description")[0].textContent = renderDescription(book.description);
    getManyElement(".detail__categories--container")[0].innerHTML = renderTag(data,book.parentCategoryIDs);
    getManyElement(".detail__link--read")[0].dataset.link = book.readUrl;
    getManyElement(".detail__link--listen")[0].dataset.link = book.audioUrl;
    getManyElement(".detail__link--read--icon")[0].innerHTML = renderIcon("read",book.readUrl);
    getManyElement(".detail__link--listen--icon")[0].innerHTML = renderIcon("listen",book.audioUrl);

    getManyElement(".detail__score--point")[0].textContent = book.ratingScore;
    getManyElement(".detail__score--star")[0].innerHTML = renderStar(book.ratingScore);
    getManyElement(".detail__score--vote")[0].textContent = book.ratingCount + " " + "Votes";

    getManyElement(".detail__img")[0].style.backgroundImage = `url(${renderImg(book.imgUrl)})`;
    getManyElement(".detail__background--bg")[0].style.backgroundImage = `url(${renderImg(book.imgUrl)})`;

    renderYouMayLikeBooks(data,book,getManyElement(".detail__recommend--container")[0])


}

export const renderDetailCollection = (data,collection) => {
    getManyElement(".detail__title")[1].textContent = collection.title;
    getManyElement(".detail__author--name")[1].textContent = renderAuthorCollection(data,collection);
    getManyElement(".detail__author--publication")[1].textContent = data.authors[collection["parentAuthorID"]].childBookLength + " " + "Publications";
    getManyElement(".detail__author--rate")[1].textContent = authorRating(data,collection.parentAuthorID);
    getManyElement(".detail__item--rating-star")[1].innerHTML = renderStar(collection.ratingScore);
    getManyElement(".detail__item--rating-count")[1].textContent = collection.ratingCount;
    getManyElement(".detail__about--description")[1].textContent = renderDescription(collection.description);
    getManyElement(".detail__categories--container")[1].innerHTML = renderTag(data,collection.parentCategoryIDs);
    console.log(renderReadLinkCollection(data,collection)[1]);
    console.log(renderAudioLinkCollection(data,collection)[1]);
    getManyElement(".detail__link--read")[1].dataset.link = renderReadLinkCollection(data,collection)[0];
    getManyElement(".detail__link--listen")[1].dataset.link = renderAudioLinkCollection(data,collection)[0];
    getManyElement(".detail__link--read--icon")[1].innerHTML = renderReadLinkCollection(data,collection)[1];
    getManyElement(".detail__link--listen--icon")[1].innerHTML = renderAudioLinkCollection(data,collection)[1];

    getManyElement(".detail__score--point")[1].textContent = collection.ratingScore;
    getManyElement(".detail__score--star")[1].innerHTML = renderStar(collection.ratingScore);
    getManyElement(".detail__score--vote")[1].textContent = collection.ratingCount + " " + "Votes";

    renderImgCollection(data,collection,getElement(".detail__img--container-collection"));
    getManyElement(".detail__background--bg")[1].style.backgroundImage = `url(${renderImgCollectionBg(data,collection)})`;

    renderBookFromCollection(data,collection,getManyElement(".detail__recommend--container")[1])
}

// vieet renderReadLinkCollection. renderAudioLinkCollection trar ra 1 array 2 phaafn tuwr, 1 cái là link, 1 cái là html icon
// viết renderImgCollection
// viết renderBookFromCollection;


///////////////////// SHOW OR HIDE DETAIL

export const showDetailBook = ()=>{
    getManyElement('.detail__background--container')[0].classList.add('detail__background--container-show');
    getManyElement('.detail__button--container')[0].classList.add('detail__button--container-show');
    getManyElement('.detail__info--container')[0].classList.add('detail__info--container-show');
    getManyElement('.detail__img--container')[0].classList.add('detail__img--container-show');
    getManyElement('.detail__main--container')[0].classList.add('detail__main--container-show');
 //    console.log("get hereee")
 }
 export const showDetailCollection = ()=>{
    getManyElement('.detail__background--container')[1].classList.add('detail__background--container-show');
    getManyElement('.detail__button--container')[1].classList.add('detail__button--container-show');
    getManyElement('.detail__info--container')[1].classList.add('detail__info--container-show');
    getManyElement('.detail__img--container')[1].classList.add('detail__img--container-show');
    getManyElement('.detail__main--container')[1].classList.add('detail__main--container-show');
 }
 
 export const disablePageBook = () =>{
     getManyElement('.detail-page')[0].classList.add('detail-page-show');
     getElement(".home__background").classList.add("hidden-scrolly");
 }
 export const disablePageCollection = () =>{
     getManyElement('.detail-page')[1].classList.add('detail-page-show');
     getElement(".home__background").classList.add("hidden-scolly");
 }
 
 export const enablePageBook = () =>{
     getManyElement('.detail-page')[0].classList.remove('detail-page-show');
     getElement(".home__background").classList.remove("hidden-scrolly");
 }
 export const enablePageCollection = () =>{
     getManyElement('.detail-page')[1].classList.remove('detail-page-show');
     getElement(".home__background").classList.remove("hidden-scolly");
 }
 
 
 



function getElement(selector){
    return document.querySelector(selector)
};
function getManyElement(selector){
    return document.querySelectorAll(selector)
};





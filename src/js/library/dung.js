import MainModel from "../models/MainModel"
import {elements,renderLoading,removeLoading} from '../library/base';
import {components} from '../library/components';

export const setUpDungPage = async() => {

/////////// SET UP BASE

const index = {}

//////////////////////////////////////////// DUNG DATAS
let datas = {
    categories: state.main.dungCategories,
    books: state.main.dungBooks,
    collections: state.main.dungCollections,
    authors: state.main.dungAuthors,
    authors: state.main.dungAuthors
}

window.datas = datas;

//////////////////////////////////////////////////////////////////////////////////////////////////////

//SECTION POPULAR
index.loadAllBook = async function () {
    let result = firebase.firestore().collection('data').doc('database').collection('books')
    let res = await result.get()

    let allBook = transformDocs(res.docs)
    popularModel.saveAllBook(allBook)

    // console.log(popularModel.allBook);
}

index.loadAllAuthor = async function () {
    let result = firebase.firestore().collection('data').doc('database').collection('authors')
    let res = await result.get()

    let allAuthor = transformDocs(res.docs)
    popularModel.saveAllAuthor(allAuthor)

    // console.log(popularModel.allAuthor);
}

index.loadAllCategory = async function () {
    let result = firebase.firestore().collection('data').doc('database').collection('categories')
    let res = await result.get()

    let allCat = transformDocs(res.docs)
    popularModel.saveAllCategory(allCat)

    // console.log(popularModel.allCategory);
}


index.findAuthor = function (authorId) {
    let allAuthor = popularModel.allAuthor
    for (let author of allAuthor) {
        if (author.authorID == authorId) {
            return author.authorName
        }
    }
}


index.caculateAuthorScore = function () {
    let allAuthor = popularModel.allAuthor
    let allBook = popularModel.allBook

    //run all the author 
    let authorRanking = []
    for (let author of allAuthor) {
        let childBookIDs = author.childBookIDs
        //run all the book id of one author
        let scoreArr = []
        for (let bookId of childBookIDs) {                  //check all the book has the same id with childBookIDs
            allBook.forEach(book => {
                if (book.bookID === bookId) {
                    scoreArr.push(book.ratingScore)

                }
            })
        }
        let authorTotal = 0
        for (let i = 0; i <= scoreArr.length - 1; i++) {
            authorTotal += Number(scoreArr[i])
        }

        let authorScore = Number(authorTotal / (scoreArr.length))

        authorRanking.push({
            authorName: author.authorName,
            authorScore: authorScore,
        })
    }
    index.sortDescending(authorRanking, 'authorScore')

    return authorRanking
}



index.sortDescending = function (array, field) {

    // for (let i = 1; i < array.length; i++) {
    //     let temp = array[i]
    //     let j = i - 1
    //     for (; j >= 0 && array[j][field] < temp[field]; j--) {
    //         // Moves the value greater than temp back by one unit  
    //         array[j + 1] = array[j]
    //     }
    //     array[j + 1] = temp;
    // }
    let tem;
    let i, j;
    for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i][field] < array[j][field]) {

                tem = array[i][field];

                array[i][field] = array[j][field];

                array[j][field] = tem;

            }
        }
    }
    return array
}



function transformDoc(doc) {
    let data = doc.data()
    data.id = doc.id
    return data
}

//
function transformDocs(docs) {
    return docs.map(transformDoc)
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// MODEL

// import * as popularView from "../views/popularView";
// import * as index from "../index";
const popularModel = {
    popularModelCategories: null,
    popularModelBooks: [],
    allBook:null,
    allAuthor: null,
    allCategory: null,
    allCollection: null
}

popularModel.saveCat = function (book) {
    //     for(let booktype of popularModel.popularModelCategories){
    //         if(booktype.categoryName == book.categoryName){
    //             let index = popularModel.popularModelCategories.indexOf(booktype)
    //             popularModel.popularModelCategories.splice(index,1)
    //             popularModel.popularModelCategories.push(book)
    //         }else{
    //             popularModel.popularModelCategories.push(book)
    //         }
    //     }
    // popularModel.popularModelCategories.push(book)
    popularModel.popularModelCategories = book


}

popularModel.saveBook = function (book) {
    popularModel.popularModelBooks.push(book)
}

popularModel.saveAllAuthor = function(author){
    popularModel.allAuthor = author
}

popularModel.saveAllBook = function(book){
    popularModel.allBook = book
}

popularModel.saveAllCategory = function(cat){
    popularModel.allCategory = cat
}

popularModel.saveAllCollection = function(collection){
    popularModel.allCollection = collection
}


///////////////////////////////////////////////////////////////////////////////////////////////////// VIEW



// import * as popularModel from "../models/popularModel";
// import * as index from "../index";

const popularView = {}


// index.loadBook()
// let popularModelBooks = popularModel.popularModelBooks
// console.log(popularModelBooks);


popularView.showPopularRack = async function () {


    // await index.loadAllAuthor()
    // await index.loadAllBook()
    // await index.loadAllCategory()
    popularModel.saveAllBook(datas.books)
    // console.log(popularModel.allBook);

    popularModel.saveAllCategory(datas.categories)
    // console.log(popularModel.allCategory);

    popularModel.saveAllAuthor(datas.authors)
    // console.log(popularModel.allAuthor);

    popularModel.saveAllCollection(datas.collections)
    // console.log(popularModel.allCollection);



    // book
    // popular section-----------------------
    //------------------Author of the Week-----------------//
    index.caculateAuthorScore()
    popularView.showAuthorOfTheWeek()

    //------------------Popular by Genre-----------------//
    popularView.showPopularBook()

    //--------------------Top of the week
    popularView.showTopOfTheWeek()

    // collection
    // ----------------categories
    popularView.showCollectionCategories()
    popularView.showCollection()


}



let a = ""        //this stupid thing will be fixed
popularView.showPopularBook = async function () {
    let categoryInfo

    if (!a) {
        categoryInfo = popularView.findCategoryWithField('categoryName', 'Business')
    } else {
        categoryInfo = popularView.findCategoryWithField('categoryName', a)    //findding all book ID in categor income
    }
    let categoryId = categoryInfo.categoryID
    let bookByCategory = popularView.findBookArrWithField('parentCategoryIDs', categoryId)
    index.sortDescending(bookByCategory, 'viewCount')

    // show popular bookrack while a category is choosen
    let popularBookShelf = document.getElementById("popular-bookshelf")
    popularBookShelf.innerHTML = ''
    if (bookByCategory.length >= 6) {
        for (let i = 0; i <= 5; i++) {
            popularView.appendPopularBookHtml(i, bookByCategory, popularBookShelf)

        }
    } else {
        for (let i = 0; i <= bookByCategory.length - 1; i++) {
            popularView.appendPopularBookHtml(i, bookByCategory, popularBookShelf)
        }
    }
    let bookInPopolarBookShelfLength = (popularBookShelf.children.length);


///////////// tính năng bookmark của dũng
    for (let a = 0; a < bookInPopolarBookShelfLength; a++) {
        let bookmarkButton = document.getElementById(`bookmark-popular-book-${a}`)
        bookmarkButton.onclick = () => {
            // console.log(bookmarkButton);

            // console.log(bookmarkButton.getAttribute('data-bookmark-book-id'));
            bookmarkButton.innerHTML = `
            <svg class="book__bookmark-icon">
            <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
        </svg>
            `

        }
    }


    // choose another category button
    let categoryDiv = document.getElementsByClassName('popular__category--list')[0]
    categoryDiv.onclick = (e) => {
        let categoryTags = document.getElementsByClassName('popular__category-item')
        let target = e.target.closest(".popular__category-item")
        if (!target) {
            return
        }
        for (let categoryTag of categoryTags) {
            categoryTag.className = 'popular__category-item'
        }

        target.className = 'popular__category-item popular__category--item--active'

        // console.log(e.target.closest(".popular__category-item").innerHTML)
        a = e.target.closest(".popular__category-item").innerHTML
        popularView.showPopularBook()
    }

    addEventBookButton();
}


popularView.showAuthorOfTheWeek = function () {
    let authorRanking = index.caculateAuthorScore()
    let authorOfTheWeekRack = document.getElementsByClassName('popular__author--list')[0]

    for (let i = 0; i <= 7; i++) {
        let authorName = authorRanking[i].authorName
        authorOfTheWeekRack.innerHTML += `
        <li class="popular__author--item">
                                    <div class="popular__author--img popular__author--img-${i + 1}"></div>
                                    <div class="popular__author--name popular__author--name-${i + 1}">${authorName}</div>
                                </li>

        `
    }
}



let i = 0
popularView.showTopOfTheWeek = function () {
    let allBook = popularModel.allBook
    let bookTopOfTheWeek = index.sortDescending(allBook, 'ratingScore')

    let top3 = bookTopOfTheWeek.slice(0, 3)
    let topWeekInfoDiv = document.getElementsByClassName('topweek__info')[0]


    let leftButton = document.getElementsByClassName('pagination__left pagination__left-topweek')[0]
    leftButton.onclick = () => {
        if (i > 0 && i <= 2) {
            // console.log('left');
            i -= 1
            popularView.showTopOfTheWeek()
        }

    }
    let rightButton = document.getElementsByClassName('pagination__right pagination__right-topweek')[0]
    rightButton.onclick = () => {

        if (i >= 0 && i < 2) {
            i += 1
            popularView.showTopOfTheWeek()
        }
    }




    let title = top3[i].title
    let author = index.findAuthor(top3[i].parentAuthorID)
    let description = top3[i].description
    let rating = top3[i].ratingScore
    let imgUrl = top3[i].imgUrl;
    let ID = top3[i].bookID;



    topWeekInfoDiv.innerHTML = ''
    topWeekInfoDiv.innerHTML = `
    <h3 class="topweek__title">${title}</h3>
                                    <h4 class="topweek__author">
                                        <span class="topweek__author--1">by</span>
                                        <span class="topweek__author--2">${author}</span>
                                    </h4>
                                    <div class="topweek__rating rating__container" id="top-of-the-week-rating-${i}">
                                    </div>

                                    <p class="topweek__description">${description}</p>
                                    <a href="#${ID}" class="topweek__button btn__see-line btn__see-line-1">
                                        <span>See more</span>
                                        <svg class="topweek__button--arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                        </svg>
                                    </a>
    `
    popularView.checkStar(rating, "fa fa-star checked-1", "fa fa-star", `top-of-the-week-rating-${i}`)


    document.getElementsByClassName('topweek__img topweek__img-1')[0].style.backgroundImage = `url(${imgUrl})`
    document.getElementsByClassName('topweek__book--bg')[0].style.backgroundImage = `url(${imgUrl})`
    document.getElementsByClassName('topweek__book--bg')[1].style.backgroundImage = `url(${imgUrl})`



    let dotDiv = document.getElementsByClassName('topweek__dots')[0]
    dotDiv.innerHTML = ''
    for (let x = 0; x <= 2; x++) {
        if (x == i) {
            dotDiv.innerHTML += `<div class="topweek__dots-round topweek__dots--active"></div>`
        } else {
            dotDiv.innerHTML += `<div class="topweek__dots-round"></div>`
        }
    }
}


popularView.showCollectionCategories = function () {

    let allCategory = popularModel.allCategory
    let collectionCategory = document.getElementsByClassName('collection__category--list')[0]
    collectionCategory.innerHTML = ''
    for (let category of allCategory) {
        let collectionArr = popularView.findCollectionArrWithField('parentCategoryIDs', category.categoryID)
        collectionCategory.innerHTML += `
        <li class="collection__category--item" data-category="buss">
            <svg class="collection__category--icon">
                <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
            </svg>
            <div class="collection__category--name">${category.categoryName}</div>
            <div class="collection__category--count">${collectionArr.length}</div>
        </li>
        `

    }


}

let b = ''
let collectionPageNumber = '1'
popularView.showCollection = function () {
    // solve when users click on the category menu


    let categoryInfo
    if (!b) {
        categoryInfo = popularView.findCategoryWithField('categoryName', 'Technology')
    } else {
        categoryInfo = popularView.findCategoryWithField('categoryName', b)    //findding all book ID in categor income
    }

    let categoryId = categoryInfo.categoryID
    let collectionArr = popularView.findCollectionArrWithField('parentCategoryIDs', categoryId)


    let collectionRack = document.getElementsByClassName('collection__container')[0]

    collectionRack.innerHTML = ""

    let pagination = document.getElementsByClassName('pagination2__list')[0]
    pagination.innerHTML = ''


    //show number at pagination bar
    if (collectionArr.length <= 6) {

        pagination.innerHTML += `
        <li class="pagination2__item pagination2__item--active">1</li>
        `
    } if (collectionArr.length > 6 && collectionArr.length <= 12) {
        // console.log('6 den 12');

        pagination.innerHTML += `
        <li class="pagination2__item pagination2__item--active">1</li>
        <li class="pagination2__item">2</li>
        `
    } if (collectionArr.length > 12) {

        pagination.innerHTML += `
        <li class="pagination2__item pagination2__item--active">1</li>
        <li class="pagination2__item">2</li>
        <li class="pagination2__item">3</li>
            `
    }


    let arrShowed = popularView.showCollectionRack(collectionPageNumber, collectionArr, collectionRack)


    // console.log(arrShowed);

    // // select another collection page
    pagination.onclick = function (e) {
        let collectionRack = document.getElementsByClassName('collection__container')[0]
        let target = e.target.closest('.pagination2__item')
        if (!target) {
            return
        }
        let tagCurrentActive = document.getElementsByClassName('pagination2__item pagination2__item--active')[0]
        tagCurrentActive.className = 'pagination2__item'
        target.className = 'pagination2__item pagination2__item--active'

        popularView.showCollectionRack(target.innerHTML, collectionArr, collectionRack)
    }
    // select another collection
    let categoryDiv = document.getElementsByClassName('collection__category--list')[0]
    categoryDiv.onclick = (e) => {
        let target = e.target.closest(".collection__category--name")
        if (!target) {
            return
        }
        b = target.innerHTML
        popularView.showCollection()
    }

    // gán lại sự kiện khi nhảy trang mới
    addEventCollectionButton();

}


popularView.appendPopularBookHtml = function (i, bookByCategory, popularBookShelf) {
    //- receive field with condition
    let description = popularView.testDescription(bookByCategory[i].description)
    //-------------------------------
    let imgUrl = popularView.testImg(bookByCategory[i].imgUrl)
    //--------------------------------
    let title = popularView.testTitle(bookByCategory[i].title, 18)
    //---------------------------------
    let author = index.findAuthor(bookByCategory[i].parentAuthorID)
    let rating = bookByCategory[i].ratingScore
    let audioLinkCheck = popularView.testBookButton(bookByCategory[i].audioUrl)
    let readLinkCheck = popularView.testBookButton(bookByCategory[i].readUrl)
    let downloadLinkCheck = popularView.testBookButton(bookByCategory[i].downloadUrl)
    let bookID = bookByCategory[i].bookID
    // console.log(bookID);


    popularBookShelf.innerHTML += `
        <div class="book__card">
    <div class="book__bookmark" id='bookmark-popular-book-${i}' >
        <svg class="book__bookmark-icon">
            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use>
        </svg>
    </div>

    <div class="book__img book__img-${i + 1}">

        <div class="book__button--container" id = "book-button-${i}">
        
    // <a href="#!" class="book__button--listen" data-link = "${bookByCategory[i].audioUrl}">
    //     <svg class="book__button--listen-icon">
    //         <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
    //     </svg>
    // </a>
    // <a href="#!" class="book__button--read" data-link ="${bookByCategory[i].readUrl}">
    //     <svg class="book__button--read-icon">
    //         <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
    //     </svg>
    // </a>
    // <a href="#!" class="book__button--download">
    //     <svg class="book__button--download-icon">
    //         <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
    //     </svg>
    // </a>
        </div>

    </div>

    <div class="book__info">
        <h3 class="book__title">${title}</h3>
        <h4 class="book__author">
            <span class="book__author--1">by</span>
            <span class="book__author--2">${author}</span>
        </h4>
        <div class="book__rating rating__container" id='popular-book-rating-${i}'>
        </div>

        <p class="book__description">${description}</p>
        <a href="#!" class="book__button btn__see-more btn__see-more-blue" id = "read-popular-button-${i}">
            <span>See More</span>
            <svg class=" btn__see-more-icon icon-arrow">
                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
            </svg>
        </a>
    </div>


</div>
    `

    //demo link to next page
    let bookCard = document.getElementsByClassName('book__card')[0]
    bookCard.setAttribute('data-book-id', bookID)




    let readButton = document.getElementById(`read-popular-button-${i}`)
    readButton.href = `#${bookID}`

    let bookmarkButton = document.getElementById(`bookmark-popular-book-${i}`)
    bookmarkButton.setAttribute('data-bookmark-book-id', bookID)
    // --------------------------------------------


    let buttonDiv = document.getElementById(`book-button-${i}`)
    popularView.appendButtonBook(readLinkCheck, audioLinkCheck, downloadLinkCheck, buttonDiv,bookByCategory[i].readUrl,bookByCategory[i].audioUrl);
    popularView.checkStar(rating, "fa fa-star checked", "fa fa-star", `popular-book-rating-${i}`);
    document.getElementsByClassName(`book__img book__img-${i + 1}`)[0].style.backgroundImage = `url(${imgUrl})`;
    return popularBookShelf;
}





popularView.showCollectionRack = function (collectionPageNumber, collectionArr, collectionRack) {
    let arrShowed = []
    if (collectionPageNumber == '1' || collectionPageNumber == 1) {
        if (collectionArr.length < 6) {
            arrShowed = collectionArr.slice(0, collectionArr.length)
        } else {
            arrShowed = collectionArr.slice(0, 6)
        }
    } if (collectionPageNumber == '2' || collectionPageNumber == 2) {
        if (collectionArr.length < 12) {
            arrShowed = collectionArr.slice(6, collectionArr.length)
        } else {
            arrShowed = collectionArr.slice(6, 12)
        }
    } if (collectionPageNumber == '3' || collectionPageNumber == 3) {
        if (collectionArr.length < 18) {
            arrShowed = collectionArr.slice(12, collectionArr.length)
        } else {
            arrShowed = collectionArr.slice(12, 18)
        }
    }





    // check condition to show collection in collection rack
    collectionRack.innerHTML = ''
    if (arrShowed.length >= 6) {
        for (let i = 0; i <= 5; i++) {
            popularView.appendCollectionHtml(i, arrShowed, collectionRack)
        }
    }
    if (arrShowed.length < 6) {
        for (let i = 0; i < arrShowed.length; i++) {
            popularView.appendCollectionHtml(i, arrShowed, collectionRack)
        }
    }
    // console.log('this is showCollectionRack function');

    addEventCollectionButton();

    return arrShowed

}

popularView.appendCollectionHtml = function (i, collectionByCategory, collectionRack) {
    let title = popularView.testTitle(collectionByCategory[i].title, 50)
    let bookNumber = collectionByCategory[i].childBookIDs.length
    let rating = collectionByCategory[i].ratingScore
    let childBookIDs = collectionByCategory[i].childBookIDs;
    let collectionID = collectionByCategory[i].collectionID;
    let readUrl = collectionByCategory[i].readUrl;
    let audioUrl = collectionByCategory[i].audioUrl;
    // console.log(childBookIDs);

    let bookInCollection = []
    for (let childBookID of childBookIDs) {
        let bookFound = popularView.findBookWithField('bookID', childBookID)
        bookInCollection.push(bookFound)
    }




    // collectionRack.innerHTML = ''
    collectionRack.innerHTML += `
    <div class="collection__card">

    <div class="collection__card--imgs" id="collection-card-${i}">
    </div>

    <div class="collection__card--btn-right">
        <div class="collection__card--bookmark">
            <svg class="collection__card--bookmark--icon">
                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-orange"></use>
            </svg>
        </div>
        <div class="collection__card__button--container">
            <a class="collection__card__button--listen" data-link = "${audioUrl}">
                <svg class="collection__card__button--listen-icon">
                        ${testCollectionBtn("audio",audioUrl)}
                </svg>
            </a>
            <a class="collection__card__button--read" data-link = "${readUrl}">
                <svg class="collection__card__button--read-icon">
                        ${testCollectionBtn("read",readUrl)}
                </svg>
            </a>
            <a  class="collection__card__button--download">
                <svg class="collection__card__button--download-icon">
                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                </svg>
            </a>
        </div>
    </div>

    <div class="collection__card--body">
        <div class="collection__card--count tag-orange">${bookNumber} books</div>
        <div class="collection__card--title-container">
            <div class="collection__card--title">
                ${title}
            </div>
            <div class="collection__card--author">Various Artist</div>
        </div>
    </div>

    <div class="collection__card--footer">
        <a href="#${collectionID}" class="collection__card--btn-left btn__see-collection">
            <p>See Collection</p>
            <svg class="collection__card--btn-left-icon">
                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
            </svg>
        </a>

        <div class="collection__card--rating rating__container" id="collection-rating-${i}">
        </div>

    </div>


</div>
    `

    function testCollectionBtn(type,url){
        if(type === "read"){
            if(url == "null" || url == ""){
                return ` <use xlink:href="./img/icons/sprite.svg#icon-read-null"></use>`
            }else{
                return ` <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>`
            }
        }else if(type === "audio"){
            if(url == "null" || url == ""){
                return ` <use xlink:href="./img/icons/sprite.svg#icon-headphone-null"></use>`
            }else{
                return ` <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>`
            }
        }
    }

    let bookInCollectionDiv = document.getElementById(`collection-card-${i}`)


    if (bookInCollection.length < 3) {
        bookInCollectionDiv.innerHTML = ''
        for (let x = 0; x < bookInCollection.length; x++) {

            bookInCollectionDiv.innerHTML += `
            <div class="collection__card--img collection__card--img-${x + 1}" id = "collection-card-img-${i}-${x}" ></div>
            `
            let imgUrl = popularView.testImg(bookInCollection[x].imgUrl)

            document.getElementById(`collection-card-img-${i}-${x}`).style.backgroundImage = `url(${imgUrl})`

        }
    } else {
        bookInCollectionDiv.innerHTML = ''
        for (let x = 0; x < 3; x++) {
            bookInCollectionDiv.innerHTML += `
        <div class="collection__card--img collection__card--img-${x + 1}" id = "collection-card-img-${i}-${x}" ></div>
        `
            let imgUrl = popularView.testImg(bookInCollection[x].imgUrl)

            document.getElementById(`collection-card-img-${i}-${x}`).style.backgroundImage = `url(${imgUrl})`
        }
    }



    popularView.checkStar(rating, "fa fa-star checked", "fa fa-star", `collection-rating-${i}`)
    let imgRack = document.getElementsByClassName('collection__card--imgs')[0]
    if (childBookIDs.length <= 3) {
        for (let i = 0; i <= childBookIDs.length; i++) {
            let book = popularView.findBookArrWithField('bookID', childBookIDs[i])
            let bookImg = book.imgUrl


            // document.getElementsByClassName(`collection__card--img collection__card--img-${i+1}`)[0].style.backgroundImage = `url(${bookImg})`
        }
    }
    // console.log('this is append Html function');


}

popularView.checkStar = function (bookRating, checkedClass, uncheckedClass, parentID) {
    let check = Math.round(bookRating)
    let checkRack = document.getElementById(`${parentID}`)
    for (let i = 1; i <= check; i++) {
        checkRack.innerHTML += `
        <span class='${checkedClass}'></span>       `
    }
    for (let i = 1; i <= Number(5 - check); i++) {
        checkRack.innerHTML += `
        <span class='${uncheckedClass}'></span>      
        `
    }
}

popularView.currentButtonUI = function (tagClassName, tagActiveClass, e) {
    let target = e.target.closest(`.${tagClassName}`)
    if (!target) {
        return
    }

    let tagCurrentActive = document.getElementsByClassName(`${tagActiveClass}`)[0]

    tagCurrentActive.className = `${tagClassName}`

    target.className = `${tagActiveClass}`


    return target.innerHTML
}

popularView.findCategoryWithField = function (field, fieldValueIncome) {
    let allCategory = popularModel.allCategory
    for (let cat of allCategory) {
        if (cat[`${field}`] == fieldValueIncome) {
            return cat
        }
    }
}




popularView.findBookArrWithField = function (field, fieldValueIncome) {
    let allBook = popularModel.allBook
    let bookArr = []
    for (let book of allBook) {

        for (let i = 0; i <= book[`${field}`].length; i++) {
            if (book[`${field}`][i] == fieldValueIncome) {
                bookArr.push(book)
                break
            }
        }
    }
    return bookArr
}

popularView.findBookWithField = function (field, fieldValueIncome) {
    let allBook = popularModel.allBook
    let bookFound
    for (let book of allBook) {
        if (book[`${field}`] == fieldValueIncome) {
            bookFound = book

        }

    }
    return bookFound
}


popularView.testDescription = function (description) {
    if (description == 'null') {
        description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vel doloremque placeat suscipit tempora voluptates distinctio. Error nesciunt voluptates, quia iusto, voluptatibus ipsam nemo rem quo fugit hic animi voluptate?`
    }
    if (description.length >= 55) {
        description = description.substring(0, 55)
        description += "..."
    }
    return description
}

popularView.findCollectionArrWithField = function (field, fieldValueIncome) {
    let allCollection = popularModel.allCollection
    let collectionArr = []
    for (let collection of allCollection) {

        for (let i = 0; i <= collection[`${field}`].length; i++) {
            if (collection[`${field}`][i] == fieldValueIncome) {
                collectionArr.push(collection)
                break
            }
        }
    }
    return collectionArr
}

popularView.testTitle = function (title, titleLength) {
    if (title.length >= titleLength) {
        title = title.substring(0, titleLength)
        title += '...'
        return title
    }
    return title
}

popularView.testImg = function (imgUrl) {
    if (imgUrl == 'null') {
        imgUrl = './img/png/book-cover-null.jpg'
    }
    return imgUrl
}

popularView.testBookButton = function (buttonLink) {
    if (buttonLink == '' || buttonLink == "null") {
        return false
    }
    return true
}

popularView.appendButtonBook = function (readCheck, audioCheck, downloadCheck, tagAppended,readUrl,audioUrl) {
    tagAppended.innerHTML = ''
    if (audioCheck) {
        tagAppended.innerHTML += `
        <a class="book__button--listen" data-link ="${audioUrl}">
        <svg class="book__button--listen-icon">
            <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
        </svg>
    </a>
    `
    } if (!audioCheck) {
        tagAppended.innerHTML += `
        <a class="book__button--listen" data-link ="null">
                <svg class="book__button--listen-icon">
                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-null"></use>
                </svg>
            </a>
        `
    }
    if (readCheck) {

        tagAppended.innerHTML += `
        <a class="book__button--read" data-link ="${readUrl}">
                <svg class="book__button--read-icon">
                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                </svg>
            </a>
        `
    } if (!readCheck) {
        tagAppended.innerHTML += `
        <a  class="book__button--read" data-link ="null">
        <svg class="book__button--read-icon">
            <use xlink:href="./img/icons/sprite.svg#icon-read-null"></use>
        </svg>
    </a>`
    } if (downloadCheck) {
        tagAppended.innerHTML += `
        <a class="book__button--download">
        <svg class="book__button--download-icon">
            <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
        </svg>
    </a>
        `
    } if (!downloadCheck) {
        tagAppended.innerHTML += `
        <a class="book__button--download">
        <svg class="book__button--download-icon">
            <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
        </svg>
    </a>
        `
    }

}


popularView.showPopularRack()


/////////////////////////////////////// gán sự kiện đọc


}











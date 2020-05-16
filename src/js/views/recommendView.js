import * as controller from "../index";


export const renderAuthor = (data,book) => {
    return data.authors[book.parentAuthorID].authorName;
}
export const renderStars = function(ratingScore) {
    ratingScore = Math.round(ratingScore);
    let ratingString;
    switch (ratingScore) {
        case 0:
            {
                ratingString = `
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            `
                break;
            }
        case 1:
            {
                ratingString = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            `
                break;
            }
        case 2:
            {
                ratingString = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            `
                break;
            }
        case 3:
            {
                ratingString = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            `
                break;
            }
        case 4:
            {
                ratingString = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            `
                break;
            }
        case 5:
            {
                ratingString = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            `
                break;
            }
    }
    return ratingString;
}

export const renderDot = function(page) {
    let dotString;
    // const dot = document.getElementById("dot");
    // dot.innerHTML = "";
    switch (page) {
        case 0:
            {
                dotString =
                `<div class="recommend__dots-round recommend__dots--active"></div>
                <div class="recommend__dots-round"></div>
                <div class="recommend__dots-round"></div>`
                break;
            }
        case 1:
            {
                dotString =
                `<div class="recommend__dots-round"></div>
            <div class="recommend__dots-round recommend__dots--active"></div>
            <div class="recommend__dots-round"></div>`
                break;
            }
        case 2:
            {
                dotString =
                `<div class="recommend__dots-round"></div>
                <div class="recommend__dots-round"></div>
                <div class="recommend__dots-round recommend__dots--active"></div>`
                break;
            }
    }
    return dotString;
}

export const renderTitle = function(title) {
    if (title.length > 40) {
        return `${title.substr(0,40)}...`
    }
    if (title.length < 23) {
        return `${title}                                  `
    }
    return title
}

export const renderAudioUrl = function(audioUrl) {
    let audioString;
    if (audioUrl = "null") {
        audioString =
            `<svg class="book__button--listen-icon">
        <use xlink:href="./img/icons/sprite.svg#icon-headphone-null"></use> 
    </svg>`
    } else
        audioString =
        `<svg class="recommend__button--listen-icon">
        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
    </svg>`
    return audioString
}

export const renderReadUrl = function(readUrl) {
    console.log(readUrl)
    let readString;
    if (readUrl === "null") {
        readString =
            `<svg class="book__button--read-icon">
                <use xlink:href="./img/icons/sprite.svg#icon-read-null"></use> 
             </svg>`
    } else
        readString =
        `<svg class="book__button--read-icon">
            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
        </svg>`
    return readString
}


export const renderDownloadUrl = function(downloadUrl) {
    let downloadString;
    if (downloadUrl === "null") {
        downloadString =
            `<svg class="book__button--download-icon">
        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
    </svg>`
    } else
        downloadString =
        `<svg class="recommend__button--download-icon">
    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
</svg>`
    return downloadString;
}

export const renderImg = (imgUrl) =>{
    if(imgUrl ==="null"){
        imgUrl = "./img/png/book-cover-null.jpg"
    }
    return imgUrl;


}



export const renderRecommend = function(data,array, page = 0) {
    document.querySelector(".recommend__grid").innerHTML = "";
    let start = 5 * page;
    let end = start + 5;
    array.slice(start, end).forEach(async(book, index) => {
        const markup = `
            <div id="book1" class="recommend__card">

            <div class="recommend__img recommend__img-${index}">
                <div class="recommend__bookmark">
                    <svg class="recommend__bookmark-icon">
                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                        </svg>
                </div>

                <div class="recommend__button--container">

                    <a class="recommend__button--listen" data-link="${book.audioUrl}">
                        ${renderAudioUrl(book.audioUrl)}
                    </a>
                    <a class="recommend__button--read" data-link = "${book.readUrl}">
                        ${renderReadUrl(book.readUrl)}
                    </a>
                    <a class="recommend__button--download">
                        ${renderDownloadUrl(book.downloadUrl)}
                    </a>


                </div>

            </div>

            <div class="recommend__info">
                <h3 class="recommend__title">${renderTitle(book.title)}</h3>
                <h4 class="recommend__author">
                    <span class="recommend__author--1">by</span>
                    <span class="recommend__author--2">${renderAuthor(data,book)}</span>
                </h4>
                <div class="recommend__rating rating__container">

                    ${renderStars(book.ratingScore)}

                </div>

                <a href="#${book.bookID}" class="recommend__button btn__see-more btn__see-more-blue">
                    <span>See More</span>
                    <svg class=" btn__see-more-icon icon-arrow">
                        <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                    </svg>
                </a>
            </div>

            </div>

        `

        document.querySelector(".recommend__grid").insertAdjacentHTML("beforeend", markup);

        document.querySelector(`.recommend__img-${index}`).style.backgroundImage = `url(${renderImg(book.imgUrl)})`
            //var imgString;
            // if (imgUrl` = "null") {
            //     document.querySelector(`.recommend__img-${index}`).style.backgroundImage = `url(../img/png/book-cover-null.jpg)`

        // } //else
        // //     document.querySelector(`.recommend__img-${index}`).style.backgroundImage = `url(${book.imgUrl})`


    })
    document.querySelector(".recommend__grid").insertAdjacentHTML("afterend",`
            <div id="dot" class="recommend__dots">
                ${renderDot(page)}
            </div>
    `)
}
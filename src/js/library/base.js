export const elements = (page)=>{
    // SAME
    const getElement = (selector)=>{
        return document.querySelector(selector)
    };
    const Obj = {
        insert: getElement('.insert'),
        menuButton: getElement('.nav__container--menu')
    }

    //Login Page
    if(page === 'login'){

    }

    
    //Home Page
    if(page === 'home'){
        // MENU
            Obj.modalMenuBar = getElement('.modal__menuBar');
            Obj.menuClose = getElement('.menu-close');
            Obj.menuBar = getElement('.menuBar');
        //NEWLY
            Obj.newlyContainer = getElement('.newly__container');
            Obj.pagination = getElement('.pagination');
            Obj.leftBtnNewly = getElement('.pagination__left-newly');
            Obj.rightBtnNewly = getElement('.pagination__right-newly');

        //COLLECTION
            Obj.collectionCategoriesList = getElement(".collection__category--list")
        //HOME BODY
            Obj.homeBody = getElement('.home__body');
        //DEATAIL PAGE
            Obj.insertDetailPageBook = getElement('.detail__insert-book');
            Obj.insertDetailPageCollection = getElement('.detail__insert-collection');
            Obj.detailBackgroundContainer = getElement('.detail__background--container');
            Obj.detailButtonContainer = getElement('.detail__button--container');
            Obj.detailInfoContainer = getElement('.detail__info--container');
            Obj.detailImgContainer = getElement('.detail__img--container');
            Obj.detailMainContainer = getElement('.detail__main--container');
    };

    return Obj;
}

export const DOMselection = {

}

export const renderLoading = (container) =>{
    let markup = `
    <div class="progress__background">

        <svg class="progress__logo">
            <use xlink:href="./img/icons/sprite.svg#icon-logo"></use> 
        </svg>
        <div class="progress container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    `
    container.insertAdjacentHTML("afterbegin",markup);
}

export const removeLoading = ()=>{
    let el = document.querySelector(".progress__background");
   el.parentElement.removeChild(el)
}

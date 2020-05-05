/////////// SET UP BASE
    
    const getElement = (selector)=>{
        return document.querySelector(selector)
    };

    const element = {
        insert: getElement('.insert'),
        menuButton: getElement('.nav__container--menu'),
                    // MENU
        modalMenuBar: getElement('.modal__menuBar'),
        menuClose: getElement('.menu-close'),
        menuBar: getElement('.menuBar'),
    //NEWLY
        newlyContainer: getElement('.newly__container'),
        pagination: getElement('.pagination'),
        leftBtnNewly: getElement('.pagination__left-newly'),
        rightBtnNewly: getElement('.pagination__right-newly'),
    }


/////////////////////////////////////////////////// HANDLE EVENT ///////////////////////////////////////////////////


    //MENU BAR ONPEN CLOSE HANDLE
    element.menuBar.addEventListener('click',(e)=>{
        if(e.target.matches('.menu-close, .menu-close *')){

            element.menuBar.classList.add("close")
            element.modalMenuBar.classList.add("close")
            
        }
    })

    element.menuButton.addEventListener('click', ()=>{
            element.menuBar.classList.remove("close")
            element.modalMenuBar.classList.remove("close")
    })



    ///// SLIDER HANDLER FOR NEWLY CONTAINER
    element.pagination.addEventListener('click',(e)=>{
        let currentPos = Number(element.newlyContainer.dataset.pos);

        if(e.target.matches(".pagination__left-newly,.pagination__left-newly *") && currentPos < 0){
            let afterPos = currentPos + 50;
            element.newlyContainer.style.transform = `translateX(${afterPos}rem)`
            element.newlyContainer.dataset.pos = afterPos;

        }else if(e.target.matches(".pagination__right-newly,.pagination__right-newly *") && currentPos > -200){
            let afterPos = currentPos - 50;
            element.newlyContainer.style.transform = `translateX(${afterPos}rem)`
            element.newlyContainer.dataset.pos = afterPos;
        }
    })



    /////////////////////////////////////////////////// CỦA DŨNG ///////////////////////////////////////////////////
{
    //SECTION POPULAR

}








    /////////////////////////////////////////////////// CỦA THƯ ///////////////////////////////////////////////////
{
    //SECTION NEWLY
    //SECTION RECOMMEND
}








    /////////////////////////////////////////////////// CỦA MINH ///////////////////////////////////////////////////
{
    //SECTION TOP WEEK
}







    /////////////////////////////////////////////////// CỦA DIỆU ///////////////////////////////////////////////////


    //SECTION COLLECTION

    const domString = {
        collectionCard : '.collection__card',
    }

    const collectionArray = document.querySelectorAll(domString.collectionCard);
    console.log(collectionArray);










    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
// TRIGGER ==> FIREBASE ==> MODEL  ==> index.js    ==> UI
                      //==> VIEW                  ==> #id
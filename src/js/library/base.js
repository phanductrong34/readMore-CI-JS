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
            
    };

    return Obj;
}

export const elements = (page)=>{
    // SAME
    const getElement = (selector)=>{
        return document.querySelector(selector)
    };
    const Obj = {
        insert: getElement('.insert'),
    }

    //Login Page
    if(page === 'login'){

    }

    
    //Home Page
    if(page === 'home'){
            Obj.modalMenuBar = getElement('.modal__menuBar');
            Obj.menuClose = getElement('.menu-close');
            Obj.menuBar = getElement('.menuBar');
    };

    return Obj;
}

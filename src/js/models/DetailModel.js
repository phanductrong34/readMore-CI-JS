export default class DetailModel{
    contructor(){

        this.currentCollection ={

        }

        this.currentBook = {

        }
    };
    //data la state.main 
    addDetailBook(stateMain, itemID){
        this.currentBook = stateMain.books[itemID];
    
    }
    addDetailCollection(stateMain, itemID){
        this.currentCollection = stateMain.collections[itemID];
    
    }

}
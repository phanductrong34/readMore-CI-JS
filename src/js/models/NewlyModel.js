export default class NewlyModel{
    constructor(){
        this.newlyArray = Array();
    }
    //data là state.main
    addNewlyBooks(data){
        this.newlyArray = [];
        return data.dungBooks.slice(data.dungBooks.length-6,data.dungBooks.length).forEach(book => {
           this.newlyArray.unshift(book.bookID);
        })
    }
}
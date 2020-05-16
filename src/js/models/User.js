import * as readView from "../views/readView"


export default class User{
    constructor(currentUser){
            this.userID = "";                                
            this.bookmarkBookIDs= [];
            this.bookmarkCollectionIDs = [];
            this.hourCount = 0;                         // bất cứ khi nào ở trang đọc hoặc nghe, ta tính chung        
            this.recentlyRead = Array();
            this.recentlyListen= Array();
            this.favCategories = [];
    }

    addBookToRecently(bookID,readUrl){
        let obj = {
            bookID,
            currentPage: 1,
            totalPage: (function(){
                let pdfDoc = "";
                let url = 'https://cors-anywhere.herokuapp.com/' + readUrl;
                pdfjsLib
                .getDocument(url)
                .promise.then(pdfDoc_ => {
                    pdfDoc = pdfDoc_;
            
                    return pdfDoc.numPages;
                })
                .catch(err => {
                    return 0;
                }); 
            })()
        }
        this.recentlyRead.push()
    }
    async getUserData(){
        //lấy tử firestore và lưu vào data
        let db = firebase.firestore().collection("data").doc("database")
        let result= firebase.auth().currentUser;
        currentUser = db.collection("userData").doc(result.uid)

        this.userID = currentUser.userID,                                  
        this.bookmarkBookIDs= currentUser.bookmarkBookIDs,
        this.bookmarkCollectionIDs = currentUser.bookmarkCollectionIDs,
        this.hourCount = currentUser.hourCount,                         // bất cứ khi nào ở trang đọc hoặc nghe, ta tính chung        
        this.recentlyRead = currentUser.recentlyRead;
        this.recentlyListen= currentUser.addBookToRecently;
        this.favCategories = currentUser.favCategories;
    }

    async setUserData(){  
        let db = firebase.firestore().collection("data").doc("database");
        let result= firebase.auth().currentUser;
        let currentUser = await db.collection("userData").doc(result.uid).get();
        //hàm này tạo mới data và tung lên firebase
        let obj = {
            userID : currentUser.id,                                  
            bookmarkBookIDs: [],
            bookmarkCollectionIDs : [],
            hourCount : 0,                         // bất cứ khi nào ở trang đọc hoặc nghe, ta tính chung        
            recentlyRead : Array(),
            recentlyListen: Array(),
            favCategories : []
        }

        console.log(obj)
        db.collection("userData").doc(currentUser.id).set(obj);

    }

    async updateFavCategories(favCategories){
        //ném vào model trước, sau đó lấy từ model tung lên firebase
        this.favCategories = favCategories;

        let db = firebase.firestore().collection("data").doc("database");
        let result= firebase.auth().currentUser;
        await db.collection("userData").doc(result.uid).update({
            favCategories : this.favCategories
        });
    }
}

export default class MainModel{
    constructor(){
        this.categories = new Object,
        this.collections = new Object;
        this.books = new Object;
        this.authors = new Object;
    }
    

    addCategories(){
        const db = firebase.firestore().collection("data").doc("database");

        //lấy từ firebase và cho vào data
        return db.collection("categories").get().then(snapshot => {
            snapshot.docs.forEach(doc =>{
                let template = {
                    categoryID: doc.data().categoryID,
                    categoryName: doc.data().categoryName,
                    childCollectionIDs: doc.data().childCollectionIDs,
                    childBookIDs: doc.data().childBookIDs,
                    childColletionLength : doc.data().childCollectionIDs.length,
                    childBookLength : doc.data().childBookIDs.length,
                    
                }
                this.categories[doc.data().categoryID] = template;
            })
        })

    }

    getCategories(){
        return this.categories;
    }
    
    addCollections(){
        // tất cả collection sẽ đc dùng hết nên lấy tất và lại lưu vào
        // gọi 1 lần luôn, để sau này bật trang detail lấy luôn data ở chỗ này
        const db = firebase.firestore().collection("data").doc("database");
        return db.collection("collections").get().then(snapshot => {
            snapshot.docs.forEach(doc =>{
                let template = {
                        collectionID: doc.data().collectionID,
                        parentCategoryIDs:doc.data().parentCategoryIDs,
                        parentAuthorID: doc.data().parentAuthorID,
                        childBookIDs:doc.data().childBookIDs,
                        title:doc.data().title,
                        description:doc.data().description,
                        imgUrl:doc.data().imgUrl,
                        bookmark: doc.data().bookmark,
                        readUrl:doc.data().readUrl,
                        audioUrl:doc.data().audioUrl,
                        downloadUrl:doc.data().downloadUrl,
                        viewCount:doc.data().viewCount,
                        ratingCount:doc.data().ratingCount,
                        ratingScore:doc.data().ratingScore,
                }

                this.collections[doc.data().collectionID] = template;
            })
        })
    }

    addBooks(){
        const db = firebase.firestore().collection("data").doc("database");

        //lấy từ firebase và cho vào data
        return db.collection("books").get().then(snapshot => {
            snapshot.docs.forEach(doc =>{
                let template = {
                        bookID:doc.data().bookID,
                        parentCategoryIDs: doc.data().parentCategoryIDs,
                        parentCollectionIDs: doc.data().parentCollectionIDs,
                        parentAuthorID: doc.data().parentAuthorID,
                        title:doc.data().title,
                        description:doc.data().description,
                        imgUrl:doc.data().imgUrl,
                        bookmark: doc.data().bookmark,
                        readUrl:doc.data().readUrl,
                        audioUrl:doc.data().audioUrl,
                        downloadUrl:"",
                        viewCount:doc.data().viewCount,
                        ratingCount:doc.data().ratingCount,
                        ratingScore:doc.data().ratingScore,

                }
                this.books[doc.data().bookID] = template;
                    
            })
        })
    }

    addAuthors(){
        const db = firebase.firestore().collection("data").doc("database");
        console.log("addAuthorss")
        //lấy từ firebase và cho vào data
        return db.collection("authors").get().then(snapshot => {
            snapshot.docs.forEach(doc =>{
                let template = {
                    authorID: doc.data().authorID,
                    authorName: doc.data().authorName,
                    childBookIDs:doc.data().childBookIDs,
                    childCollectionIDs: doc.data().childCollectionIDs,
                    childBookLength: doc.data().childBookIDs.length,
                    childCollectionLength: doc.data().childCollectionIDs.length,

                }
                this.authors[doc.data().authorID] = template;
                    
            })
        })
    }


}


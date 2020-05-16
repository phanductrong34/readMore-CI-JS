export default class RecommendModel {
    constructor(){
        this.arrayRecommendBooks = []
    }

    getData(categoryID){
        let db= firebase.firestore().collection("data").doc("database");
        return db.collection("books").where("parentCategoryIDs", "array-contains", `${categoryID}`).orderBy("ratingScore", "desc").get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                    this.arrayRecommendBooks.push(doc.data());
                })
                // console.log(db);
        })
    }
}


export let data = {
    categories : [
        {
            categoryID: "it",
            categoryName:"Technology",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "self",
            categoryName:"Self-helf",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "edu",
            categoryName:"Education",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "art",
            categoryName:"Art-Sport",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "come",
            categoryName:"Comedy",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "nov",
            categoryName:"Classic Novel",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "comic",
            categoryName:"Comic",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "buss",
            categoryName:"Business",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "romantic",
            categoryName:"Romantic",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "psy",
            categoryName:"Psychological",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "health",
            categoryName:"Health",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "cui",
            categoryName:"Cuisine",
            childCollectionIDs: [],
            childBookIDs:[]
        },

    ],

    authors: [
        // {
        //     authorID: 1,
        //     authorName: "JK Rowling",
        //     childBookIDs:[1234],
        //     childCollectionIDs:[123],
        // },
        // {
        //     authorID: "",
        //     authorName: "Robin Sharma",
        //     childBookIDs:[1235],
        //     childCollectionIDs:[],
        // },
    ],

    collections:[
        // {
        //     collectionID:123,
        //     parentCategoryIDs:["lang","psy"],
        //     parentAuthorID: 1,
        //     childBookIDs:[1234,1235],
        //     title:"Combo happiness in life",
        //     description:"this collection will make you happier",
        //     imgUrl:"img link here",
        //     bookmark: false,
        //     readUrl:"read link here",
        //     audioUrl:"audio link here",
        //     downloadUrl:"",
        //     viewCount:""


        // }
    ],

    books: [
        // {
        //     bookID:1234,
        //     parentCategoryIDs: ["psy","health"],
        //     parentCollectionIDs: [123],
        //     parentAuthorID: 1,
        //     title:"Harry potter and the philosopher's stone",
        //     description:"This book is a fantasy adventure",
        //     imgUrl:"image link here",
        //     bookmark: true,
        //     readUrl:"read link here",
        //     audioUrl:"audio link here",
        //     downloadUrl:"",
        //     viewCount:""
        // } ,
        // {
        //     bookID:1235,
        //     parentCategoryIDs: ["buss","lang"],
        //     parentCollectionIDs: [123],
        //     parentAuthorID: 2,
        //     title:"The leader who has no title",
        //     description:"This book is about leadership",
        //     imgUrl:"image link here",
        //     bookmark: true,
        //     readUrl:"read link here",
        //     audioUrl:"audio link here",
        //     downloadUrl:"",
        //     viewCount:""
        // } 
    ],

    bookmarks: [
        // {
        //     userID,
        //     childBookIDs: [],
        //     childCollectionIDs: []
        // }
    ],


  // mỗi người chỉ đc review 1 lần; nếu ấn review lại thì là load lại về và update;
    reviews: [
        // {
        //     bookID,  //trùng với id của sách hoặc collection
        //     totalRatingCount, // ban đầu ren tự động trong khoảng (10-20)
        //     totalRatingScore, //ban đầu ren tự động trong khoảng 3-5
        //     userReviews: [
        //         {
                    
        //             userID,  //trùng với id của người dùng
        //             rating,
        //             content:"",
        //         },
        //         {
        //             userID,  //trùng với id của người dùng
        //             rating,
        //             content:"",
        //         },
        //     ]

        // },
        // {
        //     bookID,  //trùng với id của sách hoặc collection
        //     totalRatingCount, // ban đầu ren tự động trong khoảng (10-20)
        //     totalRatingScore, //ban đầu ren tự động trong khoảng 3-5
        //     userReviews: [
        //         {
                    
        //             userID,  //trùng với id của người dùng
        //             rating,
        //             content:"",
        //         },
        //         {
        //             userID,  //trùng với id của người dùng
        //             rating,
        //             content:"",
        //         },
        //     ]

        // },
    ],

    browseHistory: [
        // {
        //     userID,
        //     bookID,
        //     isDoneRead: true||false,
        //     isDoneListen: true||false,
        //     lastViewAt,
        //     lastListenAt,
        //     lastPage,
        //     lastSec,
        // }
    ]   

}
//bug 1: collection id đẩy vào categories bị nhầm xuống dưới ChildBookIds
//bug 2: rela của collection,book ko đc chạy;
//bug 3: phast đầu tiên thêm sách thì thăng author mới nhận con, nhưng con ko nhận author ID ==> trả ra Undefind ==> có thể là kết quả của find
//bug 4: update xong submit thif data array gốc ko nhận categories mới dù phía cate đã thêm thằng con ==> mối quan hệ 1 chiều thì đc
//bug 5: upadate 1 book đc link sẵn với collection, các rela rấtt tốt, đc giữ nguyên nhưng thằng con bị lặp categories gấp đôi 
        //một lỗi lạ nữa là ko hiểu 1 thằng child book ơ đâu nahry vào cate


//bug6: child input vẫn cho thêm mới hết --> hàm trừ string đi đang ko hoạt động


export const loadFromFireBase = (type,firestore)=>{
     data[type] = firestore;
}
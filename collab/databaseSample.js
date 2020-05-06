let data = {
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
        //     viewCount:"",
        //     ratingCount:0,
        //     ratingScore:0,


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
        //     viewCount:"",
        //     ratingCount:0,
        //     ratingScore:0,

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
        //     viewCount:"",
        //     ratingCount:0,
        //     ratingScore:0,
    
        // } 
    ],


  // mỗi người chỉ đc review 1 lần; nếu ấn review lại thì là load lại về và update;
    reviews: [


        //         {             
        //             userID,  //trùng với id của người dùng
        //             itemID,
        //             rating,
        //             content:"",
        //         },
        //         {
        //             userID,  //trùng với id của người dùng
        //             itemID,
        //             rating,
        //             content:"",
        //         },


        // },
    ],

    userData: [
        // {
        //     userID,
        //     currentBookID:"",                // sách hiện tại dang đọc
        //     currentListenID: "",
        //     isDoneRead: true||false,         // check đọc xong hay chưa
        //     isDoneListen: true||false,
        //     lastViewAt,                      //nếu chưa đọc xong ==> sẽ có trang cuối
        //     lastListenAt,                                    
        //     bookmarkBookIDs: [],
        //     bookmarkCollectionIDs: [],
        //     hourCount,                         // bất cứ khi nào ở trang đọc hoặc nghe, ta tính chung        
        //     recentlyReadIDs: [];
        //     recentlyListenIDs: [];
        //  } 
    ],
    

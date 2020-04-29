
// 1. Lấy từ FireBase vè, chuyển thành JSON.stringify và nhét vào local-storage (tư động khi load trang)

// 2. lấy từ localStorage lưu ra 1 biến của js để tìm kiếm tương tác 

// let data = JSON.parse(localStorage.getItem("data")) 

//fake data lấy từ trong localStorage
const data = {
    categories : [
        {
            categoryID: "psy",
            categoryName:["Psychological"],
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "heath",
            categoryName:"Heath",
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
            categoryID: "it",
            categoryName:"Technology",
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
            categoryID: "comic",
            categoryName:"Comic",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "lang",
            categoryName:"Languages",
            childCollectionIDs: [],
            childBookIDs:[]
        },
        {
            categoryID: "cui",
            categoryName:"Cuisine",
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
            categoryID: "hor",
            categoryName:"Horror",
            childCollectionIDs: [],
            childBookIDs:[]
        }
    ],

    authors: [
        {
            authorID: 1,
            authorName: "JK Rowling",
            childBookIDs:[1234],
            childCollectionID:[123],
        },
        {
            authorID: 2,
            authorName: "Robin Sharma",
            childBookIDs:[1235],
            childCollectionID:[],
        },
    ],

    collections:[
        {
            collectionID:123,
            parentCategoryIDs:["lang","psy"],
            parentAuthorID: 1,
            childBookIDs:[1234,1235],
            title:"Combo happiness in life",
            description:"this collection will make you happier",
            imgUrl:"img link here",
            bookmark: false,
            readUrl:"read link here",
            audioUrl:"audio link here",
            downloadUrl:""


        }
    ],

    books: [
        {
            bookID:1234,
            parentCategoryIDs: ["psy","health"],
            parentCollectionIDs: [123],
            parentAuthorID: 1,
            title:"Harry potter and the philosopher's stone",
            description:"This book is a fantasy adventure",
            imgUrl:"image link here",
            bookmark: true,
            readUrl:"read link here",
            audioUrl:"audio link here",
            downloadUrl:""
        } ,
        {
            bookID:1235,
            parentCategoryIDs: ["buss","lang"],
            parentCollectionIDs: [123],
            parentAuthorID: 2,
            title:"The leader who has no title",
            description:"This book is about leadership",
            imgUrl:"image link here",
            bookmark: true,
            readUrl:"read link here",
            audioUrl:"audio link here",
            downloadUrl:""
        } 
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


const components = {
    book: `
        <fieldset class="container__detail">
        <legend>Data detail</legend>
        <div class="container__detail-description">
            <label for="input-description">Book's Description</label>
            <textarea  id="input-description" cols="30" rows="10" name="description"></textarea>
        </div>

        <div class="container__detail-author">
            <label for="input-author">Book's Author</label>
            <input type="text" id="input-author" name="author">
        </div>
        
        <div class="container__detail-image">
            <label for="input-image">Image Link copy from FireBase</label>
            <input type="text" id="input-image" name="image">
        </div>

        <div class="container__detail-read">
            <label for="input-read">PDF Link copy from FireBase</label>
            <input type="text" id="input-read" name="read">
        </div>

        <div class="container__detail-audio">
            <label for="input-audio">Audio Link copy from FireBase</label>
            <input type="text" id="input-audio" name="audio">
        </div>

        <div class="container__detail_parent-category">
            <label for="input-parent-cate">Choose which categories this books belong to (mutiple allow)</label>
            <div class="categories">
                <span class="categories-tag" data-cateID="psy">Psychological</span>                            
                <span class="categories-tag" data-cateID="health">Heath</span>                            
                <span class="categories-tag" data-cateID="romantic">Romantic</span>                            
                <span class="categories-tag" data-cateID="it">Technology</span>                            
                <span class="categories-tag" data-cateID="buss">business</span>                            
                <span class="categories-tag" data-cateID="comic">Comic</span>                            
                <span class="categories-tag" data-cateID="lang">Languages</span>                            
                <span class="categories-tag" data-cateID="cui">Cuisine</span>                            
                <span class="categories-tag" data-cateID="edu">Education</span>                            
                <span class="categories-tag" data-cateID="hor">Horror</span>                                                      
            </div>
            <input type="text" id="input-parent-cate" name="category" value="" placeholder="Categories tag will appear hear">
        </div>

        <div class="container__detail__parent-collection">
            <label for="input-parent-collec">Type "the exact collections name" does this books belong to (mutiple allow)</label>
            <textarea id="input-parent-collec" cols="30" rows="10" name="collection"></textarea>
        </div>
        
    </fieldset>
    <button type="submit" class="submitBtn">Submit</button>
    <button>Update FireBase</button>
    `,

    collection: `
        <fieldset class="container__detail">
        <legend>Data detail</legend>
        <div class="container__detail-description">
            <label for="input-description">Collection's Description</label>
            <textarea  id="input-description" cols="30" rows="10" name="description"></textarea>
        </div>

        <div class="container__detail-author">
            <label for="input-author">Collection's Author</label>
            <input type="text" id="input-author" name="author">
        </div>
        
        <div class="container__detail-image">
            <label for="input-image">Image Link copy from FireBase</label>
            <input type="text" id="input-image" name="image">
        </div>

        <div class="container__detail-read">
            <label for="input-read">PDF Link copy from FireBase</label>
            <input type="text" id="input-read" name="read">
        </div>

        <div class="container__detail-audio">
            <label for="input-audio">Audio Link copy from FireBase</label>
            <input type="text" id="input-audio" name="audio">
        </div>

        <div class="container__detail_parent-category">
            <label for="input-parent-cate">Choose which categories this collection belong to (mutiple allow)</label>
            <div class="categories">
                <span class="categories-tag" data-cateID="psy">Psychological</span>                            
                <span class="categories-tag" data-cateID="health">Heath</span>                            
                <span class="categories-tag" data-cateID="romantic">Romantic</span>                            
                <span class="categories-tag" data-cateID="it">Technology</span>                            
                <span class="categories-tag" data-cateID="buss">business</span>                            
                <span class="categories-tag" data-cateID="comic">Comic</span>                            
                <span class="categories-tag" data-cateID="lang">Languages</span>                            
                <span class="categories-tag" data-cateID="cui">Cuisine</span>                            
                <span class="categories-tag" data-cateID="edu">Education</span>                            
                <span class="categories-tag" data-cateID="hor">Horror</span>                                                      
            </div>
            <input type="text" id="input-parent-cate" name="category" value="" placeholder="Categories tag will appear hear">
        </div>

        <div class="container__detail__parent-collection">
            <label for="input-parent-collec">Type the exact Books'name belong to this Collection (mutiple allow)</label>
            <textarea id="input-parent-collec" cols="30" rows="10" name="collection"></textarea>
        </div>
        
    </fieldset>
    <button type="submit" class="submitBtn">Submit</button>
    <button>Update FireBase</button>
    `
}

const DOMString = {
    inputType: document.querySelector('#input-type'),
    inputTitle: document.querySelector('#input-title'),
    

    firstBtn: document.querySelector('.firstBtn'),
    btnCreate: document.querySelector(".createBtn"),
    btnUpdate: document.querySelector(".updateBtn"),
    errorTitle: document.querySelector('.error-title'),
    insertHtml: document.querySelector('.insertHTML')

}

const DOMSelector = {
    inputDescription: '#input-description',
    inputAuthor: '#input-author',
    inputImage: '#input-image',
    inputRead: '#input-read',
    inputAudio: '#input-audio',
    inputCategories: '#input-parent-cate',
    inputParentCollections: '#input-parent-collec',
}

/////////////// HANDLE TYPE AND CHOOSE TO RENDER WHICH UI

    DOMString.firstBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const cmd = e.target.textContent;
        const type = DOMString.inputType.value;
        const title = DOMString.inputTitle.value;

        // nếu chưa có gì ở ô title
        if (title == '' || title == null){
            DOMString.errorTitle.textContent = "You must type in this area"
            DOMString.inputTitle.focus()

        // nếu có nhập vào ô title
        }else{
            DOMString.errorTitle.textContent =""
            //nếu là create thì insert trực tiếp vào;
            if(cmd === 'Create'){
                console.log(type)
                type === 'book'
                ? DOMString.insertHtml.innerHTML = components.book
                : DOMString.insertHtml.innerHTML = components.collection

                document.querySelector('legend').textContent = `${cmd} field`
                submitDataHandle(type,cmd);
            


            // nếu là update thì lấy từ localStorage ra, nhưng nếu ko có ở local storage, báo lỗi
            }else if(cmd === 'Update'){
                let localData;
                
                //Chọc vào books hay collections để tìm
                type === 'book'
                ? localData = data.books
                : localData = data.collections;

                 // nếu ko có sách nào hoặc ko tìm thấy title nào tồn tại
                if (localData == null || localData.find(el => el.title === title) == undefined  ) { 
                    DOMString.errorTitle.textContent = `This ${type} hasn't available in data. You must create it first. Or just type correctly again `
                    DOMString.insertHtml.innerHTML = "";
                }else{
                    type === 'book'
                    ? DOMString.insertHtml.innerHTML = components.book
                    : DOMString.insertHtml.innerHTML = components.collection;

                    document.querySelector('legend').textContent = `${cmd} field`
                    // insert các thông tin lấy đc chính xác hiện lại lên trên các ô input
                    let index = localData.findIndex(el => el.title === title);


                    loadData(localData[index],type)    //localData = data.books hoặc collections
                    
                    //sau khi insert đc HTML rồi thì handle sự kiện của categories tag
                    categoriesTagHandle();

                    // handle sự kiện của nút submit nữa
                    submitDataHandle(type,cmd,index);
                }
            }



           
            
        }


    })


///////////////  HANDLE CATEGORIES TAG BUTTON
function categoriesTagHandle(){
    const categoryElement = document.querySelector('.categories');
    categoryElement.addEventListener('click', (e) =>{
        e.preventDefault();
        let categoryTag = e.target.dataset.cateid
        if(categoryTag){
            
            let categoryInput = document.querySelector('#input-parent-cate').value;
            let firstChar;
                categoryInput === "" 
                    ? firstChar = ""
                    : firstChar = "," 
            document.querySelector('#input-parent-cate').value =categoryInput + firstChar + categoryTag
        }

    })
}

///////////////  HANDLE SUBMIT BUTTON
function submitDataHandle(type,cmd, index = -1){ //type là book, cmd là create hay update
       
        document.querySelector('.submitBtn').addEventListener('click',(e) =>{
            e.preventDefault()
            console.log(type,cmd,index)
            console,log(uniqid())
            const [
                inputTitle,
                inputDescription,
                inputImage,
                inputRead,
                inputAudio,
                inputCategories,
                inputParentCollections,
            ] = [
                DOMString.inputTitle,
                document.querySelector(DOMSelector.inputDescription),
                document.querySelector(DOMSelector.inputImage),
                document.querySelector(DOMSelector.inputRead),
                document.querySelector(DOMSelector.inputAudio),
                document.querySelector(DOMSelector.inputCategories),
                document.querySelector(DOMSelector.inputParentCollections),
            ]
             //lấy các input và ném vào khung data có sẵn
            let obj;
            type === 'book'

            ? obj = {
                bookID:-1,
                parentCategoryIDs: [],
                parentCollectionIDs: [],
                parentAuthorID: -1,
                title:"",
                description:"",
                imgUrl:"",
                bookmark: false,
                readUrl:"",
                audioUrl:"",
                downloadUrl:""
            }
            : obj = {
                collectionID:-1,
                parentCategoryIDs:[],
                parentAuthorID: 1,
                childBookIDs:[],
                title:"",
                description:"",
                imgUrl:"",
                bookmark: false,
                readUrl:"",
                audioUrl:"",
                downloadUrl:""
            }

        })

        // sinh ra 1 id cho book(6ký tự) hoặc collection(7 kí tự )(tùy)
        //cho hàm forEach lượt qua các categories id, tìm tới đúng trong data, chỗ array childBookIDs hoặc childCollectionIDs để push vào
        // có 1 hàm đc gọi mỗi lần forEach như thế để kiểm tra có tồn tại trong data hay không để hiện error
        //nếu là book, tìm tới collections trong data và thêm id của mình vào chỗ childbookIds và ngược lại với collection
        //sau đó tùy là create hay update, create thì ta cứ push thẳng vào array books hoặc collection, update thì ta thay index thành index của book đó trong array 

}

////////////// Handle SUBMIT DATA BUTTON


/////// các hàm DRY
function loadData(el,type){   //el ở đây là data.books[i] || data.collections[i]

    console.log(type)
    document.querySelector('#input-description').value = el.description;
    document.querySelector('#input-author').value = (data.authors.find(author => author.authorID === el.parentAuthorID)).authorName;
    document.querySelector('#input-image').value = el.imgUrl;
    document.querySelector('#input-read').value = el.readUrl;
    document.querySelector('#input-audio').value = el.audioUrl;
    document.querySelector('#input-parent-cate').value = (()=>{
        return el.parentCategoryIDs.toString()
    })();

    // rẽ nhánh vì UI sẽ khác nhau
    if(type === 'book'){
        
        document.querySelector('#input-parent-collec').value =(()=>{
            let collectionString ="";
            // lấy từng phần tử collection ID đem đi tìm
            el.parentCollectionIDs.forEach(collectionID =>{
                // tìm trong localStorage ra đúng cái collection ứng với collection ID đó
                const collection = data.collections.find(el => el.collectionID = collectionID)
                // cộng vào String 
                collectionString += collection.title;

            })
            return collectionString;
        })()
    }

    else if (type === 'collection'){
        //childBookIDs
        document.querySelector('#input-parent-collec').value = (()=>{
            let bookString =""
            // lấy từng phần tử collection ID đem đi tìm
            el.childBookIDs.forEach(bookID =>{
                // tìm trong localStorage ra đúng cái collection ứng với collection ID đó
                const book = data.books.find(el => el.bookID = bookID)
                // cộng vào String 
                bookString += book.title;

            })
            return collectionString;
        })();
    }

}








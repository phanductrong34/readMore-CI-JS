import "../css/style.css";
import {components} from './library/components';
import {elements} from './library/base';
import uniqid from 'uniqid';
import {data} from './models/database'; 

let element = elements('all')
switch (element.insert.dataset.page){
    case "login":{
        element = elements('login');
        element.insert.innerHTML = components.login;
        setUpLogin();
        break;
    }
    case "admin":{
        element.insert.innerHTML = components.admin;
        setUpAdmin();
        break;
    }
    case "home":{
        //Handle Menu Bar
        element = elements('home');
        element.insert.innerHTML = components.menuBar;
        setUpHomePage();
        break;

    }

}





///// LOGIN PAGE
function setUpLogin(){
    element = elements('home');

    //ANIMATION 
    var bm = document.getElementsByClassName('bm');
    Array.from(bm).forEach(el =>{
        var animation = bodymovin.loadAnimation({
            container : el,
            path: `../img/lottie/${el.dataset.file}/${el.dataset.file}.json`,
            renderer: 'svg',
            loop: true,
            autoplay: true
        }) 
    })
}

//// HOME PAGE

function setUpHomePage(){
    element = elements('home');

    //Menu Bar close HANDLE
    element.menuBar.addEventListener('click',(e)=>{
        if(e.target.matches('.menu-close, .menu-close *')){

            element.menuBar.classList.remove("showing")
            element.modalMenuBar.classList.remove("showing")
            
        }
    })

    element.menuButton.addEventListener('click', ()=>{
            element.menuBar.classList.add("showing")
            element.modalMenuBar.classList.add("showing")
    })

}

/////ADMIN APGE
function setUpAdmin(){

    // 1. Lấy từ FireBase vè, chuyển thành JSON.stringify và nhét vào local-storage (tư động khi load trang)
    
    // 2. lấy từ localStorage lưu ra 1 biến của js để tìm kiếm tương tác 
    
    // let data = JSON.parse(localStorage.getItem("data")) 
    
    //fake data lấy từ trong localStorage
    
    
    const DOMString = {
        inputType: document.querySelector('#admin-input-type'),
        inputTitle: document.querySelector('#admin-input-title'),
        
    
        firstBtn: document.querySelector('.firstBtn'),
        btnCreate: document.querySelector(".createBtn"),
        btnUpdate: document.querySelector(".updateBtn"),
        errorTitle: document.querySelector('.admin-error-title'),
        insertHtml: document.querySelector('.insertHTML')
    
    }
    
    const DOMSelector = {
        adminForm : '.admin-form',
        inputDescription: '#admin-input-description',
        inputAuthor: '#admin-input-author',
        inputImage: '#admin-input-image',
        inputRead: '#admin-input-read',
        inputAudio: '#admin-input-audio',
        inputCategories: '#admin-input-parent-cate',
        inputParentCollections: '#admin-input-parent-collec',
        adminErrorForm: '.admin-error-form',
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
                    type === 'book'
                    ? DOMString.insertHtml.innerHTML = components.book
                    : DOMString.insertHtml.innerHTML = components.collection
    
                    document.querySelector('legend').textContent = `${cmd} field`
    
                    categoriesTagHandle();
                    submitDataHandle(type,cmd);
                
    
    
                // nếu là update thì lấy từ localStorage ra, nhưng nếu ko có ở local storage, báo lỗi
                }else if(cmd === 'Update'){
                    let localData;
                    
                    //Chọc vào books hay collections để tìm
                    type === 'book'
                    ? localData = data.books
                    : localData = data.collections;
    
                     // nếu ko có sách nào hoặc ko tìm thấy title nào tồn tại
                    if (localData == null || localData.find(el => el.title.replace(/\s+/g, '').toLowerCase() === title.replace(/\s+/g, '').toLowerCase()) == undefined  ) { 
                        DOMString.errorTitle.textContent = `This ${type} hasn't available in data. You must create it first. Or just type correctly again `
                        DOMString.insertHtml.innerHTML = "";
                    }else{
                        type === 'book'
                        ? DOMString.insertHtml.innerHTML = components.book
                        : DOMString.insertHtml.innerHTML = components.collection;
    
                        document.querySelector('legend').textContent = `${cmd} field`
                        // insert các thông tin lấy đc chính xác hiện lại lên trên các ô input
                        let index = localData.findIndex(el => el.title.replace(/\s+/g, '').toLowerCase() === title.replace(/\s+/g, '').toLowerCase());
    
    
                        loadData(localData[index],type)    //localData = data.books hoặc collections
                        window.previousInputChildString =  document.querySelector('#admin-input-parent-collec').value;
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
        const categoryElement = document.querySelector('.admin-categories');
        categoryElement.addEventListener('click', (e) =>{
            e.preventDefault();
            let categoryTag = e.target.dataset.cateid
            if(categoryTag){
                
                let categoryInput = document.querySelector('#admin-input-parent-cate').value;
                let firstChar;
                    categoryInput === "" 
                        ? firstChar = ""
                        : firstChar = "," 
                document.querySelector('#admin-input-parent-cate').value =categoryInput + firstChar + categoryTag
            }
    
        })
    }
    
    ///////////////  HANDLE SUBMIT BUTTON
    function submitDataHandle(type,cmd, index = -1){ //type là book, cmd là create hay update, index là index của book/collection đó trong array hiện tại;
        document.querySelector(DOMSelector.adminErrorForm).innerHTML = "";
        
    
            document.querySelector('.submitBtn').addEventListener('click',(e) =>{
                e.preventDefault()
                console.log(type,cmd,index)
                const adminForm = document.querySelector(DOMSelector.adminForm);
                ///// Lấy data từ form
                const formData =[
                    adminForm.title.value,
                    adminForm.description.value,
                    adminForm.author.value,
                    adminForm.image.value,
                    adminForm.read.value,
                    adminForm.audio.value,
                    adminForm.category.value,
                    adminForm.collection.value,
                ]
                //////Validate Data
                if(!formValidate(formData)){
    
                    document.querySelector(DOMSelector.adminErrorForm).innerHTML = "You must fill ALL INPUT (except the LAST ONE) to SUBMIT "
                }else{
                    
                        let [
                            inputTitle,
                            inputDescription,
                            inputAuthor,
                            inputImage,
                            inputRead,
                            inputAudio,
                            inputCategories,
                            inputChildBooks,
                        ] = formData;
                        //lấy các input và ném vào khung data có sẵn
                        let obj;
                        type === 'book'
                        // sinh ra 1 id cho book(6ký tự) hoặc collection(7 kí tự )(tùy)
                        ? obj = {
                            bookID: uniqid("b-"),
                            parentCategoryIDs: [],
                            parentCollectionIDs: [],
                            parentAuthorID: -1,
                            title: inputTitle,
                            description:inputDescription,
                            imgUrl:inputImage,
                            bookmark: false,
                            readUrl:inputRead,
                            audioUrl:inputAudio,
                            downloadUrl:"",
                            viewCount:0
                        }
                        : obj = {
                            collectionID: uniqid("c-"),
                            parentCategoryIDs:[],
                            parentAuthorID: -1,
                            childBookIDs:[],
                            title: inputTitle,
                            description: inputDescription,
                            imgUrl:inputImage,
                            bookmark: false,
                            readUrl:inputRead,
                            audioUrl:inputAudio,
                            downloadUrl:"",
                            viewCount:0
                        }
    
                        //RẼ NHÁNH TÙY THEO Create HAY Update
                        if(cmd === 'Create'){
                            console.log(`------------< ${type} CREATE >-----------`)
                            //hàm này tìm tất cả cate và push id thằng con này vào,return ra array chứa tất cả id của cate, nếu hàm này sai, sẽ dừng hàm SUBMIT
                            obj.parentCategoryIDs = setRelationCategories(inputCategories,obj.collectionID || obj.bookID);
                            console.log("Set Categories Succeed")
                            // hàm này tìm tên tác giả. nếu không có, tạo tác giả mới cùng id , đều set quan hệ và return obj đc cập nhật authorIDs
                            obj.parentAuthorID = setRelationAuthor(inputAuthor,obj.collectionID || obj.bookID);
        
                            //cho hàm forEach lượt qua các categories id, tìm tới đúng trong data, chỗ array childBookIDs hoặc childCollectionIDs để push vào
        
                            if(!(type === 'book')){
                                obj.childBookIDs = setRelationParent(inputChildBooks, obj.collectionID)
                                console.log("Set BOOK-COLLECTION LINK Succeed");
                            }
        
                                
    
                            // NẾU LÀ CREATE BƯỚC CUỐI SAU KHI SET SỦNG RELA RỒI THÌ PUSH VÀO DATA THÔI
                            type === 'book'
                                ? data.books.push(obj)
                                : data.collections.push(obj);
    
                            console.log("------------< CREATE SUCCEED >------------")
                            console.log(data)
                        }
                        
                        
                        
                        else if(cmd === 'Update'){
                            //đã có index là index của thằng trùng ở trong data
                            if(index > -1){
                                const obj2 = data[`${type}s`][index];
                                //ghi đè data mới lên data cũ(book hoặc collection cũ), riêng cái cate và parent thì ta trừ string đi và nạp string còn lại (chính là cái mới) để set rela
                                obj2.title = obj.title;
                                obj2.description = obj.description;
                                obj2.imgUrl = obj.imgUrl;
                                obj2.readUrl = obj.readUrl;
                                obj2.audioUrl = obj.audioUrl;
                                
    
    
                                console.log(`------------< ${type} UPDATE >-----------`)
                                
                                // trích xuất ra string mới đc thêm vào sau bằng cách thay thế phần trước bằng ""
                                // nếu có sự khác biệt trước sau thì mới làm
                                if((obj2.parentCategoryIDs.join()) !== 
                                    inputCategories.replace(/\s+/g, '')){
                                    // ID để link rela bây h sẽ lấy từ thằng gốc trong data
                                        
                                        const newStringCate = obj2.parentCategoryIDs + ",";
                                        inputCategories = inputCategories.replace(newStringCate ,'') 
    
    
                                        //hàm này tìm tất cả cate và push id thằng con này vào,return ra array chứa tất cả id của cate, nếu hàm này sai, sẽ dừng hàm SUBMIT
                                        obj2.parentCategoryIDs = obj2.parentCategoryIDs.concat(setRelationCategories(inputCategories,obj2.collectionID || obj2.bookID));
                                        console.log("Update Categories Succeed")
                                    }
    
    
                                // nếu có sự khác biệt trước sau thì mới làm
                                if((window.previousInputChildString) !==
                                    inputChildBooks
                                ){
                                    // ID để link rela bây h sẽ lấy từ thằng gốc trong data
                                    const newStringBooks = obj2.childBookIDs + ",";
                                    inputChildBooks = inputChildBooks.replace(newStringBooks,'')
    
    
                                    //SET RELA BỐ CON CỦA ĐỐNG STRING MỚI
                                    if(!(type === 'book')){
                                        obj2.childBookIDs = obj2.childBookIDs.concat(setRelationParent(inputChildBooks, obj2.collectionID));
                                        console.log("Update BOOK-COLLECTION LINK Succeed");
                                    }
                                }
    
    
    
                                console.log("------------< UPDATE SUCCEED >------------")
                                console.log(data)
    
                            }else{
                                console.log("wtf, nhảy đc UI update sao còn hiện đc cái này")
                            }
                        }
    
    
                        
                }
                
    
    
            })
    
            
            
            // có 1 hàm đc gọi mỗi lần forEach như thế để kiểm tra có tồn tại trong data hay không để hiện error
            
            //sau đó tùy là create hay update, create thì ta cứ push thẳng vào array books hoặc collection, update thì ta thay index thành index của book đó trong array 
    
    }
    
    ////////////// Handle SUBMIT FIREBASE BUTTON
    
    
    /////// các hàm DRY
    function loadData(el,type){   //el ở đây là data.books[i] || data.collections[i]
    
    
        document.querySelector('#admin-input-description').value = el.description;
        document.querySelector('#admin-input-author').value = (data.authors.find(author => author.authorID === el.parentAuthorID)).authorName;
        document.querySelector('#admin-input-image').value = el.imgUrl;
        document.querySelector('#admin-input-read').value = el.readUrl;
        document.querySelector('#admin-input-audio').value = el.audioUrl;
        document.querySelector('#admin-input-parent-cate').value = (()=>{
            return el.parentCategoryIDs.toString()
        })();
    
        // rẽ nhánh vì UI sẽ khác nhau
        if(type === 'book'){
            
            document.querySelector('#admin-input-parent-collec').value =(()=>{
                let collectionString ="";
                // lấy từng phần tử collection ID đem đi tìm
                el.parentCollectionIDs.forEach((collectionID,index) =>{
                    // tìm trong localStorage ra đúng cái collection ứng với collection ID đó
                    const collection = data.collections.find(el => el.collectionID = collectionID)
                    // cộng vào String 
                    if(index > 0){
                        collectionString = collectionString + ','+ collection.title ;
                    }else{
                        collectionString = collection.title
                    }
                })
                return collectionString;
            })()
        }
    
        else if (type === 'collection'){
            //childBookIDs
            document.querySelector('#admin-input-parent-collec').value = (()=>{
                let bookString =""
                // lấy từng phần tử collection ID đem đi tìm
                el.childBookIDs.forEach((bookID,index) =>{
                    // tìm trong localStorage ra đúng cái collection ứng với collection ID đó
                    const book = data.books.find(el => el.bookID = bookID)
                    // cộng vào String 
                    if(index  > 0){
                        bookString = bookString + ',' + book.title ;
                    }else{
                        bookString = book.title
                    }
                })
                return bookString;
            })();
        }
    
    }
    
    function formValidate(array){
        let check = true;
        array.slice(0, array.length-1).forEach(el => {
            if(el === "") {
                check =  false};
        })
        return check;
        
    }
    
    function setRelationAuthor(author,childID){
        let hasAuthor = false;
        let authorIndex,parentAuthorID;
    
        //check xem đã tồn tại author nào như thế chưa
        data.authors.forEach((au,index) => {
            if((au.authorName).replace(/\s+/g, '').toLowerCase() === author.replace(/\s+/g, '').toLowerCase()){
                hasAuthor = true;
                //biết đc index của author ấy trong mảng data.authors
                authorIndex = index;
    
            }
        })
    
    
        // nếu mà ko có
        if(!hasAuthor){
            // tạo data mới push vào
            let authorTemplate = {
                authorID: uniqid("a-"),
                authorName: author,
                childBookIDs:[],
                childCollectionIDs:[],
            }
            //kiểm tra ID là của book hay collection
            childID.substr(0,1) === "b"
                ? authorTemplate.childBookIDs.push(childID)
                : authorTemplate.childCollectionIDs.push(childID) 
            ;
    
            data.authors.push(authorTemplate);
            // chốt lại cái ID của author này
            parentAuthorID = authorTemplate.authorID;
            console.log("Set NEW AUTHOR Succeed");
        }
    
        //nếu mà có tìm thấy tên tác giẩ
        
        else{
            
                // cập nhật vào data ấy
                data.authors[authorIndex]
                childID.substr(0,1) === "b"
                ?  data.authors[authorIndex].childBookIDs.push(childID)
                :  data.authors[authorIndex].childCollectionIDs.push(childID) 
    
                // chốt lại cái ID của author này
                parentAuthorID = data.authors[authorIndex].authorID;
    
                //return lại authorID cuối cùng trả lại để cập nhật vào thằng con
    
    
    
            }
            return parentAuthorID
    
    } 
    
    function setRelationCategories(categoriesString,childID){
        let categoriesArray = categoriesString.split(",");
        //loop qua tất cả phần tử, tìm phần tử đó trong data.categories, nếu có thì thêm childID vào tùy theo loại nào
        // nếu ko có ==> bỏ qua
        categoriesArray.forEach(cateID => {
            const cateIndex = data.categories.findIndex(el => el.categoryID === cateID);
            // nếu có tồn tại cateIndex hay tồn tại category đó trong data, push ID thằng con vào đúng chỗ
            if(cateIndex > -1){
                childID.substr(0,1) === 'b'
                    ? data.categories[cateIndex].childBookIDs.push(childID)
                    : data.categories[cateIndex].childCollectionIDs.push(childID)
            }else{
                throw "Invalid Categories INPUT"
            }
    
        })
           
        return categoriesArray;
    }
    
    function setRelationParent(childTitleStrings,collectionID){
        //input là string các tên thằng con ==> OutPut, return là array IDs của các thằng con tương ứng
        let childIDArray = [];
        //Tách string thành array
        let childTitleArray = childTitleStrings.split(",");
    
        // loop qua array các tên đc nhập vào, tìm từng thằng 1 trong array data.books, lấy đc cái index, bookIDs,và để lại collectionID (id) của bố vào thằng con
        childTitleArray.forEach(bookTitle => {
                // nếu thằng nào tìm ko ra kết quả ==> ném lỗi chặn chương trình, nếu ko có lỗi giữa chừng,  
            let bookIndex = data.books.findIndex((book) => book.title.replace(/\s+/g, '').toLowerCase() === bookTitle.replace(/\s+/g, '').toLowerCase());
            if(bookIndex == -1){
                console.log("Error In ChildBook Title input")
            }else{
                //thiết lập quan hệ hai chiều
                data.books[bookIndex].parentCollectionIDs.push(collectionID);
                childIDArray.push(data.books[bookIndex].bookID)
            }
    
        })
        return childIDArray;
    }
    
    
    }

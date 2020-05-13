import "../css/style.css";
import {components} from './library/components';
import {elements,renderLoading,removeLoading} from './library/base';
// import uniqid from 'uniqid';
import {data,loadFromLocal} from './models/database';

//MODEL
import MainModel from './models/MainModel';
import * as admin from './models/admin';


//VIEW
import * as collectionView from './views/collectionView'
import * as detailView from './views/detailView'


//firebase
import firebase from "firebase/app"; 
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import DetailModel from "./models/DetailModel";




/////// TESTING PORPOSE
window.firebase = firebase;


/////////////////////////////// seting up FIREBASE //////////////////////////////////////

const app = firebase.initializeApp({
    apiKey: "AIzaSyCFnrPNqH3ttyhIUJxuMWMsJuB1W2lMF58",
    authDomain: "ci-thu-vien-sach.firebaseapp.com",
    databaseURL: "https://ci-thu-vien-sach.firebaseio.com",
    projectId: "ci-thu-vien-sach",
    storageBucket: "ci-thu-vien-sach.appspot.com",
    messagingSenderId: "554508083409",
    appId: "1:554508083409:web:6ba522c5f45b4f165a65f0",
    measurementId: "G-YE46HTLLED"
});

const storage = app.storage();
const ref = storage.ref('path')




//////////////////////////////////////////////////////////////////////////////////////////

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
        admin.setUpAdmin();
        break;
    }
    case "home":{
        //Handle Menu Bar
        element = elements('home');

        //loader
        renderLoading(document.querySelector("body"));
        element.insert.innerHTML = components.home;
        //set hash rỗng
        location.hash ="home";
        setUpHomePage();
        break;

    }

}





////////////////////////////////////// LOGIN PAGE /////////////////////////////////////////// 
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

/////////////////////////////////////////// HOME PAGE//////////////////////////////////////////

async function setUpHomePage(){
    element = elements('home');

    let state ={
        currentPage :"home",
    }
    window.state =state;



    //MENU BAR ONPEN CLOSE HANDLE
    element.menuBar.addEventListener('click',(e)=>{
        if(e.target.matches('.menu-close, .menu-close *')){

            element.menuBar.classList.add("close")
            element.modalMenuBar.classList.add("close")
            
        }
    })

    element.menuButton.addEventListener('click', ()=>{
            element.menuBar.classList.remove("close")
            element.modalMenuBar.classList.remove("close")
    })



    ///// SLIDER HANDLER FOR NEWLY CONTAINER
    element.pagination.addEventListener('click',(e)=>{
        let currentPos = Number(element.newlyContainer.dataset.pos);

        if(e.target.matches(".pagination__left-newly,.pagination__left-newly *") && currentPos < 0){
            let afterPos = currentPos + 50;
            element.newlyContainer.style.transform = `translateX(${afterPos}rem)`
            element.newlyContainer.dataset.pos = afterPos;

        }else if(e.target.matches(".pagination__right-newly,.pagination__right-newly *") && currentPos > -200){
            let afterPos = currentPos - 50;
            element.newlyContainer.style.transform = `translateX(${afterPos}rem)`
            element.newlyContainer.dataset.pos = afterPos;
        }
    })


    ////////////////////////////////////////////////loadAllData
    const loadAllData = async()=>{
        state.main = new MainModel();
        await state.main.addAuthors()
        await state.main.addCategories();
        await state.main.addBooks();
        await state.main.addCollections()
        console.log("load succeed")
        removeLoading();
    }
    

    await loadAllData();

    



    //SECTION COLLECTION HANDLE

    const sectionCollectionControl = async () =>{
        //1. lấy toàn bộ data của collection và categories về lưu ở state
        state.main = new MainModel();
        await state.main.addCategories()

        //2. Render UI list Categories đã
        collectionView.renderCategoriesList(state.main.categories);

    }
    // sectionCollectionControl();



    // HANDLE DEATAIL PAGE LOAD

    window.addEventListener("hashchange",(e)=>{
        let hash = location.hash
        let itemID = cutString(hash,1)
        let hashtype = cutString(hash,1,2)
    
        
        //nếu hash có đầu b- ==> book
        if(hashtype === "b-"){
            if(state.currentPage === "home"){
                // khóa click màn
                detailView.disablePageBook();
                //tạo 1 trường cho state

                if(!state.detail) state.detail = new DetailModel;
                // tìm book, thêm vào state.detail
                state.detail.addDetailBook(state.main,itemID);

                
                //hiện book lên html có sẵn vào book, hiện cả cái bookmark và comment nữa
                detailView.renderDetailBook(state.main,state.detail.currentBook)
                //gán các sự kiện cho UI ở trên màn
                handleDetailControl();
                //cho nó show lên màn
                detailView.showDetailBook()

            }

            // chèm thông tin của book ấy vào
            // bào h chèn xong thì add class để nó nhảy lên màn 
        }
        if(hashtype === "c-"){
            if(state.currentPage === "home"){
                // khóa click màn
                detailView.disablePageCollection();
                //tạo 1 trường cho state

                if(!state.detail) state.detail = new DetailModel;
                // tìm book, thêm vào state.detail
                state.detail.addDetailCollection(state.main,itemID);

                
                //hiện book lên html có sẵn vào book, hiện cả cái bookmark và comment nữa
                detailView.renderDetailCollection(state.main,state.detail.currentCollection)
                //gán các sự kiện cho UI ở trên màn
                handleDetailControl();
                //cho nó show lên màn
                detailView.showDetailCollection()

            }

            // chèm thông tin của book ấy vào
            // bào h chèn xong thì add class để nó nhảy lên màn 
        }
        if(hash === "#home"){
            // bỏ hết tất cả overlay
                // đẩy nó ra khỏi màn
                detailView.removeDetail();
                //khóa tương tác với detail lại và enable lại trang home
                detailView.enablePageBook();
                detailView.enablePageCollection();

        }
    })

    //HANDLE TẮT TRANG DETAIL

    function handleDetailControl(){
        getManyElement(".detail__button--container").forEach(el => {
            el.addEventListener("click",(e) =>{
                let check = e.target.matches(".detail__button--close, .detail__button--close *");
                if(check){
                    // đẩy nó ra khỏi màn
                    detailView.removeDetail();
                    //khóa tương tác với detail lại và enable lại trang home
                    detailView.enablePageBook();
                    detailView.enablePageCollection();
                    location.hash = "home";
                }
            })
        })
    }


}


    //////////////////////////// DRY
    function cutString(string,start,length){
        return string.substr(start,length);
    }

    function getElement(selector){
        return document.querySelector(selector)
    };

    function getManyElement(selector){
        return document.querySelectorAll(selector)
    };
    
    
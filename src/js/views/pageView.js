import {components} from '../library/components';
import {elements} from '../library/base';

export const showComponent = (page)=>{
    let element = elements('all');
    element.insert.dataset.page = page;
    switch (page){
        case "login":{
            element = elements('login');
            element.insert.innerHTML = components.login;
            break;
        }
        case "admin":{
            element.insert.innerHTML = components.admin;
            break;
        }
        case "home":{
            //Handle Menu Bar
            element = elements('home');
            element.insert.innerHTML = components.home;
            break;
    
        }
    
    }
}


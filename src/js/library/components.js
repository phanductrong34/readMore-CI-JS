export const components = {
    login: `
    <div class="login__container">
        <form class="login__form">
            
                <input type="radio" id="signin" class="login__check login__check-1" name="sign" checked="checked">
                <label for="signin" class="login__label">
                    Sign in
                </label>
           


                <input type="radio" id="signup" class="login__check login__check-2" name="sign">
                <label for="signup" class="login__label">
                    Sign up
                </label>
        

            <div class="form__container form__container-signin">

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-mail"></use>
                    </svg>
                    <input type="email" class="form__input form__input-email" placeholder="User email">
                    <div class="form__error">Invalid Email</div> 
                </div>

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-key"></use>
                    </svg>
                    <input type="password" class="form__input form__input-password" placeholder="Password">
                    <div class="form__error">Invalid Password</div>                     
                </div>

                <button class="form__button form__button-signin">Let's Read &#8594;</button>
            </div>


            <div class="form__container form__container-signup">

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-mail"></use>
                    </svg>
                    <input type="email" class="form__input form__input-email" placeholder="User email">
                    <div class="form__error">Invalid Email</div> 
                </div>

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-key"></use>
                    </svg>
                    <input type="password" class="form__input form__input-password" placeholder="Password">
                    <div class="form__error">Invalid Password</div>                     
                </div>
                
                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-key"></use>
                    </svg>
                    <input type="password" class="form__input form__input-confirmPassword" placeholder="Confirm password">
                    <div class="form__error">Invalid Confirm Password</div>                    
                </div>

                <button class="form__button form__button-signup">Sign up &#8594;</button>
                <span class="form__button form__button-gmail">
                    <svg class="form__icon-gmail">
                        <use xlink:href="./img/icons/sprite.svg#icon-gmail"></use>
                    </svg>
                </span>
            </div>

        </form>
    </div>

    <div class="container">
        <div class="bm bm__shape" data-file="shape"></div>
        <div class="bm bm__ball" data-file="ball"></div>
        <div class="bm bm__book" data-file="book"></div>
        <div class="bm bm__bg-white" data-file="bg-white"></div>
        <div class="bm bm__line-1" data-file="line-1"></div>
        <div class="bm bm__line-2" data-file="line-2"></div>
        <div class="bm bm__leaf" data-file="leaf"></div>
        <div class="bm bm__line-3" data-file="line-3"></div>
        <div class="bm bm__bg-yellow" data-file="bg-yellow"></div>
    </div>

    `,

    menuBar: `
    <div class="modal__menuBar">
        <div class="menuBar">
            <svg class="menu-close">
                <use xlink:href="img/icons/sprite.svg#icon-x"></use>
            </svg>
            <ul class="menu-nav">
                <li class="menu-nav__item menu-nav__item--active">
                    <a href="#" class="menu-nav__link">
                        Polular By Genre
                    </a>
                </li>
                <li class="menu-nav__item">
                    <a href="#" class="menu-nav__link">
                        Newly Updated 
                    </a>
                </li>
                <li class="menu-nav__item">
                    <a href="#" class="menu-nav__link">
                        Top Of The Week
                    </a>
                </li>
                <li class="menu-nav__item">
                    <a href="#" class="menu-nav__link">
                        Book Collections
                    </a>
                </li>
                <li class="menu-nav__item">
                    <a href="#" class="menu-nav__link">
                        You May Like
                    </a>
                </li>
            </ul>
                
            <div class="menu-legal">
                &copy; 2020 by Trong Phan Duc. All right reserved.
            </div>
        </div>
    </div>

    `,
    admin: `

    <form class="admin-form" action="#">
    <div class="admin-container">
    <p class="admin-note">Cố gắng ngay từ lần Create đầu tiên, điền đủ và chính xác tất cả các ô Input. Nếu có phải update, tuyệt đối ko SỬA TÊN TÁC GỈA ,KO SỬA THỂ LOẠI(chỉ đc thêm) và KO SỬA Parent-Child(chỉ đc thêm mới)</p>
            <div class="admin-container__type">
                <label class="admin-label" for="admin-input-type" class="admin-heading">Which type of data you want to create/update</label>
                <select id="admin-input-type" class="admin-select type" name="type">
                    <option value="book">Book</option>
                    <option value="collection">Collection</option>
                </select>
    
            </div>
    
            <div class="admin-container__title">
                <label  class="admin-label" for="admin-input-title">Title of the data</label>
                <input class="admin-input" type="text" id="admin-input-title" name="title" placeholder="Data Title" required/>
                <div class="admin-error-title"></div>
                <div class="firstBtn">
                    <button class="admin-button createBtn">Create</button>
                    <button class="admin-button updateBtn">Update</button>
                </div>
            </div>

            <div class="insertHTML"></div>
        </div>
    </form>
    `,

    book: `
    <fieldset class="admin-container__detail">
    <legend>Data detail</legend>
    <div class="admin-container__detail-description">
        <label  class="admin-label" for="admin-input-description">Book's Description</label>
        <textarea class="admin-textarea" id="admin-input-description" cols="30" rows="10" name="description" required/></textarea>
    </div>

    <div class="admin-container__detail-author">
        <label class="admin-label" for="admin-input-author">Book's Author</label>
        <input class="admin-input" type="text" id="admin-input-author" name="author" required/>
    </div>
    
    <div class="admin-container__detail-image">
        <label class="admin-label" for="admin-input-image">Image Link copy from FireBase</label>
        <input class="admin-input" type="text" id="admin-input-image" name="image" required/>
    </div>

    <div class="admin-container__detail-read">
        <label class="admin-label" for="admin-input-read">PDF Link copy from FireBase</label>
        <input class="admin-input" type="text" id="admin-input-read" name="read" required/>
    </div>

    <div class="admin-container__detail-audio">
        <label class="admin-label" for="admin-input-audio">Audio Link copy from FireBase</label>
        <input class="admin-input" type="text" id="admin-input-audio" name="audio" required/>
    </div> 

    <div class="admin-container__detail_parent-category">
        <label class="admin-label" for="admin-input-parent-cate">Choose which categories this books belong to (mutiple allow)</label>
        <div class="admin-categories">
            <span class="admin-categories-tag" data-cateID="psy">Psychological</span>                            
            <span class="admin-categories-tag" data-cateID="health">Heath</span>                            
            <span class="admin-categories-tag" data-cateID="romantic">Romantic</span>                            
            <span class="admin-categories-tag" data-cateID="it">Technology</span>                            
            <span class="admin-categories-tag" data-cateID="buss">business</span>                            
            <span class="admin-categories-tag" data-cateID="comic">Comic</span>                            
            <span class="admin-categories-tag" data-cateID="lang">Languages</span>                            
            <span class="admin-categories-tag" data-cateID="cui">Cuisine</span>                            
            <span class="admin-categories-tag" data-cateID="edu">Education</span>                            
            <span class="admin-categories-tag" data-cateID="hor">Horror</span>                                                      
        </div>
        <input class="admin-input" type="text" id="admin-input-parent-cate" name="category" value="" placeholder="Categories tag will appear hear" required>
    </div>

    <div class="admin-container__detail__parent-collection">
        <label class="admin-label" for="admin-input-parent-collec">Type "the exact collections name" does this books belong to (mutiple allow)</label>
        <textarea placeholder ="You can't add it here. Find the collection and add this book fromIT" class="admin-textarea admin-textarea-disabled" id="admin-input-parent-collec" cols="30" rows="10" name="collection" disabled></textarea>
    </div>
    
</fieldset>
<div class="admin-error-form"></div>
<input type="submit" class="admin-button submitBtn" value ="Submit" />
<button class="admin-button">Update FireBase</button>
`,

collection: `
    <fieldset class="admin-container__detail">
    <legend>Data detail</legend>
    <div class="admin-container__detail-description">
        <label class="admin-label" for="admin-input-description">Collection's Description</label>
        <textarea class="admin-textarea" id="admin-input-description" cols="30" rows="10" name="description" required/></textarea>
    </div>

    <div class="admin-container__detail-author">
        <label class="admin-label" for="admin-input-author">Collection's Author</label>
        <input class="admin-input" type="text" id="admin-input-author" name="author" required/>
    </div>
    
    <div class="admin-container__detail-image">
        <label class="admin-label" for="admin-input-image">Image Link copy from FireBase</label required/>
        <input class="admin-input" type="text" id="admin-input-image" name="image">
    </div>

    <div class="admin-container__detail-read">
        <label  class="admin-label" for="admin-input-read">PDF Link copy from FireBase</label>
        <input class="admin-input" type="text" id="admin-input-read" name="read" required/>
    </div>

    <div class="admin-container__detail-audio">
        <label class="admin-label" for="admin-input-audio">Audio Link copy from FireBase</label>
        <input class="admin-input" type="text" id="admin-input-audio" name="audio" required/>
    </div>

    <div class="admin-container__detail_parent-category">
        <label class="admin-label" for="admin-input-parent-cate">Choose which categories this collection belong to (mutiple allow)</label>
        <div class="admin-categories">
            <span class="admin-categories-tag" data-cateID="psy">Psychological</span>                            
            <span class="admin-categories-tag" data-cateID="health">Heath</span>                            
            <span class="admin-categories-tag" data-cateID="romantic">Romantic</span>                            
            <span class="admin-categories-tag" data-cateID="it">Technology</span>                            
            <span class="admin-categories-tag" data-cateID="buss">business</span>                            
            <span class="admin-categories-tag" data-cateID="comic">Comic</span>                            
            <span class="admin-categories-tag" data-cateID="lang">Languages</span>                            
            <span class="admin-categories-tag" data-cateID="cui">Cuisine</span>                            
            <span class="admin-categories-tag" data-cateID="edu">Education</span>                            
            <span class="admin-admin-categories-tag" data-cateID="hor">Horror</span>                                                      
        </div>
        <input class="admin-input" type="text" id="admin-input-parent-cate" name="category" value="" placeholder="Categories tag will appear hear" required>
    </div>

    <div class="admin-container__detail__parent-collection">
        <label class="admin-label" for="admin-input-parent-collec">Type the exact Books'name belong to this Collection (mutiple allow)</label>
        <textarea class="admin-textarea" id="admin-input-parent-collec" cols="30" rows="10" name="collection"></textarea>
    </div>
    
</fieldset>
<div class="admin-error-form"></div>
<input type="submit" class="admin-button submitBtn" value ="Submit" />
<button class="admin-button>Update FireBase</button>
`
}
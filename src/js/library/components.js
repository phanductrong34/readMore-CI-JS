export const components = {
    loading:`
    LOADING........
    `,
    login: `
    <div class="login__container">
        <div id="log-in-form" class="login__form">


            <!--------------------------------->

            <input type="radio" id="signin" class="login__check login__check-1" name="sign" checked="checked">
            <label for="signin" class="login__label">
                Sign in
            </label>


            <input type="radio" id="signup" class="login__check login__check-2" name="sign">
            <label for="signup" class="login__label">
                Sign up
            </label>
            <!-- ------------------------ -->
            <!-- <form id="sign-up"> -->
            <div class="form__container form__container-signup">

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-mail"></use>
                    </svg>
                    <input type="email" id="email1" class="form__input form__input-email" name="email"
                        placeholder="User email">
                    <div id="email-error" class="form__error"></div>
                </div>

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-key"></use>
                    </svg>
                    <input type="password" id="password1" class="form__input form__input-password" name="password"
                        placeholder="Password">
                    <div id="password-error" class="form__error"></div>
                </div>

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-key"></use>
                    </svg>
                    <input type="password" id="confirmPassword1" class="form__input form__input-confirmPassword"
                        name="confirmPassword" placeholder="Confirm password">
                    <div id="confirm-password-error" class="form__error"></div>
                </div>
                <div id="success"></div>
                <div id="false"></div>
                <button id="signUpBtn" class="form__button form__button-signup">Sign up
                    &#8594;</button>
                <span id="gg-sign-in" class="form__button form__button-gmail">
                    <svg class="form__icon-gmail">
                        <use xlink:href="./img/icons/sprite.svg#icon-gmail"></use>
                    </svg>
                </span>
            </div>
            <!-- </form> -->

            <!-- ------------------------ -->
            <!-- <form id="sign-in"> -->

            <div class="form__container form__container-signin">

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-mail"></use>
                    </svg>
                    <input type="email" id="email2" class="form__input form__input-email" name="email"
                        placeholder="User email">
                    <div id="email2-error" class="form__error"></div>
                </div>

                <div class="form__group">
                    <svg class="form__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-key"></use>
                    </svg>
                    <input type="password" id="password2" class="form__input form__input-password" name="password"
                        placeholder="Password">
                    <div id="password2-error" class="form__error"></div>
                </div>
                <div id="false2"></div>


                <button id="signInBtn" class="form__button form__button-signin">Let's Read &#8594;</button>
            </div>
        </div>
        <!-- -------------------- -->


        <!-- </form> -->
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

    home: `
    <div class="home__background">
    <div class="home__shadow">
        <div class="home__container">

        <!-- MENU BAR -->
            <div class="modal__menuBar close">
                <div class="menuBar close">
                    <svg class="menu-close">
                        <use xlink:href="img/icons/sprite.svg#icon-x"></use>
                    </svg>
                    <ul class="menu-nav">
                        <li class="menu-nav__item menu-nav__item--active">
                            <a href="#popular" class="menu-nav__link">
                                Polular By Genre
                            </a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="#!" class="menu-nav__link">
                                Newly Updated 
                            </a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="#!" class="menu-nav__link">
                                Top Of The Week
                            </a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="#!" class="menu-nav__link">
                                Book Collections
                            </a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="#!" class="menu-nav__link">
                                You May Like
                            </a>
                        </li>
                    </ul>
                        
                    <div class="menu-legal">
                        &copy; 2020 by Trong Phan Duc. All right reserved.
                    </div>
                </div>
            </div>

        <!-- NAV BAR -->
            <nav class="navigation">

                <div class="nav__container--browse">
                    <h3 class="nav__browse--category heading-tertiary">Browse Categories</h3>
                    <svg class="nav__browse--icon icon-arrow-down">
                        <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                    </svg>
                </div>


                <div class="nav__container--search">
                    <input type="text" class="nav__search--bar" id="nav__search" placeholder="Search...">
                    <select class="nav__search--select" id="nav__select">
                        <option value="authors" class="nav__search--option">author</option>
                        <option value="books" class="nav__search--option">book</option>
                        <option value="collections" class="nav__search--option">collection</option>
                        <option value="genre"  class="nav__search--option">genre</option>
                    </select>
                    <svg class="nav__search--icon icon-search" id="nav__icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-search"></use> 
                    </svg>
                </div>


                <div class="nav__container--logo">
                    <svg class="nav__logo--icon icon-logo">
                        <use xlink:href="./img/icons/sprite.svg#icon-logo"></use> 
                    </svg>
                </div>


                <div class="nav__container--player">
                    <div class="nav__player--button">
                        <div class="nav__player--img"></div>
                        <div class="nav__player--play"></div>
                    </div>
                    <h3 class="nav__player--title heading-tertiary">Other side of...</h3> 
                </div>


                <div class="nav__container--user">
                    
                    <div class="nav__user--tooptip">
                        <div class="info-container">
                            <div class="popupuser-info">
                                <div class="nav__grid-1">
                                    <img src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg" alt="ảnh">
                                </div>
                                <div class="nav__grid-3">
                                    <div class="name tooltip-name">phanductrong1234</div>
                                    <div class="gmail tooltip-email">phanductrong1234@gmail.com</div>
                                    <div class="updateProfile">
                                        <button class = "tooltip-button">Update Profile
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                    
                            </div>
                            <div class="nav__user--list">
                                <div class="nav__user--item">
                                    <div class="nav__user--icon">
                                        <i class="fa fa-book" aria-hidden="true"></i>
                                    </div>
                                    <div class="nav__user-title">
                                        <div class="nav__user-continue tooltip-continue">Continue reading from last page</div>
                                        <div class="nav__user-info tooltip-current">(Harry...adfjgajdkhjaskgfsdajgajgaj.)</div>
                                    </div>
                        
                        
                                </div>
                                <div class="nav__user--item tooltip-books">
                                    <div class="nav__user--icon">
                                        <i class="fa fa-bookmark" aria-hidden="true"></i>
                                    </div>
                                    <div class="nav__user-text">
                                        <div class="nav__user-text-1">MY BOOKMARKS</div>
                                        <div class="nav__user-text-2 tooltip-books-no">5</div>
                                    </div>
                                </div>
                                <div class="nav__user--item tooltip-collections">
                                    <div class="nav__user--icon">
                                        <i class="fa fa-archive" aria-hidden="true"></i>
                                    </div>
                                    <div class="nav__user-text">
                                        <div class="nav__user-text-1">MY COLLECTIONS</div>
                                        <div class="nav__user-text-2 tooltip-collections-no">5</div>
                                    </div>
                                </div>
                                <div class="nav__user--item">
                                    <div class="nav__user--icon">
                                        <i class="fa fa-download" aria-hidden="true"></i>
                                    </div>
                                    <div class="nav__user-text">
                                        <div class="nav__user-text-1">MY DOWNLOADS</div>
                                        <div class="nav__user-text-2">5</div>
                                    </div>
                                </div>
                            </div>
        
                            <div class="nav__user--login tooltip-logout">
                                <div class="nav__user--icon">
                                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                                </div>
                                <div class="nav__user-text">
                                    <div>LOG OUT</div>
                                </div>
                            </div>
                        </div>
        
                    </div>
                    <svg class="nav__user--icon icon-arrow-down">
                        <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                    </svg>
                    <div class="nav__user--img"></div>

                </div>

        


                <div class="nav__container--menu">
                    <div class="nav__menu--burger">
                        <div class="nav__menu--burger--line nav__menu--burger--line-1"></div>
                        <div class="nav__menu--burger--line nav__menu--burger--line-2"></div>
                        <div class="nav__menu--burger--line nav__menu--burger--line-3"></div>
                    </div>
                    <h3 class="nav__menu--text heading-tertiary">Menu</h3>
                </div>


            </nav>
            

            <!-- DEATAIL PAGE -->
            <div class="detail__insert-book">
                                                <div class="detail-page">
                                                <div class="detail__background--container">
                                                    <div class="detail__background--bg"></div>
                                                </div>
                                        
                                                <div class="detail__button--container">
                                                    <svg class="detail__button--close">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-x"></use> 
                                                    </svg>
                                        
                                                    <svg class="detail__button--bookmark">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                                    </svg>
                                                </div>
     
                                                <div class="detail__info--container detail__info--container-book">
                                                    <div class="detail__title">
                                                        Harry Porter Và Bảo Bối Tử Thần (Phần 1)
                                                    </div>
                                                    <div class="detail__author--container">
                                                        <div class="detail__author--img"></div>
                                                        <div class="detail__author--info">
                                                            <div class="detail__author--name">J.K.Rowling</div>
                                                            <div class="detail__author--data">
                                                                <div class="detail__author--publication">12 Publication</div>
                                                                <div class="detail__author--rate">4.7 Rates</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="detail__item--rating">
                                                        <div class="detail__item--rating-star rating__container">
                                        
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star"></span>
                                                            <span class="fa fa-star"></span>
                                                            
                                                        </div> 
                                                        <div class="detail__item--rating-count">1,054</div>
                                        
                                                    </div>
                                                </div>
                                        
                                                <div class="detail__main--container detail__main--container-book">
                                        
                                                    <div class="detail__grid detail__grid-1">
                                                        <div class="detail__img--container detail__img--container-book">
                                                            <div class="detail__img"></div>
                                                        </div>
                                                        <div class="detail__about--header heading-secondary">About</div>
                                                        <p class="detail__about--description">
                                                            Chúng ta đã được biết đến tác giả qua hai cuốn sách Bí mật của may mắn và Tiếp thị phá cách (đồng tác giả với Phillip Kotler), ở cuốn sách này, bằng những trải nghiệm sâu sắc về thực tế của mình, Tría de Bes sẽ giúp bạn nhận dạng mười bốn nhân tố chính dẫn đến thất bại mà bất cứ ai khao khát trở thành doanh nhân nên biết trước khi bắt đầu. Từ việc đào sâu ý tưởng ban đầu, cân nhắc giữa viêc nên có cộng sự hay không, đến nghiên cứu chi tiết cách thức quản lý tăng trưởng,... tác giả sẽ dẫn bạn qua những thất bại thông thường - và những phương pháp ngăn ngừa tốt nhất - để bạn có thể tập trung vào những nước cờ đúng đắn cho doanh nghiệp mới của mình.....
                                        
                                                        </p>
                                                        <div class="detail__categories--container">
                                                            <a href="" class="detail__categories--tag">novel</a>
                                                            <a href="" class="detail__categories--tag">psychology</a>
                                                        </div>
                                                    </div>
                                        
                                                    <div class="detail__grid detail__grid-3">
                                                        <div class="detail__link--container detail__link--container-book">
                                                            <a class="detail__link--read btn__detail btn__detail-blue" data-link = "">
                                                                <svg class="detail__link--read--icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                </svg>
                                                                <span class="detail__link--read--content">Read</span>
                                                            </a>
                                        
                                                            <a class="detail__link--listen btn__detail btn__detail-orange" data-link = "">
                                                                <svg class="detail__link--listen--icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                </svg>
                                                                <span class="detail__link--listen--content">Audio</span>
                                                            </a>
                                        
                                                            <a  class="detail__link--download btn__detail btn__detail-white" data-link = "">
                                                                <svg class="detail__link--download--icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-download-grey-solid"></use> 
                                                                </svg>
                                                                <span class="detail__link--download--content">Download</span>
                                                            </a>
                                        
                                                            <a  class="detail__link--bookmark btn__detail btn__detail-none">
                                                                <span class="detail__link--bookmark--content">Add to my Bookmark</span>
                                                                <svg class="detail__link--bookmark--icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-bookmark-grey"></use> 
                                                                </svg>
                                                            </a>
                                                        </div>
                                        
                                                        <div class="detail__recommend--header heading-secondary">You may also like</div>
                                        
                                                        <div class="detail__recommend--container detail__recommend--container-book">
                                        
                                                            <div class="detail__recommend--book">
                                                                <div class="detail__recommend--img detail__recommend--img-1">
                                        
                                                                    <div class="detail__button--recommend-container">
                                        
                                                                        <a class="detail__button--listen">
                                                                            <svg class="detail__button--listen-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a class="detail__button--read">
                                                                            <svg class="detail__button--read-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a class="detail__button--download">
                                                                            <svg class="detail__button--download-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                        
                                        
                                                                    </div>
                                                                </div>
                                        
                                                                <div class="detail__recommend--title">
                                                                    Harry Porter và cái gì đó không biết...
                                                                </div>
                                        
                                                                <div class="detail__recommend--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                
                                                                <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                                                                    <span>See More</span>
                                                                    <svg class=" btn__see-more-icon icon-arrow">
                                                                        <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                                    </svg>
                                                                </div>
                                        
                                                            </div>
                                                            <div class="detail__recommend--book">
                                                                <div class="detail__recommend--img detail__recommend--img-2">
                                        
                                                                    <div class="detail__button--recommend-container">
                                        
                                                                        <a href="#!" class="detail__button--listen">
                                                                            <svg class="detail__button--listen-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#!" class="detail__button--read">
                                                                            <svg class="detail__button--read-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#!" class="detail__button--download">
                                                                            <svg class="detail__button--download-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                        
                                        
                                                                    </div>
                                                                </div>
                                        
                                                                <div class="detail__recommend--title">
                                                                    Harry Porter và cái gì đó không biết...
                                                                </div>
                                        
                                                                <div class="detail__recommend--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                
                                                                <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                                                                    <span>See More</span>
                                                                    <svg class=" btn__see-more-icon icon-arrow">
                                                                        <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                                    </svg>
                                                                </div>
                                        
                                                            </div>
                                                            <div class="detail__recommend--book">
                                                                <div class="detail__recommend--img detail__recommend--img-3">
                                        
                                                                    <div class="detail__button--recommend-container">
                                        
                                                                        <a href="#!" class="detail__button--listen">
                                                                            <svg class="detail__button--listen-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#!" class="detail__button--read">
                                                                            <svg class="detail__button--read-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#!" class="detail__button--download">
                                                                            <svg class="detail__button--download-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                        
                                        
                                                                    </div>
                                                                </div>
                                        
                                                                <div class="detail__recommend--title">
                                                                    Harry Porter và cái gì đó không biết...
                                                                </div>
                                        
                                                                <div class="detail__recommend--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                
                                                                <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                                                                    <span>See More</span>
                                                                    <svg class=" btn__see-more-icon icon-arrow">
                                                                        <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                                    </svg>
                                                                </div>
                                        
                                                            </div>
                                                            <div class="detail__recommend--book">
                                                                <div class="detail__recommend--img detail__recommend--img-4">
                                                                    <div class="detail__button--recommend-container">
                                        
                                                                        <a href="#!" class="detail__button--listen">
                                                                            <svg class="detail__button--listen-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#!" class="detail__button--read">
                                                                            <svg class="detail__button--read-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#!" class="detail__button--download">
                                                                            <svg class="detail__button--download-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                        
                                        
                                                                    </div>
                                                                </div>
                                        
                                                                <div class="detail__recommend--title">
                                                                    Harry Porter và cái gì đó không biết...
                                                                </div>
                                        
                                                                <div class="detail__recommend--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                
                                                                <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                                                                    <span>See More</span>
                                                                    <svg class=" btn__see-more-icon icon-arrow">
                                                                        <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                                    </svg>
                                                                </div>
                                        
                                                            </div>
                                                            <div class="detail__recommend--book">
                                                                <div class="detail__recommend--img detail__recommend--img-4">
                                                                    <div class="detail__button--recommend-container">
                                        
                                                                        <a href="#!" class="detail__button--listen">
                                                                            <svg class="detail__button--listen-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#!" class="detail__button--read">
                                                                            <svg class="detail__button--read-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#!" class="detail__button--download">
                                                                            <svg class="detail__button--download-icon">
                                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                            </svg>
                                                                        </a>
                                        
                                        
                                                                    </div>
                                                                </div>
                                        
                                                                <div class="detail__recommend--title">
                                                                    Harry Porter và cái gì đó không biết...
                                                                </div>
                                        
                                                                <div class="detail__recommend--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                
                                                                <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                                                                    <span>See More</span>
                                                                    <svg class=" btn__see-more-icon icon-arrow">
                                                                        <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                                    </svg>
                                                                </div>
                                        
                                                            </div>
                                        
                                                        </div>
                                                    </div>
                                        
                                                    
                                        
                                                    
                                                </div>
                                        
                                                <div class="detail__review--container">
                                                    <div class="detail__review--first">
                                        
                                                        <div class="detail__grid detail__grid-1">
                                                            <div class="detail__score--container">
                                                                <div class="detail__score--title  heading-secondary">Reader Feedback</div>
                                                                <div class="detail__score--point">4.8</div>
                                                                <div class="detail__score--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                <div class="detail__score--vote">1204 Votes</div>
                                                            </div>
                                        
                                                        </div>
                                        
                                                        <div class="detail__grid detail__grid-3">
                                                            
                                                            <div class="detail__user--container">
                                                                <div class="detail__user--img"></div>
                                                                <div class="detail__user--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                <div class="detail__user--feedback">
                                                                    <h2 class="detail__user--name heading-secondary">Jonas Anderson</h2>
                                                                    <h2 class="detail__user--heading">This book is Abosolute Amazing</h2>
                                                                    <p class="detail__user--content">
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos odit itaque corporis aliquid fuga accusamus labore totam obcaecati! Dicta nemo, vel officia vitae soluta voluptates enim labore. Dicta, iste amet?
                                                                    </p>
                                                                    <div class="detail__user--button" data-state="have">Update Your FeedBack</div>
                                                                </div>
                                                            </div>
                                        
                                                        </div>
                                                    </div>
                                        
                                                    <div class="detail__review--after">
                                        
                                                        <div class="detail__reader--card">
                                                            <div class="detail__grid detail__grid-1">
                                                                <div class="detail__reader--container">
                                                                    <div class="detail__reader--img"></div>
                                                                    <div class="detail__reader--info">
                                                                        <div class="detail__reader--time">1 week ago</div>
                                                                        <div class="detail__reader--name">Jonas Anderson</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                        
                                                            <div class="detail__grid detail__grid-3">
                                                                <div class="detail__reader--feedback">
                                                                    <div class="detail__reader--star rating__container">
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                    </div>
                                                                    <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                                                                    <p class="detail__reader--content">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="detail__reader--card">
                                                            <div class="detail__grid detail__grid-1">
                                                                <div class="detail__reader--container">
                                                                    <div class="detail__reader--img"></div>
                                                                    <div class="detail__reader--info">
                                                                        <div class="detail__reader--time">1 week ago</div>
                                                                        <div class="detail__reader--name">Jonas Anderson</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                        
                                                            <div class="detail__grid detail__grid-3">
                                                                <div class="detail__reader--feedback">
                                                                    <div class="detail__reader--star rating__container">
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                    </div>
                                                                    <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                                                                    <p class="detail__reader--content">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="detail__reader--card">
                                                            <div class="detail__grid detail__grid-1">
                                                                <div class="detail__reader--container">
                                                                    <div class="detail__reader--img"></div>
                                                                    <div class="detail__reader--info">
                                                                        <div class="detail__reader--time">1 week ago</div>
                                                                        <div class="detail__reader--name">Jonas Anderson</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                        
                                                            <div class="detail__grid detail__grid-3">
                                                                <div class="detail__reader--feedback">
                                                                    <div class="detail__reader--star rating__container">
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                    </div>
                                                                    <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                                                                    <p class="detail__reader--content">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                        
                                        
                                                    </div>
                                                </div>
                                            </div>    
            </div>


            <div class="detail__insert-collection">
                                                <div class="detail-page">
                                                <div class="detail__background--container">
                                                    <div class="detail__background--bg"></div>
                                                </div>

                                                <div class="detail__button--container">
                                                    <svg class="detail__button--close">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-x"></use> 
                                                    </svg>

                                                    <svg class="detail__button--bookmark">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                                    </svg>
                                                </div>

                                                <div class="detail__info--container detail__info--container-collection">
                                                    <div class="detail__title">
                                                        Harry Porter Và Bảo Bối Tử Thần (Phần 1)
                                                    </div>
                                                    <div class="detail__author--container">
                                                        <div class="detail__author--img"></div>
                                                        <div class="detail__author--info">
                                                            <div class="detail__author--name">J.K.Rowling</div>
                                                            <div class="detail__author--data">
                                                                <div class="detail__author--publication">12 Publication</div>
                                                                <div class="detail__author--rate">4.7 Rates</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="detail__item--rating">
                                                        <div class="detail__item--rating-star rating__container">

                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star"></span>
                                                            <span class="fa fa-star"></span>
                                                            
                                                        </div> 
                                                        <div class="detail__item--rating-count">1,054</div>

                                                    </div>
                                                </div>

                                                <div class="detail__main--container detail__main--container-book">

                                                    <div class="detail__grid detail__grid-1">
                                                        <div class="detail__img--container detail__img--container-collection">
                                                            <div class="detail__img"></div>
                                                            <div class="detail__img"></div>
                                                            <div class="detail__img"></div>
                                                        </div>
                                                        <div class="detail__about--header heading-secondary">About</div>
                                                        <p class="detail__about--description">
                                                            Chúng ta đã được biết đến tác giả qua hai cuốn sách Bí mật của may mắn và Tiếp thị phá cách (đồng tác giả với Phillip Kotler), ở cuốn sách này, bằng những trải nghiệm sâu sắc về thực tế của mình, Tría de Bes sẽ giúp bạn nhận dạng mười bốn nhân tố chính dẫn đến thất bại mà bất cứ ai khao khát trở thành doanh nhân nên biết trước khi bắt đầu. Từ việc đào sâu ý tưởng ban đầu, cân nhắc giữa viêc nên có cộng sự hay không, đến nghiên cứu chi tiết cách thức quản lý tăng trưởng,... tác giả sẽ dẫn bạn qua những thất bại thông thường - và những phương pháp ngăn ngừa tốt nhất - để bạn có thể tập trung vào những nước cờ đúng đắn cho doanh nghiệp mới của mình.....

                                                        </p>
                                                        <div class="detail__categories--container">
                                                            <a href="" class="detail__categories--tag">novel</a>
                                                            <a href="" class="detail__categories--tag">psychology</a>
                                                        </div>
                                                    </div>

                                                    <div class="detail__grid detail__grid-3">
                                                        <div class="detail__link--container detail__link--container-collection">
                                                            <a href="" class="detail__link--read btn__detail btn__detail-blue">
                                                                <svg class="detail__link--read--icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                </svg>
                                                                <span class="detail__link--read--content">Read</span>
                                                            </a>

                                                            <a  class="detail__link--listen btn__detail btn__detail-orange">
                                                                <svg class="detail__link--listen--icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                </svg>
                                                                <span class="detail__link--listen--content">Audio</span>
                                                            </a>

                                                            <a  class="detail__link--download btn__detail btn__detail-white">
                                                                <svg class="detail__link--download--icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-download-grey-solid"></use> 
                                                                </svg>
                                                                <span class="detail__link--download--content">Download</span>
                                                            </a>

                                                            <a class="detail__link--bookmark btn__detail btn__detail-none">
                                                                <span class="detail__link--bookmark--content">Add to my Bookmark</span>
                                                                <svg class="detail__link--bookmark--icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-bookmark-grey"></use> 
                                                                </svg>
                                                            </a>
                                                        </div>

                                                        <div class="detail__recommend--header heading-secondary">Books in this Collection</div>

                                                        <div class="detail__recommend--container detail__recommend--container-collection">

                                                            <div class="book__card">
                                                                <div class="book__bookmark">
                                                                    <svg class="book__bookmark-icon">
                                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                                                    </svg>
                                                                </div>
                                                                
                                                                <div class="book__img book__img-1">

                                                                        <div class="book__button--container">

                                                                            <a href="#!" class="book__button--listen">
                                                                                <svg class="book__button--listen-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                                </svg>
                                                                            </a>
                                                                            <a href="#!" class="book__button--read">
                                                                                <svg class="book__button--read-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                                </svg>
                                                                            </a>
                                                                            <a href="#!" class="book__button--download">
                                                                                <svg class="book__button--download-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                                </svg>
                                                                            </a>


                                                                        </div>

                                                                </div>

                                                                <div class="book__info">
                                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                                    <h4 class="book__author">
                                                                        <span class="book__author--1">by</span>
                                                                        <span class="book__author--2">Serene Wright</span>
                                                                    </h4>
                                                                    <div class="book__rating rating__container">

                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        
                                                                    </div>

                                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                                        <span>See More</span>
                                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                                        </svg>
                                                                    </a>
                                                                </div>

                                                                
                                                            </div>
                                                            <div class="book__card">
                                                                <div class="book__bookmark">
                                                                    <svg class="book__bookmark-icon">
                                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                                                    </svg>
                                                                </div>
                                                                
                                                                <div class="book__img book__img-1">

                                                                        <div class="book__button--container">

                                                                            <a href="#!" class="book__button--listen">
                                                                                <svg class="book__button--listen-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                                </svg>
                                                                            </a>
                                                                            <a href="#!" class="book__button--read">
                                                                                <svg class="book__button--read-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                                </svg>
                                                                            </a>
                                                                            <a href="#!" class="book__button--download">
                                                                                <svg class="book__button--download-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                                </svg>
                                                                            </a>


                                                                        </div>

                                                                </div>

                                                                <div class="book__info">
                                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                                    <h4 class="book__author">
                                                                        <span class="book__author--1">by</span>
                                                                        <span class="book__author--2">Serene Wright</span>
                                                                    </h4>
                                                                    <div class="book__rating rating__container">

                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        
                                                                    </div>

                                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                                        <span>See More</span>
                                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                                        </svg>
                                                                    </a>
                                                                </div>

                                                                
                                                            </div>
                                                            <div class="book__card">
                                                                <div class="book__bookmark">
                                                                    <svg class="book__bookmark-icon">
                                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                                                    </svg>
                                                                </div>
                                                                
                                                                <div class="book__img book__img-1">

                                                                        <div class="book__button--container">

                                                                            <a href="#!" class="book__button--listen">
                                                                                <svg class="book__button--listen-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                                </svg>
                                                                            </a>
                                                                            <a href="#!" class="book__button--read">
                                                                                <svg class="book__button--read-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                                </svg>
                                                                            </a>
                                                                            <a href="#!" class="book__button--download">
                                                                                <svg class="book__button--download-icon">
                                                                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                                </svg>
                                                                            </a>


                                                                        </div>

                                                                </div>

                                                                <div class="book__info">
                                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                                    <h4 class="book__author">
                                                                        <span class="book__author--1">by</span>
                                                                        <span class="book__author--2">Serene Wright</span>
                                                                    </h4>
                                                                    <div class="book__rating rating__container">

                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        
                                                                    </div>

                                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                                        <span>See More</span>
                                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                                        </svg>
                                                                    </a>
                                                                </div>

                                                                
                                                            </div>

                                                        </div>
                                                    </div>

                                                    

                                                    
                                                </div>

                                                <div class="detail__review--container">
                                                    <div class="detail__review--first">

                                                        <div class="detail__grid detail__grid-1">
                                                            <div class="detail__score--container">
                                                                <div class="detail__score--title  heading-secondary">Reader Feedback</div>
                                                                <div class="detail__score--point">4.8</div>
                                                                <div class="detail__score--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                <div class="detail__score--vote">1204 Votes</div>
                                                            </div>

                                                        </div>

                                                        <div class="detail__grid detail__grid-3">
                                                            
                                                            <div class="detail__user--container">
                                                                <div class="detail__user--img"></div>
                                                                <div class="detail__user--star rating__container">
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star checked"></span>
                                                                    <span class="fa fa-star"></span>
                                                                    <span class="fa fa-star"></span>
                                                                </div>
                                                                <div class="detail__user--feedback">
                                                                    <h2 class="detail__user--name heading-secondary">Jonas Anderson</h2>
                                                                    <h2 class="detail__user--heading">This book is Abosolute Amazing</h2>
                                                                    <p class="detail__user--content">
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos odit itaque corporis aliquid fuga accusamus labore totam obcaecati! Dicta nemo, vel officia vitae soluta voluptates enim labore. Dicta, iste amet?
                                                                    </p>
                                                                    <div class="detail__user--button" data-state="have">Update Your FeedBack</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="detail__review--after">

                                                        <div class="detail__reader--card">
                                                            <div class="detail__grid detail__grid-1">
                                                                <div class="detail__reader--container">
                                                                    <div class="detail__reader--img"></div>
                                                                    <div class="detail__reader--info">
                                                                        <div class="detail__reader--time">1 week ago</div>
                                                                        <div class="detail__reader--name">Jonas Anderson</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="detail__grid detail__grid-3">
                                                                <div class="detail__reader--feedback">
                                                                    <div class="detail__reader--star rating__container">
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                    </div>
                                                                    <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                                                                    <p class="detail__reader--content">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="detail__reader--card">
                                                            <div class="detail__grid detail__grid-1">
                                                                <div class="detail__reader--container">
                                                                    <div class="detail__reader--img"></div>
                                                                    <div class="detail__reader--info">
                                                                        <div class="detail__reader--time">1 week ago</div>
                                                                        <div class="detail__reader--name">Jonas Anderson</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="detail__grid detail__grid-3">
                                                                <div class="detail__reader--feedback">
                                                                    <div class="detail__reader--star rating__container">
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                    </div>
                                                                    <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                                                                    <p class="detail__reader--content">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="detail__reader--card">
                                                            <div class="detail__grid detail__grid-1">
                                                                <div class="detail__reader--container">
                                                                    <div class="detail__reader--img"></div>
                                                                    <div class="detail__reader--info">
                                                                        <div class="detail__reader--time">1 week ago</div>
                                                                        <div class="detail__reader--name">Jonas Anderson</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="detail__grid detail__grid-3">
                                                                <div class="detail__reader--feedback">
                                                                    <div class="detail__reader--star rating__container">
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star checked"></span>
                                                                        <span class="fa fa-star"></span>
                                                                        <span class="fa fa-star"></span>
                                                                    </div>
                                                                    <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                                                                    <p class="detail__reader--content">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>   
            </div>
            

            <div class="home__body">
                                <!-- HEADER -->
                <header class="header">
                    <div class="header__banner"></div>
                    
                    <div class="header__search--bar">
                        <input type="text" class="nav__search--bar" id="header__search" placeholder="Search anything...">
                        <select class="nav__search--select" id="header__select">
                            <option value="authors" class="nav__search--option">author</option>
                            <option value="books" class="nav__search--option">book</option>
                            <option value="collections" class="nav__search--option">collection</option>
                            <option value="genre"  class="nav__search--option">genre</option>
                        </select>
                        <svg class="nav__search--icon icon-search" id="header__icon">
                            <use xlink:href="./img/icons/sprite.svg#icon-search"></use> 
                        </svg>
                    </div>
    
                </header>
    
            <!-- CÁC SECTION Ở TRONG NÀY -->
                <main class="main">
    
                                <!-- SECTION POPULAR -->
                                <section class="section__popular" id="popular">
                                    <div class="grid-1">
                                        <h2 class="popular__author--title heading-secondary">Author of the week</h2>
                                        <ul class="popular__author--list">
            
                                            <!-- <li class="popular__author--item">
                                                <div class="popular__author--img popular__author--img-1"></div>
                                                <div class="popular__author--name popular__author--name-1">Ashley Dawson</div>
                                            </li>
                                            <li class="popular__author--item">
                                                <div class="popular__author--img popular__author--img-2"></div>
                                                <div class="popular__author--name popular__author--name-2">Ashley Dawson</div>
                                            </li>
                                            <li class="popular__author--item">
                                                <div class="popular__author--img popular__author--img-3"></div>
                                                <div class="popular__author--name popular__author--name-3">Ashley Dawson</div>
                                            </li>
                                            <li class="popular__author--item">
                                                <div class="popular__author--img popular__author--img-4"></div>
                                                <div class="popular__author--name popular__author--name-4">Ashley Dawson</div>
                                            </li>
                                            <li class="popular__author--item">
                                                <div class="popular__author--img popular__author--img-5"></div>
                                                <div class="popular__author--name popular__author--name-5">Ashley Dawson</div>
                                            </li>
                                            <li class="popular__author--item">
                                                <div class="popular__author--img popular__author--img-6"></div>
                                                <div class="popular__author--name popular__author--name-6">Ashley Dawson</div>
                                            </li>
                                            <li class="popular__author--item">
                                                <div class="popular__author--img popular__author--img-7"></div>
                                                <div class="popular__author--name popular__author--name-7">Ashley Dawson</div>
                                            </li>
                                            <li class="popular__author--item">
                                                <div class="popular__author--img popular__author--img-8"></div>
                                                <div class="popular__author--name popular__author--name-8">Ashley Dawson</div>
                                            </li> -->
            
                                        </ul>
                                    </div>
            
                                    <div class="grid-3">
                                        <div class="popular__navigation">
                                            <h1 class=" popular__category--title heading-primary">Popular by Genre</h1>
            
                                            <ul class="popular__category--list">
                                                <li class="popular__category-item popular__category--item--active">Business</li>
                                                <li class="popular__category-item">Cuisine</li>
                                                <li class="popular__category-item ">Romantic</li>
                                                <li class="popular__category-item">Health</li>
                                                <li class="popular__category-item">Comic</li>
                                            </ul>
            
                                            <a href="#!" class="popular__category--btn btn__see-all">See All &rarr; </a>
                                        </div>
            
                                        <div class="popular__book--shelf" id="popular-bookshelf">
            
                                            <!-- <div class="book__card">
                                                <div class="book__bookmark">
                                                    <svg class="book__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use>
                                                    </svg>
                                                </div>
            
                                                <div class="book__img book__img-1">
            
                                                    <div class="book__button--container">
            
                                                        <a href="#!" class="book__button--listen">
                                                            <svg class="book__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--read">
                                                            <svg class="book__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--download">
                                                            <svg class="book__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
            
                                                </div>
            
                                                <div class="book__info">
                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                    <h4 class="book__author">
                                                        <span class="book__author--1">by</span>
                                                        <span class="book__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="book__rating rating__container">
            
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                        <span>See More</span>
                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
            
                                            <div class="book__card">
            
                                                <div class="book__bookmark">
                                                    <svg class="book__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="book__img book__img-2">
                                                    <div class="book__button--container">
            
                                                        <a href="#!" class="book__button--listen">
                                                            <svg class="book__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--read">
                                                            <svg class="book__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--download">
                                                            <svg class="book__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="book__info">
                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                    <h4 class="book__author">
                                                        <span class="book__author--1">by</span>
                                                        <span class="book__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="book__rating rating__container">
            
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                        <span>See More</span>
                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
            
            
                                            <div class="book__card">
            
                                                <div class="book__bookmark">
                                                    <svg class="book__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="book__img book__img-3">
                                                    <div class="book__button--container">
            
                                                        <a href="#!" class="book__button--listen">
                                                            <svg class="book__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--read">
                                                            <svg class="book__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--download">
                                                            <svg class="book__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="book__info">
                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                    <h4 class="book__author">
                                                        <span class="book__author--1">by</span>
                                                        <span class="book__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="book__rating rating__container">
            
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                        <span>See More</span>
                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
            
                                            <div class="book__card">
            
                                                <div class="book__bookmark">
                                                    <svg class="book__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="book__img book__img-4">
                                                    <div class="book__button--container">
            
                                                        <a href="#!" class="book__button--listen">
                                                            <svg class="book__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--read">
                                                            <svg class="book__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--download">
                                                            <svg class="book__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="book__info">
                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                    <h4 class="book__author">
                                                        <span class="book__author--1">by</span>
                                                        <span class="book__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="book__rating rating__container">
            
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                        <span>See More</span>
                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
            
                                            <div class="book__card">
            
                                                <div class="book__bookmark">
                                                    <svg class="book__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
                                                <div class="book__img book__img-5">
            
                                                    <div class="book__button--container">
            
                                                        <a href="#!" class="book__button--listen">
                                                            <svg class="book__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--read">
                                                            <svg class="book__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--download">
                                                            <svg class="book__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="book__info">
                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                    <h4 class="book__author">
                                                        <span class="book__author--1">by</span>
                                                        <span class="book__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="book__rating rating__container">
            
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                        <span>See More</span>
                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
            
            
                                            <div class="book__card">
            
                                                <div class="book__bookmark">
                                                    <svg class="book__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="book__img book__img-6">
                                                    <div class="book__button--container">
            
                                                        <a href="#!" class="book__button--listen">
                                                            <svg class="book__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--read">
                                                            <svg class="book__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="book__button--download">
                                                            <svg class="book__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="book__info">
                                                    <h3 class="book__title">The Happy Lemon...</h3>
                                                    <h4 class="book__author">
                                                        <span class="book__author--1">by</span>
                                                        <span class="book__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="book__rating rating__container">
            
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                                                        <span>See More</span>
                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
            
            
                                            </div> -->
            
            
            
                                        </div>
            
                                    </div>
                                </section>
            
                                <!-- SECTION NEWLY UPDATED -->
                                <section class="section__newly" id="newly">
            
                                    <div class="pagination">
                                        <div class="pagination__container">
                                            <a class="pagination__left pagination__left-newly">
                                                <svg class="pagination__icon pagination__icon-left">
                                                    <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                                </svg>
                                            </a>
                                            <a class="pagination__right pagination__right-newly">
                                                <svg class="pagination__icon pagination__icon-right">
                                                    <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
            
            
            
                                    <div class="newly__header">
                                        <h2 class="heading-primary">Newly Updated</h2>
                                        <span class="newly__line newly__line-1"></span>
                                    </div>
            
                                    <div class="newly__overflow">
                                        <div class="newly__container" data-pos="0">
            
                                            <div class="newly__card newly__card-1" id="newly-1">
            
                                                <div class="newly__bookmark">
                                                    <svg class="newly__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="newly__img newly__img-2">
                                                    <div class="newly__button--container">
            
                                                        <a href="#!" class="newly__button--listen">
                                                            <svg class="newly__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--read">
                                                            <svg class="newly__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--download">
                                                            <svg class="newly__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="newly__info">
                                                    <h3 class="newly__title">The Happy Lemon</h3>
                                                    <h4 class="newly__author">
                                                        <span class="newly__author--1">by</span>
                                                        <span class="newly__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="newly__rating rating__container">
            
                                                        <span class="fa fa-star checked-1"></span>
                                                        <span class="fa fa-star checked-1"></span>
                                                        <span class="fa fa-star checked-1"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="newly__button btn__see-book btn__see-book-1">
                                                        <span>See The Book</span>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
                                            <div class="newly__card newly__card-2" id="newly-2">
            
                                                <div class="newly__bookmark">
                                                    <svg class="newly__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="newly__img newly__img-5">
                                                    <div class="newly__button--container">
            
                                                        <a href="#!" class="newly__button--listen">
                                                            <svg class="newly__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--read">
                                                            <svg class="newly__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--download">
                                                            <svg class="newly__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="newly__info">
                                                    <h3 class="newly__title">The Happy Lemon</h3>
                                                    <h4 class="newly__author">
                                                        <span class="newly__author--1">by</span>
                                                        <span class="newly__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="newly__rating rating__container">
            
                                                        <span class="fa fa-star checked-2"></span>
                                                        <span class="fa fa-star checked-2"></span>
                                                        <span class="fa fa-star checked-2"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="newly__button btn__see-book btn__see-book-2">
                                                        <span>See The Book</span>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
                                            <div class="newly__card newly__card-3" id="newly-3">
            
                                                <div class="newly__bookmark">
                                                    <svg class="newly__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="newly__img newly__img-3">
                                                    <div class="newly__button--container">
            
                                                        <a href="#!" class="newly__button--listen">
                                                            <svg class="newly__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--read">
                                                            <svg class="newly__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--download">
                                                            <svg class="newly__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="newly__info">
                                                    <h3 class="newly__title">The Happy Lemon</h3>
                                                    <h4 class="newly__author">
                                                        <span class="newly__author--1">by</span>
                                                        <span class="newly__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="newly__rating rating__container">
            
                                                        <span class="fa fa-star checked-3"></span>
                                                        <span class="fa fa-star checked-3"></span>
                                                        <span class="fa fa-star checked-3"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="newly__button btn__see-book btn__see-book-3">
                                                        <span>See The Book</span>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
                                            <div class="newly__card newly__card-1" id="newly-4">
            
                                                <div class="newly__bookmark">
                                                    <svg class="newly__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="newly__img newly__img-6">
                                                    <div class="newly__button--container">
            
                                                        <a href="#!" class="newly__button--listen">
                                                            <svg class="newly__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--read">
                                                            <svg class="newly__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--download">
                                                            <svg class="newly__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="newly__info">
                                                    <h3 class="newly__title">The Happy Lemon</h3>
                                                    <h4 class="newly__author">
                                                        <span class="newly__author--1">by</span>
                                                        <span class="newly__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="newly__rating rating__container">
            
                                                        <span class="fa fa-star checked-1"></span>
                                                        <span class="fa fa-star checked-1"></span>
                                                        <span class="fa fa-star checked-1"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="newly__button btn__see-book btn__see-book-1">
                                                        <span>See The Book</span>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
                                            <div class="newly__card newly__card-2" id="newly-5">
            
                                                <div class="newly__bookmark">
                                                    <svg class="newly__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
                                                <div class="newly__img newly__img-5">
            
                                                    <div class="newly__button--container">
            
                                                        <a href="#!" class="newly__button--listen">
                                                            <svg class="newly__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--read">
                                                            <svg class="newly__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--download">
                                                            <svg class="newly__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="newly__info">
                                                    <h3 class="newly__title">The Happy Lemon</h3>
                                                    <h4 class="newly__author">
                                                        <span class="newly__author--1">by</span>
                                                        <span class="newly__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="newly__rating rating__container">
            
                                                        <span class="fa fa-star checked-2"></span>
                                                        <span class="fa fa-star checked-2"></span>
                                                        <span class="fa fa-star checked-2"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="#!" class="newly__button btn__see-book btn__see-book-2">
                                                        <span>See The Book</span>
                                                    </a>
                                                </div>
            
            
                                            </div>
            
                                            <div class="newly__card newly__card-3" id="newly-6">
            
                                                <div class="newly__bookmark">
                                                    <svg class="newly__bookmark-icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                                    </svg>
                                                </div>
            
            
            
                                                <div class="newly__img newly__img-3">
                                                    <div class="newly__button--container">
            
                                                        <a href="#!" class="newly__button--listen">
                                                            <svg class="newly__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--read">
                                                            <svg class="newly__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="newly__button--download">
                                                            <svg class="newly__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
            
            
                                                    </div>
                                                </div>
            
                                                <div class="newly__info">
                                                    <h3 class="newly__title">The Happy Lemon</h3>
                                                    <h4 class="newly__author">
                                                        <span class="newly__author--1">by</span>
                                                        <span class="newly__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="newly__rating rating__container">
            
                                                        <span class="fa fa-star checked-3"></span>
                                                        <span class="fa fa-star checked-3"></span>
                                                        <span class="fa fa-star checked-3"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit...</p>
                                                    <a href="" class="newly__button btn__see-book btn__see-book-3">
                                                        <span>See The Book</span>
                                                    </a>
                                                </div>
            
            
                                            </div>
                                        </div>
                                    </div>
            
            
                                    <div class="newly__button">
                                        <span class="newly__line newly__line-2"></span>
                                        <a href="#!" class="btn__see-all">
                                            See All &rarr;
                                        </a>
                                    </div>
            
            
            
            
                                </section>
            
                                <!-- SECTION TOPWEEK -->
                                <section class="section__topweek">
                                    <div class="grid-1">
                                        <h2 class="topweek__reader--title heading-secondary">Reader of the week</h2>
                                        <ul class="topweek__reader--list">
            
                                            <li class="topweek__reader--item">
                                                <div class="topweek__reader--rank topweek__reader--rank-1">1</div>
                                                <div class="topweek__reader--img topweek__reader--img-1"></div>
                                                <div class="topweek__reader--info">
                                                    <div class="topweek__reader--name">Peter Manseau</div>
                                                    <div class="topweek__reader--hour">
                                                        <svg class="topweek__reader--hour-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-clock"></use>
                                                        </svg>
                                                        <span class="topweek__reader--hour-count">152,56 hours</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="topweek__reader--item">
                                                <div class="topweek__reader--rank topweek__reader--rank-2">2</div>
                                                <div class="topweek__reader--img topweek__reader--img-2"></div>
                                                <div class="topweek__reader--info">
                                                    <div class="topweek__reader--name">Peter Manseau</div>
                                                    <div class="topweek__reader--hour">
                                                        <svg class="topweek__reader--hour-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-clock"></use>
                                                        </svg>
                                                        <span class="topweek__reader--hour-count">152,56 hours</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="topweek__reader--item">
                                                <div class="topweek__reader--rank topweek__reader--rank-3">3</div>
                                                <div class="topweek__reader--img topweek__reader--img-3"></div>
                                                <div class="topweek__reader--info">
                                                    <div class="topweek__reader--name">Peter Manseau</div>
                                                    <div class="topweek__reader--hour">
                                                        <svg class="topweek__reader--hour-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-clock"></use>
                                                        </svg>
                                                        <span class="topweek__reader--hour-count">152,56 hours</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="topweek__reader--item">
                                                <div class="topweek__reader--rank topweek__reader--rank-4">4</div>
                                                <div class="topweek__reader--img topweek__reader--img-4"></div>
                                                <div class="topweek__reader--info">
                                                    <div class="topweek__reader--name">Peter Manseau</div>
                                                    <div class="topweek__reader--hour">
                                                        <svg class="topweek__reader--hour-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-clock"></use>
                                                        </svg>
                                                        <span class="topweek__reader--hour-count">152,56 hours</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="topweek__reader--item">
                                                <div class="topweek__reader--rank topweek__reader--rank-5">5</div>
                                                <div class="topweek__reader--img topweek__reader--img-5"></div>
                                                <div class="topweek__reader--info">
                                                    <div class="topweek__reader--name">Peter Manseau</div>
                                                    <div class="topweek__reader--hour">
                                                        <svg class="topweek__reader--hour-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-clock"></use>
                                                        </svg>
                                                        <span class="topweek__reader--hour-count">152,56 hours</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="topweek__reader--item">
                                                <div class="topweek__reader--rank topweek__reader--rank-6">6</div>
                                                <div class="topweek__reader--img topweek__reader--img-6"></div>
                                                <div class="topweek__reader--info">
                                                    <div class="topweek__reader--name">Peter Manseau</div>
                                                    <div class="topweek__reader--hour">
                                                        <svg class="topweek__reader--hour-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-clock"></use>
                                                        </svg>
                                                        <span class="topweek__reader--hour-count">152,56 hours</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="topweek__reader--item">
                                                <div class="topweek__reader--rank topweek__reader--rank-7">7</div>
                                                <div class="topweek__reader--img topweek__reader--img-7"></div>
                                                <div class="topweek__reader--info">
                                                    <div class="topweek__reader--name">Peter Manseau</div>
                                                    <div class="topweek__reader--hour">
                                                        <svg class="topweek__reader--hour-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-clock"></use>
                                                        </svg>
                                                        <span class="topweek__reader--hour-count">152,56 hours</span>
                                                    </div>
                                                </div>
                                            </li>
            
                                        </ul>
                                    </div>
            
                                    <div class="grid-3">
            
                                        <div class="topweek__book--title">
                                            Top Of The Week
                                            <div class="topweek__book--mask topweek__book--mask-small">
                                                <div class="topweek__book--bg topweek__book--bg-small"></div>
                                            </div>
                                        </div>
            
                                        <div class="topweek__book--mask topweek__book--mask-big">
            
                                            <div class="pagination">
                                                <div class="pagination__container">
                                                    <a class="pagination__left pagination__left-topweek">
                                                        <svg class="pagination__icon pagination__icon-left">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                                        </svg>
                                                    </a>
                                                    <a class="pagination__right pagination__right-topweek">
                                                        <svg class="pagination__icon pagination__icon-right">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
            
                                            <svg class="topweek__book--bookmark">
                                                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                            </svg>
            
                                            <div class="topweek__img topweek__img-1">
                                                <div class="topweek__button--container">
            
                                                    <a class="topweek__button--listen" data-link="">
                                                        <svg class="topweek__button--listen-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                        </svg>
                                                    </a>
                                                    <a class="topweek__button--read" data-link="">
                                                        <svg class="topweek__button--read-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                        </svg>
                                                    </a>
                                                    <a class="topweek__button--download" data-link="">
                                                        <svg class="topweek__button--download-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                        </svg>
                                                    </a>
            
            
                                                </div>
                                            </div>
            
                                            <div class="topweek__info">
                                                <!-- <h3 class="topweek__title">The Happy Lemon</h3>
                                                <h4 class="topweek__author">
                                                    <span class="topweek__author--1">by</span>
                                                    <span class="topweek__author--2">Serene Wright</span>
                                                </h4>
                                                <div class="topweek__rating rating__container">
            
                                                    <span class="fa fa-star checked-1"></span>
                                                    <span class="fa fa-star checked-1"></span>
                                                    <span class="fa fa-star checked-1"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
            
                                                </div>
            
                                                <p class="topweek__description">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Temporibus perspiciatis officiis reprehenderit quos, praesentium
                                                    laudantium illo odit error vel sed molestias fuga tenetur mollitia ratione
                                                    maxime fugiat doloribus eum obcaecati?</p>
                                                <a href="#!" class="topweek__button btn__see-line btn__see-line-1">
                                                    <span>See more</span>
                                                    <svg class="topweek__button--arrow">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                                    </svg>
                                                </a> -->
                                            </div>
            
                                            <div class="topweek__dots">
                                                <!-- <div class="topweek__dots-round topweek__dots--active"></div>
                                                <div class="topweek__dots-round"></div>
                                                <div class="topweek__dots-round"></div> -->
                                            </div>
            
                                            <div class="topweek__book--bg topweek__book--bg-big"></div>
                                        </div>
            
            
                                    </div>
            
                                </section>
            
                                <!-- SECTION COLLECTION BANNER-->
                                <section class="section__collection--banner">
                                    <div class="grid-4">
                                        <div class="section__collection--banner-bg">&nbsp;</div>
                                    </div>
                                </section>
            
                                <!-- SECTION COLLECTION -->
                                <section class="section__collection">
                                    <div class="grid-1">
                                        <h2 class="collection__category--title heading-secondary">Categories</h2>
                                        <div class="collection__category--overflow">
                                            <ul class="collection__category--list">
            
                                                <!-- <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li>
            
                                                <li class="collection__category--item" data-category="buss">
                                                    <svg class="collection__category--icon">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-read"></use>
                                                    </svg>
                                                    <div class="collection__category--name">Bussiness</div>
                                                    <div class="collection__category--count">10</div>
                                                </li> -->
            
                                            </ul>
                                        </div>
            
                                    </div>
            
                                    <div class="grid-3">
            
                                        <div class="pagination2">
                                            <div class="pagination2__container">
                                                <span class="pagination2__name">Page</span>
                                                <ul class="pagination2__list">
                                                    <li class="pagination2__item pagination2__item--active">1</li>
                                                    <li class="pagination2__item">2</li>
                                                    <li class="pagination2__item">3</li>
                                                </ul>
                                                <a href="#!" class="ppagination2__btn btn__see-all">See All &rarr;</a>
                                            </div>
                                        </div>
            
                                        <div class="collection__container">
<!--             
                                            <div class="collection__card">
            
                                                <div class="collection__card--imgs">
                                                    <div class="collection__card--img collection__card--img-1"></div>
                                                    <div class="collection__card--img collection__card--img-2"></div>
                                                    <div class="collection__card--img collection__card--img-3"></div>
                                                </div>
            
                                                <div class="collection__card--btn-right">
                                                    <div class="collection__card--bookmark">
                                                        <svg class="collection__card--bookmark--icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark-orange"></use>
                                                        </svg>
                                                    </div>
                                                    <div class="collection__card__button--container">
                                                        <a href="#!" class="collection__card__button--listen">
                                                            <svg class="collection__card__button--listen-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="collection__card__button--read">
                                                            <svg class="collection__card__button--read-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use>
                                                            </svg>
                                                        </a>
                                                        <a href="#!" class="collection__card__button--download">
                                                            <svg class="collection__card__button--download-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
            
                                                <div class="collection__card--body">
                                                    <div class="collection__card--count tag-orange">3 books</div>
                                                    <div class="collection__card--title-container">
                                                        <div class="collection__card--title">
                                                            The secret of long-lasting happiness in daily life ...
                                                        </div>
                                                        <div class="collection__card--author">Various Artist</div>
                                                    </div>
                                                </div>
            
                                                <div class="collection__card--footer">
                                                    <a href="#!" class="collection__card--btn-left btn__see-collection">
                                                        <p>See Collection</p>
                                                        <svg class="collection__card--btn-left-icon">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use>
                                                        </svg>
                                                    </a>
            
                                                    <div class="collection__card--rating rating__container">
            
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
            
                                                    </div>
            
                                                </div>
            
            
                                            </div> -->
            
                                        </div> 
            
            
                                    </div>
                                </section>
            
                                <!-- SECTION RECOMMEND -->
                                <section class="section__recommend">
                                    <div class="recommend__header heading-primary">
                                        You May Like
                                    </div>
            
                                    <div class="recommend__container">
            
                                        <div class="pagination recommend__pagination" data-page=0>
                                            <div class="pagination__container">
                                                <a class="pagination__left pagination__left-recommend">
                                                    <svg class="pagination__icon pagination__icon-left">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                                    </svg>
                                                </a>
                                                <a class="pagination__right pagination__right-recommend">
                                                    <svg class="pagination__icon pagination__icon-right">
                                                        <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
            
                                        <div class="grid-4 recommend__grid">
                                            <!-- <div class="recommend__card">
            
                                                <div class="recommend__img recommend__img-1">
                                                        <div class="recommend__bookmark">
                                                            <svg class="recommend__bookmark-icon">
                                                                <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                                            </svg>
                                                        </div>
                
                                                        <div class="recommend__button--container">
                    
                                                            <a href="#!" class="recommend__button--listen">
                                                                <svg class="recommend__button--listen-icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                                </svg>
                                                            </a>
                                                            <a href="#!" class="recommend__button--read">
                                                                <svg class="recommend__button--read-icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                                </svg>
                                                            </a>
                                                            <a href="#!" class="recommend__button--download">
                                                                <svg class="recommend__button--download-icon">
                                                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                                </svg>
                                                            </a>
                    
                    
                                                        </div>
                
                                                </div>
                
                                                <div class="recommend__info">
                                                    <h3 class="recommend__title">The Happy Lemon...</h3>
                                                    <h4 class="recommend__author">
                                                        <span class="recommend__author--1">by</span>
                                                        <span class="recommend__author--2">Serene Wright</span>
                                                    </h4>
                                                    <div class="recommend__rating rating__container">
                
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        
                                                    </div>
                
                                                    <a href="#!" class="recommend__button btn__see-more btn__see-more-blue">
                                                        <span>See More</span>
                                                        <svg class=" btn__see-more-icon icon-arrow">
                                                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                                        </svg>
                                                    </a>
                                                </div>
                                            
                                            </div>   -->
                                        </div>
            
                                    </div>
<!--             
                                    <div id="dot" class="recommend__dots">
                                        <div class="recommend__dots-round recommend__dots--active"></div>
                                        <div class="recommend__dots-round"></div>
                                        <div class="recommend__dots-round"></div>
                                    </div>
             -->
                                </section>
            

    
                </main>
                
            </div>

            <!-- FOOTER -->
            <footer class="footer">
                <span class="footer__title">about project</span>
                <span class="footer__title">about us</span>

                <span class="footer__center">
                    <svg class="footer__logo">
                        <use xlink:href="./img/icons/sprite.svg#icon-logo"></use> 
                    </svg>
                    <p class="footer__legal"> &copy; 2020 CI JS - Design by Phan Duc Trong</p>
                </span>
                
                <span class="footer__title">follow us</span>
                <span class="footer__title">Mind X</span>
            </footer>


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
                    <button class="admin-button loadBtn">Load JSON</button>
                    <!--<button class="admin-button updateRating">Update rating Once</button> -->
                    
                </div>
            </div>

            <div class="insertHTML"></div>
        </div>
    </form>
    `,

    detailBook: `
        <div class="detail-page">
        <div class="detail__background--container">
            <div class="detail__background--bg"></div>
        </div>

        <div class="detail__button--container">
            <svg class="detail__button--close">
                <use xlink:href="./img/icons/sprite.svg#icon-x"></use> 
            </svg>

            <svg class="detail__button--bookmark">
                <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
            </svg>
        </div>

        <div class="detail__info--container detail__info--container-book">
            <div class="detail__title">
                Harry Porter Và Bảo Bối Tử Thần (Phần 1)
            </div>
            <div class="detail__author--container">
                <div class="detail__author--img"></div>
                <div class="detail__author--info">
                    <div class="detail__author--name">J.K.Rowling</div>
                    <div class="detail__author--data">
                        <div class="detail__author--publication">12 Publication</div>
                        <div class="detail__author--rate">4.7 Rates</div>
                    </div>
                </div>
            </div>
            <div class="detail__item--rating">
                <div class="detail__item--rating-star rating__container">

                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    
                </div> 
                <div class="detail__item--rating-count">1,054</div>

            </div>
        </div>

        <div class="detail__main--container detail__main--container-book">

            <div class="detail__grid detail__grid-1">
                <div class="detail__img--container detail__img--container-book">
                    <div class="detail__img"></div>
                </div>
                <div class="detail__about--header heading-secondary">About</div>
                <p class="detail__about--description">
                    Chúng ta đã được biết đến tác giả qua hai cuốn sách Bí mật của may mắn và Tiếp thị phá cách (đồng tác giả với Phillip Kotler), ở cuốn sách này, bằng những trải nghiệm sâu sắc về thực tế của mình, Tría de Bes sẽ giúp bạn nhận dạng mười bốn nhân tố chính dẫn đến thất bại mà bất cứ ai khao khát trở thành doanh nhân nên biết trước khi bắt đầu. Từ việc đào sâu ý tưởng ban đầu, cân nhắc giữa viêc nên có cộng sự hay không, đến nghiên cứu chi tiết cách thức quản lý tăng trưởng,... tác giả sẽ dẫn bạn qua những thất bại thông thường - và những phương pháp ngăn ngừa tốt nhất - để bạn có thể tập trung vào những nước cờ đúng đắn cho doanh nghiệp mới của mình.....

                </p>
                <div class="detail__categories--container">
                    <a href="" class="detail__categories--tag">novel</a>
                    <a href="" class="detail__categories--tag">psychology</a>
                </div>
            </div>

            <div class="detail__grid detail__grid-3">
                <div class="detail__link--container detail__link--container-book">
                    <a href="" class="detail__link--read btn__detail btn__detail-blue">
                        <svg class="detail__link--read--icon">
                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                        </svg>
                        <span class="detail__link--read--content">Read</span>
                    </a>

                    <a class="detail__link--listen btn__detail btn__detail-orange">
                        <svg class="detail__link--listen--icon">
                            <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                        </svg>
                        <span class="detail__link--listen--content">Audio</span>
                    </a>

                    <a  class="detail__link--download btn__detail btn__detail-white">
                        <svg class="detail__link--download--icon">
                            <use xlink:href="./img/icons/sprite.svg#icon-download-grey-solid"></use> 
                        </svg>
                        <span class="detail__link--download--content">Download</span>
                    </a>

                    <a  class="detail__link--bookmark btn__detail btn__detail-none">
                        <span class="detail__link--bookmark--content">Add to my Bookmark</span>
                        <svg class="detail__link--bookmark--icon">
                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark-grey"></use> 
                        </svg>
                    </a>
                </div>

                <div class="detail__recommend--header heading-secondary">You may also like</div>

                <div class="detail__recommend--container detail__recommend--container-book">

                    <div class="detail__recommend--book">
                        <div class="detail__recommend--img detail__recommend--img-1">

                            <div class="detail__button--recommend-container">

                                <a href="#!" class="detail__button--listen">
                                    <svg class="detail__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--read">
                                    <svg class="detail__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--download">
                                    <svg class="detail__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>
                        </div>

                        <div class="detail__recommend--title">
                            Harry Porter và cái gì đó không biết...
                        </div>

                        <div class="detail__recommend--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        
                        <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </div>

                    </div>
                    <div class="detail__recommend--book">
                        <div class="detail__recommend--img detail__recommend--img-2">

                            <div class="detail__button--recommend-container">

                                <a href="#!" class="detail__button--listen">
                                    <svg class="detail__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--read">
                                    <svg class="detail__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--download">
                                    <svg class="detail__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>
                        </div>

                        <div class="detail__recommend--title">
                            Harry Porter và cái gì đó không biết...
                        </div>

                        <div class="detail__recommend--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        
                        <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </div>

                    </div>
                    <div class="detail__recommend--book">
                        <div class="detail__recommend--img detail__recommend--img-3">

                            <div class="detail__button--recommend-container">

                                <a href="#!" class="detail__button--listen">
                                    <svg class="detail__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--read">
                                    <svg class="detail__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--download">
                                    <svg class="detail__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>
                        </div>

                        <div class="detail__recommend--title">
                            Harry Porter và cái gì đó không biết...
                        </div>

                        <div class="detail__recommend--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        
                        <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </div>

                    </div>
                    <div class="detail__recommend--book">
                        <div class="detail__recommend--img detail__recommend--img-4">
                            <div class="detail__button--recommend-container">

                                <a href="#!" class="detail__button--listen">
                                    <svg class="detail__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--read">
                                    <svg class="detail__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--download">
                                    <svg class="detail__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>
                        </div>

                        <div class="detail__recommend--title">
                            Harry Porter và cái gì đó không biết...
                        </div>

                        <div class="detail__recommend--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        
                        <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </div>

                    </div>
                    <div class="detail__recommend--book">
                        <div class="detail__recommend--img detail__recommend--img-4">
                            <div class="detail__button--recommend-container">

                                <a href="#!" class="detail__button--listen">
                                    <svg class="detail__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--read">
                                    <svg class="detail__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="detail__button--download">
                                    <svg class="detail__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>
                        </div>

                        <div class="detail__recommend--title">
                            Harry Porter và cái gì đó không biết...
                        </div>

                        <div class="detail__recommend--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        
                        <div class="detail__recommend--btn btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </div>

                    </div>

                </div>
            </div>

            

            
        </div>

        <div class="detail__review--container">
            <div class="detail__review--first">

                <div class="detail__grid detail__grid-1">
                    <div class="detail__score--container">
                        <div class="detail__score--title  heading-secondary">Reader Feedback</div>
                        <div class="detail__score--point">4.8</div>
                        <div class="detail__score--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div class="detail__score--vote">1204 Votes</div>
                    </div>

                </div>

                <div class="detail__grid detail__grid-3">
                    
                    <div class="detail__user--container">
                        <div class="detail__user--img"></div>
                        <div class="detail__user--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div class="detail__user--feedback">
                            <h2 class="detail__user--name heading-secondary">Jonas Anderson</h2>
                            <h2 class="detail__user--heading">This book is Abosolute Amazing</h2>
                            <p class="detail__user--content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos odit itaque corporis aliquid fuga accusamus labore totam obcaecati! Dicta nemo, vel officia vitae soluta voluptates enim labore. Dicta, iste amet?
                            </p>
                            <div class="detail__user--button" data-state="have">Update Your FeedBack</div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="detail__review--after">

                <div class="detail__reader--card">
                    <div class="detail__grid detail__grid-1">
                        <div class="detail__reader--container">
                            <div class="detail__reader--img"></div>
                            <div class="detail__reader--info">
                                <div class="detail__reader--time">1 week ago</div>
                                <div class="detail__reader--name">Jonas Anderson</div>
                            </div>
                        </div>
                    </div>

                    <div class="detail__grid detail__grid-3">
                        <div class="detail__reader--feedback">
                            <div class="detail__reader--star rating__container">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                            <p class="detail__reader--content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="detail__reader--card">
                    <div class="detail__grid detail__grid-1">
                        <div class="detail__reader--container">
                            <div class="detail__reader--img"></div>
                            <div class="detail__reader--info">
                                <div class="detail__reader--time">1 week ago</div>
                                <div class="detail__reader--name">Jonas Anderson</div>
                            </div>
                        </div>
                    </div>

                    <div class="detail__grid detail__grid-3">
                        <div class="detail__reader--feedback">
                            <div class="detail__reader--star rating__container">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                            <p class="detail__reader--content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="detail__reader--card">
                    <div class="detail__grid detail__grid-1">
                        <div class="detail__reader--container">
                            <div class="detail__reader--img"></div>
                            <div class="detail__reader--info">
                                <div class="detail__reader--time">1 week ago</div>
                                <div class="detail__reader--name">Jonas Anderson</div>
                            </div>
                        </div>
                    </div>

                    <div class="detail__grid detail__grid-3">
                        <div class="detail__reader--feedback">
                            <div class="detail__reader--star rating__container">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                            <p class="detail__reader--content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>    
    `,

    detailCollection: `
    <div class="detail-page">
    <div class="detail__background--container">
        <div class="detail__background--bg"></div>
    </div>

    <div class="detail__button--container">
        <svg class="detail__button--close">
            <use xlink:href="./img/icons/sprite.svg#icon-x"></use> 
        </svg>

        <svg class="detail__button--bookmark">
            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
        </svg>
    </div>

    <div class="detail__info--container detail__info--container-collection">
        <div class="detail__title">
            Harry Porter Và Bảo Bối Tử Thần (Phần 1)
        </div>
        <div class="detail__author--container">
            <div class="detail__author--img"></div>
            <div class="detail__author--info">
                <div class="detail__author--name">J.K.Rowling</div>
                <div class="detail__author--data">
                    <div class="detail__author--publication">12 Publication</div>
                    <div class="detail__author--rate">4.7 Rates</div>
                </div>
            </div>
        </div>
        <div class="detail__item--rating">
            <div class="detail__item--rating-star rating__container">

                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                
            </div> 
            <div class="detail__item--rating-count">1,054</div>

        </div>
    </div>

    <div class="detail__main--container detail__main--container-book">

        <div class="detail__grid detail__grid-1">
            <div class="detail__img--container detail__img--container-collection">
                <div class="detail__img"></div>
                <div class="detail__img"></div>
                <div class="detail__img"></div>
            </div>
            <div class="detail__about--header heading-secondary">About</div>
            <p class="detail__about--description">
                Chúng ta đã được biết đến tác giả qua hai cuốn sách Bí mật của may mắn và Tiếp thị phá cách (đồng tác giả với Phillip Kotler), ở cuốn sách này, bằng những trải nghiệm sâu sắc về thực tế của mình, Tría de Bes sẽ giúp bạn nhận dạng mười bốn nhân tố chính dẫn đến thất bại mà bất cứ ai khao khát trở thành doanh nhân nên biết trước khi bắt đầu. Từ việc đào sâu ý tưởng ban đầu, cân nhắc giữa viêc nên có cộng sự hay không, đến nghiên cứu chi tiết cách thức quản lý tăng trưởng,... tác giả sẽ dẫn bạn qua những thất bại thông thường - và những phương pháp ngăn ngừa tốt nhất - để bạn có thể tập trung vào những nước cờ đúng đắn cho doanh nghiệp mới của mình.....

            </p>
            <div class="detail__categories--container">
                <a href="" class="detail__categories--tag">novel</a>
                <a href="" class="detail__categories--tag">psychology</a>
            </div>
        </div>

        <div class="detail__grid detail__grid-3">
            <div class="detail__link--container detail__link--container-collection">
                <a href="" class="detail__link--read btn__detail btn__detail-blue">
                    <svg class="detail__link--read--icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                    </svg>
                    <span class="detail__link--read--content">Read</span>
                </a>

                <a class="detail__link--listen btn__detail btn__detail-orange">
                    <svg class="detail__link--listen--icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                    </svg>
                    <span class="detail__link--listen--content">Audio</span>
                </a>

                <a  class="detail__link--download btn__detail btn__detail-white">
                    <svg class="detail__link--download--icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-download-grey-solid"></use> 
                    </svg>
                    <span class="detail__link--download--content">Download</span>
                </a>

                <a  class="detail__link--bookmark btn__detail btn__detail-none">
                    <span class="detail__link--bookmark--content">Add to my Bookmark</span>
                    <svg class="detail__link--bookmark--icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark-grey"></use> 
                    </svg>
                </a>
            </div>

            <div class="detail__recommend--header heading-secondary">Books in this Collection</div>

            <div class="detail__recommend--container detail__recommend--container-collection">

                <div class="book__card">
                    <div class="book__bookmark">
                        <svg class="book__bookmark-icon">
                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                        </svg>
                    </div>
                    
                    <div class="book__img book__img-1">

                            <div class="book__button--container">

                                <a href="#!" class="book__button--listen">
                                    <svg class="book__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="book__button--read">
                                    <svg class="book__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="book__button--download">
                                    <svg class="book__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>

                    </div>

                    <div class="book__info">
                        <h3 class="book__title">The Happy Lemon...</h3>
                        <h4 class="book__author">
                            <span class="book__author--1">by</span>
                            <span class="book__author--2">Serene Wright</span>
                        </h4>
                        <div class="book__rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>

                        <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </a>
                    </div>

                    
                </div>

            </div>
        </div>

        

         
    </div>

    <div class="detail__review--container">
        <div class="detail__review--first">

            <div class="detail__grid detail__grid-1">
                <div class="detail__score--container">
                    <div class="detail__score--title  heading-secondary">Reader Feedback</div>
                    <div class="detail__score--point">4.8</div>
                    <div class="detail__score--star rating__container">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div class="detail__score--vote">1204 Votes</div>
                </div>

            </div>

            <div class="detail__grid detail__grid-3">
                
                <div class="detail__user--container">
                    <div class="detail__user--img"></div>
                    <div class="detail__user--star rating__container">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div class="detail__user--feedback">
                        <h2 class="detail__user--name heading-secondary">Jonas Anderson</h2>
                        <h2 class="detail__user--heading">This book is Abosolute Amazing</h2>
                        <p class="detail__user--content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos odit itaque corporis aliquid fuga accusamus labore totam obcaecati! Dicta nemo, vel officia vitae soluta voluptates enim labore. Dicta, iste amet?
                        </p>
                        <div class="detail__user--button" data-state="have">Update Your FeedBack</div>
                    </div>
                </div>

            </div>
        </div>

        <div class="detail__review--after">

            <div class="detail__reader--card">
                <div class="detail__grid detail__grid-1">
                    <div class="detail__reader--container">
                        <div class="detail__reader--img"></div>
                        <div class="detail__reader--info">
                            <div class="detail__reader--time">1 week ago</div>
                            <div class="detail__reader--name">Jonas Anderson</div>
                        </div>
                    </div>
                </div>

                <div class="detail__grid detail__grid-3">
                    <div class="detail__reader--feedback">
                        <div class="detail__reader--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                        <p class="detail__reader--content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                        </p>
                    </div>
                </div>
            </div>
            <div class="detail__reader--card">
                <div class="detail__grid detail__grid-1">
                    <div class="detail__reader--container">
                        <div class="detail__reader--img"></div>
                        <div class="detail__reader--info">
                            <div class="detail__reader--time">1 week ago</div>
                            <div class="detail__reader--name">Jonas Anderson</div>
                        </div>
                    </div>
                </div>

                <div class="detail__grid detail__grid-3">
                    <div class="detail__reader--feedback">
                        <div class="detail__reader--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                        <p class="detail__reader--content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                        </p>
                    </div>
                </div>
            </div>
            <div class="detail__reader--card">
                <div class="detail__grid detail__grid-1">
                    <div class="detail__reader--container">
                        <div class="detail__reader--img"></div>
                        <div class="detail__reader--info">
                            <div class="detail__reader--time">1 week ago</div>
                            <div class="detail__reader--name">Jonas Anderson</div>
                        </div>
                    </div>
                </div>

                <div class="detail__grid detail__grid-3">
                    <div class="detail__reader--feedback">
                        <div class="detail__reader--star rating__container">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <h2 class="detail__reader--heading">This book is Abosolute Amazing</h2>
                        <p class="detail__reader--content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita ducimus similique quisquam doloribus ea quam, velit ab ipsam natus delectus sequi. Voluptatum cum cupiditate consequatur esse officia nihil rem!
                        </p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>   
    `,
    profile : `
    <header class="user__header">
    <div class="user__banner-1">
        <div class="user__banner-info">
            <div class="user__stat user__stat-books">
                <span class="user__stat--count">3320</span>
                <span class="user__stat--title">books</span>
            </div>
            <div class="user__stat user__stat-collections">
                <span class="user__stat--count">50</span>
                <span class="user__stat--title">collections</span>
            </div>
            <div class="user__stat user__stat-reviews">
                <span class="user__stat--count">75</span>
                <span class="user__stat--title">reviews</span>
            </div>
            <div class="user__stat user__stat-hours">
                <span class="user__stat--count">2576</span>
                <span class="user__stat--title">hours reading</span>
            </div>
        </div>
    </div>
    <div class="user__banner-2">
            <div class="user__title">Your Library</div>
            <div class="user__banner--overlay"></div>
            <img class="user__banner--img" src="./img/png/book-banner.png" alt="">
    </div>
    <div class="user__avatar--container">
        <div class="user__avatar--info">
            <div class="user__avatar--img">
                <div class="user__avatar--add">
                    <span>&plus;</span></div>
                <img class="user__avatar--ava" src="./img//png/avatar-6.jpg" alt="">
            </div>
            <div class="user__avatar--name">
                <span class="user__avatar--name-1">Angelina Jolie</span>
                <span class="user__avatar--name-2">angelinajolie@gmail.com</span>
            </div>
        </div>
    
        <img class="user__avatar--book" src="./img/png/book-avatar.png" alt="book-avatar">
        <a href="" class="user__avatar--bookmark user__avatar--bookmark-orange"><span>Update Profile</span></a>
        <a href="" class="user__avatar--bookmark user__avatar--bookmark-blue"><span>Log Out</span></a>
        
    </div> 
</header>

<!-- CÁC SECTION Ở TRONG NÀY -->
<main class="user__main">
    <section class="section__continue">
        <div class="continue__left">
            <div class="continue__user--tag-container">
              <a class="continue__user--tag tag-white">fantasy</a>  
              <a class="continue__user--tag tag-white">adventure</a>  
              <a class="continue__user--tag tag-white">mystery</a>  
              <a class="continue__user--tag tag-white">bussiness</a>  
              <a class="continue__user--tag tag-white">novel</a>  
            </div>
            <div class="continue__user--quote">
                <img src="./img/png/book-cover-2.jpg" alt="quote-img">
            </div>
        </div>
        <div class="continue__right">
            <div class="continue__container--up">


                <div class="profile__continue profile__continue-read">
                    <div class="profile__heading profile__heading--continue profile__heading--active-blue">Continue Reading</div>
                    <div class="profile__continue--container">
                        <div class="profile__continue--img">
                        </div>
                        <div class="profile__continue--info">
                            <div class="profile__continue--title">The Happy Lemon</div>
                            <div class="profile__continue--author">by Secerer Line</div>
                            <div class="profile__continue--progress-container">
                                <div class="profile__continue--progress-bg">
                                    <div class="profile__continue--progress-bar profile__continue--progress-bar-blue" width ="25%"></div>
                                </div>
                                <div class="profile__continue--progress-stat">25% COMPLETE</div>
                            </div>
                            <div class="profile__continue--description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati, magni accusantium veniam quidem ut officiis. Non quaerat eaque sapiente molestiae rem nostrum sed, aperiam eius iure impedit omnis dolores?
                            </div>
                            <div class="profile__continue--btn-container">
                                <a href="" class="profile__continue--btn btn__detail btn__detail-blue">
                                    <svg class="profile__continue--btn-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                    <span class="profile__continue--btn-count profile__continue--btn-count-white">Read (page 365)</span>
                                </a>
                                <a href="" class="profile__continue--btn btn__detail btn__detail-white">
                                    <svg class="profile__continue--btn-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-grey-solid"></use> 
                                    </svg>
                                    <span class="profile__continue--btn-count profile__continue--btn-count-grey">Download</span>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>


                <div class="profile__recently profile__recently-read">

                    <div class="profile__heading profile__heading--recently">Reading Recently</div>

                    <!-- pagination -->
                    <div class="pagination pagination__profile">
                        <div class="pagination__container">
                            <a class="pagination__left pagination__left-recently">
                                <svg class="pagination__icon pagination__icon-left">
                                    <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                </svg>
                            </a>
                            <a class="pagination__right pagination__right-recently">
                                <svg class="pagination__icon pagination__icon-right">
                                    <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="profile__recently--container">

                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-blue">
                                    <div class="btn__profile--container btn__profile--container-blue">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 
                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-blue">
                                    <div class="btn__profile--container btn__profile--container-blue">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 
                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-blue">
                                    <div class="btn__profile--container btn__profile--container-blue">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 
                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-blue">
                                    <div class="btn__profile--container btn__profile--container-blue">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 
                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-blue">
                                    <div class="btn__profile--container btn__profile--container-blue">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 

                    </div>

                    
                    
                </div>
            </div>




            <div class="continue__container--down">


                <div class="profile__continue profile__continue-listen">
                    <div class="profile__heading profile__heading--continue profile__heading--active-orange">Continue Listening</div>
                    <div class="profile__continue--container">
                        <div class="profile__continue--img">
                        </div>
                        <div class="profile__continue--info">
                            <div class="profile__continue--title">The Happy Lemon</div>
                            <div class="profile__continue--author">by Secerer Line</div>
                            <div class="profile__continue--progress-container">
                                <div class="profile__continue--progress-bg">
                                    <div class="profile__continue--progress-bar profile__continue--progress-bar-orange" width ="25%"></div>
                                </div>
                                <div class="profile__continue--progress-stat">25% COMPLETE</div>
                            </div>
                            <div class="profile__continue--description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati, magni accusantium veniam quidem ut officiis. Non quaerat eaque sapiente molestiae rem nostrum sed, aperiam eius iure impedit omnis dolores?
                            </div>
                            <div class="profile__continue--btn-container">
                                <a href="" class="profile__continue--btn btn__detail btn__detail-orange">
                                    <svg class="profile__continue--btn-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                    <span class="profile__continue--btn-count profile__continue--btn-count-white">Read (page 365)</span>
                                </a>
                                <a href="" class="profile__continue--btn btn__detail btn__detail-white">
                                    <svg class="profile__continue--btn-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-grey-solid"></use> 
                                    </svg>
                                    <span class="profile__continue--btn-count profile__continue--btn-count-white-grey">Download</span>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>


                <div class="profile__recently profile__recently-listen">

                    <div class="profile__heading profile__heading--recently">Listening Recently</div>

                    <!-- pagination -->
                    <div class="pagination pagination__profile">
                        <div class="pagination__container">
                            <a class="pagination__left pagination__left-recently">
                                <svg class="pagination__icon pagination__icon-left">
                                    <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                </svg>
                            </a>
                            <a class="pagination__right pagination__right-recently">
                                <svg class="pagination__icon pagination__icon-right">
                                    <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="profile__recently--container">

                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-orange">
                                    <div class="btn__profile--container btn__profile--container-orange">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 
                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-orange">
                                    <div class="btn__profile--container btn__profile--container-orange">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 
                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-orange">
                                    <div class="btn__profile--container btn__profile--container-orange">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 
                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-orange">
                                    <div class="btn__profile--container btn__profile--container-orange">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 
                        <div class="profile__card">

                            <div class="profile__img profile__img-1">
                                    <div class="profile__bookmark">
                                        <svg class="profile__bookmark-icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                        </svg>
                                    </div>

                            </div>

                            <div class="profile__info">
                                <h3 class="profile__title">The Happy Lemon...</h3>
                                <div class="profile__rating rating__container">

                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    
                                </div>

                                <a href="#!" class="profile__button btn__profile btn__profile-orange">
                                    <div class="btn__profile--container btn__profile--container-orange">
                                        <svg class="  btn__profile--icon icon-arrow">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                        </svg>
                                        <span class="btn__profile--title">Read now</span> 
                                    </div>

                                    <span class="btn__profile--progress">92%</span>
                                </a>
                            </div>
                
                        </div> 

                    </div>

                    
                    
                </div>
            </div>

        </div>
    </section>

    <section class="section__bookmark--banner">
            <img src="./img/png/your-bookmarks.png" alt="">
    </section>

    <section class="section__bookmark section__bookmark-book">
        <div class="bookmark__title">Your Books</div>


        <div class="pagination bookmark__pagination">
            <div class="pagination__container">
                <a class="pagination__left pagination__left-bookmark">
                    <svg class="pagination__icon pagination__icon-left">
                        <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                    </svg>
                </a>
                <a class="pagination__right pagination__right-bookmark">
                    <svg class="pagination__icon pagination__icon-right">
                        <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                    </svg>
                </a>
            </div>
        </div>


        <div class="pagination3 bookmark__pagination3">
            <div class="pagination3__container">
                <span class="pagination3__name">Page</span>
                <ul class="pagination3__list">
                    <li class="pagination3__item pagination3__item--active">1</li>
                    <li class="pagination3__item">2</li>
                    <li class="pagination3__item">3</li>
                </ul>
                <a href="#!" class="pagination3__btn btn__see-all btn__see-all-white">See All &rarr;</a>
            </div>
        </div>

        <div class="bookmark__list bookmark__list-book">

            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
            <div class="book__card">
                <div class="book__bookmark">
                    <svg class="book__bookmark-icon">
                        <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                    </svg>
                </div>
                
                <div class="book__img book__img-1">

                        <div class="book__button--container">

                            <a href="#!" class="book__button--listen">
                                <svg class="book__button--listen-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--read">
                                <svg class="book__button--read-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                </svg>
                            </a>
                            <a href="#!" class="book__button--download">
                                <svg class="book__button--download-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                </svg>
                            </a>


                        </div>

                </div>

                <div class="book__info">
                    <h3 class="book__title">The Happy Lemon...</h3>
                    <h4 class="book__author">
                        <span class="book__author--1">by</span>
                        <span class="book__author--2">Serene Wright</span>
                    </h4>
                    <div class="book__rating rating__container">

                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                    </div>

                    <p class="book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#!" class="book__button btn__see-more btn__see-more-blue">
                        <span>See More</span>
                        <svg class=" btn__see-more-icon icon-arrow">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                        </svg>
                    </a>
                </div>

                
            </div>
        </div>

        


    </section>

    <section class="section__bookmark section__bookmark-collection">
        <div class="bookmark__title">Your Collections</div>


        <div class="pagination bookmark__pagination">
            <div class="pagination__container">
                <a class="pagination__left pagination__left-bookmark">
                    <svg class="pagination__icon pagination__icon-left">
                        <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                    </svg>
                </a>
                <a class="pagination__right pagination__right-bookmark">
                    <svg class="pagination__icon pagination__icon-right">
                        <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                    </svg>
                </a>
            </div>
        </div>


        <div class="pagination4 bookmark__pagination4">
            <div class="pagination4__container">
                <span class="pagination4__name">Page</span>
                <ul class="pagination4__list">
                    <li class="pagination4__item pagination4__item--active">1</li>
                    <li class="pagination4__item">2</li>
                    <li class="pagination4__item">3</li>
                </ul>
                <a href="#!" class="pagination4__btn btn__see-all btn__see-all-white">See All &rarr;</a>
            </div>
        </div>

        <div class="bookmark__list bookmark__list-collection">
            <div class="collection__card">

                <div class="collection__card--imgs">
                    <div class="collection__card--img collection__card--img-1"></div>
                    <div class="collection__card--img collection__card--img-2"></div>
                    <div class="collection__card--img collection__card--img-3"></div>
                </div>

                <div class="collection__card--btn-right">
                    <div class="collection__card--bookmark">
                            <svg class="collection__card--bookmark--icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-orange"></use> 
                            </svg> 
                    </div>
                    <div class="collection__card__button--container">
                                <a href="#!" class="collection__card__button--listen">
                                    <svg class="collection__card__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--read">
                                    <svg class="collection__card__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--download">
                                    <svg class="collection__card__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>
                    </div>
                </div>

                <div class="collection__card--body">
                    <div class="collection__card--count tag-orange">3 books</div>
                        <div class="collection__card--title-container">
                            <div class="collection__card--title">
                                The secret of long-lasting happiness in daily life ...
                            </div>
                            <div class="collection__card--author">Various Artist</div>
                        </div>
                </div>

                <div class="collection__card--footer">
                    <a href="#!" class="collection__card--btn-left btn__see-collection">
                        <p>See Collection</p>
                            <svg class="collection__card--btn-left-icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg> 
                    </a>

                        <div class="collection__card--rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>
                
                </div>
            </div>
            <div class="collection__card">

                <div class="collection__card--imgs">
                    <div class="collection__card--img collection__card--img-1"></div>
                    <div class="collection__card--img collection__card--img-2"></div>
                    <div class="collection__card--img collection__card--img-3"></div>
                </div>

                <div class="collection__card--btn-right">
                    <div class="collection__card--bookmark">
                            <svg class="collection__card--bookmark--icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-orange"></use> 
                            </svg> 
                    </div>
                    <div class="collection__card__button--container">
                                <a href="#!" class="collection__card__button--listen">
                                    <svg class="collection__card__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--read">
                                    <svg class="collection__card__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--download">
                                    <svg class="collection__card__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>
                    </div>
                </div>

                <div class="collection__card--body">
                    <div class="collection__card--count tag-orange">3 books</div>
                        <div class="collection__card--title-container">
                            <div class="collection__card--title">
                                The secret of long-lasting happiness in daily life ...
                            </div>
                            <div class="collection__card--author">Various Artist</div>
                        </div>
                </div>

                <div class="collection__card--footer">
                    <a href="#!" class="collection__card--btn-left btn__see-collection">
                        <p>See Collection</p>
                            <svg class="collection__card--btn-left-icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg> 
                    </a>

                        <div class="collection__card--rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>
                
                </div>
            </div>
            <div class="collection__card">

                <div class="collection__card--imgs">
                    <div class="collection__card--img collection__card--img-1"></div>
                    <div class="collection__card--img collection__card--img-2"></div>
                    <div class="collection__card--img collection__card--img-3"></div>
                </div>

                <div class="collection__card--btn-right">
                    <div class="collection__card--bookmark">
                            <svg class="collection__card--bookmark--icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-orange"></use> 
                            </svg> 
                    </div>
                    <div class="collection__card__button--container">
                                <a href="#!" class="collection__card__button--listen">
                                    <svg class="collection__card__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--read">
                                    <svg class="collection__card__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--download">
                                    <svg class="collection__card__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>
                    </div>
                </div>

                <div class="collection__card--body">
                    <div class="collection__card--count tag-orange">3 books</div>
                        <div class="collection__card--title-container">
                            <div class="collection__card--title">
                                The secret of long-lasting happiness in daily life ...
                            </div>
                            <div class="collection__card--author">Various Artist</div>
                        </div>
                </div>

                <div class="collection__card--footer">
                    <a href="#!" class="collection__card--btn-left btn__see-collection">
                        <p>See Collection</p>
                            <svg class="collection__card--btn-left-icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg> 
                    </a>

                        <div class="collection__card--rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>
                
                </div>
            </div>
            <div class="collection__card">

                <div class="collection__card--imgs">
                    <div class="collection__card--img collection__card--img-1"></div>
                    <div class="collection__card--img collection__card--img-2"></div>
                    <div class="collection__card--img collection__card--img-3"></div>
                </div>

                <div class="collection__card--btn-right">
                    <div class="collection__card--bookmark">
                            <svg class="collection__card--bookmark--icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-orange"></use> 
                            </svg> 
                    </div>
                    <div class="collection__card__button--container">
                                <a href="#!" class="collection__card__button--listen">
                                    <svg class="collection__card__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--read">
                                    <svg class="collection__card__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--download">
                                    <svg class="collection__card__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>
                    </div>
                </div>

                <div class="collection__card--body">
                    <div class="collection__card--count tag-orange">3 books</div>
                        <div class="collection__card--title-container">
                            <div class="collection__card--title">
                                The secret of long-lasting happiness in daily life ...
                            </div>
                            <div class="collection__card--author">Various Artist</div>
                        </div>
                </div>

                <div class="collection__card--footer">
                    <a href="#!" class="collection__card--btn-left btn__see-collection">
                        <p>See Collection</p>
                            <svg class="collection__card--btn-left-icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg> 
                    </a>

                        <div class="collection__card--rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>
                
                </div>
            </div>
            <div class="collection__card">

                <div class="collection__card--imgs">
                    <div class="collection__card--img collection__card--img-1"></div>
                    <div class="collection__card--img collection__card--img-2"></div>
                    <div class="collection__card--img collection__card--img-3"></div>
                </div>

                <div class="collection__card--btn-right">
                    <div class="collection__card--bookmark">
                            <svg class="collection__card--bookmark--icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-orange"></use> 
                            </svg> 
                    </div>
                    <div class="collection__card__button--container">
                                <a href="#!" class="collection__card__button--listen">
                                    <svg class="collection__card__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--read">
                                    <svg class="collection__card__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--download">
                                    <svg class="collection__card__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>
                    </div>
                </div>

                <div class="collection__card--body">
                    <div class="collection__card--count tag-orange">3 books</div>
                        <div class="collection__card--title-container">
                            <div class="collection__card--title">
                                The secret of long-lasting happiness in daily life ...
                            </div>
                            <div class="collection__card--author">Various Artist</div>
                        </div>
                </div>

                <div class="collection__card--footer">
                    <a href="#!" class="collection__card--btn-left btn__see-collection">
                        <p>See Collection</p>
                            <svg class="collection__card--btn-left-icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg> 
                    </a>

                        <div class="collection__card--rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>
                
                </div>
            </div>
            <div class="collection__card">

                <div class="collection__card--imgs">
                    <div class="collection__card--img collection__card--img-1"></div>
                    <div class="collection__card--img collection__card--img-2"></div>
                    <div class="collection__card--img collection__card--img-3"></div>
                </div>

                <div class="collection__card--btn-right">
                    <div class="collection__card--bookmark">
                            <svg class="collection__card--bookmark--icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-bookmark-orange"></use> 
                            </svg> 
                    </div>
                    <div class="collection__card__button--container">
                                <a href="#!" class="collection__card__button--listen">
                                    <svg class="collection__card__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--read">
                                    <svg class="collection__card__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="collection__card__button--download">
                                    <svg class="collection__card__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>
                    </div>
                </div>

                <div class="collection__card--body">
                    <div class="collection__card--count tag-orange">3 books</div>
                        <div class="collection__card--title-container">
                            <div class="collection__card--title">
                                The secret of long-lasting happiness in daily life ...
                            </div>
                            <div class="collection__card--author">Various Artist</div>
                        </div>
                </div>

                <div class="collection__card--footer">
                    <a href="#!" class="collection__card--btn-left btn__see-collection">
                        <p>See Collection</p>
                            <svg class="collection__card--btn-left-icon">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg> 
                    </a>

                        <div class="collection__card--rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>
                
                </div>
            </div>
        </div>

        


    </section>

    <section class="section__recommend">
        <div class="recommend__header heading-primary">
            You May Like
        </div>

        <div class="recommend__container">

            <div class="pagination recommend__pagination" data-page=0>
                <div class="pagination__container">
                    <a class="pagination__left pagination__left-recommend">
                        <svg class="pagination__icon pagination__icon-left">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </a>
                    <a class="pagination__right pagination__right-recommend">
                        <svg class="pagination__icon pagination__icon-right">
                            <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
                        </svg>
                    </a>
                </div>
                </div>

            <div class="grid-4 recommend__grid">
                <div class="recommend__card">

                    <div class="recommend__img recommend__img-1">
                            <div class="recommend__bookmark">
                                <svg class="recommend__bookmark-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                </svg>
                            </div>

                            <div class="recommend__button--container">

                                <a href="#!" class="recommend__button--listen">
                                    <svg class="recommend__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--read">
                                    <svg class="recommend__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--download">
                                    <svg class="recommend__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>

                    </div>

                    <div class="recommend__info">
                        <h3 class="recommend__title">The Happy Lemon...</h3>
                        <h4 class="recommend__author">
                            <span class="recommend__author--1">by</span>
                            <span class="recommend__author--2">Serene Wright</span>
                        </h4>
                        <div class="recommend__rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>

                        <a href="#!" class="recommend__button btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </a>
                    </div>
        
                </div>  
                <div class="recommend__card">

                    <div class="recommend__img recommend__img-2">
                            <div class="recommend__bookmark">
                                <svg class="recommend__bookmark-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                </svg>
                            </div>

                            <div class="recommend__button--container">

                                <a href="#!" class="recommend__button--listen">
                                    <svg class="recommend__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--read">
                                    <svg class="recommend__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--download">
                                    <svg class="recommend__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>

                    </div>

                    <div class="recommend__info">
                        <h3 class="recommend__title">The Happy Lemon...</h3>
                        <h4 class="recommend__author">
                            <span class="recommend__author--1">by</span>
                            <span class="recommend__author--2">Serene Wright</span>
                        </h4>
                        <div class="recommend__rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>

                        <a href="#!" class="recommend__button btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </a>
                    </div>
        
                </div>  
                <div class="recommend__card">

                    <div class="recommend__img recommend__img-3">
                            <div class="recommend__bookmark">
                                <svg class="recommend__bookmark-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                </svg>
                            </div>

                            <div class="recommend__button--container">

                                <a href="#!" class="recommend__button--listen">
                                    <svg class="recommend__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--read">
                                    <svg class="recommend__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--download">
                                    <svg class="recommend__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>

                    </div>

                    <div class="recommend__info">
                        <h3 class="recommend__title">The Happy Lemon...</h3>
                        <h4 class="recommend__author">
                            <span class="recommend__author--1">by</span>
                            <span class="recommend__author--2">Serene Wright</span>
                        </h4>
                        <div class="recommend__rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>

                        <a href="#!" class="recommend__button btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </a>
                    </div>
        
                </div>  
                <div class="recommend__card">

                    <div class="recommend__img recommend__img-4">
                            <div class="recommend__bookmark">
                                <svg class="recommend__bookmark-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                </svg>
                            </div>

                            <div class="recommend__button--container">

                                <a href="#!" class="recommend__button--listen">
                                    <svg class="recommend__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--read">
                                    <svg class="recommend__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--download">
                                    <svg class="recommend__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>

                    </div>

                    <div class="recommend__info">
                        <h3 class="recommend__title">The Happy Lemon...</h3>
                        <h4 class="recommend__author">
                            <span class="recommend__author--1">by</span>
                            <span class="recommend__author--2">Serene Wright</span>
                        </h4>
                        <div class="recommend__rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>

                        <a href="#!" class="recommend__button btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </a>
                    </div>
        
                </div>  
                <div class="recommend__card">

                    <div class="recommend__img recommend__img-5">
                            <div class="recommend__bookmark">
                                <svg class="recommend__bookmark-icon">
                                    <use xlink:href="./img/icons/sprite.svg#icon-bookmark"></use> 
                                </svg>
                            </div>

                            <div class="recommend__button--container">

                                <a href="#!" class="recommend__button--listen">
                                    <svg class="recommend__button--listen-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--read">
                                    <svg class="recommend__button--read-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                    </svg>
                                </a>
                                <a href="#!" class="recommend__button--download">
                                    <svg class="recommend__button--download-icon">
                                        <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                    </svg>
                                </a>


                            </div>

                    </div>

                    <div class="recommend__info">
                        <h3 class="recommend__title">The Happy Lemon...</h3>
                        <h4 class="recommend__author">
                            <span class="recommend__author--1">by</span>
                            <span class="recommend__author--2">Serene Wright</span>
                        </h4>
                        <div class="recommend__rating rating__container">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                        </div>

                        <a href="#!" class="recommend__button btn__see-more btn__see-more-blue">
                            <span>See More</span>
                            <svg class=" btn__see-more-icon icon-arrow">
                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                            </svg>
                        </a>
                    </div>
        
                </div>  
            </div>

        </div>
                
        <div class="recommend__dots">
            <div class="recommend__dots-round recommend__dots--active"></div>
            <div class="recommend__dots-round"></div>
            <div class="recommend__dots-round"></div>
        </div>

    </section>
        
</main>
    
    `
    ,
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
            <span class="admin-categories-tag" data-cateID="it">Technology</span>                            
            <span class="admin-categories-tag" data-cateID="self">Self-helf</span>                            
            <span class="admin-categories-tag" data-cateID="edu">Education</span>                            
            <span class="admin-categories-tag" data-cateID="art">Art-Sport</span>                            
            <span class="admin-categories-tag" data-cateID="come">Comedy</span>                            
            <span class="admin-categories-tag" data-cateID="nov">Classic Novel</span>                            
            <span class="admin-categories-tag" data-cateID="comic">Comic</span>                            
            <span class="admin-categories-tag" data-cateID="buss">Business</span>                            
            <span class="admin-categories-tag" data-cateID="romantic">Romantic</span>                            
            <span class="admin-categories-tag" data-cateID="psy">Psychological</span>                                                      
            <span class="admin-categories-tag" data-cateID="health">Health</span>                            
            <span class="admin-categories-tag" data-cateID="cui">Cuisine</span>                                                      
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
<button class="firebase-button admin-button">Update FireBase</button>
<a id="downloadAnchorElem" style="display:none"></a>
<button id="download__link" class="admin-button">Download Data as JSON</button>
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
            <span class="admin-categories-tag" data-cateID="it">Technology</span>                            
            <span class="admin-categories-tag" data-cateID="self">Self-helf</span>                            
            <span class="admin-categories-tag" data-cateID="edu">Education</span>                            
            <span class="admin-categories-tag" data-cateID="art">Art-Sport</span>                            
            <span class="admin-categories-tag" data-cateID="come">Comedy</span>                            
            <span class="admin-categories-tag" data-cateID="nov">Classic Novel</span>                            
            <span class="admin-categories-tag" data-cateID="comic">Comic</span>                            
            <span class="admin-categories-tag" data-cateID="buss">Business</span>                            
            <span class="admin-categories-tag" data-cateID="romantic">Romantic</span>                            
            <span class="admin-categories-tag" data-cateID="psy">Psychological</span>                                                      
            <span class="admin-categories-tag" data-cateID="health">Health</span>                            
            <span class="admin-categories-tag" data-cateID="cui">Cuisine</span>                                                   
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
    <button class="firebase-button admin-button">Update FireBase</button>
    <a id="downloadAnchorElem" style="display:none"></a>
    <button id="download__link" class="admin-button">Download Data as JSON</button>
    
    `,
    readPage : `
    <div class="read__container">
    <div class="read__top-bar top-bar" id="read">
        <!-- <button class="btn" id="prev-page">

          Prev Page
        </button>
          <button class="btn" id="next-page">
          Next Page <i class="fas fa-arrow-circle-right"></i>
        </button> -->
        <svg class="read__logo icon-logo">
            <use xlink:href="./img/icons/sprite.svg#icon-logo"></use> 
        </svg>

        <div class="read__header">
            <div class="read__title">
                The Lemon Tree   The Lemon Tree  The Lemon Tree 
            </div>
            <div class="read__author">
                by Austin Dust
            </div>

        </div>

        <span class="read__info page-info">
            Page 
            <span id="page-num">0</span> 
            of 
            <span id="page-count">0</span>
        </span>
      </div>
  
      <canvas id="pdf-render" class="read__doc "></canvas>
  </div>
  <div class="read__hover--container">
      <div class="read__hover--left"></div>
      <div class="read__hover--right"></div>
  </div>
  <div class="pagination read__pagination">
      <div class="pagination__container">
          <a class="pagination__left pagination__left-read btn" id="prev-page">
              <svg class="pagination__icon pagination__icon-left">
                  <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
              </svg>
          </a>
          <a class="pagination__right pagination__right-read btn" id="prev-page">
              <svg class="pagination__icon pagination__icon-right">
                  <use xlink:href="./img/icons/sprite.svg#icon-arrow-down"></use>
              </svg>
          </a>
      </div>
  </div>
    `,
    audioPage: `
    <div class="bg-image"></div>

    <div class="bg-text">

        <h2>NHỮNG BÍ QUYẾT GIAO TIẾP TỐT</h2>
        <audio controls id="myAudio">
            <source src="https://firebasestorage.googleapis.com/v0/b/ci-thu-vien-sach.appspot.com/o/Sa%CC%81ch%2FTi%C3%AA%CC%89u%20thuy%C3%AA%CC%81t%20kinh%20%C4%91i%C3%AA%CC%89n%2F36%20K%E1%BA%BF%20Binh%20Ph%C3%A1p%20T%C3%B4n%20T%E1%BB%AD%20-%20Tr%E1%BB%8Bnh%20Ng%E1%BB%8Dc%20Hoa.mp3?alt=media&token=28748fdc-e853-4df1-bbe8-56a769fd6273">
          </audio>
    </div>
    `,
    first:`
            
            <div class="first__container">
            <h2 class="first__heading heading-secondary">
                Welcome to
            </h2>
            <div class="first__logo--container">
                <svg class="first__logo">
                    <use xlink:href="img/icons/sprite.svg#icon-logo"></use>
                </svg>
            </div>
            <div class="first__question">
                Choose 5 categories you like  
            </div>
            <div class="first__categories--container">
                <div class="first__categories--card" data-cate = "buss">
                    <div class="first__categories--title">Bussiness</div>
                </div>
                <div class="first__categories--card" data-cate = "it">
                    <div class="first__categories--title">Technology</div>
                </div>
                <div class="first__categories--card" data-cate = "edu">
                    <div class="first__categories--title">Education</div>
                </div>
                <div class="first__categories--card" data-cate = "come">
                    <div class="first__categories--title">Comedy</div>
                </div>
                <div class="first__categories--card" data-cate = "comic">
                    <div class="first__categories--title">Comic</div>
                </div>
                <div class="first__categories--card" data-cate = "art">
                    <div class="first__categories--title">Art-Sport</div>
                </div>
                <div class="first__categories--card" data-cate = "romantic">
                    <div class="first__categories--title">Romantic</div>
                </div>
                <div class="first__categories--card" data-cate = "psy">
                    <div class="first__categories--title">Psychology</div>
                </div>
                <div class="first__categories--card" data-cate = "health">
                    <div class="first__categories--title">Health</div>
                </div>
                <div class="first__categories--card" data-cate = "cui">
                    <div class="first__categories--title">Cuisine</div>
                </div>
                <div class="first__categories--card" data-cate = "self">
                    <div class="first__categories--title">Self-help</div>
                </div>
                <div class="first__categories--card" data-cate = "nov">
                    <div class="first__categories--title">Novel</div>
                </div>
            </div>
            <a class="first__btn">
                <span>Let's Read</span>
                <svg class="first__btn-icon">
                    <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                </svg> 
                
            </a>
        </div>
`
}
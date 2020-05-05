export const components = {
    loading:`
    LOADING........
    `,
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

    <div class="animation__container">
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

                            <li class="popular__author--item">
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
                            </li>

                        </ul>
                    </div>
     
                    <div class="grid-3">
                        <div class="popular__navigation">
                            <h1 class=" popular__category--title heading-primary">Popular by Genre</h1>

                            <ul class="popular__category--list">
                                <li class="popular__category-item popular__category--item--active">Cuisine</li>
                                <li class="popular__category-item">Romantic</li>
                                <li class="popular__category-item">Health</li>
                                <li class="popular__category-item">Bussiness</li>
                                <li class="popular__category-item">Comic</li>
                            </ul>
                            
                            <a href="#!" class="popular__category--btn btn__see-all">See All &rarr; </a>
                        </div>

                        <div class="popular__book--shelf">

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

                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
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

                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                    <a href="#!" class="newly__button btn__see-book btn__see-book-2">
                                        <span>See The Book</span>
                                    </a>
                                </div>


                            </div>

                            <div class="newly__card newly__card-3"id="newly-3">

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

                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
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

                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
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

                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
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

                                    <p class="newly__description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
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
                                        <use xlink:href= "./img/icons/sprite.svg#icon-bookmark-solid"></use>
                                    </svg>
                                              
                                    <div class="topweek__img topweek__img-1">
                                        <div class="topweek__button--container">
        
                                            <a href="#!" class="topweek__button--listen">
                                                <svg class="topweek__button--listen-icon">
                                                    <use xlink:href="./img/icons/sprite.svg#icon-headphone-solid"></use> 
                                                </svg>
                                            </a>
                                            <a href="#!" class="topweek__button--read">
                                                <svg class="topweek__button--read-icon">
                                                    <use xlink:href="./img/icons/sprite.svg#icon-read-solid"></use> 
                                                </svg>
                                            </a>
                                            <a href="#!" class="topweek__button--download">
                                                <svg class="topweek__button--download-icon">
                                                    <use xlink:href="./img/icons/sprite.svg#icon-download-solid"></use> 
                                                </svg>
                                            </a>
            
            
                                        </div>
                                    </div>
        
                                    <div class="topweek__info">
                                        <h3 class="topweek__title">The Happy Lemon</h3>
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
        
                                        <p class="topweek__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis officiis reprehenderit quos, praesentium laudantium illo odit error vel sed molestias fuga tenetur mollitia ratione maxime fugiat doloribus eum obcaecati?</p>
                                        <a href="#!" class="topweek__button btn__see-line btn__see-line-1">
                                            <span>See more</span>
                                            <svg class="topweek__button--arrow">
                                                <use xlink:href="./img/icons/sprite.svg#icon-arrow"></use> 
                                            </svg>
                                        </a>
                                    </div>
                                    
                                    <div class="topweek__dots">
                                        <div class="topweek__dots-round topweek__dots--active"></div>
                                        <div class="topweek__dots-round"></div>
                                        <div class="topweek__dots-round"></div>
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
                                    </li>

                                    <li class="collection__category--item" data-category="buss">
                                        <svg class="collection__category--icon">
                                            <use xlink:href="./img/icons/sprite.svg#icon-read"></use> 
                                        </svg> 
                                        <div class="collection__category--name">Bussiness</div>
                                        <div class="collection__category--count">10</div>
                                    </li>

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


                        </div>
                </section>

        <!-- SECTION RECOMMEND -->
                <section class="section__recommend">
                    <div class="recommend__header heading-primary">
                        You May Like
                    </div>

                    <div class="recommend__container">

                        <div class="pagination recommend__pagination">
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

            </main>

        </div>
    </div>


</div

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
<button class="firebase-button">Update FireBase</button>
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
    <button class="firebase-button>Update FireBase</button>
    `
}
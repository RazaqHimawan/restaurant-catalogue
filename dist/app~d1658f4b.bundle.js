(()=>{"use strict";var n,A={756:(n,A,e)=>{e.d(A,{Z:()=>o});var r=e(537),t=e.n(r),a=e(645),i=e.n(a)()(t());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --brown: #a75d5d;\n  --skin: #ffc3a1;\n  --white: #faf8f1;\n  --dark-brown: #3c2a21;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100vh;\n  width: 100vw;\n}\n\n/* \n  NAVBAR\n*/\n\n.nav-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--brown);\n  min-height: 60px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  color: white;\n  font-size: 1.5em;\n  font-weight: 600;\n  margin-left: 0.75rem;\n  min-width: 48px;\n  min-height: 48px;\n}\n\n.hamburger__button {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  background-color: var(--white);\n  border: 1px solid var(--skin);\n  border-radius: 10px;\n  font-size: 36px;\n  font-weight: 600;\n  margin-right: 0.75rem;\n  min-width: 48px;\n  min-height: 48px;\n}\n\n.hamburger__button:hover {\n  background-color: #e6e3db;\n}\n\n.hamburger__button:active {\n  background-color: #d1cec6;\n}\n\n.navbar-xl {\n  display: none;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 300px;\n  background-color: var(--dark-brown);\n\n  position: absolute;\n  transform: translateX(-100vw);\n  transition: transform 0.3s ease-in-out;\n}\n\n.navbar li {\n  margin: 0.75rem;\n  list-style-type: none;\n}\n\n.navbar li a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.75rem 0;\n  min-width: 48px;\n  min-height: 48px;\n  color: var(--white);\n}\n\n.navbar li a:hover {\n  color: #c2c1bd;\n}\n\n.navbar li a:focus {\n  color: #c2c1bd;\n}\n\n.navbar.show {\n  transform: translateX(0);\n}\n\n.hero__img {\n  width: 100vw;\n}\n\n.title__container {\n  text-align: center;\n  margin: 1.75rem;\n  padding: 1rem 0;\n  border-top: 2px solid var(--brown);\n  border-bottom: 2px solid var(--brown);\n}\n\n/* \n  MAIN\n*/\n\n.container {\n  margin: 1rem;\n}\n\n.title {\n  color: var(--dark-brown);\n}\n\n.resto__list {\n  display: grid;\n  place-items: center;\n  gap: 1rem;\n}\n\n.resto__link {\n  margin: 1.75rem;\n}\n\n.resto__link:hover {\n  scale: calc(105%);\n  transition: scale 0.3s ease-in-out;\n}\n\n.resto {\n  position: relative;\n}\n\n.resto__img,\n.resto-detail__img {\n  width: 100%;\n  object-fit: cover;\n}\n\n.resto__cityname {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  color: var(--dark-brown);\n}\n\n.resto__name {\n  color: var(--dark-brown);\n}\n\n.resto__rating {\n  position: absolute;\n  bottom: 75px;\n  border-radius: 0 10px 10px 0;\n  padding: 0.3rem 0.5rem;\n  background-color: var(--white);\n  color: var(--dark-brown);\n}\n\n.card {\n  overflow: hidden;\n  border: 1px solid var(--dark-brown);\n  border-radius: 10px;\n  box-shadow: 2px 2px 10px var(--dark-brown);\n}\n\n/* \n  FOOTER\n*/\n\nfooter {\n  display: flex;\n  justify-content: center;\n  background-color: var(--skin);\n  color: var(--dark-brown);\n  padding: 1rem;\n}\n\n/* \n  SKIP\n*/\n\n.skip {\n  position: absolute;\n  top: -150px;\n  left: 0;\n  padding: 1rem;\n  background-color: var(--dark-brown);\n  color: var(--white);\n  z-index: 100;\n}\n\n.skip:focus {\n  top: 0;\n}\n\n/* \n  DETAIL\n*/\n\n.resto-detail__container {\n  background-color: var(--dark-brown);\n  color: var(--white);\n}\n\n.resto-detail__table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.resto-detail__table tr {\n  border-bottom: 1px solid var(--white);\n}\n\n.resto-detail__table th,\n.resto-detail__table td {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.2em;\n}\n\n.resto-detail__menu,\n.resto-detail__desc__container {\n  background-color: var(--dark-brown);\n  color: var(--white);\n}\n\n.resto-detail__title__container {\n  display: flex;\n  justify-content: center;\n  background-color: var(--skin);\n}\n\n.resto-detail__menu__title {\n  padding: 2rem;\n  color: var(--dark-brown);\n}\n\n.resto-detail__foods,\n.resto-detail__drinks {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n\n.resto-detail__foods > h3,\n.resto-detail__drinks > h3 {\n  text-align: center;\n  font-size: 1.2em;\n  font-weight: 400;\n  padding: 0.5rem;\n}\n\n.resto-detail__desc {\n  line-height: 1.5em;\n  font-size: 1.2em;\n  padding: 1rem;\n  text-align: justify;\n}\n\n.resto-detail__reviews__item {\n  padding: 1rem;\n  margin: 1rem;\n}\n\n.resto-detail__reviews__namedate {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-bottom: 1px solid var(--dark-brown);\n}\n\n.resto-detail__reviews__namedate > h3 {\n  font-size: 1em;\n  font-weight: 400;\n}\n\n.resto-detail__reviews__item > p {\n  line-height: 1.5em;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b42929;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.nofavorite {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 1.75rem;\n  color: #d1d1d1;\n  text-align: center;\n}\n\n/* \n  Review Form\n*/\n\n.review-form {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  padding: 1rem;\n}\n\n.review-form > label[for='name'],\n.review-form > label[for='review'] {\n  margin-left: 0.5rem;\n  margin-bottom: 0.3rem;\n}\n\n.review-form > input[type='text'] {\n  margin-bottom: 1rem;\n  border-radius: 10px;\n  padding: 0.5rem;\n  min-height: 48px;\n  font-size: 18px;\n}\n\ntextarea {\n  resize: none;\n  margin-bottom: 1rem;\n  height: 150px;\n  border-radius: 10px;\n  padding: 0.5rem;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.submit {\n  padding: 1rem;\n  cursor: pointer;\n  font-size: 18px;\n  border: 1px solid var(--dark-brown);\n  border-radius: 10px;\n  background-color: var(--white);\n}\n\n.submit:hover {\n  background-color: #d1d1d1;\n}\n\n.submit:active {\n  background-color: #c2c1bd;\n}\n\n.submit:focus {\n  background-color: #d1d1d1;\n}\n\n/* \n  Spinner\n*/\n\n.loader {\n  margin: 1rem auto;\n  border: 16px solid var(--skin);\n  border-radius: 50%;\n  border-top: 16px solid var(--brown);\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* \n  Error message\n*/\n\n.err-message {\n  text-align: center;\n  padding: 4rem;\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --brown: #a75d5d;\n  --skin: #ffc3a1;\n  --white: #faf8f1;\n  --dark-brown: #3c2a21;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100vh;\n  width: 100vw;\n}\n\n/* \n  NAVBAR\n*/\n\n.nav-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--brown);\n  min-height: 60px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  color: white;\n  font-size: 1.5em;\n  font-weight: 600;\n  margin-left: 0.75rem;\n  min-width: 48px;\n  min-height: 48px;\n}\n\n.hamburger__button {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  background-color: var(--white);\n  border: 1px solid var(--skin);\n  border-radius: 10px;\n  font-size: 36px;\n  font-weight: 600;\n  margin-right: 0.75rem;\n  min-width: 48px;\n  min-height: 48px;\n}\n\n.hamburger__button:hover {\n  background-color: #e6e3db;\n}\n\n.hamburger__button:active {\n  background-color: #d1cec6;\n}\n\n.navbar-xl {\n  display: none;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 300px;\n  background-color: var(--dark-brown);\n\n  position: absolute;\n  transform: translateX(-100vw);\n  transition: transform 0.3s ease-in-out;\n}\n\n.navbar li {\n  margin: 0.75rem;\n  list-style-type: none;\n}\n\n.navbar li a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.75rem 0;\n  min-width: 48px;\n  min-height: 48px;\n  color: var(--white);\n}\n\n.navbar li a:hover {\n  color: #c2c1bd;\n}\n\n.navbar li a:focus {\n  color: #c2c1bd;\n}\n\n.navbar.show {\n  transform: translateX(0);\n}\n\n.hero__img {\n  width: 100vw;\n}\n\n.title__container {\n  text-align: center;\n  margin: 1.75rem;\n  padding: 1rem 0;\n  border-top: 2px solid var(--brown);\n  border-bottom: 2px solid var(--brown);\n}\n\n/* \n  MAIN\n*/\n\n.container {\n  margin: 1rem;\n}\n\n.title {\n  color: var(--dark-brown);\n}\n\n.resto__list {\n  display: grid;\n  place-items: center;\n  gap: 1rem;\n}\n\n.resto__link {\n  margin: 1.75rem;\n}\n\n.resto__link:hover {\n  scale: calc(105%);\n  transition: scale 0.3s ease-in-out;\n}\n\n.resto {\n  position: relative;\n}\n\n.resto__img,\n.resto-detail__img {\n  width: 100%;\n  object-fit: cover;\n}\n\n.resto__cityname {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  color: var(--dark-brown);\n}\n\n.resto__name {\n  color: var(--dark-brown);\n}\n\n.resto__rating {\n  position: absolute;\n  bottom: 75px;\n  border-radius: 0 10px 10px 0;\n  padding: 0.3rem 0.5rem;\n  background-color: var(--white);\n  color: var(--dark-brown);\n}\n\n.card {\n  overflow: hidden;\n  border: 1px solid var(--dark-brown);\n  border-radius: 10px;\n  box-shadow: 2px 2px 10px var(--dark-brown);\n}\n\n/* \n  FOOTER\n*/\n\nfooter {\n  display: flex;\n  justify-content: center;\n  background-color: var(--skin);\n  color: var(--dark-brown);\n  padding: 1rem;\n}\n\n/* \n  SKIP\n*/\n\n.skip {\n  position: absolute;\n  top: -150px;\n  left: 0;\n  padding: 1rem;\n  background-color: var(--dark-brown);\n  color: var(--white);\n  z-index: 100;\n}\n\n.skip:focus {\n  top: 0;\n}\n\n/* \n  DETAIL\n*/\n\n.resto-detail__container {\n  background-color: var(--dark-brown);\n  color: var(--white);\n}\n\n.resto-detail__table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.resto-detail__table tr {\n  border-bottom: 1px solid var(--white);\n}\n\n.resto-detail__table th,\n.resto-detail__table td {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.2em;\n}\n\n.resto-detail__menu,\n.resto-detail__desc__container {\n  background-color: var(--dark-brown);\n  color: var(--white);\n}\n\n.resto-detail__title__container {\n  display: flex;\n  justify-content: center;\n  background-color: var(--skin);\n}\n\n.resto-detail__menu__title {\n  padding: 2rem;\n  color: var(--dark-brown);\n}\n\n.resto-detail__foods,\n.resto-detail__drinks {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n\n.resto-detail__foods > h3,\n.resto-detail__drinks > h3 {\n  text-align: center;\n  font-size: 1.2em;\n  font-weight: 400;\n  padding: 0.5rem;\n}\n\n.resto-detail__desc {\n  line-height: 1.5em;\n  font-size: 1.2em;\n  padding: 1rem;\n  text-align: justify;\n}\n\n.resto-detail__reviews__item {\n  padding: 1rem;\n  margin: 1rem;\n}\n\n.resto-detail__reviews__namedate {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-bottom: 1px solid var(--dark-brown);\n}\n\n.resto-detail__reviews__namedate > h3 {\n  font-size: 1em;\n  font-weight: 400;\n}\n\n.resto-detail__reviews__item > p {\n  line-height: 1.5em;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b42929;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.nofavorite {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 1.75rem;\n  color: #d1d1d1;\n  text-align: center;\n}\n\n/* \n  Review Form\n*/\n\n.review-form {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  padding: 1rem;\n}\n\n.review-form > label[for='name'],\n.review-form > label[for='review'] {\n  margin-left: 0.5rem;\n  margin-bottom: 0.3rem;\n}\n\n.review-form > input[type='text'] {\n  margin-bottom: 1rem;\n  border-radius: 10px;\n  padding: 0.5rem;\n  min-height: 48px;\n  font-size: 18px;\n}\n\ntextarea {\n  resize: none;\n  margin-bottom: 1rem;\n  height: 150px;\n  border-radius: 10px;\n  padding: 0.5rem;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.submit {\n  padding: 1rem;\n  cursor: pointer;\n  font-size: 18px;\n  border: 1px solid var(--dark-brown);\n  border-radius: 10px;\n  background-color: var(--white);\n}\n\n.submit:hover {\n  background-color: #d1d1d1;\n}\n\n.submit:active {\n  background-color: #c2c1bd;\n}\n\n.submit:focus {\n  background-color: #d1d1d1;\n}\n\n/* \n  Spinner\n*/\n\n.loader {\n  margin: 1rem auto;\n  border: 16px solid var(--skin);\n  border-radius: 50%;\n  border-top: 16px solid var(--brown);\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* \n  Error message\n*/\n\n.err-message {\n  text-align: center;\n  padding: 4rem;\n}\n"],sourceRoot:""}]);const o=i},948:(n,A,e)=>{e.d(A,{Z:()=>o});var r=e(537),t=e.n(r),a=e(645),i=e.n(a)()(t());i.push([n.id,"@media screen and (min-width: 800px) {\n  .hamburger__button {\n    display: none;\n  }\n\n  .nav-head {\n    padding: 0 1rem;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .navbar-xl {\n    display: flex;\n  }\n\n  .navbar-xl li {\n    margin: 0 1.5rem;\n    list-style-type: none;\n  }\n\n  .navbar-xl li a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 48px;\n    min-height: 48px;\n    font-size: 18px;\n    color: var(--white);\n  }\n\n  .navbar-xl li a:hover {\n    color: #c2c1bd;\n  }\n\n  .navbar-xl li a:focus {\n    color: #c2c1bd;\n  }\n\n  .resto__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .resto__link {\n    width: 350px;\n\n    margin: 0.5rem;\n  }\n\n  .resto__cityname {\n    flex-direction: column;\n  }\n\n  .resto__rating {\n    bottom: 100px;\n  }\n\n  .resto-detail__foods,\n  .resto-detail__drinks {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .resto-detail__reviews__item {\n    margin: 1rem auto;\n    width: 800px;\n  }\n\n  .review-form {\n    margin: 1rem auto;\n    width: 800px;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .hero {\n    display: flex;\n    justify-content: center;\n    margin: 1rem;\n  }\n  .hero__img {\n    width: 1000px;\n  }\n\n  .resto__list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .resto-detail__container {\n    display: flex;\n    padding: 1.75rem;\n  }\n\n  .resto-detail__img {\n    width: 500px;\n  }\n\n  .resto-detail__table {\n    margin: 0 1rem;\n  }\n\n  .resto-detail__menu {\n    display: flex;\n    justify-content: space-around;\n  }\n\n  .resto-detail__foods__container,\n  .resto-detail__drinks__container {\n    padding: 2rem;\n  }\n\n  .resto-detail__foods > h3,\n  .resto-detail__drinks > h3 {\n    margin: 1rem;\n  }\n\n  .resto-detail__desc {\n    width: 800px;\n    margin: auto;\n  }\n\n  .resto-detail__reviews {\n    width: 800px;\n    margin: auto;\n  }\n}\n\n@media screen and (min-width: 1600px) {\n  .resto__list {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .resto-detail__img {\n    width: 1000px;\n  }\n\n  .resto-detail__table {\n    margin: 1rem;\n  }\n\n  .resto-detail__foods,\n  .resto-detail__drinks {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .resto-detail__desc {\n    width: 1200px;\n    margin: auto;\n  }\n\n  .resto-detail__reviews {\n    width: 1200px;\n    margin: auto;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,YAAY;;IAEZ,cAAc;EAChB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;EACf;;EAEA;;IAEE,aAAa;IACb,qCAAqC;EACvC;;EAEA;IACE,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,YAAY;EACd;AACF;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,YAAY;EACd;EACA;IACE,aAAa;EACf;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,6BAA6B;EAC/B;;EAEA;;IAEE,aAAa;EACf;;EAEA;;IAEE,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;;IAEE,aAAa;IACb,qCAAqC;EACvC;;EAEA;IACE,aAAa;IACb,YAAY;EACd;;EAEA;IACE,aAAa;IACb,YAAY;EACd;AACF",sourcesContent:["@media screen and (min-width: 800px) {\n  .hamburger__button {\n    display: none;\n  }\n\n  .nav-head {\n    padding: 0 1rem;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .navbar-xl {\n    display: flex;\n  }\n\n  .navbar-xl li {\n    margin: 0 1.5rem;\n    list-style-type: none;\n  }\n\n  .navbar-xl li a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 48px;\n    min-height: 48px;\n    font-size: 18px;\n    color: var(--white);\n  }\n\n  .navbar-xl li a:hover {\n    color: #c2c1bd;\n  }\n\n  .navbar-xl li a:focus {\n    color: #c2c1bd;\n  }\n\n  .resto__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .resto__link {\n    width: 350px;\n\n    margin: 0.5rem;\n  }\n\n  .resto__cityname {\n    flex-direction: column;\n  }\n\n  .resto__rating {\n    bottom: 100px;\n  }\n\n  .resto-detail__foods,\n  .resto-detail__drinks {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .resto-detail__reviews__item {\n    margin: 1rem auto;\n    width: 800px;\n  }\n\n  .review-form {\n    margin: 1rem auto;\n    width: 800px;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .hero {\n    display: flex;\n    justify-content: center;\n    margin: 1rem;\n  }\n  .hero__img {\n    width: 1000px;\n  }\n\n  .resto__list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .resto-detail__container {\n    display: flex;\n    padding: 1.75rem;\n  }\n\n  .resto-detail__img {\n    width: 500px;\n  }\n\n  .resto-detail__table {\n    margin: 0 1rem;\n  }\n\n  .resto-detail__menu {\n    display: flex;\n    justify-content: space-around;\n  }\n\n  .resto-detail__foods__container,\n  .resto-detail__drinks__container {\n    padding: 2rem;\n  }\n\n  .resto-detail__foods > h3,\n  .resto-detail__drinks > h3 {\n    margin: 1rem;\n  }\n\n  .resto-detail__desc {\n    width: 800px;\n    margin: auto;\n  }\n\n  .resto-detail__reviews {\n    width: 800px;\n    margin: auto;\n  }\n}\n\n@media screen and (min-width: 1600px) {\n  .resto__list {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .resto-detail__img {\n    width: 1000px;\n  }\n\n  .resto-detail__table {\n    margin: 1rem;\n  }\n\n  .resto-detail__foods,\n  .resto-detail__drinks {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .resto-detail__desc {\n    width: 1200px;\n    margin: auto;\n  }\n\n  .resto-detail__reviews {\n    width: 1200px;\n    margin: auto;\n  }\n}\n"],sourceRoot:""}]);const o=i},46:(n,A,e)=>{var r=e(379),t=e.n(r),a=e(795),i=e.n(a),o=e(569),d=e.n(o),s=e(565),l=e.n(s),E=e(216),C=e.n(E),m=e(589),B=e.n(m),c=e(756),p={};p.styleTagTransform=B(),p.setAttributes=l(),p.insert=d().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=C(),t()(c.Z,p),c.Z&&c.Z.locals&&c.Z.locals},362:(n,A,e)=>{var r=e(379),t=e.n(r),a=e(795),i=e.n(a),o=e(569),d=e.n(o),s=e(565),l=e.n(s),E=e(216),C=e.n(E),m=e(589),B=e.n(m),c=e(948),p={};p.styleTagTransform=B(),p.setAttributes=l(),p.insert=d().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=C(),t()(c.Z,p),c.Z&&c.Z.locals&&c.Z.locals}},e={};function r(n){var t=e[n];if(void 0!==t)return t.exports;var a=e[n]={id:n,exports:{}};return A[n](a,a.exports,r),a.exports}r.m=A,n=[],r.O=(A,e,t,a)=>{if(!e){var i=1/0;for(l=0;l<n.length;l++){for(var[e,t,a]=n[l],o=!0,d=0;d<e.length;d++)(!1&a||i>=a)&&Object.keys(r.O).every((n=>r.O[n](e[d])))?e.splice(d--,1):(o=!1,a<i&&(i=a));if(o){n.splice(l--,1);var s=t();void 0!==s&&(A=s)}}return A}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[e,t,a]},r.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return r.d(A,{a:A}),A},r.d=(n,A)=>{for(var e in A)r.o(A,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},r.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={954:0};r.O.j=A=>0===n[A];var A=(A,e)=>{var t,a,[i,o,d]=e,s=0;if(i.some((A=>0!==n[A]))){for(t in o)r.o(o,t)&&(r.m[t]=o[t]);if(d)var l=d(r)}for(A&&A(e);s<i.length;s++)a=i[s],r.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return r.O(l)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),r.nc=void 0;var t=r.O(void 0,[946,2,135,337,268],(()=>r(253)));t=r.O(t)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map
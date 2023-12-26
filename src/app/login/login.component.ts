import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Swiper } from 'swiper';
// import 'swiper/css';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
email : string;
password : string;
  constructor(private router: Router, private oauthService: OAuthService,private readonly authService: AuthService) { 
    
  }

  connectWithGoogle() {
   this.authService.login()
   
  }
  ngOnInit(): void { }
  ngAfterViewInit() {
    
    /**
     * Clients Slider
     */
    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });

    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    const modalButton = document.querySelector(".modal-button");
    const closeButton = document.querySelector(".close-button");
    const navbar = document.getElementById("navbar");
    let isOpened = false;

    const openModal = () => {
      body.style.overflow = "hidden";
      navbar.style.visibility = "hidden";
      modal.classList.add("is-open");

    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      body.style.overflow = "initial";
      navbar.style.visibility = "visible";
    };


    modalButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    // document.onkeydown = evt => {
    //   evt = evt || window.event;
    //   evt.keyCode === 27 ? closeModal() : false;
    // };

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }

    // /**
    //  * Easy on scroll event listener 
    //  */
    // const onscroll = (el, listener) => {
    //   el.addEventListener('scroll', listener)
    // }

    // /**
    //  * Navbar links active state on scroll
    //  */
    // let navbarlinks = select('#navbar .scrollto', true)
    // const navbarlinksActive = () => {
    //   let position = window.scrollY + 200
    //   navbarlinks.forEach(navbarlink => {
    //     if (!navbarlink.hash) return
    //     let section = select(navbarlink.hash)
    //     if (!section) return
    //     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
    //       navbarlink.classList.add('active')
    //     } else {
    //       navbarlink.classList.remove('active')
    //     }
    //   })
    // }
    // window.addEventListener('load', navbarlinksActive)
    // onscroll(document, navbarlinksActive)

    // /**
    //  * Scrolls to an element with header offset
    //  */
    // const scrollto = (el) => {
    //   let header = select('#header')
    //   let offset = header.offsetHeight

    //   if (!header.classList.contains('header-scrolled')) {
    //     offset -= 16
    //   }

    //   let elementPos = select(el).offsetTop
    //   window.scrollTo({
    //     top: elementPos - offset,
    //     behavior: 'smooth'
    //   })
    // }

    // /**
    //  * Header fixed top on scroll
    //  */
    // let selectHeader = select('#header')
    // if (selectHeader) {
    //   let headerOffset = selectHeader.offsetTop
    //   let nextElement = selectHeader.nextElementSibling
    //   const headerFixed = () => {
    //     if ((headerOffset - window.scrollY) <= 0) {
    //       selectHeader.classList.add('fixed-top')
    //       nextElement.classList.add('scrolled-offset')
    //     } else {
    //       selectHeader.classList.remove('fixed-top')
    //       nextElement.classList.remove('scrolled-offset')
    //     }
    //   }
    //   window.addEventListener('load', headerFixed)
    //   onscroll(document, headerFixed)
    // }

    // /**
    //  * Back to top button
    //  */
    // let backtotop = select('.back-to-top')
    // if (backtotop) {
    //   const toggleBacktotop = () => {
    //     if (window.scrollY > 100) {
    //       backtotop.classList.add('active')
    //     } else {
    //       backtotop.classList.remove('active')
    //     }
    //   }
    //   window.addEventListener('load', toggleBacktotop)
    //   onscroll(document, toggleBacktotop)
    // }

    // /**
    //  * Mobile nav toggle
    //  */
    // on('click', '.mobile-nav-toggle', function (e) {
    //   select('#navbar').classList.toggle('navbar-mobile')
    //   this.classList.toggle('bi-list')
    //   this.classList.toggle('bi-x')
    // })

    // /**
    //  * Mobile nav dropdowns activate
    //  */
    // on('click', '.navbar .dropdown > a', function (e) {
    //   if (select('#navbar').classList.contains('navbar-mobile')) {
    //     e.preventDefault()
    //     this.nextElementSibling.classList.toggle('dropdown-active')
    //   }
    // }, true)

    // /**
    //  * Scrool with ofset on links with a class name .scrollto
    //  */
    // on('click', '.scrollto', function (e) {
    //   if (select(this.hash)) {
    //     e.preventDefault()

    //     let navbar = select('#navbar')
    //     if (navbar.classList.contains('navbar-mobile')) {
    //       navbar.classList.remove('navbar-mobile')
    //       let navbarToggle = select('.mobile-nav-toggle')
    //       navbarToggle.classList.toggle('bi-list')
    //       navbarToggle.classList.toggle('bi-x')
    //     }
    //     scrollto(this.hash)
    //   }
    // }, true)

    // /**
    //  * Scroll with ofset on page load with hash links in the url
    //  */
    // window.addEventListener('load', () => {
    //   if (window.location.hash) {
    //     if (select(window.location.hash)) {
    //       scrollto(window.location.hash)
    //     }
    //   }
    // });
    // const heroCarouselIndicators: HTMLElement = document.querySelector("#hero-carousel-indicators");
    // const heroCarouselItems: NodeListOf<Element> = document.querySelectorAll('#heroCarousel .carousel-item');

    // heroCarouselItems.forEach((item: Element, index: number) => {
    //   const activeClass: string = (index === 0) ? 'active' : '';
    //   const indicatorHtml: string = `<li data-bs-target='#heroCarousel' data-bs-slide-to='${index}' class='${activeClass}'></li>`;
    //   heroCarouselIndicators.innerHTML += indicatorHtml;
    // });
  }
  onLogin() {
    if(this.email==='agriconsulting@gmail.com' && this.password==="123")
      this.router.navigate(['/home']);
    else if (!this.email)
    alert('Enter your email please !')
    else if(!this.password)
    alert('Empty password!')
    else
    alert('Try again!')
  }
  sendMessage(){
    alert('Thank you. Your message was sent successfully.')
  }
}


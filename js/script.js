'use strict';

const navScrim = document.querySelector('.js-nav-scrim');
(function () {
  const nav = document.querySelector('.js-nav');
  const navTrigger = document.querySelector('.js-nav-trigger');
  const navMiddleMenu = document.querySelector('.js-nav__middle-menu-drop');
  const navMiddleMenuTrigger = document.querySelector('.js-nav__middle-menu-trigger');
  const navLowerMenu = document.querySelector('.js-nav__lower-menu-drop');
  const navLowerMenuTrigger = document.querySelector('.js-nav__lower-menu-trigger');

  navTrigger.addEventListener('click', function (e) {
    nav.classList.add('nav--active');
    navScrim.classList.add('nav-scrim--active');
  }, false);
  navMiddleMenuTrigger.addEventListener('click', function (e) {
    navMiddleMenu.classList.add('nav__middle-menu--active');
  }, false);
  navLowerMenuTrigger.addEventListener('click', function (e) {
    navLowerMenu.classList.add('nav__lower-menu--active');
  }, false);
  navScrim.addEventListener('click', function (e) {
    nav.classList.remove('nav--active');
    navMiddleMenu.classList.remove('nav__middle-menu--active');
    navLowerMenu.classList.remove('nav__lower-menu--active');
    this.classList.remove('nav-scrim--active');
  }, false);
}());

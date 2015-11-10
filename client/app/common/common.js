import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import AltHero from './alt-hero/alt-hero';
import Copyright from './copyright/copyright';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  AltHero.name,
  Copyright.name,
  User.name
]);

export default commonModule;

import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import AltHero from './alt-hero/alt-hero';
import TitsAndGrits from './crap-crack/butt-slut/tits-and-grits/tits-and-grits';
import GritsAndTits from './grits-and-tits/grits-and-tits';
import Copyright from './copyright/copyright';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  AltHero.name,
  TitsAndGrits.name,
  GritsAndTits.name,
  Copyright.name,
  User.name
]);

export default commonModule;

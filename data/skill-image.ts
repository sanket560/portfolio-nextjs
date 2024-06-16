import bootstrap from '../Images/skills/bootstrap.svg';
import c from '../Images/skills/c.svg';
import canva from '../Images/skills/canva.svg';
import css from '../Images/skills/css.svg';
import figma from '../Images/skills/figma.svg';
import firebase from '../Images/skills/firebase.svg';
import gcp from '../Images/skills/gcp.svg';
import git from '../Images/skills/git.svg';
import github from '../Images/skills/github.svg';
import html from '../Images/skills/html.svg';
import java from '../Images/skills/java.svg';
import javascript from '../Images/skills/javascript.svg';
import markdown from '../Images/skills/markdown.svg';
import MongoDB from '../Images/skills/mongoDB.svg';
import mysql from '../Images/skills/mysql.svg';
import nextjs from '../Images/skills/nextJS.svg'
import nodejs from '../Images/skills/nodejs.svg';
import php from '../Images/skills/php.svg';
import python from '../Images/skills/python.svg';
import react from '../Images/skills/react.svg';
import redux from '../Images/skills/redux.svg';
import sqlite from '../Images/skills/sqlite.svg';
import stripe from '../Images/skills/stripe.svg';
import tailwind from '../Images/skills/tailwind.svg';
import typescript from '../Images/skills/typescript.svg';
import vitejs from '../Images/skills/vitejs.svg';
import materialui from '../Images/skills/materialui.svg';

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'bootstrap':
      return bootstrap;
    case 'c':
      return c;
    case 'canva':
      return canva;
    case 'css':
      return css;
    case 'figma':
      return figma;
    case 'firebase':
      return firebase;
    case 'gcp':
      return gcp;
    case 'git':
      return git;
    case 'github':
      return github;
    case 'html':
      return html;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'markdown':
      return markdown;
    case 'materialui':
      return materialui;
    case 'typescript':
      return typescript;
    case 'mongodb':
      return MongoDB;
    case 'bootstrap':
      return bootstrap;
    case 'mysql':
      return mysql;
    case 'nextjs':
      return nextjs;
    case 'nodejs':
      return nodejs;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'react':
      return react;
    case 'redux':
      return redux;
    case 'sqlite':
      return sqlite;
    case 'stripe':
      return stripe;
    case 'tailwind':
      return tailwind;
    case 'typescript':
      return typescript;
    case ' vitejs':
      return vitejs;
    default:
      break;
  }
}
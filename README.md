This is a small project application about pokemons, made possible with the use of a PokeApi (https://pokeapi.co/).

Live Demo: https://pokewiki-25298.firebaseapp.com/pokemons/1

Screenshots of the project:

![pokewikiLanding](https://github.com/AOjdanic/PokeWiki/assets/115574745/59b5289a-8f10-419c-8169-4e59853e39be)
![pokewikiDetails](https://github.com/AOjdanic/PokeWiki/assets/115574745/73a4e8ec-4f33-4afb-8d43-803164cf3f1a)


This project has been built with following technologies:

1) Vite as development environment
2) React - main dependencies of the React library are react-router-dom (v6.12.0), heroicons (made by team behind tailwind CSS) and
3) Tailwind CSS - the CSS framework for building and styling websites using abstractions over regular CSS in form of classes representing different CSS properties
4) Firebase - hosting service

In order to run this project locally, use command 'git clone https://github.com/AOjdanic/PokeWiki.git' in your local CLI

After that, switch to project root directory and run 'npm i'. For running a local development server, Vite uses a command 'npm run dev'.
The build command in Vite is 'npm run build' and the folder containing build files is the 'dist' folder.

NOTE: Since this project uses Tailwind CSS which heavily relies on different classes, it is a recommendation to install an extension which hides classnames for improved readability. 
One such extension is called Inline fold made by Mohammed Alamri 

![inlinefold](https://github.com/AOjdanic/PokeWiki/assets/115574745/a17f67b9-09fc-4a89-8c4e-ff39251b5485)


The application itself enables you to browse over 36 pages of different pokemons that exist in pokemon universe. 

It features a search functionality which enables you to search for a desired pokemon by its name.

It also provides a sorting functionality which enables you to sort search results in any of the three provided ways: from A-Z, Z-A and default.

Upon clicking on a pokemon card, a details page is shown providing informations about pokemons abilities, powers and characteristics.

There, you can also use buttons on either side of the detailed pokemon panel, which will display previous/next pokemon in line after the one currently displayed.


Also, you can mark pokemons that you want as favorites, and whenever in the future you decide to come back to the site, they will still remain as favorites


You can add and remove favorite pokemons at any point by clicking on a heart shaped icon displayed on the pokemon card.

At any point in time, clicking on the 'PokeWiki' heading will return you to the landing page. 

The project itself was enjoyable to build especially since this was the first time that I used Tailwind CSS.

The main issues during development were the fact that the PokeApi doesn't provide sorting and filtering  of data, which lead to some less optimal design logic compared to the case if API provided those functionalities.


Another challenge, at least in the beginning was a huge amount of classes that had to be learned in order to use Tailwind CSS. However, personally, after a little bit of time working with it, I think it saves a lot of time in the long run.


Most of the classes are very logical, and the fact that there is no need to write class names increases the development speed. Also, everything regarding a certain component is in exactly one file, so changing styles or anything in general is done at one place, which is a huge boost in productivity.

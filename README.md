# Game Hub 

game hub is a website created using React. It's retreiving a game list through Rawg.io.
I created this webside through Code with Mosh to practice my React basic skills.


## Creating React App
in terminal type:

1. npm create vite@4.1.0
2. select a project name (game-hub in this case)
3. select A Framework and variant
4. cd to the newly created project
5. npm i
6. npm run dev (to run the project)

## To initialiaaze a git repo

- git init
- git add .
- git commit -m 'First commit'


## Styling:

For styling purposes used [Chakra] (https://chakra-ui.com/)

For installation type in terminal:

- npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

## Fetching API 

- To fetch list of videogames used [Rawg](https://rawg.io/) 

- To send Http requests used [Axios](https://www.digitalocean.com/community/tutorials/react-axios-react)

For Installation type in terminal: 
- npm i axios

- info on axios abort: Axios [Abort] (https://axios-http.com/ar/docs/cancellation)

- to create axios custom config (api-client.ts)

To Install reactIcons type in terminal: 
- npm i react-icons@4.7.1

## Deployment

Building for production type in terminal:
- npm run build

For deployment used [Vercel](https://vercel.com/)
In terminal install Vercel CLI: 
- npm i -g vercel

- to deploy in terminal run: vercel
Deployed [site](https://game-g3za7tydz-aimans-projects-f65dee63.vercel.app/)
[Link](https://game-hub-nine-ashy.vercel.app/)

Errors faced during deployment:
1. after typing vercel in terminal, got error: Cannot be loaded because running scripts is disabled on this system

[!VercelError](/game-hub/src/assets/vercel-error.PNG)
- Steps for Solution

![VercelSolution1](/game-hub/src/assets/vercel-solution1.PNG)
![VercelSolution2](/game-hub/src/assets/vercel-solution2.PNG)
![VercelSolution3](/game-hub/src/assets/vercel-solution3.PNG)

2. Hooks Error: cannot dins modules useGames/ or it's corresponding closing tag
![HookError](/game-hub/src/assets/hook-error.PNG)
- Fixed by changing file extension fro .ts to .tsx
# [Memory Farm](https://shaun-davies.github.io/memory-farm)

Memory Farm is a basic Simon-inspired game with an agricultural twist. Simple and easy to use, the game appeals to a younger audience of 5-10 years old and to adults looking to improve their retentative skills.


## UX
 
  The aim of the website is to:

1. Be a fun game that appeals to all ages.
2. To test memory and induce competitiveness to beat high score.
3. To improve memory, enhance recall and increase retention of information.  

### User stories

As a player between 5-10 years old, I want:

1. A simple easy to understand interface.
2. Simple buttons and mechanisms.
3. Audio and visual feedback so that I know I am progressing through the game.
4. Colourful and fun characters.
5. Ability to see my high score so that I can try to beat it.

As an adult I want: 

1. A simple and easy to understand interface.
2. A challenging game to test my memory.
3. Appealing aesthetic.
4. Score count to see how well I am doing.
5. High score count so I can challenge myself to beat it.

### Design Choices

The aesthetic of the game is designed for children to enjoy. The following design choices were made with this in mind:

**Font**

- The only font chosen was Fredoka. It is a simple and easy to understand font with a child-like quality to it.

**Colours**

- Most of the page features no colour apart from the images. Adding vibrancy and contrast to the clickable images to make them pop.

**Images**

- Colourful cartoon images of farm animals were chosen as the clickable icons to appeal to young children of any gender.

**Audio files**

- When a new sequence is created and when clicked the farm animals produce a sound that is unique to them.

- Children can learn what sound a chicken, cow, pig or sheep make.

- Comical and musical aspect of randomly generated animal sounds engage the user.

### Wireframes

These wireframes were created using [Balsamiq](https://balsamiq.com/) during the Scope Plane part of the design and planning process for this project.

- [Game page]

## Features 

### Existing Features
1. **Buttons**
- How to play button opens alert box and informs user on how to play the game
- Start button starts the game

2. **Scores**
- Score count shows user how many sequences they have succesfully remembered.
- High score count shows the highest number of sequences they have achieved.

2. **Images**
-Images increase and decrease in size to allow user to see when a new sequence is generated.
- Clickable aspect allow user to input their sequence.

### Features Left to Implement

1. Show full sequence
- Show the full sequence in between turns to the user instead of only the recent addition to the sequence. 

2. Difficulty settings 
- Add easy and hard modes which decrease amount of time between sequence with each round
- Add more icons and sounds with hard mode.

## Technologies Used 

- This project uses HTML, CSS and Javascript programming languages.
- [JQuery](https://jquery.com)
    - The project uses JQuery to simplify DOM manipulation.
- [Cloud9](https://c9.io)
    - Developer used Cloud9 for their IDE while building the website.
- [Bootstrap](https://bootstrapcdn.com/)
    - The project uses Bootstrap to simplify the structure of the website and make the website responsive.
- [Google Fonts](https://fonts.google.com/)
    - The project uses Google fonts to style the website fonts.
- [Flaticon](https://www.flaticon.com/)
    - All external images for this project are stored on flaticon.com
- [GitHub](https://github.com)
    - This project uses Github to store and share all project code remotely.

## Testing

Testing information can be found in seperate [testing.md](testing.md) file.

## Deployment

This project was developed using the Cloud9 IDE, commited to git and pushed to Github using the built in function within cloud9.

To deploy Memory Farm to Git Pages from its [GitHub repository](https://github.com/shaun-davies/memory-farm), the following steps were taken:

1. Log in to GitHub.
2. From the list of repositories, select shaun-davies/memory-farm.
3. From the menu items near the top of the page, select Settings.
4. Click on the Pages section on the left.
5. Under Source click the drop-down menu labelled None and select Master Branch.
6. On selecting Master Branch the page is automatically refreshed, Memory Farm is now deployed.
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

### How to run this project locally

To clone this project from GitHub:

1. Follow this link to the [Memory Farm GitHub repository](https://github.com/shaun-davies/memory-farm).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type ```git clone```, and then paste the url you copied in Step 3.
```console
git clone https://github.com/USERNAME/REPOSITORY
```
7. Press Enter. Your clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).

## Credits

- All text in this project was written by the developer.

### Media 

#### Images
- The Memory Farm logo was sourced from [Icons8](https://icons8.com).
- The images used were sourced from [Flaticon](https://flaticon.com).

#### Audio
- The audio files for animal sounds were sourced from [Artlist](https://artlist.io).

### Code

- Code for image size change taken from this [W3Schools](https://www.w3schools.com/cssref/css3_pr_transform.asp) post.
- Code for adding event handler to images from [jQuery](https://api.jquery.com/click/).
- Code for returning elements which received event from [W3Schools](https://www.w3schools.com/jsref/event_target.asp).

### Acknowledgements

Special thanks to:
- Kieron from Code Institute Student Care for his help and support which has allowed me to continue learning and to submit my second Milestone Project for Code Institute.

- My mentor Adegbenga Adeye for his guidance and coding knowledge.

- Anna Greaves for her teachings and for allowing me to learn how to structure and format a good readme from her example.

#### Disclaimer
The content of this website, including the images used, are for educational purposes only.


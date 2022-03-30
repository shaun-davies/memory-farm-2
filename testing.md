# Memory Farm - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages](https://shaun-davies.github.io/memory-farm/)

## Automated Testing

### Validation services
The following validation services and linter were used to check the validity of the website code.
-[W3C Markup Validation](https://validator.w3.org/) was used to validate HTML.
-[W3C CSS Validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
-[JSHint](https://jshint.com/) was used to validate JavaScript.


## Client stories testing

The following section goes through each of the user strories from the UX section of [README.md](README.md)

As a player, I want:

As a player between 5-10 years old, I want:

1. A simple easy to understand interface.
    -Simple design and all controls and game are on one page.
2. Simple buttons and mechanisms.
    -Colourful images used as buttons to play the game.
3. Audio and visual feedback so that I know I am progressing through the game.
    -Sound is produced and image animates each time a sequence is made, score increases with each succesful round.
4. Colourful and fun characters.
    -Colourful cartoon images used as buttons
5. Ability to see my high score so that I can try to beat it.
    -High score visible and centered below images.

As an adult I want: 

1. A simple and easy to understand interface.
    -Simple design and all controls and game are on one page.
2. A challenging game to test my memory.
    -Game gets more difficult with each round as an item is added to the sequence to remember.
3. Appealing aesthetic.
    -Simple and effective with bold colours
4. Score count to see how well I am doing.
    -Score always visible beneath the images which increases with each round
5. High score count so I can challenge myself to beat it.
    -High score visible and remains after end of game.

## Manual testing
Below is an account of manual testing done.

### Testing undertaken on desktop
All steps on desktop were repeated in browsers: Firefox, Chrome and Internet Explorer and on two different desktop screen sizes.

1. Main page
    1. How to play button
        - Clicked button and alert with information clearly displayed
    2. Start button
        - Clicked button and first sequence was heard and visualised
        - After Game Over clicked button restarted the game with new randomised sequences.
    3. Scores
        -Score number increased by 1 after each succesful round
        -High score shown for highest score achieved.
    4. Images
       -Images worked like buttons and translated user options into sequences
       -Image displayed visual animation with each sequence.

### Testing undertaken on tablet and phone devices

All steps below repeated to test functionality on developers Iphone and Ipad and in Chrome Developers Tools device simulators on all options and orientations.

1. Main page
    1. How to play button
        - Clicked button and alert with information clearly displayed
    2. Start button
        - Clicked button and first sequence was heard and visualised.
        - After Game Over clicked button restarted the game with new randomised sequences. Occasionally audio was not played at start of game.
    3. Scores
        -Score number increased by 1 after each succesful round
        -High score shown for highest score achieved.
    4. Images
       -Images worked like buttons and translated user options into sequences
       -Image displayed visual animation with each sequence.
    5. Positioning
        -Elements remained in position even on small screen size
2. Issues
    1. Audio
        1. Audio would not play in some instances during a sequence, an issue with phone browsers.


# Matthew Dal Santo | ITDEV164

- [x] Assignment 2

**FINALLY got the repo to stick without bugging out.**

The issue was the Gatsby creates and initializes a repo when you run the gatsby new components command.  To get around this, you have to create the repo, DO NOT clone it, create the new gatsby repo and then link the two with 'git push origin master --force'.

- [x] Assignment 3

**Additonal Components, Themes, and Styled Icon Buttons work.**

- [x] Assignment 4

**Got it working as intended with Bit.**

bittest also works and registers changes made to the Masthead component.
Since .bit is now in the .gitignore, you must git stash/git stash pop to maintain your local files after you pull to the master branch.

- [x] Assignment 5

**Masthead and new Button components work.**

- [x] Assignment 6

**MastheadDrawer now works.**

- [x] Assignment 7

**Flow is integrated with every component.**

Something broke the MastheadDrawer component, but flow reports no errors.  I did not @flow the /Masthead/Layouts/DefaultLayout.js file as I was not sure how to do so.  Also, I was unsure how to properly type the props in MediaQuery, so the theme prop is typed as 'any'.

- [x] Assignment 9

**AddThis integrated successfully.**

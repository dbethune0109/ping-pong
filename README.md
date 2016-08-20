# Project Title

    This is Epicodus Solo project for week three. the project is to have the user enter a number and return an array of numbers with "ping inserted instead of 3", "pong" inserted instead of 5, and if the number is divisible by both "pingpong" is inseted. I started with HTML, as with every project, so as to set my id tags to set up for CSS and Javascript. THis was pretty easy considering we just did roman numerals yesterday and it was pretty fresh in my mind.
    I set my variable to numbers and results to match the tags in index.html, set my function pingpong to coincide with final set my array to numbers used the for loop if a number was divisible to 15 then the command push inserted pingpong if 3 push  command inserted ping and 5 for pong. the else statement at the end pushed (i) which is the rest of the numbers in the array.
    I  then used numbers.join to put a , and a space in between, and finally a return call for result.
     The business logic was easy part set the id #s used the submit function set the variable of final and appended it to result. I found the .empty for a refresh on w3schools website.
    ```

## Getting Started
To use this program you will need a basic web browser above IE 8, Chrome is what I used to work on it, so it works best.

### Prerequisities

web browser, internet connection

```
Give examples
``` ""this is exert from .js file""


if (i % 15 === 0) {
  numbers.push("pingpong");
} else if (i % 3 === 0) {
  numbers.push("ping");
} else if (i % 5 === 0) {
  numbers.push("pong");




Tests:
I ran developer tools and console.log to make sure everything was working.

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With
* GIT
* Chrome
* Atom


### Authors
David Bethune
https://www.github.com/dbethune0109




## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

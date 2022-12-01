/**
 * Function that adds or removes classes in order to animate text
 */
function textAnimation() {

/**
 * Constructs an observer function that provides a way to 
 * asynchronously observe changes in the intersection of a 
 * target element with an ancestor element or with a top-level 
 * document's viewport.
 */
const observer = new IntersectionObserver((enteries) => {
    console.log("observer active");
    
    // For each element that is visible on screen add show class
    // Else remove show class
    enteries.forEach((entry) => {
        
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

    // Select all elements with the class of hidden and stores is hiddenTextElements array
    const hiddenTextElements = document.querySelectorAll('.hidden');

    // Foreach hiddenTextElement 
    // call observer function
    // with the method observe and pass the argument element
    hiddenTextElements.forEach((element) => observer.observe(element));
}
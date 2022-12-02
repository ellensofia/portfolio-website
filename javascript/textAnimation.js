/**
 * Function that adds or removes classes in order to animate text
 */
function textAnimation() {

/**
 * Constructs an observer function that provides a way to 
 * asynchronously observe changes in the intersection of a 
 * target element with an ancestor element or with a top-level 
 * document's viewport.
 * observer är ett promise
 */
const observer = new IntersectionObserver((enteries) => {
    console.log("observer active");
    
    // For each element that is visible on screen add show class
    // Else remove show class
    enteries.forEach((HTMLelement) => {
        
        if(HTMLelement.isIntersecting) {
            HTMLelement.target.classList.add('show');
        } else {
            HTMLelement.target.classList.remove('show');
        }
    });
})

    // Select all elements with the class of hidden and stores is hiddenTextElements array
    const hiddenTextElements = document.querySelectorAll('.hidden');

    // Foreach hiddenTextElement 
    // call observer function
    // with the method observe and pass the argument element
    hiddenTextElements.forEach((HTMLelement) => observer.observe(HTMLelement));
}
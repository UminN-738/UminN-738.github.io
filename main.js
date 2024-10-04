// Simple interactive script for the website
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        alert('Hello, welcome to my personal website!');
    });

const Homehover = document.getElementById('HomeHover');
const Visualhover = document.getElementById('VisualHover');
const Vishover = document.getElementById('VisHover');

Homehover.addEventListener('mouseenter',function(){
    Homehover.style.color = "black";
});

Homehover.addEventListener('mouseleave',function(){
    Homehover.style.color = "white";
});

Visualhover.addEventListener('mouseenter',function(){
    Visualhover.style.color = "black";
});

Visualhover.addEventListener('mouseleave',function(){
    Visualhover.style.color = "white";
});




});
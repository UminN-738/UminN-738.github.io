// Add your SVG drawing logic here
const svg = document.getElementById('vis');

// Example: Draw a simple circle in the SVG
const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle1.setAttribute('cx', '400');
circle1.setAttribute('cy', '250');
circle1.setAttribute('r', '50');
circle1.setAttribute('fill', '#347928');
circle1.setAttribute('stroke', '#347928');
svg.appendChild(circle1);

const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle2.setAttribute('cx', '430');
circle2.setAttribute('cy', '250');
circle2.setAttribute('r', '80');
circle2.setAttribute('fill', 'none');
circle2.setAttribute('stroke', '#54C392');
circle2.setAttribute('stroke-width', '4');
svg.appendChild(circle2);

const circle3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle3.setAttribute('cx', '400');
circle3.setAttribute('cy', '200');
circle3.setAttribute('r', '100');
circle3.setAttribute('fill', 'none');
circle3.setAttribute('stroke', '#73EC8B');
circle3.setAttribute('stroke-width', '6');
svg.appendChild(circle3);

const circle4 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle4.setAttribute('cx', '335');
circle4.setAttribute('cy', '240');
circle4.setAttribute('r', '120');
circle4.setAttribute('fill', 'none');
circle4.setAttribute('stroke', '#D2FF72');
circle4.setAttribute('stroke-width', '8');
svg.appendChild(circle4);

const circle5 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle5.setAttribute('cx', '400');
circle5.setAttribute('cy', '335');
circle5.setAttribute('r', '140');
circle5.setAttribute('fill', 'none');
circle5.setAttribute('stroke', '#f1ffd4');
circle5.setAttribute('stroke-width', '10');
svg.appendChild(circle5);

const circle6 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle6.setAttribute('cx', '505');
circle6.setAttribute('cy', '255');
circle6.setAttribute('r', '160');
circle6.setAttribute('fill', 'none');
circle6.setAttribute('stroke', '#fafff0');
circle6.setAttribute('stroke-width', '12');
svg.appendChild(circle6);






// Simple interactive script for the website
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        alert('Hello, welcome to my personal website!');
    });

const Homehover = document.getElementById('HomeHover');
const Visualhover = document.getElementById('VisualHover');

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
// Create and render the bar chart
// async function to load data from datasets/videogames_long.csv using d3.csv and then make visualizations
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

console.log(d3);

d3.select("#visContainer").append("p").text("hello world");

const svg = d3
  .select("#visContainer")
  .append("svg")
  .attr("width",640)
  .attr("height",400)
  .style("border","1px solid red");

const dataset =[10,20,30,40,50,60,70,80,90,100];

svg
.selectAll("rect")
.data(dataset)
.join("rect")
.attr("x",(d)=>{
    return d*2;
})
  .attr("y",50)
  .attr("width",10)
  .attr("height",20)
  .attr("fill","blue")

//   svg
//     .append("rect")
//     .attr("x",20)
//     .attr("y",50)
//     .attr("width",50)
//     .attr("height",50)
//     .style("border","1px solid blue")

// async function render() {
//     // load data
//     const data = await d3.csv("./dataset/videogames_wide.csv");
  
//     // create a bar chart
//     const vlSpec = vl
//       .markBar()
//       .data(data)
//       .encode(
//         vl.y().fieldN("Platform").sort("-x"),
//         vl.x().fieldQ("Global_Sales").aggregate("sum")
//       )
//       .width("container")
//       .height(400)
//       .toSpec();
  
//     const view = await vegaEmbed("#view", vlSpec).view;
//     view.run();
//   }
  
//   render();
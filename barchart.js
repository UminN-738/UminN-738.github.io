// Create and render the bar chart
// async function to load data from datasets/videogames_long.csv using d3.csv and then make visualizations
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import _ from "https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm";

console.log(d3);

d3.select("#visContainer").append("p").text("barchart");

async function drawVis(){

  const dataset = await d3.csv("./dataset/videogames_wide.csv",d3.autoType);
  console.log(dataset);

  const width = 640;
  const height = 400;
  
  const margin = {top: 10, right: 20, bottom: 20, left: 70 };
  
  const svg = d3
    .select("#visContainer")
    .append("svg")
    .attr("width",width)
    .attr("height",height)
    .style("border","1px solid black");
  
const df = _(dataset)
    .groupBy("Genre")
    .map((objs, key) => ({
        Genre: key,
        Global_Sales: _.sumBy(objs, "Global_Sales"),
    } ))
    .orderBy("Global_Sales")
    .value();
    console.log(df);

    const SalesExtent = d3.extent(df, (d) => d["Global_Sales"]);
    const Genres = df.map((d)=> d["Genre"]);

// const xScale =d3
//     .scaleBand()
//     .domain(Genres)
//     .range([margin.left, width - margin.right])
//     .padding(0.1);

// const yScale = d3
//     .scaleLinear()
//     .domain(SalesExtent)
//     .range([height - margin.bottom, margin.top]);

const xScale = d3
.scaleLinear()
.domain([0, d3.max(df, d => d.Global_Sales)]) 
.range([margin.left, width - margin.right]);

const yScale = d3
.scaleBand()
.domain(df.map(d => d.Genre))
.range([margin.top, height - margin.bottom])
.padding(0.1);

// svg
// .selectAll("rect")
// .data(df)
// .join("rect")
// .attr("x",(d) => {
//     return xScale(d["Genre"]);
// })
// .attr("y",(d) => {
//     return yScale(d["Global_Sales"]);
// })
// .attr("width",xScale.bandwidth())
// .attr("height", (d) => {
//     return height - margin.bottom - yScale(d["Global_Sales"]);
// });

// svg
//     .append("g")
//     .call(d3.axisBottom(xScale))
//     .attr("transform",`translate(0, ${height - margin.bottom})`)

// svg
//     .append("g")
//     .call(d3.axisLeft(yScale))
//     .attr("transform",`translate(${margin.left}, 0)`);

// Draw bars
svg
.selectAll("rect")
.data(df)
.join("rect")
.attr("y", d => yScale(d.Genre))
.attr("x", margin.left)
.attr("width", d => xScale(d.Global_Sales) - margin.left)
.attr("height", yScale.bandwidth())

// Add x-axis
svg
.append("g")
.call(d3.axisBottom(xScale))
.attr("transform", `translate(0, ${height - margin.bottom})`);

// Add y-axis
svg
.append("g")
.call(d3.axisLeft(yScale))
.attr("transform", `translate(${margin.left}, 0)`);

}

drawVis();



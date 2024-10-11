// Create and render the bar chart
// async function to load data from datasets/videogames_long.csv using d3.csv and then make visualizations
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

console.log(d3);

d3.select("#visContainer").append("p").text("hello world!");

async function drawVis(){
  // const dataset = [
  //   { platform: "PS2", global_sales: 400, jp_sales: 139 },
  //   { platform: "DS", global_sales: 2152, jp_sales: 1500 },
  //   { platform: "PS3", global_sales: 1331, jp_sales: 800 },
  //   { platform: "Wii", global_sales: 1320, jp_sales: 1500 },
  //   { platform: "X360", global_sales: 1262, jp_sales: 100 },
  //   { platform: "PSP", global_sales: 1209, jp_sales: 76 },
  //   { platform: "PC", global_sales: 4500, jp_sales: 250 },
  //   { platform: "XB", global_sales: 150, jp_sales: 180 },
  //   { platform: "GBA", global_sales: 120, jp_sales: 250 },
  // ];

  const dataset = await d3.csv("./dataset/videogames_wide.csv",d3.autoType);
  console.log(dataset);
  // const data = await d3.csv("dataset/videogames_wide.csv");
  // const data2 = await d3.csv("dataset/videogames_long.csv");
  
  const width = 640;
  const height = 400;
  
  const margin = {top: 10, right: 20, bottom: 20, left: 30 };
  
  const svg = d3
    .select("#visContainer")
    .append("svg")
    .attr("width",width)
    .attr("height",height)
    .style("border","1px solid black");
  
    const maxGlobalSales = d3.max(dataset, (d) => d.Global_Sales);
    const maxJpScales = d3.max(dataset, (d) => d.JP_Sales);
  
    const xScale = d3
    .scaleLinear()
    .domain([0, maxGlobalSales])
    .range([margin.left, width - margin.right]);
  
    const yScale = d3
    .scaleLinear()
    .domain([0, maxJpScales])
    .range([height - margin.bottom, margin.top]);
  
    const colorScale = d3
    .scaleLinear()
    .domain([0, maxGlobalSales])
    .range(["blue","red"]);
  
    svg
    .selectAll("circle")
    .data(dataset)
    .join("circle")
    .attr("cx", (d) => {
      return xScale(d.Global_Sales);
    })
    .attr("cy", (d) => {
      return yScale(d.JP_Sales);
    })
    .attr("r", 2)
    .attr("fill", (d) => {
      if (d.platform === "Wii"){
        return "green";
      }
      return "grey";
    });
  
    svg
    .append("g")
    .call(d3.axisBottom(xScale))
    .attr("transform", `translate(0, ${height - margin.bottom})`);
  
    svg
    .append("g")
    .call(d3.axisLeft(yScale))
    .attr("transform", `translate( ${margin.left}, 0)`);
}

drawVis();
    // const g = svg
    // .append("g")
    // .attr("transform", 'translate(${margin.left}, $ {margin.top})');
  
    // const maxCount = d3.max(dataset, (d) => d.count);
  
  
  //const dataset =[10,20,30,40,50,60,70,80,90,100];
  
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



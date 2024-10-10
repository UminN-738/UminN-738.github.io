// Create and render the bar chart
// async function to load data from datasets/videogames_long.csv using d3.csv and then make visualizations
async function render() {
  // load data
  const data = await d3.csv("dataset/videogames_wide.csv");
  const data2 = await d3.csv("dataset/videogames_long.csv");

  // create a bar chart
  const vlSpec1 = vl
    .markBar()
    .data(data)
    .encode(
      vl.x().fieldN("Genre"),  
      vl.y().fieldQ("Global_Sales").aggregate("sum"),  
      vl.color().fieldN("Genre")  
    )
    .width("container")
    .height(400)
    .toSpec();

    await vegaEmbed("#view1", vlSpec1);
  //const view1 = await vegaEmbed("#view1", vlSpec1).view;
  //view1.run();

  const vlSpec2 = vl
  .markBar()
  .data(data)
  .encode(
    vl.x().fieldN("Platform"),  
    vl.y().fieldQ("Global_Sales").aggregate("sum"),  
    vl.color().fieldN("Platform")  
  )
  .width("container")
  .height(400)
  .toSpec();

  await vegaEmbed("#view2", vlSpec2);
  

  const vlSpec3 = vl
    .markCircle()
    .data(data)
    .encode(
      vl.x().fieldQ("Year").title("Year")
        .scale({domain: [1980, 2020]}),
      vl.y().fieldQ("Global_Sales").aggregate("sum").title("Total Global Sales"),
      vl.color().fieldN("Platform").title("Platform")
        .scale({
          range: [
            "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2",
            "#7f7f7f", "#bcbd22", "#17becf", "#aec7e8", "#855F61", "#F2BFEA", "#CA8EE6",
            "#9E73DE", "#8965E6", "#5B46E8", "#323AD9", "#3C97B5", "#6091A3", "#8A7E9E",
            "#B08F93", "#D2F2BF", "#D9E68E", "#DFD174", "#E5C565", "#E9A847", "#D97731",
            "#B53B5E", "#A46072", "#9D977D", "#8EAF99"
          ]
        }),
      vl.row().fieldN("Genre").title("Genre")
    )
    .width("container")
    .height(400)
    .toSpec();

  await vegaEmbed("#view3", vlSpec3);

  const vlSpec4 = vl
  .markBar()
  .data(data2)
  .encode(
    vl.x().fieldN("platform").title("Platform"),
    vl.y().sum("sales_amount").title("Total Sales"),
    vl.color().fieldN("sales_region").title("Region")
  )
  .width("container")
  .height(400)
  .toSpec();

await vegaEmbed("#view4", vlSpec4);

const vlSpec5 = vl
.markLine()
.data(data2)
.encode(
  vl.x().fieldN("year").title("Year"),
  vl.y().sum("sales_amount").title("Total Sales"),
  vl.color().fieldN("sales_region").title("Region")  
)
.width("container")
.height(400)
.toSpec();

await vegaEmbed("#view5", vlSpec5);
}

render();
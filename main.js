let climate_daly_data = [
    {region: "Low-and-middle-income countries of the African Region", deaths: 57},
    {region: "Low-and-middle-income countries of the Americas", deaths: 2},
    {region: "Low-and-middle-income countries of the Eastern Mediterranean Region", deaths: 20},
    {region: "Low-and-middle-income countries of the European Region", deaths: 0.67},
    {region: "Low-and-middle-income countries of the South-East Asia Region", deaths: 58},
    {region: "Low-and-middle-income countries of the Western Pacific Region", deaths: 4},
    {region: "High income countries", deaths: 0.23}
];

// count at 1

let toggleClass = (i,toggle) => {
    // console.log(i);
    d3.select("#viz div:nth-child("+ i  +")").classed("highlightBar",toggle);
    d3.select("#legend li:nth-child("+ i  +")").classed("highlightText",toggle);
};

//i is an integer represents the index of the element that the user is hovering over. Note that this way of accessing children starts counting at 1, not zero.
//toggle represents the boolean flag to apply the corresponding CSS class

let divSelection = d3.select("#viz")
    .selectAll('div')
    .data(climate_daly_data)
    .enter()
    .append('div')
    .attr('class','bar')
    .style('width',function(d){return d.deaths * 8 + 'px'})
    .on("mouseover",
        function(d,i){
            console.log(i);
            toggleClass(i,true);
        })
    .on("mouseout",
        function(d,i){
            console.log(i);
            toggleClass(i,false);
        })

let listSelection = d3.select('#legend')
    .selectAll('li')
    .data(climate_daly_data)
    .enter()
    .append('li')
    .text(function(d){
        return d.region + ": " + d.deaths + " deaths";
    })
    .on("mouseover",
        function(d,i){
            toggleClass(i,true);
        })
    .on("mouseout",
        function(d,i){
            toggleClass(i,false);
        });


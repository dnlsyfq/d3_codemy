# D3

### selection method

> .select('') // only selects the first element that matches the selector

> .selectAll('') // returns all of the elements that match the selector in the DOM

* each element in the selection includes a reference to its parent node in DOM
* takes one parameter :
    * HTML element : H1 , div
    * class : .
    * id : #
```
d3.select('#visualisation');
d3.selectAll('div');
```   
    
### data method 

> .data();
*  takes an array of any type as its parameter and binds a datum to each element in the selection returned
* invoked on a selection and takes a parameter of an array of any type. It returns an update selection with the data bound to the elements
```
let dataset = [55,34,23,22,59];
d3.selectAll("p")
   .data(dataset);
```
---
```
 <body>
    <h3>Most Streamed YouTube Videos in Billions:</h3>
	</body>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div> 
```
```
let videoData = [{title: "Despacito", amount: 5.68},
         {title: "Shape of You", amount: 3.89},
         {title: "See You Again", amount: 3.85},
         {title: "Uptown Funk", amount: 3.32},
         {title: "Masha and the Bear: Recipe for Disaster", amount: 3.31},
         {title: "Gangam Style", amount: 3.23},
         {title: "Sorry", amount: 3.03},
         {title: "Sugar", amount: 2.80},
         {title: "Shake it Off", amount: 2.67},
         {title: "Roar", amount: 2.65},
         {title: "Bailando", amount: 2.63},
         {title: "Thinking Out Loud", amount: 2.53},
         {title: "Counting Stars", amount: 2.51},
         {title: "Dark Horse", amount: 2.46},
         {title: "Lean On", amount: 2.43}
 ];

let divSelection = d3.select("body") 
  .selectAll("div");

//Add your code here:
divSelection.data(videoData)
  .text(d=>d)
```

--- 
### text method 

> .text();
```
let divSelection = d3.select("body") 
  .selectAll("div");

divSelection
  .data(videoData)
  .text(function(d) { 
     return d.title + ": " + d.amount + " views";
	 });
	 
 divSelection
  .data(videoData)
  .text(function(d) {return `${d.title}: ${d.amount} views`}); 	 
```
**d parameter**
* need a function with a d param to access each datum associated per element
* d as representing the d in data or datum
* can also optionally include an i parameter, or second parameter, if you want to access the index

### styling method 

> .attr(arg,arg);

takes two parameters, the HTML attribute you wish to change and the value you wish to assign i
, All of the elements in this selection will now be styled with the same class.
```
.attr("class", function(d,i){return });
```

> .style(arg,arg);

takes two parameters, the CSS property you wish to change and the value you wish to assign it.
and styles that depend on the value of the data of each element? Customize the css property (i.e. width) of each div
```
.style("css property",function(d,i){return d.Variable * 50 + "px"})
```

```
let dataset = [55,34,23,22,59];
 
let svg = d3.select("body")
            .selectAll("div")
            .data(dataset)
            .attr("id", function(d,i){ return "element-" + i; })
            .style("width", function(d){
                   return d + "px";
            });
```
* The .attr() method changed the HTML attribute id to be based on the element index in the dataset
* The .style() method computed the width to be a function of the datum value


**css class**
```
.bar {
 padding-left: 10px;
 color: #5820df;
 background: #59eab7;
 border: 4px solid #ee97ef;
 font-size: .8em;
}
```

```
let divSelection = d3.select("body") 
  .selectAll("div");

divSelection
  .data(videoData)
  .text(function(d) { 
     return d.title + ": " + d.amount + " views";
	 })
  .attr('class','bar')
  .style('width',function(d){return d.amount * 50 + "px"});
```
---

```
let videoData = [{title: "Despacito", amount: 5.68},
{title: "Shape of You", amount: 3.89},
{title: "See You Again", amount: 3.85},
{title: "Uptown Funk", amount: 3.32},
{title: "Masha and the Bear: Recipe for Disaster", amount: 3.31},
{title: "Gangam Style", amount: 3.23},
{title: "Sorry", amount: 3.03},
{title: "Sugar", amount: 2.80},
{title: "Shake it Off", amount: 2.67},
{title: "Roar", amount: 2.65},
{title: "Bailando", amount: 2.63},
{title: "Thinking Out Loud", amount: 2.53},
{title: "Counting Stars", amount: 2.51},
{title: "Dark Horse", amount: 2.46},
{title: "Lean On", amount: 2.43}
];

let divSelection = d3.select("body")
.selectAll("div");

divSelection
.data(videoData)
.text(function(d) {
return d.title + ": " + d.amount + " views";
})
.attr("class","bar")
.style('width',d => d.amount * 50 + "px")
```


  
---
### enter and append method
turn theoretical elements into real 

> .enter() 

* consolidates the difference between the number of existing elements in the selection and the number of elements in the dataset. It is invoked on the update selection that .data() returns.
* If there are more data points than existing “selected” elements, .enter() creates placeholder elements and returns an enter selection which specifies which elements need to be added.

**e.g.**
 * if there were 0 existing elements in the update selection and 10 data points, enter would compute 10 elements in the enter selection. 
 * If there were 3, then it would compute 7 in the enter selection. 
 * The .enter() method does not actually append the elements, it just computes how many need to be added.


>.append()

 takes a string parameter with the element name you wish to append, it then analyzes the selection that gets handed off to it, and generates the specified elements on the DOM. It returns a reference to the elements it created.

> .nodes()

use the .nodes() method on your selection. This method will log the array of grouped nodes in the selection.

```
let dataset = [55,34,23,22,59];
d3.select("body")
   .selectAll("div")
   .data(dataset)
   .enter()
   .append("div");
```
```
divSelection
  .data(videoData)
  .enter()
  .append('div')
  .text(function(d) { 
     return d.title + ": " + d.amount + " views";
	 })
  .attr("class", "bar")
  .style("width", function(d) { return 50 * d.amount + "px"; });

```

### events 

> .on()

* takes a string parameter with the name of the event and a function to handle that event when it is triggered
* The .on() method binds an event listener to the elements in the selection. 

* first parameter
    * mouseover
    * click
    * mouseoute
    * mouseenter
* second parameter
    * The second parameter should be an event handler function. Inside the event handler function you create, use d3.select() to grab the element the event is triggered on by using the keyword this. Chain this selection to assign the element a .text() that corresponds to datum value for each element.

```
selection
    .on("mouseover", function(d,i) {
          d3.select(this).text(d); // this refers to the event’s DOM element
    });
```

```
let poemVerses = ["Always","in the middle", "of our bloodiest battles", "you lay down your arms","like flowering mines","to conquer me home."];


let selection = d3.select("#viz")
  .selectAll('p')
  .data(poemVerses)
  .enter()
  .append('p')
  .text('Click Me!')
  .on("click",function(d,i){
    d3.select(this).text(d);
  });
```

```
let dataset = [55,34,23,22,59];

let svg = d3.select("body")
            .selectAll("div")
            .data(dataset)
            .attr("id", function(d,i){ return "element-" + i; })
            .style("width", function(d){
                   return d + "px";
            });
```

```
let divSelection = d3.select("body") 
  .selectAll("div");
  
  divSelection
  	.data(videoData)
    .enter()
    .append('div')
    .text(function(d){return `${d.title}: ${d.amount}`})
    
```

```
var h1 = d3.selectAll("section")
    .style("background", "steelblue")
  .append("h1")
    .text("Hello!");
```

```
// "click", "mouseover", "mouseout", "mouseenter" and more.

selection
    .on("mouseover", function(d,i) {
          d3.select(this).text(d);
    });
```

```
selection
    .on("mouseover", function(d,i) {
          d3.select(this).text(d);
    });
```

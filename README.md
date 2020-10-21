# D3

> .select('');
* take html element (i.e div ) or id (i.e #) 

> .selectAll('');


> .data();
*  takes an array of any type as its parameter and binds a datum to each element in the selection returned
* invoked on a selection and takes a parameter of an array of any type. It returns an update selection with the data bound to the elements
```
let dataset = [55,34,23,22,59];
d3.selectAll("p")
   .data(dataset);

```

> .text();
```
let divSelection = d3.select("body") 
  .selectAll("div");

divSelection
  .data(videoData)
  .text(function(d) { 
     return d.title + ": " + d.amount + " views";
	 });
```


> .attr(arg,arg);
takes two parameters, the HTML attribute you wish to change and the value you wish to assign it.
```
.attr("class", "class-name");
```


> .style(arg,arg):
 takes two parameters, the CSS property you wish to change and the value you wish to assign it.

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

> .enter() and .append()
turn theoretical elements into real 

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

> .on()
takes a string parameter with the name of the event and a function to handle that event when it is triggered

```
selection
    .on("mouseover", function(d,i) {
          d3.select(this).text(d);
    });
```

```
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

var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

/**
 Think of this as the intersection between the data and the dom elements.
**/
var update = d3.select('.chart')
  .selectAll('div')
  .data(scores, function (d) {
    return d ? d.name : this.innerText; //map name property to the innerText of the div.
  })
  .style('color', 'blue'); //If the name already exists within the list set it to blue. (intersection between data and the element).

/**
Enter refers to data but no dom elements.
**/
var enter = update.enter()
  .append('div') // create div for everything that does not have a dom element.
  .text(function (d) {
    return d.name;
  })
  .style('color', 'green');

/**
Update refers to the dom elements already on the page.
**/
update.exit().remove(); // remove any data that is on the dom but does not have any corresponding data.

update.merge(enter)
  .style('width', d => d.score + 'px')
  .style('height', '50px')
  .style('background', 'lightgreen')
  .style('border', '1px solid black')

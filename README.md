A Pen created at CodePen.io. You can find this one at http://codepen.io/HipsterBrown/pen/yOBRJe.

 I've been doing so much React lately, I wanted to see if I could make a plain JavaScript interaction. I've built something similar in React that I will bring into another pen so people can compare the two. 

Some nice about this implementation is how much more performant it gets during use. After each sortable columns has been sorted at least once, all the data needed to sort the table rows is cached and eliminates the need to retrieve it from each <td>. 
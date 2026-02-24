Question 1 :>  getElementById return One Element and it's id will be Unique , getElementsByClassName return multiple Elements , it's return types is Html Colection ; querySelector we can 
select take multiple Elment likes id , class , tag , but it's take first match Elemnt . querySelectorAll takes all matching Element.
Question 2 :> first i have to creae a Element like div ,  and i have to find the parent element then i will apendChild , parent  element or child Element.
Question 3 :> When you click an element, the event happens on that element first, then moves to its parent, then parent’s parent.We can add one event listener to the parent to handle many child elements (event delegation).
Question 4 :> Event Delegation is a technique in JavaScript where instead of adding an event listener to multiple child elements individually, you add one event listener on their parent and let events bubble up to that parent. Then, you check which child triggered the event.
Question 5 :>  preventDefault() → Stops the browser’s default action for an event (like form submit or link navigation).

stopPropagation() → Stops the event from bubbling up (or trickling down) the DOM, so parent/ancestor handlers won’t run.

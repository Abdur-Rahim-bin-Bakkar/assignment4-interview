# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## Ans: 
getElementById is unique. 
getElementByClassName return HTML collection(array like object).
querySelector take a selector like css selector and return first element form the page
querySelectorAll take a selector like css selector and return a node list 





# 2.  How do you create and insert a new element into the DOM?
## Ans:
document.createElement use for create and appenChild use for insert. first write parent element name then write dot(.) then write appenchild(). write create element name in the appenchild bracked.





# 3. What is Event Bubbling? And how does it work?
## Ans:
if we click a element then this click event work her parent element. work like to: child to parent then parent to her parent (child => parent => parent => parent => parent)




# 4. What is Event Delegation in JavaScript? Why is it useful?
## Ans:
Event Delegation is very useful technique. we use event in parent element then we can see target element use e.target .  e is a paramitter in lisinner function. this paramitter give event imformatarion.





# 5. What is the difference between preventDefault() and stopPropagation() methods?
## Ans:
preventDefault() stop browser default behavior. and stopPropagation() stop event Bubbling
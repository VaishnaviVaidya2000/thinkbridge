DOM-It creates document object Model of that page.
getElementById is a method.
innerHTML is a property.
The innerHTML property is useful for getting or replacing the content of HTML elements.
The innerHTML property can be used to get or change any HTML element.

HTML Elements
document.getElementById(id):Find an element by element id
document.getElementsByTagName(name):find elements by tag name
document.getElementsByClassName(name):to find elements by class name

element.innerHTML =  new html content:Change the inner HTML of an element
element.attribute = new value:Change the attribute value of an HTML element
element.style.property = new style:Change the style of an HTML element
element.setAttribute(attribute, value):Change the attribute value of an HTML element


Adding and Deleting Elements
document.createElement(element):Create an HTML element
document.removeChild(element):Remove an HTML element
document.appendChild(element):Add an HTML element
document.replaceChild(new, old):Replace an HTML element
document.write(text):Write into the HTML output stream

Adding Event Handlers
document.getElementById(id).onclick = function(){code}: It is used for Adding event handler code to an onclick event
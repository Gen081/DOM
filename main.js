//#1- All elements by id selector method
var pageHeader = document.getElementById('page-header')
var mainHeading = document.getElementById('main-heading')

var paraOne = document.getElementById('para1')
var paraTwo = document.getElementById('para2')

var button = document.getElementById('btn')

var paraFour = document.getElementById('para4')

var colorRed = document.getElementById('red')
var colorBlue = document.getElementById('blue')
var colorYellow = document.getElementById('yellow')
var colorGreen = document.getElementById('green')
var colorBlack = document.getElementById('black')


// #2- Change the header text
mainHeading.textContent = "New DOM Layout"
pageHeader.classList.replace ('bg-dark','bg-success')

// #3- Access each paragraph tag
paraOne.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."
paraTwo.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

// #4- Click event function
button.addEventListener('click', () =>{
paraFour.textContent = ('The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.')
})

// #5- Change box to their colors
colorRed.classList.replace('bg-white','bg-danger')
colorBlue.classList.replace('bg-white','bg-primary')
colorYellow.classList.replace('bg-white','bg-warning')
colorGreen.classList.replace('bg-white','bg-success')
colorBlack.classList.replace('bg-white','bg-dark')


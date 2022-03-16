// //this brings the div w/ id of 'tags' from index.html
// const tagsEl = document.getElementById('tags')
// //this brings the div w/ id of 'textarea' from index.html
// const textarea = document.getElementById('textarea')

// //this puts a cursor in the textbox w/o clicking
// textarea.focus()

// //keyup event is generated when the key is released;  
// //'e' is the event parameter
// textarea.addEventListener('keyup', (e) => {
//     //'e.target.value' is whatever we type in
//     createTags(e.target.value)

//     //RANDOM PICKER FUNCTION = THIS MAKES IT WORK
//     if(e.key === 'Enter'){

//         //to clear input; 10=10ms
//         setTimeout(() =>{
//             e.target.value = ''
//         }, 10)
        
//         randomSelect()
//     }
// })

// function createTags(input){
//     //.split = at the comma the input will turn into an array
//     //input is always a string
//     //.filter = return certain  things based on conditional (trim)
//     //map = for each tag we want to return an array with tag but we want to trim whitespace
//     const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
//     //clear tags ELEMENT (not ID of 'tags') and clear it otherwise it will pile up
//     tagsEl.innerHTML = ''

//     //loop thru tags (array) to create a tagEl
//     tags.forEach(tag => {
//         //span are choices
//         const tagEl = document.createElement('span')
//         //add 'tag' as class to this new element
//         tagEl.classList.add('tag')
//         //set innertext  of this to whatever the tag is
//         tagEl.innerText = tag
//         //target div with id of 'tags'
//         //appendChild()
//         tagsEl.appendChild(tagEl)

//     })
// }

// function randomSelect(){
//     //number of times it will highlight before it stops
//     const times = 30 

//     //set an interval for highlight/unhighlight
//     //100 = will occur every 100ms
//      const interval = setInterval(() => {
//          const randomTag = pickRandomTag()

//         highlightTag(randomTag)

//         setTimeout(() => {
//             unHighlightTag(randomTag)
//         }, 100)
//      }, 100)

//      function pickRandomTag(){
//          //we want to take all the tags so use querySelectorAll
//          //querySelectorAll = node list (like array with index)
//          const tags = document.querySelectorAll('.tag')

//          //TO PICK RANDOM TAG ->
//             //math.floor to round DOWN
//             //math.random to give a random decimal
//             //tags.length = length of the node list
//          return tags[Math.floor(Math.random() * tags.length)]
//      }

//      //to highlight tag
//      function highlightTag(tag) {
//         tag.classList.add('highlight')
//     }
//      //to UNhighlight tag
//      function unHighlightTag(tag){
//          tag.classList.remove('highlight')
//      }

// function pickRandomTag(){
//     //this gets all of the elements with the 'tag' class
//     //querySelector is a node list (like an array w/index)
//     const tags = document.querySelectorAll('.tag')
//     //'Math.floor' rounds down
//     return tags[Math.floor(Math.random * tags.length)]
// }

// }

//brings divs w/these ids from index.html
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//automatically triggers cursor without clicking
textarea.focus()

//keyup when key is released
//e.taret.value = whatever we type in
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        //clears input after 10ms
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

//creates an array and eliminates whitespace (if there is any)
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    //clears tag ELEMENT otherwise spans/tags will pile up
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}
//this will loop through options
function randomSelect() {
    //how many times it will touch spans
    const times = 50

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}
//this will SELECT one of the options
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
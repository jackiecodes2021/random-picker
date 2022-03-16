//this brings the div w/ id of 'tags' from index.html
const tagsEl = document.getElementById('tags')
//this brings the div w/ id of 'textarea' from index.html
const textarea = document.getElementById('textarea')

//this puts a cursor in the textbox w/o clicking
textarea.focus()

//keyup event is generated when the key is released;  
//'e' is the event parameter
textarea.addEventListener('keyup', (e) => {
    //'e.target.value' is whatever we type in
    createTags(e.target.value)
})

function createTags(input){
    //.split = at the comma the input will turn into an array
    //input is always a string
    //.filter = return certain  things based on conditional (trim)
    //map = for each tag we want to return an array with tag but we want to trim whitespace
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    //clear tags element and clear it otherwise it will pile up
    tagsEl.innerHTML = ''

    //loop thru tags (array) to create a tagEl
    tags.forEach(tag => {
        //span are choices
        const tagEl = document.createElement('span')
        //add 'tag' as class to this new element
        tagEl.classList.add('tag')
        //set innertext  of this to whatever the tag is
        tagEl.innerText = tag
        //target div with id of 'tags'
        //appendChild()
        tagsEl.appendChild(tagEl)

    })
}
// textarea.addEventListener('keyup', (e) => {
//     createTags(e.target.value)

// })
// function createTags(input){
//     const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
//     tags.innerHTML = ''

//     tags.forEach(tag => {
//         const tagEL = document.createElement('span')
//         tagEL.classList.add('tag')
//         tagEL.innerText = tag
//         tagsEl.appendChild(tagEL)
//     })
// }
# Projects related to dom


## Projects link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## project1
```javascript
console.log("pawan kumar")
const buttons=document.querySelectorAll(".button")
const body=document.querySelector('body')
//we have to perform operation on each button
buttons.forEach(function(button){
  console.log(button)
  //we would add event listener
  button.addEventListener('click',function(e){
    console.log(e)//it will show the event
    console.log(e.target)//it will show from where e had been generated
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id
    }
  })
})
```

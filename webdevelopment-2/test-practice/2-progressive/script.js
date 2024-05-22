let listItems = document.querySelectorAll("li");
let todoListItems = document.getElementById("todo-list");
let checkboxes = document.querySelectorAll('#todo-list input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.remove();
})

listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.cursor = 'pointer';
    });

    item.addEventListener('mouseout', () => {
      item.style.cursor = 'default';
    });
})

console.log(todoListItems)
console.log(listItems)

addEventListener("click", onClick = (event) => {
console.log(event)
console.log(event.target)

const listElement = event.target.closest("li");

listItems.forEach(element => {
    element.style.textDecoration = "none";
    element.innerHTML.type = "none"
    listElement.style.textDecoration = "line-through";
});
})

// document.addEventListener("DOMContentLoaded", () => {
//     // Select the <ul> element
//     const todoList = document.querySelector('todo-list');
//     console.log(todoList)
    
//     // Select all <li> elements inside the <ul>
//     const listItems = document.querySelector("li");
    
//     // Function to handle the click event
//     function handleClick(event) {
//       // Remove the 'underline' class from all list items
//       listItems.forEach(item => item.classList.remove('underline'));
//       console.log(event.currentTarget)
//       // Add the 'underline' class to the clicked item
//       event.currentTarget.classList.add('underline');
//     }
    
//     // Attach the click event listener to each list item
//     listItems.forEach(item => {
//       item.addEventListener('click', handleClick);
//     });
//   });
  
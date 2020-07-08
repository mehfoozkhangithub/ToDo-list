var btn;
let toggler = false;

function addTodo() {
    //value from input box
    var itemName = document.getElementById("name");
    
    //creating element
    var div = document.createElement("div");
    div.setAttribute('class','box')

    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.style.float = "left";
    checkBox.style.marginTop = "1%";
    checkBox.addEventListener("click", completedList);

    var p = document.createElement("p");
    p.textContent = itemName.value;
    p.style.float = "left";
    var btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.fontWeight = "bolder";
    btn.style.float = "right";
    btn.addEventListener("click", removeItem);

    var edit = document.createElement("button");
    edit.textContent = "Edit Item";
    edit.style.backgroundColor = "green";
    edit.style.color = "white";
    edit.style.clear = "both";
    edit.style.float = "left";
    edit.addEventListener("click", editItem);

    div.append(checkBox, p, edit, btn);

    renderDom(div);
    itemName.textContent=""
}

editItem = () => {
    var target = event.target;
    var desc = target.previousElementSibling;
    var input = document.createElement("input");
    input.value = desc.textContent;
    input.style.color="black"
    desc.remove();

    var parent = target.parentElement;
    target.textContent = "Update";
    target.removeEventListener("click", editItem);
    target.addEventListener("click", updateItem);

    parent.insertBefore(input, target);
};

updateItem = () => {
    var target = event.target;
    var desc = target.previousElementSibling;
    var p = document.createElement("p");
    p.textContent = desc.value;

    desc.remove();

    var parent = target.parentElement;
    target.textContent = "Edit";
    target.removeEventListener("click", updateItem);
    target.addEventListener("click", editItem);

    parent.insertBefore(p, target);
};

// getToggle = (toggler) => {
    
// }


showCompleted = () => {
    let completed = document.getElementById("complete")
    let toggle = document.getElementById('toggle')
    
    if (toggler) {
        completed.style.display = 'block'
        toggle.textContent="Hide List"
        toggler=false
    }
    else {
        completed.style.display = "none"
        toggle.textContent="Show List"
        toggler=true
    }
    

}



completedList = () => {
    var complete = document.getElementById("complete");
    var display = event.target.parentElement;
    var line = event.target.nextElementSibling;
    line.style.textDecoration = "line-through";
    complete.appendChild(display);
};

removeItem = () => {
    event.target.parentElement.remove();
};

renderDom = (element) => {
    var target = document.getElementById("cont");
    target.append(element);
};

window.addEventListener("load", function () {
    btn = document.getElementById("submit");
    btn.addEventListener("click", addTodo);
    let toggle = document.getElementById('toggle')
    toggle.addEventListener('click',showCompleted)
});
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const p of placeholders) {
    p.addEventListener('dragover', dragover);
    p.addEventListener('dragenter', dragenter);
    p.addEventListener('dragleave', dragleave);
    p.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    event.target.classList.add("hold");
    event.target.classList.remove("colored");
    setTimeout(() => {
        event.target.classList.add("hide");
    }, 0);
}

function dragend(event) {
    event.target.className ="item";
}


function dragover(event) {
    event.preventDefault();
}
function dragenter(event) {
    event.target.classList.add('hovered');
}
function dragleave(event) {
    event.target.classList.remove('hovered');
}
function dragdrop(event) {
    event.target.append(item);
    // setTimeout(() => {
    //     item.classList.add('colored');
    // }, 1000); 
    event.target.classList.remove('hovered');
}
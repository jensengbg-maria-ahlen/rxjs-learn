import { AsyncSubject } from 'rxjs';

let subject = new AsyncSubject();

subject.subscribe(
    data => addItem('Observer 1: ' +data),
    () => addItem('Observer 1 Completed')
)

let i = 1;
let int = setInterval(() => subject.next(i++), 100)

setTimeout(() => {
    let observer2 = subject.subscribe(
        data => addItem('Observer 2: ' +data)
    )
    subject.complete()
}, 500)


function addItem(val:any) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
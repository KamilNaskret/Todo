// class Todo

class Todo{
    constructor(itemTodo){
        this.itemTodo = itemTodo;
        this.addToList();
        // this.addToLocal();
        this.deleteTodo();
        // this.takeFromLocal();
    }
    addToList(){
        const block = document.createElement("div");
        block.setAttribute("data-element","element");
        block.innerHTML=`<h3>${this.itemTodo}</h3> <i class="fas fa-trash" data-delete></i>`
        listTodo.appendChild(block);
        this.clearInput();
    }
    addToLocal(){
        /* TODO: DOKOŃCZ
        const elements = [...document.querySelectorAll("[data-element]")];
        const todoEx = elements.map((item) => {return item.firstChild.innerHTML});
        
        localStorage.setItem("todo",JSON.stringify(todoEx));
        console.log(todoEx);
        */
    }
    takeFromLocal(){
        // TODO: DOKOŃCZ JSON.parse(localStorage.getItem("todo"));
    }
    clearInput(){
        itemTodo.value="";
    }
    deleteTodo(){
        const deleteTodo = document.querySelectorAll("[data-delete]");
        deleteTodo.forEach((deleted) => {
            deleted.addEventListener('click',(e)=>{
                e.target.closest("div").remove();
            })
        })
    }
}

class Search{
    constructor(value){
        this.searchValue=search.value;
    }
    searching(){
        const blockElements = document.querySelectorAll("[data-element]");
        blockElements.forEach((element) => {
            if(element.firstChild.innerHTML.includes(this.searchValue)){
                element.style.setProperty("display","");
            }else{
                element.style.setProperty("display","none");
            }
        });
    }
}

// Variables

const itemTodo = document.querySelector("[data-itemTodo]");
const addTodo = document.querySelector("[data-addTodo]");
const formTodo = document.querySelector("[data-formTodo]");
const error = document.querySelector("[data-error]");
const listTodo = document.querySelector("[data-container]");
const search = document.querySelector("[data-search]");



// Event Listener

search.addEventListener("input",() => {
    const searchTodo = new Search(search.value);
    searchTodo.searching();
})

formTodo.addEventListener('submit',(e) => {
    e.preventDefault();
    if(itemTodo.value){
        const todo = new Todo(itemTodo.value);
        error.classList.add("error");
    }else{
        error.classList.remove("error");
    }
})
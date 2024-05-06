const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
	if (input.value != ''){
        let li = document.createElement('li');
        const deleteButton = document.createElement('button')
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () =>{
            list.removeChild(li);
            input.focus();
        })
        input.focus();
        input.value = '';
    }
    else {
        alert("The input is empty!");
    }
});

let chaptersArray = getChapterList() || [];
chaptersArray.array.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})

function getChapterList(item) {
    let li = document.createElement('li');
    const deleteButton = document.createElement('button')
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', () =>{
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
    input.focus();
    input.value = '';
}

function setChapterList() {
    localStorage.setItem('myBOMChapList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBOMChapList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
let notesList = document.getElementsByClassName('notes-list')[0];


export default function renderNotes(jokes) {
  notesList.innerHTML = '';

  jokes.forEach(joke => {
    renderNote(joke, jokes);
  });
}

function renderNote(joke, jokes) {
  let note = document.createElement('div');
  let content = document.createElement('div');
  let overlay = document.createElement('div');
  let editButton = document.createElement('button');
  let deleteButton = document.createElement('button');
  let pencilFavicon = document.createElement('i');
  let crossFavicon = document.createElement('i');

  editButton.innerText = 'edit ';
  deleteButton.innerText = 'delete ';
  notesList.appendChild(note);
  note.appendChild(content);
  note.appendChild(overlay);
  overlay.appendChild(editButton);
  overlay.appendChild(deleteButton);
  editButton.appendChild(pencilFavicon);
  deleteButton.appendChild(crossFavicon);

  note.classList.add('note');
  content.classList.add('content');
  overlay.classList.add('overlay');
  editButton.classList.add('btn', 'btn-warning');
  deleteButton.classList.add('btn', 'btn-danger');
  pencilFavicon.classList.add('fa', 'fa-pencil');
  crossFavicon.classList.add('fa', 'fa-times');

  note.setAttribute('data-id', joke.id);
  content.innerText = joke.value;

  note.style.backgroundColor = joke.backgroundColor;

  editButton.addEventListener('click', event => {
    let id = event.target.closest('.note').getAttribute('data-id');
    let index = findJokeIndexById(jokes, id);
    jokes[index].value = prompt();
    renderNotes(jokes);
  });

  deleteButton.addEventListener('click', event => {
    let id = event.target.closest('.note').getAttribute('data-id');
    let index = findJokeIndexById(jokes, id);
    jokes.splice(index, 1);
    renderNotes(jokes);
  });
}

function findJokeIndexById(jokes, id) {
  return jokes.findIndex(joke => {
    return id === joke.id;
  });
}

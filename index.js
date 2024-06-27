/*Вам необхідно написати додаток Todo list, використовуючи синтаксис класів.
  У списку нотаток повинні бути методи для додавання нової нотатки, видалення,
  редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток. 
  Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те,
  скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.*/
/*Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, 
  а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).*/
/*Вам необхідно додати кожній нотатці дату її створення і редагування, а також розширити можливості пошуку і сортування,
  включивши в них можливість роботи з датою.*/

class TodoList {
  constructor() {
    this.notes = [];
  }

  addNotes(noteses) {
    //додавання нової нотатки
    this.notes.push(noteses);
  }

  removeNotes(name) {
    // видалення нотатка (за ім`ям):
    this.notes.splice(
      0,
      this.notes.length,
      ...this.notes.filter((n) => n.name !== name)
    );
  }

  removeNotes2(key) {
    //видалення нотатка (по ключу масиву?):
    this.notes.splice(key, 1);
  }

  editNotes(name, newNotes) {
    //редагування нотатка (за ім`ям):
    this.notes.forEach((n) => {
      if (n.name === name) {
        n.notes = newNotes;
        const date2 = new Date();
        n.dateEditing = date2.toLocaleString();
      }
    });
  }

  editNotes2(key, newNotes) {
    //редагування нотатка (по ключу масиву?):
    this.notes[key].notes = newNotes;
    const date2 = new Date();
    this.notes[key].dateEditing = date2.toLocaleString();
  }

  getInformationNotes(name) {
    //отримання повної інформації про нотатку (за ім`ям):
    this.notes.forEach((n) => {
      if (n.name === name) {
        console.log(n);
      }
    });
  }

  getInformationNotes2(key) {
    //отримання повної інформації про нотатку (по ключу масиву?):
    console.log(this.notes[key]);
  }

  getlist() {
    //отримання списку всіх нотаток
    console.log(this.notes);
  }

  changeDoneNotes(name, done) {
    //позначити замітку, як виконану (за ім`ям):
    this.notes.forEach((n) => {
      if (n.name === name) {
        n.done = done;
        const date2 = new Date();
        n.dateEditing = date2.toLocaleString();
      }
    });
  }

  changeDoneNotes2(key, done) {
    //позначити замітку, як виконану (по ключу масиву?):

    this.notes[key].done = done;
    //this.notes.splice(key, 1, newNotes.done);
    const date2 = new Date();
    this.notes[key].dateEditing = date2.toLocaleString();
  }

  howManyNotes() {
    //скільки всього нотаток у списку і скільки залишилося невиконань
    console.log(`Кількість нотатків ${this.notes.length}`);
    let doneNotes = 0;
    this.notes.forEach((note) => {
      if (note.done === false) {
        doneNotes += 1;
      }
    });
    console.log(`Кількість не виконаних нотатків ${doneNotes}`);
  }

  findNotes(name) {
    // знайти нотатку
    this.notes.forEach((n) => {
      if (n.name === name) {
        console.log(n);
      }
    });
  }

  sortNotesFalse() {
    this.notes.sort((a, b) => a.done - b.done);
  }

  sortNotesTrue() {
    this.notes.sort((a, b) => b.done - a.done);
  }

  sortNotesDate1() {
    this.notes.sort((a, b) => a.date - b.date);
  }
  sortNotesDate2() {
    this.notes.sort((a, b) => b.date - a.date);
  }

  findNotesDate(date) {
    // знайти нотатку по даті
    this.notes.forEach((n) => {
      if (n.dateDate === date) {
        console.log(n);
      }
    });
  }
}
class Notes {
  constructor(name, notes, done = true /*date*/) {
    //debugger
    this.name = name;
    this.notes = notes;
    this.done = done;
    const date2 = new Date(/*date*/);
    this.date = date2.toLocaleString();
    this.dateDate = date2.toLocaleDateString();
    this.dateEditing;
  }
}

andriiList = new TodoList();
andriiNotes1 = new Notes(
  "Notes1",
  "Купити хліб",
  false
  // "2024-06-11T19:15:00.000Z"
);
andriiNotes2 = new Notes(
  "Notes2",
  "Привітати друга з Денм народження",
  true
  //"2024-06-05T19:15:00.000Z"
);
andriiNotes3 = new Notes(
  "Notes3",
  "Виконати домашку",
  false
  //"2024-06-21T19:15:00.000Z"
);
andriiNotes4 = new Notes(
  "Notes4",
  "Сходити на зустріч",
  true
  //"2024-06-04T19:15:00.000Z"
);

//console.log(andriiNotes1.name)

andriiList.addNotes(andriiNotes1); //додавання нової нотатки
andriiList.addNotes(andriiNotes2);
andriiList.addNotes(andriiNotes3);
andriiList.addNotes(andriiNotes1);
andriiList.addNotes(andriiNotes4);

//andriiList.removeNotes("Notes1"); // видалення нотатку (за ім`ям)
//andriiList.removeNotes2(1)  // видалення нотатку (по ключу масиву?)

andriiList.editNotes("Notes1", "Купити хліб і молока"); // редагування нотатки (за ім`ям)

//andriiList.editNotes2(0, "Купити хліб і молока");  // редагування нотатки (по ключу масиву?)

//andriiList.getInformationNotes("Notes2") //отримання повної інформації про нотатку (за ім`ям)
//andriiList.getInformationNotes2(1) //отримання повної інформації про нотатку (по ключу масиву?)
//andriiList.getlist()  //отримання списку всіх нотаток
//andriiList.changeDoneNotes("Notes1", true); //позначити замітку, як виконану (за ім`ям)
//andriiList.changeDoneNotes2(0, true);  //позначити замітку, як виконану (по ключу масиву?)
//andriiList.howManyNotes(); //скільки всього нотаток у списку і скільки залишилося невиконань
//andriiList.findNotes("Notes1");  // знайти нотатку
//andriiList.sortNotesFalse() // сортувати спочатку не виконані
//andriiList.sortNotesTrue()  // сортувати спочатку виконані
//andriiList.sortNotesDate1() // сортувати спочатку старі нотатки
//andriiList.sortNotesDate2() // сортувати спочатку нові нотатки
//andriiList.findNotesDate("27.06.2024"); //знайти нотатку по даті

console.log(andriiList);

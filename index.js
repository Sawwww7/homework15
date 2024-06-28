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
    const note = this.notes.find((note) => note.name === noteses.name);
    if (note) {
      console.log(`Нотатка з  ім'ям ${noteses.name} вже існує`);
    } else {
      this.notes.push(noteses);
    }
  }

  removeNotes(name) {
    // видалення нотатки
    this.notes.splice(
      0,
      this.notes.length,
      ...this.notes.filter((n) => n.name !== name)
    );
  }

  editNotes(name, newNotes) {
    //редагування нотатки
    this.notes.forEach((n) => {
      if (n.name === name) {
        n.notes = newNotes;
        n.dateEditing = new Date().toLocaleString();
      }
    });
  }

  getInformationNotes(name) {
    //отримання повної інформації про нотатку
    const note = this.notes.find((note) => note.name === name);
    if (note) {
      console.log(note);
    }
  }

  getlist() {
    //отримання списку всіх нотатів
    console.log(this.notes);
  }

  changeDoneNotes(name, done) {
    //позначити нотатку, як виконану
    const note = this.notes.find((note) => note.name === name);
    if (note) {
      note.done = done;
      note.dateEditing = new Date().toLocaleString();
    }
  }

  howManyNotes() {
    //скільки всього нотатів у списку і скільки залишилося невиконань
    const totalNotes = this.notes.length;
    const unfinishedNotes = this.notes.filter((note) => !note.done).length;
    console.log(
      `Всього нотатків: ${totalNotes}, не виконаних нотаток: ${unfinishedNotes}`
    );
  }

  findNotes(name) {
    // знайти нотатку
    const foundNotes = this.notes.filter((note) => note.name.includes(name));
    console.log(foundNotes);
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
    const foundNotesDate = this.notes.filter((note) =>
      note.date.includes(date)
    );
    console.log(foundNotesDate);
  }
}
class Notes {
  constructor(name, notes, done = true) {
    this.name = name;
    this.notes = notes;
    this.done = done;
    this.date = new Date().toLocaleString();
    this.dateEditing;
  }
}

andriiList = new TodoList();
andriiNotes1 = new Notes("Notes1", "Купити хліб", false);
andriiNotes2 = new Notes("Notes2", "Привітати друга з Днем народження", true);
andriiNotes3 = new Notes("Notes3", "Виконати домашку", false);
andriiNotes4 = new Notes("Notes4", "Сходити на зустріч", true);

//console.log(andriiNotes1.name)

andriiList.addNotes(andriiNotes1); //додавання нової нотатки
andriiList.addNotes(andriiNotes2);
andriiList.addNotes(andriiNotes3);
andriiList.addNotes(andriiNotes1);
andriiList.addNotes(andriiNotes4);

//andriiList.removeNotes("Notes1"); // видалення нотатки
//andriiList.editNotes("Notes1", "Купити хліб і молока"); // редагування нотатки
//andriiList.getInformationNotes("Notes1") //отримання повної інформації про нотатку
//andriiList.getlist()  //отримання списку всіх нотаток
//andriiList.changeDoneNotes("Notes1", true); //позначити нотатку, як виконану
//andriiList.howManyNotes(); //скільки всього нотаток у списку і скільки залишилося невиконань
//andriiList.findNotes("Notes1");  // знайти нотатку
//andriiList.sortNotesFalse() // сортувати спочатку не виконані
//andriiList.sortNotesTrue()  // сортувати спочатку виконані
//andriiList.sortNotesDate1() // сортувати спочатку старі нотатки
//andriiList.sortNotesDate2() // сортувати спочатку нові нотатки
//andriiList.findNotesDate("28.06.2024"); //знайти нотатку по даті

console.log(andriiList);

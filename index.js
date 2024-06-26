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
    //додати нотаку
    this.notes.push(noteses);
  }
  removeNotes(key) {
    // видалити нотатку
    this.notes.splice(key, 1);
  }

  editNotes(key, newNotes) {
    //редагувати нотатку
    console.log(this.notes[key].notes);
    this.notes[key].notes = newNotes;

    //this.notes.splice(key, 1, newNotes);
    console.log(this.notes[key].notes);
  }

  changeDoneNotes(key, done) {
    //редагувати нотатку
    console.log(this.notes[key].done);
    this.notes[key].done = done;
    //this.notes.splice(key, 1, newNotes.done);
    console.log(this.notes[key].done);
    this.notes[key].dateEditing = Date.now ()
  }

  howManyNotes() {
    console.log(`Кількість нотатків ${this.notes.length}`);
    //console.log(this.notes);
    let doneNotes = 0;
    this.notes.forEach((note) => {
      if (note.done === true) {
        doneNotes += 1;
      }
    });
    console.log(`Кількість виконаних нотатків ${doneNotes}`);
  }
  findNotes(nameNotes) {
    // знайти нотатку

    if (this.notes.indexOf(nameNotes) < 0) {
      console.log(`you don't have a note with a name `);
    }
    console.log(nameNotes);
  }

  sortNotesFalse(){
    this.notes.sort((a, b) => a.done - b.done)
  }
  sortNotesTrue(){
    this.notes.sort((a, b) => b.done - a.done)
  }

  sortNotesDate1(){
    this.notes.sort((a, b) => a.date - b.date)
  }
  sortNotesDate2(){
    this.notes.sort((a, b) => b.date - a.date)
  }


}
class Notes {
  constructor(notes, done = true, date) {
    //debugger
    this.notes = notes;
    this.done = done;
    this.date=new Date(date)
    this.dateEditing 
  }
}

andriiList = new TodoList();
andriiNotes1 = new Notes("Купити хліб", false, '2024-06-11T19:15:00.000Z' );
andriiNotes2 = new Notes("Привітати друга з Денм народження", false, '2024-06-05T19:15:00.000Z');
andriiNotes3 = new Notes("Виконати домашку", false, '2024-06-21T19:15:00.000Z');
andriiNotes4 = new Notes("Сходити на зустріч", true, '2024-06-04T19:15:00.000Z');
console.log(andriiNotes1);

andriiList.addNotes(andriiNotes1);
andriiList.addNotes(andriiNotes2);
andriiList.addNotes(andriiNotes3);
andriiList.addNotes(andriiNotes1);
andriiList.addNotes(andriiNotes4);
//andriiList.removeNotes(2)    // видалити нотатку по ключу масиву
andriiList.editNotes(1, "Купити хліб і молока");
andriiList.findNotes(andriiNotes1);
andriiList.changeDoneNotes(0, true);
andriiList.howManyNotes();
//andriiList.sortNotesFalse() // сортувати спочатку не виконані
//andriiList.sortNotesTrue()  // сортувати спочатку виконані
andriiList.sortNotesDate1()
//andriiList.sortNotesDate2()

console.log(andriiList.notes[0]);
console.log(andriiList.notes[1]);
console.log(andriiList.notes);



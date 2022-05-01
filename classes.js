class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    const userWrapper = document.querySelector('.wrapper');
    const div = document.createElement('div');
    const nameH3 = document.createElement('h3');
    const surnameH3 = document.createElement('h3');

    userWrapper.className = 'fullName';
    div.className = 'addInfo';
    nameH3.innerText = this.name;
    surnameH3.innerText = this.surname;
    div.append(nameH3, surnameH3);
    userWrapper.append(div);
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const addInfo = document.querySelector('.addInfo');
    const paragraph = document.createElement('p');
    const today = moment().year();
    const course = today - this.year;
    const mapa = new Map([
      [1, 'st'],
      [2, 'nd'],
      [3, 'rd'],
      [4, 'th'],
      [5, 'th'],
    ]);

    if (course <= 5) {
      paragraph.innerHTML = `Student is in ${course}${mapa.get(course)} year.`;
    } else paragraph.innerHTML = `Student? No, this user  not student.`;

    addInfo.append(paragraph);
  }
}

const ivanov = new Student('Ivan', 'Ivanov', 2021);
ivanov.getFullName();
ivanov.getCourse();

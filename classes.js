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

  getFullName() {
    super.getFullName();
  }
  getCourse() {
    const addInfo = document.querySelector('.addInfo');
    const paragraph = document.createElement('p');
    const today = moment().year();
    let suffix = '';

    const course = today - this.year;

    switch (course) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
      case 3:
        suffix = 'rd';
        break;
      case 4:
      case 5:
        suffix = 'th';
      default:
        break;
    }

    if (course <= 5) {
      paragraph.innerHTML = `Student is in ${course}${suffix} year.`;
    } else paragraph.innerHTML = `Student? No, this user  not student.`;

    addInfo.append(paragraph);
  }
}

const ivanov = new Student('Ivan', 'Ivanov', 2017);
ivanov.getFullName();
ivanov.getCourse();

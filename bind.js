const user = {
  firstName: 'user',
  lastName: 'Useroff',
  salary: 5000,
  job: {
    company: 'WebJs',
    position: 'TeamLead',
  },

  getFullName() {
    console.log(`Firstname ${this.firstName}, lastname ${this.lastName}`);
  },

  getFullJob() {
    console.log(`Job -> ${this.job.company}: ${this.job.position}`);
  },

  getBySalary() {
    console.log(`Salary ${this.salary} byr`);
  },
};

user.getFullName();
user.getFullJob();
user.getBySalary();
console.log(`-> `);

const vanya = {
  firstName: 'Ivan',
  lastName: 'Ivanoff',
  salary: 7000,
  job: {
    company: 'ReactJs',
    position: 'Frontend',
  },
};

const baiden = user.getFullName.bind(vanya);

baiden();

const obama = user.getFullJob.bind(vanya);

obama();

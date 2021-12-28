const app = new Vue({
  el: '#app',
  
  data: {
    birthday: undefined,
  },
  
  computed: {
    remainingWeeks() {
      const weeksDone = this.weeksFromBirthday();
      return 4693 - weeksDone; // ~4693 weeks in 90 years
    },
  },

  methods: {
    weeksFromBirthday() {
      if (this.birthday === undefined) {
        return 0;
      }

      const birthday = luxon.DateTime.fromISO(this.birthday.toString());
      const now = luxon.DateTime.now();
      
      const interval = luxon.Interval.fromDateTimes(birthday, now);
      const weeks = interval.length('weeks');

      return Math.floor(weeks);
    },

    getCellClass(index) {
      let result = 'cell';

      if (index <= this.weeksFromBirthday()) {
        result += ' done';
      }

      if (index % 52 === 0) {
        result += ' year';
      }

      return result;
    },
  },
});
const app = new Vue({
  el: '#app',
  
  data: {
    birthday: undefined,
    cssClasses: undefined,
  },

  methods: {
    weeksFromBirthday() {
      if (this.birthday === undefined) { return 0; }

      const birthday  = luxon.DateTime.fromISO(this.birthday.toString());
      const now       = luxon.DateTime.now();
      const weeks     = luxon.Interval.fromDateTimes(birthday, now)
                                      .length('weeks');

      return Math.floor(weeks);
    },

    getAllCssClasses() {
      const totalWeeks = 4693; // 90 years
      const weeksFromBday = this.weeksFromBirthday();
      const cssClasses = [];
      
      for (let i = 1; i <= totalWeeks; i++) {
        let cssClass = 'cell';
        if (i <= weeksFromBday) { cssClass += ' done'; }
        if (i % 52 === 0)       { cssClass += ' year'; }

        cssClasses.push(cssClass);
      }

      return cssClasses;
    },

    onBirthdayChange() {
      // Cache CSS classes
      this.cssClasses = this.getAllCssClasses();

      // Update title
      const birthday  = luxon.DateTime.fromISO(this.birthday.toString())
                                      .toLocaleString(luxon.DateTime.DATE_MED);
      
      document.title = `📅 ${birthday}`;
    },
  },
});
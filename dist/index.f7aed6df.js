const app=new Vue({el:"#app",data:{birthday:void 0,cssClasses:void 0},methods:{weeksFromBirthday(){if(void 0===this.birthday)return 0;const t=luxon.DateTime.fromISO(this.birthday.toString()),e=luxon.DateTime.now(),s=luxon.Interval.fromDateTimes(t,e).length("weeks");return Math.floor(s)},getAllCssClasses(){const t=this.weeksFromBirthday(),e=[];for(let s=1;s<=4693;s++){let o="cell";s<=t&&(o+=" done"),s%52==0&&(o+=" year"),e.push(o)}return e},onBirthdayChange(){this.cssClasses=this.getAllCssClasses();const t=luxon.DateTime.fromISO(this.birthday.toString()).toLocaleString(luxon.DateTime.DATE_MED);document.title=`📅 ${t}`}}});
//# sourceMappingURL=index.f7aed6df.js.map
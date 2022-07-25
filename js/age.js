function age() {
    var d = document.getElementById('date').value;
    var m = document.getElementById('month').value;
    var y = document.getElementById('year').value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m > m2) {
        m2 = m2 - d;
        y2 = y2 - y;
    }
    var thisDay = d2 - d;
    var thisMonth = m2 - m;
    var thisYear = y2 - y;
    document.getElementById('age').innerHTML = 'Age: YEAR (' + thisYear + ') MONTH (' + thisMonth + ') DAY (' + thisDay + ')';
}
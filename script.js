if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(() => console.log("Service Worker registered successfully."))
    .catch((error) =>
      console.error("Service Worker registration failed:", error)
    );
}

function calculateAgeAndTime() {
  let birthDate = new Date(document.getElementById("date").value);
  let today = new Date();

  // Age Calculation
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    let prevMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonthLastDay;
    months--;
  }

  // Next Birthday Calculation
  let nextBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  let monthsToNextBirthday = nextBirthday.getMonth() - today.getMonth();
  let daysToNextBirthday = nextBirthday.getDate() - today.getDate();

  if (daysToNextBirthday < 0) {
    monthsToNextBirthday--;
    let lastDayOfPrevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    daysToNextBirthday += lastDayOfPrevMonth;
  }

  // Day name of the next birthday
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let nextBirthdayDay = nextBirthday.getDay();
  let dayName = dayNames[nextBirthdayDay];

  // Lifetime Calculation
  let totalMonths = years * 12 + months;
  let totalWeeks = Math.floor(totalMonths * 4.34524); // Average number of weeks in a month
  let totalDays = Math.floor(totalMonths * 30.4375); // Average number of days in a month
  let totalHours = totalDays * 24;
  let totalMinutes = totalHours * 60;

  // Update the HTML elements
  document.getElementById("years").innerText = years;
  document.getElementById("yearsNum").innerText = years;
  document.getElementById("monthsDays").innerText =
    months + " months | " + days + " days";
  document.getElementById("dayNam").innerText = dayName;
  document.getElementById("monthsDaysTo").innerText =
    monthsToNextBirthday + " months | " + daysToNextBirthday + " days";
  document.getElementById("monthsNum").innerText = totalMonths;
  document.getElementById("weeksNum").innerText = totalWeeks;
  document.getElementById("days").innerText = totalDays;
  document.getElementById("hours").innerText = totalHours;
  document.getElementById("minutes").innerText = totalMinutes;
}

export const imagesToday = [
  { id: 1, src: require("../assets/pic1.jpg"), cat: "Architecture" },
  { id: 7, src: require("../assets/pic7.jpg"), cat: "Kashmir" },
  { id: 8, src: require("../assets/pic8.jpg"), cat: "Architecture" },
  { id: 11, src: require("../assets/pic11.jpg"), cat: "Architecture" },
  { id: 12, src: require("../assets/pic12.jpg"), cat: "Kashmir" },
  { id: 15, src: require("../assets/pic15.jpg"), cat: "Architecture" },
  { id: 5, src: require("../assets/pic5.jpg"), cat: "Kashmir" },
  { id: 16, src: require("../assets/pic16.jpg"), cat: "Architecture" },
];

export const imagesWeek = [
  { id: 1, src: require("../assets/pic1.jpg"), cat: "Architecture" },
  { id: 2, src: require("../assets/pic2.jpg"), cat: "Seaside" },
  { id: 3, src: require("../assets/pic3.jpg"), cat: "Kashmir" },
  { id: 4, src: require("../assets/pic4.jpg"), cat: "Lake View" },
  { id: 5, src: require("../assets/pic5.jpg"), cat: "Lake View" },
  { id: 6, src: require("../assets/pic6.jpg"), cat: "Kashmir" },
  { id: 7, src: require("../assets/pic7.jpg"), cat: "Seaside" },
  { id: 8, src: require("../assets/pic8.jpg"), cat: "Kashmir" },
  { id: 9, src: require("../assets/pic9.jpg"), cat: "Architecture" },
  { id: 10, src: require("../assets/pic10.jpg"), cat: "Lake View" },
  { id: 11, src: require("../assets/pic11.jpg"), cat: "Architecture" },
  { id: 12, src: require("../assets/pic12.jpg"), cat: "Kashmir" },
  { id: 13, src: require("../assets/pic13.jpg"), cat: "Lake View" },
  { id: 14, src: require("../assets/pic14.jpg"), cat: "Seaside" },
  { id: 15, src: require("../assets/pic15.jpg"), cat: "Seaside" },
  { id: 16, src: require("../assets/pic16.jpg"), cat: "Architecture" },
];

function checkCat(cats) {
  return cats.cat === "Architecture";
}
export const Architecturetodaypics = imagesToday.filter(checkCat);
export const Architectureweekpics = imagesWeek.filter(checkCat);

export const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
const year = d.getFullYear();
const date = d.getDate();
const monthIndex = d.getMonth();
const monthName = months[monthIndex];
const dayName = days[d.getDay()];
const finalDate = `${dayName}, ${date} ${monthName} ${year}`;

const startDate = d.getDate > 7 ? d.getDate() - 6 : 24 + d.getDate();
const endDate = startDate + 6 < 31 ? startDate + 6 : startDate + 6 - 30;
const monthIndex1 = d.getMonth();
const startMonth =
  startDate > 7 ? months[monthIndex1 - 1] : months[monthIndex1];
const endMonth = startDate > 7 ? months[monthIndex1] : months[monthIndex1 + 1];
const week = `${startDate} ${startMonth} to ${endDate} ${endMonth} ${year}`;

const dates= [finalDate, week]
export default dates;

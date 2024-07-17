export function loadHomepage() {
  const content = document.querySelector("#content");

  //Creates homepage div
  const homepage = document.createElement("div");
  homepage.classList.add("homepage");

  //Appends homepage div to content
  content.append(homepage);

  //Creates heading of home page
  const homepageHeading = document.createElement("h1");
  homepageHeading.innerText = `Lav'ly Cafe`;

  //Creates description div
  const description = document.createElement("div");
  description.classList.add("description");

  const descriptionPara = document.createElement("p");
  descriptionPara.textContent = `The owner Lav, welcomes you to his passionate coffee shop. It's rumored that the coffee served here is the best in the entire universe (approved by several alien groups). Give it a try and agree with it.`;

  const descriptionTitle = document.createElement("h4");
  descriptionTitle.textContent = `Lav`;

  description.append(descriptionPara, descriptionTitle);

  //Creates timing div
  const timing = document.createElement("div");
  timing.classList.add("timing");

  const timingTitle = document.createElement("h4");
  timingTitle.innerText = `Hours`;

  const timingList = document.createElement("ul");

  timingList.innerHTML = `<li>Sunday: 8am - 8pm</li> <li>Monday: 6am - 6pm</li> <li>Tuesday: 6am - 6pm</li> <li>Wednesday: 6am - 6pm</li> <li>Thursday: 6am - 10pm</li> <li>Friday: 6am - 10pm</li> <li>Saturday: 8am - 10pm</li>`;

  timing.append(timingTitle, timingList);

  //Creates location div
  const location = document.createElement("div");
  location.classList.add("location");

  const locationTitle = document.createElement("h4");
  locationTitle.innerText = `Location`;

  const locationPara = document.createElement("p");
  locationPara.innerText = `Raftel, New World`;

  location.append(locationTitle, locationPara);

  //Appends all children to homepage div
  homepage.append(homepageHeading , description, timing, location);
}

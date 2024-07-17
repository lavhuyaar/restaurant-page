export function loadContact() {
  //Creates contact div
  const contact = document.createElement("div");
  contact.classList.add("contact");

  //Appends contct div to content
  content.append(contact);

  //Creates heading of contact page
  const contactHeading = document.createElement("h1");
  contactHeading.textContent = `Contact Us`;

  //Creates contacts grid
  const contactList = document.createElement("div");
  contactList.classList.add("contact-grid");

  //Creates first contact info
  const contactOne = document.createElement("div");

  const contactOneTitle = document.createElement("h4");
  contactOneTitle.textContent = `Lav`;

  const contactOnePara = document.createElement("pre");
  contactOnePara.textContent = `Owner
Very good hearted person
7878-7878-7878
lavcutie@coffee.com`;

  contactOne.append(contactOneTitle, contactOnePara);

  //Creates second contact info
  const contactTwo = document.createElement("div");

  const contactTwoTitle = document.createElement("h4");
  contactTwoTitle.textContent = `Buggu`;

  const contactTwoPara = document.createElement("pre");
  contactTwoPara.textContent = `Chef
(not better than Lav)
4545-4545-4545
buggucutie@coffee.com`;

  contactTwo.append(contactTwoTitle, contactTwoPara);

  //Appends contacts to contacts grid
  contactList.append(contactOne, contactTwo);

  //Appends all children to contact div
  contact.append(contactHeading, contactList);
}

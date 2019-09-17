// BACK LOG

	// build function for listing supplements to the MSA
	// add inputs for article two options (names, responsibilities)
	// build function which automatically renumbers articles and clauses based on actual articles selected for inclusion.

// CONTENT OPTIONS 

	// let singleContact = document.getElementById("single-contact-copy");
	// let multipleContacts = document.getElementById("multiple-contacts-copy");
	// let embeddedCollaborator = document.getElementById("embedded-collaborator-copy");

const selectContent = function () {

	// ARTICLE TWO INPUT LAYOUT

		let singleContact = document.getElementById("single-contact-copy");
		let multipleContacts = document.getElementById("multiple-contacts-copy");
		let embeddedCollaborator = document.getElementById("embedded-collaborator-copy");

		let article2p1Selection = document.getElementById("article-2-type").value;
		let contactsInput = document.getElementById("contacts-input");

		if (article2p1Selection === "single-contact") {
			singleContact.classList.remove("hidden");
			multipleContacts.classList.add("hidden");
			contactsInput.classList.add("hidden");
			embeddedCollaborator.classList.add("hidden");
			// console.log(singleContact);
		} else if (article2p1Selection === "multiple-contacts") {
			singleContact.classList.add("hidden");
			multipleContacts.classList.remove("hidden");
			contactsInput.classList.remove("hidden");
			embeddedCollaborator.classList.add("hidden");
			// console.log("multiple contacts");
		} else if (article2p1Selection === "client-collaborators") {
			singleContact.classList.add("hidden");
			multipleContacts.classList.add("hidden");
			contactsInput.classList.add("hidden");
			embeddedCollaborator.classList.remove("hidden");
			// console.log("embedded collaborator");
		} else {
			console.log("error: somehow no article 2.1 was selected");
		}; 
};

	// ARTICLE TWO OUTPUT

		const addContacts = function() {

			// CONTACT ONE
				let contactOneNameIn = document.getElementById("contact-one").value;
				let contactOneResponsibility = document.getElementById("responsibility-one").value;
				let contactOneNameOut = document.getElementById("contact-one-name-out");
				let contactOneResponsibilityOut = document.getElementById("contact-one-responsibility-out");

				contactOneNameOut.innerText = contactOneNameIn;
				contactOneResponsibilityOut.innerText = contactOneResponsibility;

			// CONTACT TWO
				let contactTwoNameIn = document.getElementById("contact-two").value;
				let contactTwoResponsibility = document.getElementById("responsibility-two").value;
				let contactTwoNameOut = document.getElementById("contact-two-name-out");
				let contactTwoResponsibilityOut = document.getElementById("contact-two-responsibility-out");

				contactTwoNameOut.innerText = contactTwoNameIn;
				contactTwoResponsibilityOut.innerText = contactTwoResponsibility;

			// CONTACT THREE
				let contactThreeNameIn = document.getElementById("contact-three").value;
				let contactThreeResponsibility = document.getElementById("responsibility-three").value;
				let contactThreeNameOut = document.getElementById("contact-three-name-out");
				let contactThreeResponsibilityOut = document.getElementById("contact-three-responsibility-out");

				contactThreeNameOut.innerText = contactThreeNameIn;
				contactThreeResponsibilityOut.innerText = contactThreeResponsibility;

			// CONTACT FOUR
				let contactFourNameIn = document.getElementById("contact-four").value;
				let contactFourResponsibility = document.getElementById("responsibility-four").value;
				let contactFourNameOut = document.getElementById("contact-four-name-out");
				let contactFourResponsibilityOut = document.getElementById("contact-four-responsibility-out");

				contactFourNameOut.innerText = contactFourNameIn;
				contactFourResponsibilityOut.innerText = contactFourResponsibility;

			// CONTACT FIVE
				let contactFiveNameIn = document.getElementById("contact-five").value;
				let contactFiveResponsibility = document.getElementById("responsibility-five").value;
				let contactFiveNameOut = document.getElementById("contact-five-name-out");
				let contactFiveResponsibilityOut = document.getElementById("contact-five-responsibility-out");

				contactFiveNameOut.innerText = contactFiveNameIn;
				contactFiveResponsibilityOut.innerText = contactFiveResponsibility;
		}

	// ARTICLE FOUR

		const determineEquity = function() {
			let equity = document.getElementById("equity-checkbox").checked;
			let nonPartnershipCopy = document.getElementById("non-partnership-copy");
			let equityCopy = document.getElementById("equity-copy");
			
			if (equity === true) {
				nonPartnershipCopy.classList.add("hidden");
				equityCopy.classList.remove("hidden");
			} else {
				nonPartnershipCopy.classList.remove("hidden");
				equityCopy.classList.add("hidden");
			}
			// console.log(equity);
		}

	// ARTICLE FIVE 

		const setPrivacy = function() {
			let privacy = document.getElementById("privacy-checkbox").checked;

			let rightToDisplay = document.getElementById("right-to-display-copy");
			let rightToReference = document.getElementById("right-to-reference-copy");
			let rightToUse = document.getElementById("right-to-use-copy");
			let private = document.getElementById("confidential-deliverables-copy");

			if (privacy === true) {
				rightToDisplay.classList.add("hidden");
				rightToReference.classList.add("hidden");
				rightToUse.classList.add("hidden");
				private.classList.remove("hidden");
			} else {
				rightToDisplay.classList.remove("hidden");
				rightToReference.classList.remove("hidden");
				rightToUse.classList.remove("hidden");
				private.classList.add("hidden");
			}

			// console.log(privacy);
		};

const buildMSA = function() {
	
	// INPUT FIELDS
		let provider = document.getElementById("provider").value;
		let providerAddress = document.getElementById("provider-address").value;

		let date = document.getElementById("date").value;
		let client = document.getElementById("client").value;
		let clientAddress = document.getElementById("client-address").value;

	// OUTPUT FIELDS
		let clientOuts = document.querySelectorAll(".client-output");
		let clientAddressOuts = document.querySelectorAll(".client-address-output");
		let providerAddressOuts = document.querySelectorAll(".provider-address-output");
		let dateOuts = document.querySelectorAll(".date-output");
		let providerOuts = document.querySelectorAll(".provider-output");

	// TEMPLATE
		let msaBox = document.getElementById("msa-box");
		let msaHeading = document.getElementById("msa-heading");
		let article1 = document.getElementById("article-1");
		let article2 = document.getElementById("article-2");
		let article3 = document.getElementById("article-3");
		let article4 = document.getElementById("article-4");
		let article5 = document.getElementById("article-5");
		let article6 = document.getElementById("article-6");
		let article7 = document.getElementById("article-7");
		let article8 = document.getElementById("article-8");
		let article9 = document.getElementById("article-9");
		let article10 = document.getElementById("article-10");
		let article11 = document.getElementById("article-11");
		let article12 = document.getElementById("article-12");
		let article13 = document.getElementById("article-13");
		let article14 = document.getElementById("article-14");
		let article15 = document.getElementById("article-15");
		let article16 = document.getElementById("article-16");
		let article17 = document.getElementById("article-17");
		let article18 = document.getElementById("article-18");
		let article19 = document.getElementById("article-19");
		let article20 = document.getElementById("article-20");
		let article21= document.getElementById("article-21");


	for(i=0;i<dateOuts.length;i++) {
		dateOuts[i].innerText = date;
	}

	for(i=0;i<clientOuts.length;i++) {
		clientOuts[i].innerText = client;
	}

	for(i=0;i<providerOuts.length;i++) {
		providerOuts[i].innerText = provider;
	}

	for(i=0;i<clientAddressOuts.length;i++) {
		clientAddressOuts[i].innerText = clientAddress;
	}

	for(i=0;i<providerAddressOuts.length;i++) {
		providerAddressOuts[i].innerText = providerAddress;
	}

	
	msaBox.append(msaHeading);
	msaBox.append(article1);
	addContacts();
	msaBox.append(article2);
	msaBox.append(article3);
	determineEquity();
	msaBox.append(article4);
	setPrivacy();
	msaBox.append(article5);
	msaBox.append(article6);
	msaBox.append(article7);
	msaBox.append(article8);
	msaBox.append(article9);
	msaBox.append(article10);
	msaBox.append(article11);
	msaBox.append(article12);
	msaBox.append(article13);

	console.log("yeah, baby!");
};

// CONTACT LIST FORM ADDITION

	// const collaboratorPlaceholder = function(element) {
	// 	element.placeholder = "Collaborator";
	// };

	const contactList = function() {

		let article2p1Selection = document.getElementById("article-2-type").value;
		let contactNames = document.querySelectorAll(".contact-name-in");
		let contactList = document.getElementById("contact-list");

		console.log(article2p1Selection);

		if (article2p1Selection === "multiple-contacts" || "client-collaborators") {
			contactsInput.classList.remove("hidden");

			contactList.classList.remove("hidden");
			for(i=0; i<contactNames.length; i++) {
				contactNames[i].placeholder = "Contact";
			}
		}; 

		if (article2p1Selection === "client-collaborators") {
			
			contactList.classList.remove("hidden");
			for(i=0; i<contactNames.length; i++) {
				contactNames[i].placeholder = "Collaborator";
			}
		}

		if (article2p1Selection === "single-contact") {
			contactsInput.classList.add("hidden");
			contactList.classList.add("hidden");
		}
	};






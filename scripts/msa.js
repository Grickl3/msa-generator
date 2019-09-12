// BACK LOG

	// build function for listing supplements to the MSA
	// add inputs for article two options (names, responsibilities)
	// build function which automatically renumbers articles and clauses based on actual articles selected for inclusion.

// CONTENT OPTIONS 

	// let singleContact = document.getElementById("single-contact-copy");
	// let multipleContacts = document.getElementById("multiple-contacts-copy");
	// let embeddedCollaborator = document.getElementById("embedded-collaborator-copy");

const selectContent = function () {

	// ARTICLE TWO

		let singleContact = document.getElementById("single-contact-copy");
		let multipleContacts = document.getElementById("multiple-contacts-copy");
		let embeddedCollaborator = document.getElementById("embedded-collaborator-copy");

		let article2p1Selection = document.getElementById("article-2-type").value;

		if (article2p1Selection === "single-contact") {
			singleContact.classList.remove("hidden");
			multipleContacts.classList.add("hidden");
			embeddedCollaborator.classList.add("hidden");
			// console.log(singleContact);
		} else if (article2p1Selection === "multiple-contacts") {
			singleContact.classList.add("hidden");
			multipleContacts.classList.remove("hidden");
			embeddedCollaborator.classList.add("hidden");
			// console.log("multiple contacts");
		} else if (article2p1Selection === "client-collaborators") {
			singleContact.classList.add("hidden");
			multipleContacts.classList.add("hidden");
			embeddedCollaborator.classList.remove("hidden");
			// console.log("embedded collaborator");
		} else {
			console.log("error: somehow no article 2.1 was selected");
		}; 

	
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

	console.log("yeah, baby!");
	msaBox.append(msaHeading);
	msaBox.append(article1);
	msaBox.append(article2);
};
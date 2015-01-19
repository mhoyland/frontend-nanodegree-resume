var bio = {
	"name" : "Mark Hoyland",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "111-222-3333",
		"email" : "mhoylandau@google.com",
		"github" : "mhoyland",
		"twitter" : "@mhoyland",
		"location" : "Wollongong"
	},
	"welcomeMessage" : "Welcome to my resume",
	"skills" : [
		"javascript", "programming", "css", "html"
	],
	"biopic" : "images/fry.jpg"
};

bio.display = function() {
	//Add name
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);

	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName);

	// Add the contacts info.
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	//Add image
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	//Add Welcome Message
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	//Add Skills extra css neded to get list items vertical.
	//The ul id="skills" in helper.js now uses .skills-flex-box instead of .flex-box
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
    }
}



var education = {
	"schools" : [
		{
			"name" : "University of Wollongong",
			"location" : "Wollongong NSW Australia",
			"degree" : "BA",
			"majors" : ["CompSci","github"],
			"dates" : 2003,
			"url" : "http://example.com"
		},
		{
			"name" : "University of Wollongong",
			"location" : "Wollongong NSW Australia",
			"degree" : "Masters",
			"majors" : ["CompSci"],
			"dates" : 2013,
			"url" : "http://example.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://udacity.com"
		}
	]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var joinedMajors = education.schools[school].majors.join(", ");
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", joinedMajors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (onlineCourse in education.onlineCourses) {

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

var work = {
	"jobs": [
		{
			"employer" : "Sutherland Shire Council",
			"title" : "Senior GIS Officer",
			"location" : "Sutherland NSW Australia",
			"dates" : "2005 - current",
			"description" : "Create, analyze, manipulate, print, and edit Geographical data in ESRI GIS. " +
							"<br>Administer ArcSDE and ArcGIS server software. Create and maintain mapping " +
							"websites for staff as needed. <br>Skills in Python, .NET, Flex, SQL Server."
		},
		{
			"employer" : "Wollongong City Council",
			"title" : "GIS Officer",
			"location" : "Wollongong NSW Australia",
			"dates" : "1999 - 2005",
			"description" : "Create, analyze, manipulate, print, and edit Geographical data in ESRI GIS. " +
							"<br>Administer ArcSDE and ArcGIS server software. "
		},
		{
			"employer" : "Department of Conservation and Land Management",
			"title" : "Natural Resources Officer",
			"location" : "Orange NSW Australia",
			"dates" : "1994 - 1999",
			"description" : "Use Geographical Information Systems to create, analyze, manipulate, print, and edit data. " +
							"<br>Produce high quality cartographic products for Natural Resource Management. "
		}
	]
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedWorkEmployer + ' ' + formattedWorkTitle);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

var projects = {
	"projects": [
		{
			"title" : "South Coast Martial Arts Centre Web Site",
			"dates" : "2013",
			"description" : "Static Website built using Wordpress template for the students and Martial Arts enthusiasts at my local dojang.",
			"images" : ["images/scmac_main.jpg", "images/scmac_dojang.jpg"]
		},
		{
			"title" : "Local Environment Plan 2013 Mapping Site",
			"dates" : "2014",
			"description" : "Mapping viewer for residents to check planning information. The site ws built using ESRI ArcGIS Server Flex Api.",
			"images" : ["images/lep.jpg"]
		}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

/*
if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}
*/

bio.display();
education.display();
work.display();
projects.display();


/*
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
*/

//$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
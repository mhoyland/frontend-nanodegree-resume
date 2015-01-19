// $("#main").append("Mark Hoyland");

var email = "mhoyland@udacity.com";
var newEmail = email.replace("udacity", "gmail");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is Mark and I am AWESOME";

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

var name = "Mark Hoyland";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness", "programming", "teaching", "js"];

var bio = {
	"name" : "Mark Hoyland",
	"role" : "Web Developer",
	"contacts" : {
		"email": "mhoylandau@google.com",
		"github" : "mhoyland",
		"twitter" : "mhoyland",
		"location" : "Wollongong"
	},
	"welcomeMessage" : "Welcome to my resume",
	"skills" : skills,
	"picture" : "images/fry.jpg"
};

var work = {};
work.position = "Senior GIS Officer";
work.employer = "Sutherland Shire Council";
work.years = "10";
work.city = "Sutherland";

var education = {};
education["name"] = "Bulli High School";
education["yearsAttended"] = "1984 - 1989";
education["city"] = "Bulli";

var education = {
	"schools" : [
		{
			"name" : "University of Wollongong",
			"location" : "Wollongong",
			"degree" : "BA",
			"majors" : ["CompSci","github"],
			"dates" : 2003,
			"url" : "http://example.com"
		},
		{
			"name" : "University of Wollongong",
			"location" : "Wollongong",
			"degree" : "Masters",
			"majors" : ["CompSci"],
			"dates" : 2013,
			"url" : "http://example.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://udacity.com"
		}
	]
}


$("#main").append(bio.name);
$("#main").append(" " + work["position"]);
$("#main").append(" " + education.name);

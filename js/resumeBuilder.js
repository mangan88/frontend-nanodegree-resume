var bio = {
	"name": "Chris Mangan",
	"role": "Programmer / PC Tech",
	"contacts": {
		"mobile" : "316-631-2402",
		"email" : "chris.mangan@outlook.com",
		"github" : "mangan88",
		"twitter" : "@mangan88",
		"location": "Garden City, KS"
	},
	"welcomeMessage": "Resume Page is here!",
	"skills": [
		"HTML/CSS", "Javascript", "Python", "Datatel/Envision", "End User Support"
	],
	"bioPic": "images/fry.jpg",
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedTitle = HTMLheaderRole.replace("%data%", bio.role);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);



		$("#header").append(formattedName);
		$("#header").append(formattedTitle);
		$("#header").append(formattedWelcome);
		$("#header").append(formattedPic);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation); 

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills){
				formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}

	}
};

var projects = {
	"projects" : [
		{
			"title" : "Orange Udacity Mug Mockup",
			"dates" : "January 2015",
			"description" :"Used HTML, CSS, and the Bootstrap framework to create a mockup from a provided PDF.",
			"images" : ["images/197x148.gif"]
		},
		{
			"title" : "Single Page Resume",
			"dates" : "January 2015",
			"description" :"Part of udacity.com's Javascript coursework, learned how to use javascript to create this very page. Learned about javascript syntax, JSON, JQuery, and many other great scripting tools.",
			"images" : ["images/197x148.gif"]
		}

	],
	"display" : function() {
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if(projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
				} //for loop, images
			} //if images.length > 0
		} //main display for loop 
	} //display function
}; //projects



var work = {
	"jobs" : [
		{
			"employer" : "Garden City Community College",
			"title" : "Programmer / PC Tech",
			"location" : "Garden City, KS",
			"dates" : "2013 - Present",
			"description" : "Managing Student Information Systems, supporting end user hardware and software"
		},
		{
			"employer" : "Cox Communications",
			"title" : "Technical Support",
			"location" : "Wichita, KS",
			"dates" : "2012 - 2013",
			"description" : "Supporting cable television, internet, and phone. Provided troubleshooting and solutions over the phone"
		},
		{
			"employer" : "Best Buy",
			"title" : "Geek Squad",
			"location" : "Wichita, KS",
			"dates" : "2012",
			"description" : "PC Technical Support and sales, malware removal"
		},
		{
			"employer" : "Palace Computers",
			"title" : "PC Tech Support",
			"location" : "Garden City, KS",
			"dates" : "2005 - 2008",
			"description" : "Supported all hardware and software, malware removal"
		}
	],
	"display" : function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);	
		}	
	}		
};

var education = {
	"schools" : [
		{
			"name" : "Garden City Community College",
			"location" : "Garden City, KS",
			"degree" : "Associates of Science",
			"majors" : ["Music (2003-2005), Theatre (2005-2007), Computer Science (2012-2013)"],
			"dates" : ["2003-2007", "2012-2013"],
			"url" : "http://www.gcccks.edu"
		}
/*		{
			"name" : "Wichita State University",
			"location" : "Wichita KS",
			"degree" : "",
			"majors" : ["Computer Science"],
			"dates" : "2007-2012",
			"url" : "http://www.wichita.edu"
		}*/
	],
	"onlineCourses" : [
		{
			"title" : "Nanodegree in Front-End Development",
			"school" : "Udacity",
			"dates" : "2014 - 2015",
			"url" : "https://www.udacity.com/nanodegrees"
		}
	],
	"display" : function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			if (education.schools[school].degree.length > 0) {
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			}
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedSchoolNameDegree);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			for (major in education.schools[school].majors) {
				var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedSchoolMajors);
			}
		}
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedOnlineTitleSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

/*var formattedContacts = HTMLcontactGeneric.replace("%data%", )
HTMLmobile
HTMLemail
HTMLtwitter
HTMLgithub
HTMLblog
HTMLlocation */


bio.display();
work.display();
education.display();
projects.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
	for (job in work_obj.jobs) {
		var myLocation = work_obj.jobs.location.push();
	}
}



function inName (name) {
	// body...
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	name[1] = name[1].toUpperCase();
	
	return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
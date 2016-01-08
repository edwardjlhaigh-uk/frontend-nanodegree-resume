$("#main").append(["Edward Haigh"]);

var formattedName = HTMLheaderName.replace("%data%", "Edward Haigh");
$("#header").append([formattedName]);

var formattedRole = HTMLheaderRole.replace("%role%", "Web Developer");
$("#header").prepend([formattedRole]);

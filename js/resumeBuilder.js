$("#main").append(["Edward Haigh"]);

var formattedName = HTMLheaderName.replace("%data%", "Edward Haigh");
$("#header").prepend([formattedName]);

var formattedRole = HTMLheaderRole.replace("%role%", "Web Developer");
$("#header").append([formattedRole]);

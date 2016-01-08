var formattedName = HTMLheaderName.replace("%data%", "Edward Haigh");
$("#header").append([formattedName]);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append([formattedRole]);

var bio = {
  name : "Edward Haigh",
  role : "Web Developer",
  contact info : "07341 662673",
  picture url : "#",
  welcome message : "Greetings!",
  skills : "Javascript, jQuery, HTML5, CSS3",
}

$("#main").append([bio]);

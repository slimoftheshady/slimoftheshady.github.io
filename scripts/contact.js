
var github = document.getElementsByClassName("github");
for(var i = 0; i < github.length; i++) {
    var github_image = github[i];
    github_image.onclick = function(event) {
         window.location.href = 'https://github.com';
    };
}

var gmail = document.getElementsByClassName("gmail");
for(var i = 0; i < gmail.length; i++) {
    var gmail_image = gmail[i];
    gmail_image.onclick = function(event) {
         window.location.href = 'https://www.gmail.com';
    };
}

var link = document.getElementsByClassName("link");
for(var i = 0; i < link.length; i++) {
    var link_image = link[i];
    link_image.onclick = function(event) {
         window.location.href = 'https://www.linkedin.com';
    };
}

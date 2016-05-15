var projects = [];

function Project (opts) {
  this.author = opts.author;
  this.projectURL = opts.projectURL;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function() {
  var templateScript = $('#project-template').html();
  var finalTemplate = Handlebars.compile(templateScript);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? this.daysAgo + ' days ago' : '(draft)';

  return finalTemplate(this);
  console.log(finalTemplate);

  /*
  var $newProject = $('article.template').clone();
  if (!this.publishedOn) {
    $newProject.addClass('draft');
  }
  $newProject.attr('data-category', this.category);
  $newProject.attr('data-author', this.author);
  $newProject.find('.byline a').html(this.author);
  $newProject.find('header a').attr('href', this.projectURL);
  $newProject.find('h1:first').html(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn)
  $newProject.find('time[pubdate]').attr('title', this.publishedOn)
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')
  $newProject.append('<hr>');
  $newProject.removeClass('template');
  return $newProject;
  */
}

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});

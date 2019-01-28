(function($) {
  "use strict";
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';
  console.log(lang);

  axios.get('../assets/' + lang + '/data/projects.json')
    .then((response) => {
      Object.keys(response['data']).forEach(function(key) {
        let data = response['data'][key];
        $('#list').append('<li><div class="container">' +
          '<h4>' + data['name'] + '</h4>' +
          '<p class="text-justify">' + data['short_description'] + '</p>' +
          '<a class="btn btn-warning" href="' +
          // window.location.href.replace("projects", "project") + '?project_id=' + key +
          window.location.href.replace("projects", "project") + '/' + key +
          '">Страница проекта</a></div></li><hr>');
    } );
    })
    .catch(function (error) {
      console.log(error);
      // window.location.href = window.location.href.replace('projects', '404');
    });

})(jQuery);

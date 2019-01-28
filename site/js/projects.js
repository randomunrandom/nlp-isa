(function($) {
  "use strict";
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';
  console.log(lang);

  axios.get('../assets/' + lang + '/data/projects.json')
    .then((response) => {
      Object.keys(response['data']).forEach(function(key) {
        let data = response['data'][key];
        $('#list').append('<li><div class="container">' +
          '<h2 style="display: inline;">Название: </h2><h4 style="display: inline;">' + data['name'] + '</h4><br>' +
          '<h3 style="display: inline;">' + data['short_description'] + '</h3><br>' +
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

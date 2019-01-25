(function($) {
  "use strict";

  axios.get('../assets/data/projects.json')
    .then(function (response) {
      let lang = window.location.href.indexOf('en') >= 0 ? 'en' : 'ru';
      let data;
      Object.keys(response['data']['data_' + lang]).forEach(function(key) {
        data = response['data']['data_'+lang][key];
        $('#list').append('<li><div class="container">' +
          '<h2 style="display: inline;">Навзание: </h2><h4 style="display: inline;">' + data['name'] + '</h4><br>' +
          '<h3 style="display: inline;">' + data['short_description'] + '</h3><br>' +
          '<a class="btn btn-warning" href="' +
          window.location.href.replace("projects", "project") + '?project_id=' + key +
          '">Страница проекта</a></div></li>');
    } );
    })
    .catch(function (error) {
      window.location.href = window.location.href.replace('projects', '404');
    });

})(jQuery);

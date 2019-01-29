(function($) {
  "use strict";
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';
  console.log(lang);

  axios.get('../assets/' + lang + '/data/projects.json')
    .then((response) => {
      let options = {
        valueNames: [ 'name', 'short_description', {name: 'link', attr:'href'}],
        page: 20,
        pagination: {
          innerWindow: 2,
          outerWindow: 1,
          // paginationClass: 'paginat',
          // item: '<li class="page-item"><a class="page-link" href="#"></a></li>'
        },
        item: '<li><h4 class="name"></h4><p class="short_description text-left"></p><a class="link btn btn-warning" href="">Страница проекта</a><hr></li>>'
      };
      let values = [];
      // let len = Object.keys(response['data']).length;
      Object.keys(response['data']).forEach(function(key) {
        let data = response['data'][key];
        let link = window.location.href.replace("/projects", "/project") + '/' + key;
        data['link'] = link;
        // console.log(link);
        values.push(data);
      });
      let list = new List('projects_list', options, values);
      let style_pagination = function() {
        $('ul.pagination li').addClass('page-item');
        $('ul.pagination li a').addClass('page-link text-dark');
        $('ul.pagination li.active a').addClass('bg-warning border');
      };
      style_pagination();
      $('ul.pagination').click(() => {
        style_pagination();
      });
    })
    .catch(function (error) {
      console.log(error);
      // window.location.href = window.location.href.replace('projects', '404');
    });



})(jQuery);

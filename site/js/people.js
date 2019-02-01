(function($) {
  "use strict";
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';

  axios.get('../assets/' + lang + '/data/people.json')
    .then((response) => {
      let options = {
        valueNames: [{name:'photo' , attr: 'src'}, 'name', 'short_description', {name: 'link', attr:'href'}],
        page: 20,
        pagination: {
          innerWindow: 2,
          outerWindow: 1,
        },
        item: '<li><div class="container row"><div class="col-md-2"><img class="photo" src="" alt="Фото" height="100%" width="100%"></div>'
          + '<div class="col-md-10"><h4 class="name"></h4><p class="short_description text-left"></p>'
          + '<a class="link btn btn-warning" href="">Страница человека</a></div></div><hr></li>'
      };
      let values = [];
      Object.keys(response['data']).forEach(function(key) {
        let data = response['data'][key];
        data['link'] = window.location.href.replace("/people", "/person/") + key;
        values.push(data);
      });
      let list = new List('people_list', options, values);
      list.sort('year', { order: "desc" });
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

(function($) {

})(jQuery);

let short_desc_editor = new Quill('#input_short_desc', {
  theme: 'snow'
});
let desc_editor = new Quill('#input_desc', {
  theme: 'snow'
});
let datasets_editor = new Quill('#input_datasets', {
  theme: 'snow'
});
let demos_editor = new Quill('#input_demos', {
  theme: 'snow'
});
let publications_editor = new Quill('#input_publications', {
  theme: 'snow'
});

function on_submit() {
  console.log('submited.');
  let input_id = document.forms['form_input']['input_id'].value;
  let input_name = document.forms['form_input']['input_name'].value;
  let input_year = document.forms['form_input']['input_year'].value;
  let input_short_desc = short_desc_editor.root.innerHTML;
  if(input_short_desc === '<p><br></p>') {input_short_desc='';}
  let input_desc = desc_editor.root.innerHTML;
  if(input_desc === '<p><br></p>') {input_desc='';}
  let input_datasets = datasets_editor.root.innerHTML;
  if(input_datasets === '<p><br></p>') {input_datasets='';}
  let input_demos = demos_editor.root.innerHTML;
  if(input_demos === '<p><br></p>') {input_demos='';}
  let input_publications = publications_editor.root.innerHTML;
  if(input_publications === '<p><br></p>') {input_publications='';}
  let out = {};
  out[input_id] = {
    "name": input_name,
    "year": input_year,
    "short_description": input_short_desc,
    "description": input_desc,
    "datasets": input_datasets,
    "demos": input_demos,
    "publications": input_publications
  };
  console.log(JSON.stringify(out));
  let div_out = document.getElementById("div_display");
  div_out.innerHTML = '<xmp>' + JSON.stringify(out, null, 2) + '</xmp>';

  $('#id h3').append(input_id);
  let data;
  let params = ['name', 'short_description', 'description', 'demos', 'datasets', 'publications'];
  let to_append = ['year'];
  params.forEach((key) => {
    data = out[input_id][key];
    // console.log(data);
    if (data.length > 0) {
      if(key === 'name') {
        $('#' + key + ' h3').html(data);
      }
      else {
        $('#' + key + ' p').html(data);
      }
    }
    else {
      $('#' + key).hide();
    }
  });
  to_append.forEach((key) => {
    data = out[input_id][key];
    if (data.length > 0) {
      $('#' + key + ' p').append(data);
    }
    else {
      $('#' + key).hide();
    }
  });
  return false;
}

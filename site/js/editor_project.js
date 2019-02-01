(function($) {
  let short_desc_editor = new Quill('#div_short_desc', {
    theme: 'snow'
  });

  // let form = document.querySelector('form');
  // form.onsubmit = function() {
  //   console.log("submited!");
    // let short_desc = document.querySelector('#inpup_short_desc');
    // let short_desc = JSON.stringify(short_desc_editor.root.innerHTML);
  //   console.log("Submitted", $(form).serialize(), $(form).serializeArray());
  //
  //   let output = document.getElementById("output");
  //   output.innerHTML =  id + '{\n\tshort_description:' + short_desc;
  // };

})(jQuery);
function parse() {
  console.log('submited.');
  let id = document.forms['input_form']['input_ip'].value;
  let name = document.forms['input_form']['input_name'].value;
  console.log(id + name);
  // let  = document.forms["form"][""].value;
  // alert(a+b)
  let out = document.getElementById('output');
  out.innerHTML='AAA';// + id + name;
  return false;
}

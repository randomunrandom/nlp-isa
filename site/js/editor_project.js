(function($) {
  // let short_desc_editor = new Jodit('#input_short_desc', {
  //   useAceEditor: false
    // buttons:[
    //   'undo',
    //   'redo',
    //   '|',
    //   'bold',
    //   'strikethrough',
    //   'underline',
    //   'italic',
    //   '|',
    //   'superscript',
    //   'subscript',
    //   '|',
    //   'ul',
    //   'ol',
    //   '|',
    //   'align',
    //   '|',
    //   'outdent',
    //   'indent',
    //   '|',
    //   'paragraph',
    //   '|',
    //   'image',
    //   'table',
    //   'link',
    //   '\n',
    //   'cut',
    //   'hr',
    //   'eraser',
    //   'copyformat',
    //   '|',
    //   'symbol',
    //   'fullsize',
      // 'selectall',
      // '|',
      // 'source',
      // '|',
      // 'about',
    // ],
    // i18n: {
    //   ru: {
    //     'Type something': 'Начните что-либо вводить'
    //   }
    // }

  // });


  var short_desc_editor = new Quill('#input_short_desc', {
    theme: 'snow'
  });


  let form = document.querySelector('form');
  form.onsubmit = function() {
    let short_desc = document.querySelector('input[name=short_desc]');
    short_desc.value = JSON.stringify(short_desc_editor.root.innerHTML);
    console.log("Submitted", $(form).serialize(), $(form).serializeArray());

  };
})(jQuery);

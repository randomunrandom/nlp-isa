let submit = () => {
  console.log(short_desc_editor.getEditorText());

};

(function($) {
  let short_desc_editor = new Jodit('#input_short_desc', {
    // useAceEditor: false
    buttons:[
      'undo',
      'redo',
      '|',
      'bold',
      'strikethrough',
      'underline',
      'italic',
      '|',
      'superscript',
      'subscript',
      '|',
      'ul',
      'ol',
      '|',
      'align',
      '|',
      'outdent',
      'indent',
      '|',
      'paragraph',
      '|',
      'image',
      'table',
      'link',
      '\n',
      'cut',
      'hr',
      'eraser',
      'copyformat',
      '|',
      'symbol',
      // 'fullsize',
      'selectall',
      '|',
      'source',
      '|',
      'about',
    ],
    i18n: {
      ru: {
        'Type something': 'Начните что-либо вводить'
      }
    }

  });

})(jQuery);

$(function () {
  var $results = $('.results'),
    demo = {
      dictionary: ['meow', 'cat', 'javascript', 'java'],
      render: function (results) {
        return results.map(function (result) {
          return '<li>' + result + '</li>';
        });
      },
      find: function (query) {
        var results = fuzzearch.search(this.dictionary, query);

        $results.html(this.render(results));
      },
      handlekeyup: function (evt) {
        this.find(evt.target.value);
      }
    };

  demo.find('');
  $('.search-box').on('keyup', demo.handlekeyup.bind(demo));
});

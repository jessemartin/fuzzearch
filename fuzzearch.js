var fuzzearch = {
  results: {},
  search: function (list, query) {
    if (this.results[query]) {
      return this.results[query];
    }
    return this.results[query] = list.filter(function (item) {
      return this.fuzzy(item, query);
    }, this);
  },
  fuzzy: function (item, query) {
    var offset = item.length - query.length,
      _contains = function (i, q) {
        var letter = query[q];
        if (!letter) {
          return true;
        }
        for (var max = offset + q; i <= max; i++) {
          if (item[i] === letter) {
            return _contains(++i, ++q);
          }
        }
        return false;
      };

    return _contains(0, 0);
  }
};

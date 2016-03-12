'use strict';

var sortMe = document.getElementById('sortMe');
var destroyerButton = document.getElementById('destroy');

var table = sorta(sortMe);

destroyerButton.addEventListener('click', table.destroy);

function sorta(table) {
  var tableChildren = [].slice.call(table.children);
  var thead = tableChildren[0];
  var tbody = tableChildren[1];
  var arrowsPath = 'M16 17q0 0.406-0.297 0.703l-7 7q-0.297 0.297-0.703 0.297t-0.703-0.297l-7-7q-0.297-0.297-0.297-0.703t0.297-0.703 0.703-0.297h14q0.406 0 0.703 0.297t0.297 0.703zM16 11q0 0.406-0.297 0.703t-0.703 0.297h-14q-0.406 0-0.703-0.297t-0.297-0.703 0.297-0.703l7-7q0.297-0.297 0.703-0.297t0.703 0.297l7 7q0.297 0.297 0.297 0.703z';
  var arrowUp = 'M16 11q0 0.406-0.297 0.703t-0.703 0.297h-14q-0.406 0-0.703-0.297t-0.297-0.703 0.297-0.703l7-7q0.297-0.297 0.703-0.297t0.703 0.297l7 7q0.297 0.297 0.297 0.703z';
  var arrowDown = 'M16 17q0 0.406-0.297 0.703l-7 7q-0.297 0.297-0.703 0.297t-0.703-0.297l-7-7q-0.297-0.297-0.297-0.703t0.297-0.703 0.703-0.297h14q0.406 0 0.703 0.297t0.297 0.703z';

  var headers = [].slice.call(thead.querySelectorAll('th')).map(function (th) {
    return {
      el: th,
      key: th.getAttribute('data-sortKey'),
      order: 'asc'
    };
  }).filter(function (_ref) {
    var key = _ref.key;
    return !!key;
  });

  var rows = [].slice.call(tbody.querySelectorAll('tr')).map(function (tr) {
    return { el: tr };
  });

  headers.forEach(function (header) {
    var el = header.el;

    el.addEventListener('click', sortRows);
    header.arrows = el.appendChild(createArrows());
  });

  function sortRows(_ref2) {
    var target = _ref2.target;

    var sortKey = target.getAttribute('data-sortKey');
    var header = headers.filter(function (th) {
      var key = th.key;

      var matchesKey = key === sortKey;

      if (matchesKey) {
        return matchesKey;
      } else {
        th.order = 'asc';
        th.arrows.children.item(0).setAttribute('d', arrowsPath);
        return matchesKey;
      }
    })[0];

    var order = header.order;

    rows.sort(function (row1, row2) {
      var value1 = getData(row1, sortKey);
      var value2 = getData(row2, sortKey);

      if (Number.isNaN(Number(value1))) {
        return value1.localeCompare(value2);
      } else {
        return Number(value1) - Number(value2);
      }
    });

    if (order === 'desc') {
      rows.reverse();
      header.arrows.children.item(0).setAttribute('d', arrowDown);
    } else {
      header.arrows.children.item(0).setAttribute('d', arrowUp);
    }

    header.order = order === 'desc' ? 'asc' : 'desc';

    rows.forEach(function (_ref3) {
      var el = _ref3.el;

      tbody.appendChild(el);
    });
  }

  function getData(row, key) {
    var value = row[key];
    var el = row.el;

    if (!value) {
      [].slice.call(el.children).forEach(function (child) {
        var data = child.getAttribute('data-' + key);

        if (!!data) {
          row[key] = data;
          value = data;
        }
      });
    }

    return value;
  }

  function createArrows() {
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, 'svg');
    var path = document.createElementNS(svgNS, 'path');

    svg.setAttribute('viewBox', '0 0 16 28');
    svg.setAttribute('width', '10');
    svg.setAttribute('height', '16');
    path.setAttribute('d', arrowsPath);

    svg.appendChild(path);
    return svg;
  }

  return {
    destroy: function destroy() {
      headers.forEach(function (_ref4) {
        var el = _ref4.el;
        var arrows = _ref4.arrows;

        el.removeEventListener('click', sortRows);
        el.removeChild(arrows);
      });
    }
  };
}
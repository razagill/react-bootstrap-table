'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _SelectRowHeaderColumn = require('./SelectRowHeaderColumn');

var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

var TableHeader = (function (_Component) {
  _inherits(TableHeader, _Component);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    _get(Object.getPrototypeOf(TableHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TableHeader, [{
    key: 'render',
    value: function render() {
      var containerClasses = (0, _classnames2['default'])('react-bs-container-header', 'table-header-wrapper');
      var tableClasses = (0, _classnames2['default'])('table', 'table-hover', {
        'table-bordered': this.props.bordered,
        'table-condensed': this.props.condensed
      }, this.props.tableFooterClass);
      var selectRowHeaderCol = null;
      if (!this.props.hideSelectColumn) selectRowHeaderCol = this.renderSelectRowHeader();
      var i = 0;
      return _react2['default'].createElement(
        'div',
        { ref: 'container', className: containerClasses, style: this.props.style },
        _react2['default'].createElement(
          'table',
          { className: tableClasses },
          _react2['default'].createElement(
            'tfoot',
            null,
            _react2['default'].createElement(
              'tr',
              { ref: 'footer' },
              selectRowHeaderCol,
              this.props.children.map(function (child) {
                return _react2['default'].createElement(
                  'td',
                  { key: 'tf_' + i++ },
                  child.props.footerText || child.props.children
                );
              })
            )
          )
        )
      );
    }
  }, {
    key: 'renderSelectRowHeader',
    value: function renderSelectRowHeader() {
      if (this.props.rowSelectType === _Const2['default'].ROW_SELECT_SINGLE) {
        return _react2['default'].createElement(_SelectRowHeaderColumn2['default'], null);
      } else {
        return null;
      }
    }
  }]);

  return TableHeader;
})(_react.Component);

TableHeader.propTypes = {
  tableHeaderClass: _react.PropTypes.string,
  style: _react.PropTypes.object,
  hideSelectColumn: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  isFiltered: _react.PropTypes.bool,
  sortIndicator: _react.PropTypes.bool
};

exports['default'] = TableHeader;
module.exports = exports['default'];
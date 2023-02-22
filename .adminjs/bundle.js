(function (React, adminjs, designSystem) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var Edit = function Edit(_ref) {
    var property = _ref.property,
      record = _ref.record,
      onChange = _ref.onChange;
    var params = record.params;
    var _ref2 = property,
      custom = _ref2.custom;
    var path = adminjs.flat.get(params, custom.filePathProperty);
    var key = adminjs.flat.get(params, custom.keyProperty);
    var file = adminjs.flat.get(params, custom.fileProperty);
    var _useState = React.useState(key),
      _useState2 = _slicedToArray(_useState, 2),
      originalKey = _useState2[0],
      setOriginalKey = _useState2[1];
    var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filesToUpload = _useState4[0],
      setFilesToUpload = _useState4[1];
    React.useEffect(function () {
      // it means means that someone hit save and new file has been uploaded
      // in this case fliesToUpload should be cleared.
      // This happens when user turns off redirect after new/edit
      if (typeof key === 'string' && key !== originalKey || typeof key !== 'string' && !originalKey || typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length) {
        setOriginalKey(key);
        setFilesToUpload([]);
      }
    }, [key, originalKey]);
    var onUpload = function onUpload(files) {
      setFilesToUpload(files);
      onChange(custom.fileProperty, files);
    };
    var handleRemove = function handleRemove() {
      onChange(custom.fileProperty, null);
    };
    var handleMultiRemove = function handleMultiRemove(singleKey) {
      var index = (adminjs.flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
      var filesToDelete = adminjs.flat.get(record.params, custom.filesToDeleteProperty) || [];
      if (path && path.length > 0) {
        var newPath = path.map(function (currentPath, i) {
          return i !== index ? currentPath : null;
        });
        var newParams = adminjs.flat.set(record.params, custom.filesToDeleteProperty, [].concat(_toConsumableArray(filesToDelete), [index]));
        newParams = adminjs.flat.set(newParams, custom.filePathProperty, newPath);
        onChange(_objectSpread2(_objectSpread2({}, record), {}, {
          params: newParams
        }));
      } else {
        // eslint-disable-next-line no-console
        console.log('You cannot remove file when there are no uploaded files yet');
      }
    };
    return /*#__PURE__*/React__default["default"].createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default["default"].createElement(designSystem.DropZone, {
      onChange: onUpload,
      multiple: custom.multiple,
      validate: {
        mimeTypes: custom.mimeTypes,
        maxSize: custom.maxSize
      },
      files: filesToUpload
    }), !custom.multiple && key && path && !filesToUpload.length && file !== null && /*#__PURE__*/React__default["default"].createElement(designSystem.DropZoneItem, {
      filename: key,
      src: path,
      onRemove: handleRemove
    }), custom.multiple && key && key.length && path ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, key.map(function (singleKey, index) {
      // when we remove items we set only path index to nulls.
      // key is still there. This is because
      // we have to maintain all the indexes. So here we simply filter out elements which
      // were removed and display only what was left
      var currentPath = path[index];
      return currentPath ? /*#__PURE__*/React__default["default"].createElement(designSystem.DropZoneItem, {
        key: singleKey,
        filename: singleKey,
        src: path[index],
        onRemove: function onRemove() {
          return handleMultiRemove(singleKey);
        }
      }) : '';
    })) : '');
  };

  var AudioMimeTypes = ['audio/aac', 'audio/midi', 'audio/x-midi', 'audio/mpeg', 'audio/ogg', 'application/ogg', 'audio/opus', 'audio/wav', 'audio/webm', 'audio/3gpp2'];
  var ImageMimeTypes = ['image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/vnd.microsoft.icon', 'image/tiff', 'image/webp'];

  // eslint-disable-next-line import/no-extraneous-dependencies
  var SingleFile = function SingleFile(props) {
    var name = props.name,
      path = props.path,
      mimeType = props.mimeType,
      width = props.width;
    if (path && path.length) {
      if (mimeType && ImageMimeTypes.includes(mimeType)) {
        return /*#__PURE__*/React__default["default"].createElement("img", {
          src: path,
          style: {
            maxHeight: width,
            maxWidth: width
          },
          alt: name
        });
      }
      if (mimeType && AudioMimeTypes.includes(mimeType)) {
        return /*#__PURE__*/React__default["default"].createElement("audio", {
          controls: true,
          src: path
        }, "Your browser does not support the", /*#__PURE__*/React__default["default"].createElement("code", null, "audio"), /*#__PURE__*/React__default["default"].createElement("track", {
          kind: "captions"
        }));
      }
    }
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, /*#__PURE__*/React__default["default"].createElement(designSystem.Button, {
      as: "a",
      href: path,
      ml: "default",
      size: "sm",
      rounded: true,
      target: "_blank"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Icon, {
      icon: "DocumentDownload",
      color: "white",
      mr: "default"
    }), name));
  };
  var File = function File(_ref) {
    var width = _ref.width,
      record = _ref.record,
      property = _ref.property;
    var _ref2 = property,
      custom = _ref2.custom;
    var path = adminjs.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.filePathProperty);
    if (!path) {
      return null;
    }
    var name = adminjs.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
    var mimeType = custom.mimeTypeProperty && adminjs.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.mimeTypeProperty);
    if (!property.custom.multiple) {
      if (custom.opts && custom.opts.baseUrl) {
        path = "".concat(custom.opts.baseUrl, "/").concat(name);
      }
      return /*#__PURE__*/React__default["default"].createElement(SingleFile, {
        path: path,
        name: name,
        width: width,
        mimeType: mimeType
      });
    }
    if (custom.opts && custom.opts.baseUrl) {
      var baseUrl = custom.opts.baseUrl || '';
      path = path.map(function (singlePath, index) {
        return "".concat(baseUrl, "/").concat(name[index]);
      });
    }
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, path.map(function (singlePath, index) {
      return /*#__PURE__*/React__default["default"].createElement(SingleFile, {
        key: singlePath,
        path: singlePath,
        name: name[index],
        width: width,
        mimeType: mimeType[index]
      });
    }));
  };

  var List = function List(props) {
    return /*#__PURE__*/React__default["default"].createElement(File, _extends({
      width: 100
    }, props));
  };

  var Show = function Show(props) {
    var property = props.property;
    return /*#__PURE__*/React__default["default"].createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default["default"].createElement(File, _extends({
      width: "100%"
    }, props)));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Component0 = Edit;
  AdminJS.UserComponents.Component1 = List;
  AdminJS.UserComponents.Component2 = Show;
  AdminJS.UserComponents.Component3 = Edit;
  AdminJS.UserComponents.Component4 = List;
  AdminJS.UserComponents.Component5 = Show;
  AdminJS.UserComponents.Component6 = Edit;
  AdminJS.UserComponents.Component7 = List;
  AdminJS.UserComponents.Component8 = Show;
  AdminJS.UserComponents.Component9 = Edit;
  AdminJS.UserComponents.Component10 = List;
  AdminJS.UserComponents.Component11 = Show;

})(React, AdminJS, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2VkaXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9maWxlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdC50c3giLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cudHN4IiwiLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIGZsYXQgfSBmcm9tICdhZG1pbmpzJ1xuaW1wb3J0IHsgRHJvcFpvbmUsIEZvcm1Hcm91cCwgTGFiZWwsIERyb3Bab25lSXRlbSB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgUHJvcGVydHlDdXN0b20gZnJvbSAnLi4vdHlwZXMvcHJvcGVydHktY3VzdG9tLnR5cGUnXG5cbmNvbnN0IEVkaXQ6IEZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgeyBwYXJhbXMgfSA9IHJlY29yZFxuICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHkgYXMgdW5rbm93biBhcyB7IGN1c3RvbTogUHJvcGVydHlDdXN0b20gfVxuXG4gIGNvbnN0IHBhdGggPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KVxuICBjb25zdCBrZXkgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSlcbiAgY29uc3QgZmlsZSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQcm9wZXJ0eSlcblxuICBjb25zdCBbb3JpZ2luYWxLZXksIHNldE9yaWdpbmFsS2V5XSA9IHVzZVN0YXRlKGtleSlcbiAgY29uc3QgW2ZpbGVzVG9VcGxvYWQsIHNldEZpbGVzVG9VcGxvYWRdID0gdXNlU3RhdGU8QXJyYXk8RmlsZT4+KFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaXQgbWVhbnMgbWVhbnMgdGhhdCBzb21lb25lIGhpdCBzYXZlIGFuZCBuZXcgZmlsZSBoYXMgYmVlbiB1cGxvYWRlZFxuICAgIC8vIGluIHRoaXMgY2FzZSBmbGllc1RvVXBsb2FkIHNob3VsZCBiZSBjbGVhcmVkLlxuICAgIC8vIFRoaXMgaGFwcGVucyB3aGVuIHVzZXIgdHVybnMgb2ZmIHJlZGlyZWN0IGFmdGVyIG5ldy9lZGl0XG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSAhPT0gb3JpZ2luYWxLZXkpXG4gICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgIW9yaWdpbmFsS2V5KVxuICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmIEFycmF5LmlzQXJyYXkoa2V5KSAmJiBrZXkubGVuZ3RoICE9PSBvcmlnaW5hbEtleS5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBzZXRPcmlnaW5hbEtleShrZXkpXG4gICAgICBzZXRGaWxlc1RvVXBsb2FkKFtdKVxuICAgIH1cbiAgfSwgW2tleSwgb3JpZ2luYWxLZXldKVxuXG4gIGNvbnN0IG9uVXBsb2FkID0gKGZpbGVzOiBBcnJheTxGaWxlPik6IHZvaWQgPT4ge1xuICAgIHNldEZpbGVzVG9VcGxvYWQoZmlsZXMpXG4gICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgZmlsZXMpXG4gIH1cblxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgbnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU11bHRpUmVtb3ZlID0gKHNpbmdsZUtleSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gKGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSkgfHwgW10pLmluZGV4T2Yoc2luZ2xlS2V5KVxuICAgIGNvbnN0IGZpbGVzVG9EZWxldGUgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXVxuICAgIGlmIChcbiAgICAgIHBhdGggJiYgcGF0aC5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5tYXAoKGN1cnJlbnRQYXRoLCBpKSA9PiAoaSAhPT0gaW5kZXggPyBjdXJyZW50UGF0aCA6IG51bGwpKVxuICAgICAgbGV0IG5ld1BhcmFtcyA9IGZsYXQuc2V0KFxuICAgICAgICByZWNvcmQucGFyYW1zLFxuICAgICAgICBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5LFxuICAgICAgICBbLi4uZmlsZXNUb0RlbGV0ZSwgaW5kZXhdLFxuICAgICAgKVxuICAgICAgbmV3UGFyYW1zID0gZmxhdC5zZXQobmV3UGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSwgbmV3UGF0aClcblxuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgIHBhcmFtczogbmV3UGFyYW1zLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2Fubm90IHJlbW92ZSBmaWxlIHdoZW4gdGhlcmUgYXJlIG5vIHVwbG9hZGVkIGZpbGVzIHlldCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwPlxuICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgPERyb3Bab25lXG4gICAgICAgIG9uQ2hhbmdlPXtvblVwbG9hZH1cbiAgICAgICAgbXVsdGlwbGU9e2N1c3RvbS5tdWx0aXBsZX1cbiAgICAgICAgdmFsaWRhdGU9e3tcbiAgICAgICAgICBtaW1lVHlwZXM6IGN1c3RvbS5taW1lVHlwZXMgYXMgQXJyYXk8c3RyaW5nPixcbiAgICAgICAgICBtYXhTaXplOiBjdXN0b20ubWF4U2l6ZSxcbiAgICAgICAgfX1cbiAgICAgICAgZmlsZXM9e2ZpbGVzVG9VcGxvYWR9XG4gICAgICAvPlxuICAgICAgeyFjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIHBhdGggJiYgIWZpbGVzVG9VcGxvYWQubGVuZ3RoICYmIGZpbGUgIT09IG51bGwgJiYgKFxuICAgICAgICA8RHJvcFpvbmVJdGVtIGZpbGVuYW1lPXtrZXl9IHNyYz17cGF0aH0gb25SZW1vdmU9e2hhbmRsZVJlbW92ZX0gLz5cbiAgICAgICl9XG4gICAgICB7Y3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBrZXkubGVuZ3RoICYmIHBhdGggPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2tleS5tYXAoKHNpbmdsZUtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIHdoZW4gd2UgcmVtb3ZlIGl0ZW1zIHdlIHNldCBvbmx5IHBhdGggaW5kZXggdG8gbnVsbHMuXG4gICAgICAgICAgICAvLyBrZXkgaXMgc3RpbGwgdGhlcmUuIFRoaXMgaXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBtYWludGFpbiBhbGwgdGhlIGluZGV4ZXMuIFNvIGhlcmUgd2Ugc2ltcGx5IGZpbHRlciBvdXQgZWxlbWVudHMgd2hpY2hcbiAgICAgICAgICAgIC8vIHdlcmUgcmVtb3ZlZCBhbmQgZGlzcGxheSBvbmx5IHdoYXQgd2FzIGxlZnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcGF0aFtpbmRleF1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aCA/IChcbiAgICAgICAgICAgICAgPERyb3Bab25lSXRlbVxuICAgICAgICAgICAgICAgIGtleT17c2luZ2xlS2V5fVxuICAgICAgICAgICAgICAgIGZpbGVuYW1lPXtzaW5nbGVLZXl9XG4gICAgICAgICAgICAgICAgc3JjPXtwYXRoW2luZGV4XX1cbiAgICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gaGFuZGxlTXVsdGlSZW1vdmUoc2luZ2xlS2V5KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAnJ1xuICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgICkgOiAnJ31cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0XG4iLCJleHBvcnQgY29uc3QgQXVkaW9NaW1lVHlwZXMgPSBbXG4gICdhdWRpby9hYWMnLFxuICAnYXVkaW8vbWlkaScsXG4gICdhdWRpby94LW1pZGknLFxuICAnYXVkaW8vbXBlZycsXG4gICdhdWRpby9vZ2cnLFxuICAnYXBwbGljYXRpb24vb2dnJyxcbiAgJ2F1ZGlvL29wdXMnLFxuICAnYXVkaW8vd2F2JyxcbiAgJ2F1ZGlvL3dlYm0nLFxuICAnYXVkaW8vM2dwcDInLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgVmlkZW9NaW1lVHlwZXMgPSBbXG4gICd2aWRlby94LW1zdmlkZW8nLFxuICAndmlkZW8vbXBlZycsXG4gICd2aWRlby9vZ2cnLFxuICAndmlkZW8vbXAydCcsXG4gICd2aWRlby93ZWJtJyxcbiAgJ3ZpZGVvLzNncHAnLFxuICAndmlkZW8vM2dwcDInLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgSW1hZ2VNaW1lVHlwZXMgPSBbXG4gICdpbWFnZS9ibXAnLFxuICAnaW1hZ2UvZ2lmJyxcbiAgJ2ltYWdlL2pwZWcnLFxuICAnaW1hZ2UvcG5nJyxcbiAgJ2ltYWdlL3N2Zyt4bWwnLFxuICAnaW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uJyxcbiAgJ2ltYWdlL3RpZmYnLFxuICAnaW1hZ2Uvd2VicCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBDb21wcmVzc2VkTWltZVR5cGVzID0gW1xuICAnYXBwbGljYXRpb24veC1iemlwJyxcbiAgJ2FwcGxpY2F0aW9uL3gtYnppcDInLFxuICAnYXBwbGljYXRpb24vZ3ppcCcsXG4gICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnLFxuICAnYXBwbGljYXRpb24veC10YXInLFxuICAnYXBwbGljYXRpb24vemlwJyxcbiAgJ2FwcGxpY2F0aW9uL3gtN3otY29tcHJlc3NlZCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudE1pbWVUeXBlcyA9IFtcbiAgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCcsXG4gICdhcHBsaWNhdGlvbi94LWZyZWVhcmMnLFxuICAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vaycsXG4gICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nLFxuICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXG4gICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxuICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbicsXG4gICdhcHBsaWNhdGlvbi92bmQucmFyJyxcbiAgJ2FwcGxpY2F0aW9uL3J0ZicsXG4gICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgVGV4dE1pbWVUeXBlcyA9IFtcbiAgJ3RleHQvY3NzJyxcbiAgJ3RleHQvY3N2JyxcbiAgJ3RleHQvaHRtbCcsXG4gICd0ZXh0L2NhbGVuZGFyJyxcbiAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxuICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgJ3RleHQvcGxhaW4nLFxuICAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcbiAgJ2FwcGxpY2F0aW9uL3htbCcsXG4gICd0ZXh0L3htbCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBCaW5hcnlEb2NzTWltZVR5cGVzID0gW1xuICAnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuICAnYXBwbGljYXRpb24vcGRmJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IEZvbnRNaW1lVHlwZXMgPSBbXG4gICdmb250L290ZicsXG4gICdmb250L3R0ZicsXG4gICdmb250L3dvZmYnLFxuICAnZm9udC93b2ZmMicsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBPdGhlck1pbWVUeXBlcyA9IFtcbiAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICdhcHBsaWNhdGlvbi94LWNzaCcsXG4gICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCcsXG4gICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCcsXG4gICdhcHBsaWNhdGlvbi94LXNoJyxcbiAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyxcbiAgJ3ZuZC52aXNpbycsXG4gICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IE1pbWVUeXBlcyA9IFtcbiAgLi4uQXVkaW9NaW1lVHlwZXMsXG4gIC4uLlZpZGVvTWltZVR5cGVzLFxuICAuLi5JbWFnZU1pbWVUeXBlcyxcbiAgLi4uQ29tcHJlc3NlZE1pbWVUeXBlcyxcbiAgLi4uRG9jdW1lbnRNaW1lVHlwZXMsXG4gIC4uLlRleHRNaW1lVHlwZXMsXG4gIC4uLkJpbmFyeURvY3NNaW1lVHlwZXMsXG4gIC4uLk90aGVyTWltZVR5cGVzLFxuICAuLi5Gb250TWltZVR5cGVzLFxuICAuLi5PdGhlck1pbWVUeXBlcyxcbl1cblxudHlwZSBQb3B1bGFyTWltZVR5cGVzID0gdHlwZW9mIE1pbWVUeXBlc1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIE1pbWVUeXBlID0gUG9wdWxhck1pbWVUeXBlcyB8IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBmbGF0LCBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF1ZGlvTWltZVR5cGVzLCBJbWFnZU1pbWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzL21pbWUtdHlwZXMudHlwZSdcbmltcG9ydCBQcm9wZXJ0eUN1c3RvbSBmcm9tICcuLi90eXBlcy9wcm9wZXJ0eS1jdXN0b20udHlwZSdcblxudHlwZSBQcm9wcyA9IFNob3dQcm9wZXJ0eVByb3BzICYge1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbn07XG5cbnR5cGUgU2luZ2xlRmlsZVByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIG1pbWVUeXBlPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbn07XG5cbmNvbnN0IFNpbmdsZUZpbGU6IEZDPFNpbmdsZUZpbGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBwYXRoLCBtaW1lVHlwZSwgd2lkdGggfSA9IHByb3BzXG5cbiAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGgpIHtcbiAgICBpZiAobWltZVR5cGUgJiYgSW1hZ2VNaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUgYXMgYW55KSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cGF0aH1cbiAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpZHRoLCBtYXhXaWR0aDogd2lkdGggfX1cbiAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSBhcyBhbnkpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YXVkaW8gY29udHJvbHMgc3JjPXtwYXRofT5cbiAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGVcbiAgICAgICAgICA8Y29kZT5hdWRpbzwvY29kZT5cbiAgICAgICAgICA8dHJhY2sga2luZD1cImNhcHRpb25zXCIgLz5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEJ1dHRvbiBhcz1cImFcIiBocmVmPXtwYXRofSBtbD1cImRlZmF1bHRcIiBzaXplPVwic21cIiByb3VuZGVkIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8SWNvbiBpY29uPVwiRG9jdW1lbnREb3dubG9hZFwiIGNvbG9yPVwid2hpdGVcIiBtcj1cImRlZmF1bHRcIiAvPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApXG59XG5cbmNvbnN0IEZpbGU6IEZDPFByb3BzPiA9ICh7IHdpZHRoLCByZWNvcmQsIHByb3BlcnR5IH0pID0+IHtcbiAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5IGFzIHVua25vd24gYXMgeyBjdXN0b206IFByb3BlcnR5Q3VzdG9tIH1cblxuICBsZXQgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSlcblxuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZsYXQuZ2V0KFxuICAgIHJlY29yZD8ucGFyYW1zLFxuICAgIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHksXG4gIClcblxuICBjb25zdCBtaW1lVHlwZSA9IGN1c3RvbS5taW1lVHlwZVByb3BlcnR5XG4gICAgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KVxuXG4gIGlmICghcHJvcGVydHkuY3VzdG9tLm11bHRpcGxlKSB7XG4gICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgIHBhdGggPSBgJHtjdXN0b20ub3B0cy5iYXNlVXJsfS8ke25hbWV9YFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFNpbmdsZUZpbGUgcGF0aD17cGF0aH0gbmFtZT17bmFtZX0gd2lkdGg9e3dpZHRofSBtaW1lVHlwZT17bWltZVR5cGV9IC8+XG4gICAgKVxuICB9XG4gIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgY29uc3QgYmFzZVVybCA9IGN1c3RvbS5vcHRzLmJhc2VVcmwgfHwgJydcbiAgICBwYXRoID0gcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiBgJHtiYXNlVXJsfS8ke25hbWVbaW5kZXhdfWApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTaW5nbGVGaWxlXG4gICAgICAgICAga2V5PXtzaW5nbGVQYXRofVxuICAgICAgICAgIHBhdGg9e3NpbmdsZVBhdGh9XG4gICAgICAgICAgbmFtZT17bmFtZVtpbmRleF19XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIG1pbWVUeXBlPXttaW1lVHlwZVtpbmRleF19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcydcblxuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlJ1xuXG5jb25zdCBMaXN0OiBGQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+ICg8RmlsZSB3aWR0aD17MTAwfSB7Li4ucHJvcHN9IC8+KVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcydcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUnXG5cbmNvbnN0IFNob3c6IEZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5IH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cD5cbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgIDxGaWxlIHdpZHRoPVwiMTAwJVwiIHsuLi5wcm9wc30gLz5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBDb21wb25lbnQwIGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50MCA9IENvbXBvbmVudDBcbmltcG9ydCBDb21wb25lbnQxIGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50MSA9IENvbXBvbmVudDFcbmltcG9ydCBDb21wb25lbnQyIGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvc2hvdydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50MiA9IENvbXBvbmVudDJcbmltcG9ydCBDb21wb25lbnQzIGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50MyA9IENvbXBvbmVudDNcbmltcG9ydCBDb21wb25lbnQ0IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50NCA9IENvbXBvbmVudDRcbmltcG9ydCBDb21wb25lbnQ1IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvc2hvdydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50NSA9IENvbXBvbmVudDVcbmltcG9ydCBDb21wb25lbnQ2IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50NiA9IENvbXBvbmVudDZcbmltcG9ydCBDb21wb25lbnQ3IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50NyA9IENvbXBvbmVudDdcbmltcG9ydCBDb21wb25lbnQ4IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvc2hvdydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50OCA9IENvbXBvbmVudDhcbmltcG9ydCBDb21wb25lbnQ5IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50OSA9IENvbXBvbmVudDlcbmltcG9ydCBDb21wb25lbnQxMCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDEwID0gQ29tcG9uZW50MTBcbmltcG9ydCBDb21wb25lbnQxMSBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDExID0gQ29tcG9uZW50MTEiXSwibmFtZXMiOlsiRWRpdCIsIl9yZWYiLCJwcm9wZXJ0eSIsInJlY29yZCIsIm9uQ2hhbmdlIiwicGFyYW1zIiwiX3JlZjIiLCJjdXN0b20iLCJwYXRoIiwiZmxhdCIsImdldCIsImZpbGVQYXRoUHJvcGVydHkiLCJrZXkiLCJrZXlQcm9wZXJ0eSIsImZpbGUiLCJmaWxlUHJvcGVydHkiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9yaWdpbmFsS2V5Iiwic2V0T3JpZ2luYWxLZXkiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZpbGVzVG9VcGxvYWQiLCJzZXRGaWxlc1RvVXBsb2FkIiwidXNlRWZmZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib25VcGxvYWQiLCJmaWxlcyIsImhhbmRsZVJlbW92ZSIsImhhbmRsZU11bHRpUmVtb3ZlIiwic2luZ2xlS2V5IiwiaW5kZXgiLCJpbmRleE9mIiwiZmlsZXNUb0RlbGV0ZSIsImZpbGVzVG9EZWxldGVQcm9wZXJ0eSIsIm5ld1BhdGgiLCJtYXAiLCJjdXJyZW50UGF0aCIsImkiLCJuZXdQYXJhbXMiLCJzZXQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfb2JqZWN0U3ByZWFkIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkZvcm1Hcm91cCIsIkxhYmVsIiwibGFiZWwiLCJEcm9wWm9uZSIsIm11bHRpcGxlIiwidmFsaWRhdGUiLCJtaW1lVHlwZXMiLCJtYXhTaXplIiwiRHJvcFpvbmVJdGVtIiwiZmlsZW5hbWUiLCJzcmMiLCJvblJlbW92ZSIsIkZyYWdtZW50IiwiQXVkaW9NaW1lVHlwZXMiLCJJbWFnZU1pbWVUeXBlcyIsIlNpbmdsZUZpbGUiLCJwcm9wcyIsIm5hbWUiLCJtaW1lVHlwZSIsIndpZHRoIiwiaW5jbHVkZXMiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiYWx0IiwiY29udHJvbHMiLCJraW5kIiwiQm94IiwiQnV0dG9uIiwiYXMiLCJocmVmIiwibWwiLCJzaXplIiwicm91bmRlZCIsInRhcmdldCIsIkljb24iLCJpY29uIiwiY29sb3IiLCJtciIsIkZpbGUiLCJmaWxlTmFtZVByb3BlcnR5IiwibWltZVR5cGVQcm9wZXJ0eSIsIm9wdHMiLCJiYXNlVXJsIiwic2luZ2xlUGF0aCIsIkxpc3QiLCJfZXh0ZW5kcyIsIlNob3ciLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJDb21wb25lbnQwIiwiQ29tcG9uZW50MSIsIkNvbXBvbmVudDIiLCJDb21wb25lbnQzIiwiQ29tcG9uZW50NCIsIkNvbXBvbmVudDUiLCJDb21wb25lbnQ2IiwiQ29tcG9uZW50NyIsIkNvbXBvbmVudDgiLCJDb21wb25lbnQ5IiwiQ29tcG9uZW50MTAiLCJDb21wb25lbnQxMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBS0EsSUFBTUEsSUFBMkIsR0FBRyxTQUE5QkEsSUFBMkJBLENBQUFDLElBQUEsRUFBdUM7RUFBQSxFQUFBLElBQWpDQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtNQUFFQyxNQUFNLEdBQUFGLElBQUEsQ0FBTkUsTUFBTTtNQUFFQyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUSxDQUFBO0VBQy9ELEVBQUEsSUFBUUMsTUFBTSxHQUFLRixNQUFNLENBQWpCRSxNQUFNLENBQUE7SUFDZCxJQUFBQyxLQUFBLEdBQW1CSixRQUFRO01BQW5CSyxNQUFNLEdBQUFELEtBQUEsQ0FBTkMsTUFBTSxDQUFBO0lBRWQsSUFBTUMsSUFBSSxHQUFHQyxZQUFJLENBQUNDLEdBQUcs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

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.google = exports.bridge = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util; // Exported root namespace

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

var bridge = $root.bridge = function () {
  /**
   * Namespace bridge.
   * @exports bridge
   * @namespace
   */
  var bridge = {};

  bridge.Auth = function () {
    /**
     * Constructs a new Auth service.
     * @memberof bridge
     * @classdesc Represents an Auth
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Auth(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Auth.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Auth;
    /**
     * Creates new Auth service using the specified rpc implementation.
     * @function create
     * @memberof bridge.Auth
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Auth} RPC service. Useful where requests and/or responses are streamed.
     */

    Auth.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited);
    };
    /**
     * Callback as used by {@link bridge.Auth#descriptor}.
     * @memberof bridge.Auth
     * @typedef DescriptorCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {google.protobuf.Api} [response] Api
     */

    /**
     * Calls Descriptor.
     * @function descriptor
     * @memberof bridge.Auth
     * @instance
     * @param {google.protobuf.IEmpty} request Empty message or plain object
     * @param {bridge.Auth.DescriptorCallback} callback Node-style callback called with the error, if any, and Api
     * @returns {undefined}
     * @variation 1
     */


    Object.defineProperty(Auth.prototype.descriptor = function descriptor(request, callback) {
      return this.rpcCall(descriptor, $root.google.protobuf.Empty, $root.google.protobuf.Api, request, callback);
    }, "name", {
      value: "Descriptor"
    });
    /**
     * Calls Descriptor.
     * @function descriptor
     * @memberof bridge.Auth
     * @instance
     * @param {google.protobuf.IEmpty} request Empty message or plain object
     * @returns {Promise<google.protobuf.Api>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link bridge.Auth#byUsernameAndPassword}.
     * @memberof bridge.Auth
     * @typedef ByUsernameAndPasswordCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {google.protobuf.Api} [response] Api
     */

    /**
     * Calls ByUsernameAndPassword.
     * @function byUsernameAndPassword
     * @memberof bridge.Auth
     * @instance
     * @param {bridge.IUsernameAndPassword} request UsernameAndPassword message or plain object
     * @param {bridge.Auth.ByUsernameAndPasswordCallback} callback Node-style callback called with the error, if any, and Api
     * @returns {undefined}
     * @variation 1
     */

    Object.defineProperty(Auth.prototype.byUsernameAndPassword = function byUsernameAndPassword(request, callback) {
      return this.rpcCall(byUsernameAndPassword, $root.bridge.UsernameAndPassword, $root.google.protobuf.Api, request, callback);
    }, "name", {
      value: "ByUsernameAndPassword"
    });
    /**
     * Calls ByUsernameAndPassword.
     * @function byUsernameAndPassword
     * @memberof bridge.Auth
     * @instance
     * @param {bridge.IUsernameAndPassword} request UsernameAndPassword message or plain object
     * @returns {Promise<google.protobuf.Api>} Promise
     * @variation 2
     */

    return Auth;
  }();

  bridge.UsernameAndPassword = function () {
    /**
     * Properties of a UsernameAndPassword.
     * @memberof bridge
     * @interface IUsernameAndPassword
     * @property {string|null} [username] UsernameAndPassword username
     * @property {string|null} [password] UsernameAndPassword password
     */

    /**
     * Constructs a new UsernameAndPassword.
     * @memberof bridge
     * @classdesc Represents a UsernameAndPassword.
     * @implements IUsernameAndPassword
     * @constructor
     * @param {bridge.IUsernameAndPassword=} [properties] Properties to set
     */
    function UsernameAndPassword(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }
    }
    /**
     * UsernameAndPassword username.
     * @member {string} username
     * @memberof bridge.UsernameAndPassword
     * @instance
     */


    UsernameAndPassword.prototype.username = "";
    /**
     * UsernameAndPassword password.
     * @member {string} password
     * @memberof bridge.UsernameAndPassword
     * @instance
     */

    UsernameAndPassword.prototype.password = "";
    /**
     * Creates a new UsernameAndPassword instance using the specified properties.
     * @function create
     * @memberof bridge.UsernameAndPassword
     * @static
     * @param {bridge.IUsernameAndPassword=} [properties] Properties to set
     * @returns {bridge.UsernameAndPassword} UsernameAndPassword instance
     */

    UsernameAndPassword.create = function create(properties) {
      return new UsernameAndPassword(properties);
    };
    /**
     * Encodes the specified UsernameAndPassword message. Does not implicitly {@link bridge.UsernameAndPassword.verify|verify} messages.
     * @function encode
     * @memberof bridge.UsernameAndPassword
     * @static
     * @param {bridge.IUsernameAndPassword} message UsernameAndPassword message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    UsernameAndPassword.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.username != null && message.hasOwnProperty("username")) writer.uint32(
      /* id 1, wireType 2 =*/
      10).string(message.username);
      if (message.password != null && message.hasOwnProperty("password")) writer.uint32(
      /* id 2, wireType 2 =*/
      18).string(message.password);
      return writer;
    };
    /**
     * Encodes the specified UsernameAndPassword message, length delimited. Does not implicitly {@link bridge.UsernameAndPassword.verify|verify} messages.
     * @function encodeDelimited
     * @memberof bridge.UsernameAndPassword
     * @static
     * @param {bridge.IUsernameAndPassword} message UsernameAndPassword message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    UsernameAndPassword.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a UsernameAndPassword message from the specified reader or buffer.
     * @function decode
     * @memberof bridge.UsernameAndPassword
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {bridge.UsernameAndPassword} UsernameAndPassword
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    UsernameAndPassword.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.bridge.UsernameAndPassword();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.username = reader.string();
            break;

          case 2:
            message.password = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a UsernameAndPassword message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof bridge.UsernameAndPassword
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {bridge.UsernameAndPassword} UsernameAndPassword
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    UsernameAndPassword.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a UsernameAndPassword message.
     * @function verify
     * @memberof bridge.UsernameAndPassword
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    UsernameAndPassword.verify = function verify(message) {
      if (_typeof(message) !== "object" || message === null) return "object expected";
      if (message.username != null && message.hasOwnProperty("username")) if (!$util.isString(message.username)) return "username: string expected";
      if (message.password != null && message.hasOwnProperty("password")) if (!$util.isString(message.password)) return "password: string expected";
      return null;
    };
    /**
     * Creates a UsernameAndPassword message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof bridge.UsernameAndPassword
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {bridge.UsernameAndPassword} UsernameAndPassword
     */


    UsernameAndPassword.fromObject = function fromObject(object) {
      if (object instanceof $root.bridge.UsernameAndPassword) return object;
      var message = new $root.bridge.UsernameAndPassword();
      if (object.username != null) message.username = String(object.username);
      if (object.password != null) message.password = String(object.password);
      return message;
    };
    /**
     * Creates a plain object from a UsernameAndPassword message. Also converts values to other types if specified.
     * @function toObject
     * @memberof bridge.UsernameAndPassword
     * @static
     * @param {bridge.UsernameAndPassword} message UsernameAndPassword
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    UsernameAndPassword.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};

      if (options.defaults) {
        object.username = "";
        object.password = "";
      }

      if (message.username != null && message.hasOwnProperty("username")) object.username = message.username;
      if (message.password != null && message.hasOwnProperty("password")) object.password = message.password;
      return object;
    };
    /**
     * Converts this UsernameAndPassword to JSON.
     * @function toJSON
     * @memberof bridge.UsernameAndPassword
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    UsernameAndPassword.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UsernameAndPassword;
  }();

  return bridge;
}();

exports.bridge = bridge;

var google = $root.google = function () {
  /**
   * Namespace google.
   * @exports google
   * @namespace
   */
  var google = {};

  google.protobuf = function () {
    /**
     * Namespace protobuf.
     * @memberof google
     * @namespace
     */
    var protobuf = {};

    protobuf.Api = function () {
      /**
       * Properties of an Api.
       * @memberof google.protobuf
       * @interface IApi
       * @property {string|null} [name] Api name
       * @property {Array.<google.protobuf.IMethod>|null} [methods] Api methods
       * @property {Array.<google.protobuf.IOption>|null} [options] Api options
       * @property {string|null} [version] Api version
       * @property {google.protobuf.ISourceContext|null} [sourceContext] Api sourceContext
       * @property {Array.<google.protobuf.IMixin>|null} [mixins] Api mixins
       * @property {google.protobuf.Syntax|null} [syntax] Api syntax
       */

      /**
       * Constructs a new Api.
       * @memberof google.protobuf
       * @classdesc Represents an Api.
       * @implements IApi
       * @constructor
       * @param {google.protobuf.IApi=} [properties] Properties to set
       */
      function Api(properties) {
        this.methods = [];
        this.options = [];
        this.mixins = [];
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Api name.
       * @member {string} name
       * @memberof google.protobuf.Api
       * @instance
       */


      Api.prototype.name = "";
      /**
       * Api methods.
       * @member {Array.<google.protobuf.IMethod>} methods
       * @memberof google.protobuf.Api
       * @instance
       */

      Api.prototype.methods = $util.emptyArray;
      /**
       * Api options.
       * @member {Array.<google.protobuf.IOption>} options
       * @memberof google.protobuf.Api
       * @instance
       */

      Api.prototype.options = $util.emptyArray;
      /**
       * Api version.
       * @member {string} version
       * @memberof google.protobuf.Api
       * @instance
       */

      Api.prototype.version = "";
      /**
       * Api sourceContext.
       * @member {google.protobuf.ISourceContext|null|undefined} sourceContext
       * @memberof google.protobuf.Api
       * @instance
       */

      Api.prototype.sourceContext = null;
      /**
       * Api mixins.
       * @member {Array.<google.protobuf.IMixin>} mixins
       * @memberof google.protobuf.Api
       * @instance
       */

      Api.prototype.mixins = $util.emptyArray;
      /**
       * Api syntax.
       * @member {google.protobuf.Syntax} syntax
       * @memberof google.protobuf.Api
       * @instance
       */

      Api.prototype.syntax = 0;
      /**
       * Creates a new Api instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Api
       * @static
       * @param {google.protobuf.IApi=} [properties] Properties to set
       * @returns {google.protobuf.Api} Api instance
       */

      Api.create = function create(properties) {
        return new Api(properties);
      };
      /**
       * Encodes the specified Api message. Does not implicitly {@link google.protobuf.Api.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Api
       * @static
       * @param {google.protobuf.IApi} message Api message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Api.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        if (message.methods != null && message.methods.length) for (var i = 0; i < message.methods.length; ++i) {
          $root.google.protobuf.Method.encode(message.methods[i], writer.uint32(
          /* id 2, wireType 2 =*/
          18).fork()).ldelim();
        }
        if (message.options != null && message.options.length) for (var _i = 0; _i < message.options.length; ++_i) {
          $root.google.protobuf.Option.encode(message.options[_i], writer.uint32(
          /* id 3, wireType 2 =*/
          26).fork()).ldelim();
        }
        if (message.version != null && message.hasOwnProperty("version")) writer.uint32(
        /* id 4, wireType 2 =*/
        34).string(message.version);
        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) $root.google.protobuf.SourceContext.encode(message.sourceContext, writer.uint32(
        /* id 5, wireType 2 =*/
        42).fork()).ldelim();
        if (message.mixins != null && message.mixins.length) for (var _i2 = 0; _i2 < message.mixins.length; ++_i2) {
          $root.google.protobuf.Mixin.encode(message.mixins[_i2], writer.uint32(
          /* id 6, wireType 2 =*/
          50).fork()).ldelim();
        }
        if (message.syntax != null && message.hasOwnProperty("syntax")) writer.uint32(
        /* id 7, wireType 0 =*/
        56).int32(message.syntax);
        return writer;
      };
      /**
       * Encodes the specified Api message, length delimited. Does not implicitly {@link google.protobuf.Api.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Api
       * @static
       * @param {google.protobuf.IApi} message Api message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Api.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes an Api message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Api
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Api} Api
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Api.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Api();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            case 2:
              if (!(message.methods && message.methods.length)) message.methods = [];
              message.methods.push($root.google.protobuf.Method.decode(reader, reader.uint32()));
              break;

            case 3:
              if (!(message.options && message.options.length)) message.options = [];
              message.options.push($root.google.protobuf.Option.decode(reader, reader.uint32()));
              break;

            case 4:
              message.version = reader.string();
              break;

            case 5:
              message.sourceContext = $root.google.protobuf.SourceContext.decode(reader, reader.uint32());
              break;

            case 6:
              if (!(message.mixins && message.mixins.length)) message.mixins = [];
              message.mixins.push($root.google.protobuf.Mixin.decode(reader, reader.uint32()));
              break;

            case 7:
              message.syntax = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes an Api message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Api
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Api} Api
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Api.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies an Api message.
       * @function verify
       * @memberof google.protobuf.Api
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Api.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";

        if (message.methods != null && message.hasOwnProperty("methods")) {
          if (!Array.isArray(message.methods)) return "methods: array expected";

          for (var i = 0; i < message.methods.length; ++i) {
            var error = $root.google.protobuf.Method.verify(message.methods[i]);
            if (error) return "methods." + error;
          }
        }

        if (message.options != null && message.hasOwnProperty("options")) {
          if (!Array.isArray(message.options)) return "options: array expected";

          for (var _i3 = 0; _i3 < message.options.length; ++_i3) {
            var _error = $root.google.protobuf.Option.verify(message.options[_i3]);

            if (_error) return "options." + _error;
          }
        }

        if (message.version != null && message.hasOwnProperty("version")) if (!$util.isString(message.version)) return "version: string expected";

        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) {
          var _error2 = $root.google.protobuf.SourceContext.verify(message.sourceContext);

          if (_error2) return "sourceContext." + _error2;
        }

        if (message.mixins != null && message.hasOwnProperty("mixins")) {
          if (!Array.isArray(message.mixins)) return "mixins: array expected";

          for (var _i4 = 0; _i4 < message.mixins.length; ++_i4) {
            var _error3 = $root.google.protobuf.Mixin.verify(message.mixins[_i4]);

            if (_error3) return "mixins." + _error3;
          }
        }

        if (message.syntax != null && message.hasOwnProperty("syntax")) switch (message.syntax) {
          default:
            return "syntax: enum value expected";

          case 0:
          case 1:
            break;
        }
        return null;
      };
      /**
       * Creates an Api message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Api
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Api} Api
       */


      Api.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Api) return object;
        var message = new $root.google.protobuf.Api();
        if (object.name != null) message.name = String(object.name);

        if (object.methods) {
          if (!Array.isArray(object.methods)) throw TypeError(".google.protobuf.Api.methods: array expected");
          message.methods = [];

          for (var i = 0; i < object.methods.length; ++i) {
            if (_typeof(object.methods[i]) !== "object") throw TypeError(".google.protobuf.Api.methods: object expected");
            message.methods[i] = $root.google.protobuf.Method.fromObject(object.methods[i]);
          }
        }

        if (object.options) {
          if (!Array.isArray(object.options)) throw TypeError(".google.protobuf.Api.options: array expected");
          message.options = [];

          for (var _i5 = 0; _i5 < object.options.length; ++_i5) {
            if (_typeof(object.options[_i5]) !== "object") throw TypeError(".google.protobuf.Api.options: object expected");
            message.options[_i5] = $root.google.protobuf.Option.fromObject(object.options[_i5]);
          }
        }

        if (object.version != null) message.version = String(object.version);

        if (object.sourceContext != null) {
          if (_typeof(object.sourceContext) !== "object") throw TypeError(".google.protobuf.Api.sourceContext: object expected");
          message.sourceContext = $root.google.protobuf.SourceContext.fromObject(object.sourceContext);
        }

        if (object.mixins) {
          if (!Array.isArray(object.mixins)) throw TypeError(".google.protobuf.Api.mixins: array expected");
          message.mixins = [];

          for (var _i6 = 0; _i6 < object.mixins.length; ++_i6) {
            if (_typeof(object.mixins[_i6]) !== "object") throw TypeError(".google.protobuf.Api.mixins: object expected");
            message.mixins[_i6] = $root.google.protobuf.Mixin.fromObject(object.mixins[_i6]);
          }
        }

        switch (object.syntax) {
          case "SYNTAX_PROTO2":
          case 0:
            message.syntax = 0;
            break;

          case "SYNTAX_PROTO3":
          case 1:
            message.syntax = 1;
            break;
        }

        return message;
      };
      /**
       * Creates a plain object from an Api message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Api
       * @static
       * @param {google.protobuf.Api} message Api
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Api.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.arrays || options.defaults) {
          object.methods = [];
          object.options = [];
          object.mixins = [];
        }

        if (options.defaults) {
          object.name = "";
          object.version = "";
          object.sourceContext = null;
          object.syntax = options.enums === String ? "SYNTAX_PROTO2" : 0;
        }

        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;

        if (message.methods && message.methods.length) {
          object.methods = [];

          for (var j = 0; j < message.methods.length; ++j) {
            object.methods[j] = $root.google.protobuf.Method.toObject(message.methods[j], options);
          }
        }

        if (message.options && message.options.length) {
          object.options = [];

          for (var _j = 0; _j < message.options.length; ++_j) {
            object.options[_j] = $root.google.protobuf.Option.toObject(message.options[_j], options);
          }
        }

        if (message.version != null && message.hasOwnProperty("version")) object.version = message.version;
        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) object.sourceContext = $root.google.protobuf.SourceContext.toObject(message.sourceContext, options);

        if (message.mixins && message.mixins.length) {
          object.mixins = [];

          for (var _j2 = 0; _j2 < message.mixins.length; ++_j2) {
            object.mixins[_j2] = $root.google.protobuf.Mixin.toObject(message.mixins[_j2], options);
          }
        }

        if (message.syntax != null && message.hasOwnProperty("syntax")) object.syntax = options.enums === String ? $root.google.protobuf.Syntax[message.syntax] : message.syntax;
        return object;
      };
      /**
       * Converts this Api to JSON.
       * @function toJSON
       * @memberof google.protobuf.Api
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Api.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Api;
    }();

    protobuf.Method = function () {
      /**
       * Properties of a Method.
       * @memberof google.protobuf
       * @interface IMethod
       * @property {string|null} [name] Method name
       * @property {string|null} [requestTypeUrl] Method requestTypeUrl
       * @property {boolean|null} [requestStreaming] Method requestStreaming
       * @property {string|null} [responseTypeUrl] Method responseTypeUrl
       * @property {boolean|null} [responseStreaming] Method responseStreaming
       * @property {Array.<google.protobuf.IOption>|null} [options] Method options
       * @property {google.protobuf.Syntax|null} [syntax] Method syntax
       */

      /**
       * Constructs a new Method.
       * @memberof google.protobuf
       * @classdesc Represents a Method.
       * @implements IMethod
       * @constructor
       * @param {google.protobuf.IMethod=} [properties] Properties to set
       */
      function Method(properties) {
        this.options = [];
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Method name.
       * @member {string} name
       * @memberof google.protobuf.Method
       * @instance
       */


      Method.prototype.name = "";
      /**
       * Method requestTypeUrl.
       * @member {string} requestTypeUrl
       * @memberof google.protobuf.Method
       * @instance
       */

      Method.prototype.requestTypeUrl = "";
      /**
       * Method requestStreaming.
       * @member {boolean} requestStreaming
       * @memberof google.protobuf.Method
       * @instance
       */

      Method.prototype.requestStreaming = false;
      /**
       * Method responseTypeUrl.
       * @member {string} responseTypeUrl
       * @memberof google.protobuf.Method
       * @instance
       */

      Method.prototype.responseTypeUrl = "";
      /**
       * Method responseStreaming.
       * @member {boolean} responseStreaming
       * @memberof google.protobuf.Method
       * @instance
       */

      Method.prototype.responseStreaming = false;
      /**
       * Method options.
       * @member {Array.<google.protobuf.IOption>} options
       * @memberof google.protobuf.Method
       * @instance
       */

      Method.prototype.options = $util.emptyArray;
      /**
       * Method syntax.
       * @member {google.protobuf.Syntax} syntax
       * @memberof google.protobuf.Method
       * @instance
       */

      Method.prototype.syntax = 0;
      /**
       * Creates a new Method instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Method
       * @static
       * @param {google.protobuf.IMethod=} [properties] Properties to set
       * @returns {google.protobuf.Method} Method instance
       */

      Method.create = function create(properties) {
        return new Method(properties);
      };
      /**
       * Encodes the specified Method message. Does not implicitly {@link google.protobuf.Method.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Method
       * @static
       * @param {google.protobuf.IMethod} message Method message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Method.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        if (message.requestTypeUrl != null && message.hasOwnProperty("requestTypeUrl")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.requestTypeUrl);
        if (message.requestStreaming != null && message.hasOwnProperty("requestStreaming")) writer.uint32(
        /* id 3, wireType 0 =*/
        24).bool(message.requestStreaming);
        if (message.responseTypeUrl != null && message.hasOwnProperty("responseTypeUrl")) writer.uint32(
        /* id 4, wireType 2 =*/
        34).string(message.responseTypeUrl);
        if (message.responseStreaming != null && message.hasOwnProperty("responseStreaming")) writer.uint32(
        /* id 5, wireType 0 =*/
        40).bool(message.responseStreaming);
        if (message.options != null && message.options.length) for (var i = 0; i < message.options.length; ++i) {
          $root.google.protobuf.Option.encode(message.options[i], writer.uint32(
          /* id 6, wireType 2 =*/
          50).fork()).ldelim();
        }
        if (message.syntax != null && message.hasOwnProperty("syntax")) writer.uint32(
        /* id 7, wireType 0 =*/
        56).int32(message.syntax);
        return writer;
      };
      /**
       * Encodes the specified Method message, length delimited. Does not implicitly {@link google.protobuf.Method.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Method
       * @static
       * @param {google.protobuf.IMethod} message Method message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Method.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a Method message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Method
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Method} Method
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Method.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Method();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            case 2:
              message.requestTypeUrl = reader.string();
              break;

            case 3:
              message.requestStreaming = reader.bool();
              break;

            case 4:
              message.responseTypeUrl = reader.string();
              break;

            case 5:
              message.responseStreaming = reader.bool();
              break;

            case 6:
              if (!(message.options && message.options.length)) message.options = [];
              message.options.push($root.google.protobuf.Option.decode(reader, reader.uint32()));
              break;

            case 7:
              message.syntax = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a Method message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Method
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Method} Method
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Method.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a Method message.
       * @function verify
       * @memberof google.protobuf.Method
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Method.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";
        if (message.requestTypeUrl != null && message.hasOwnProperty("requestTypeUrl")) if (!$util.isString(message.requestTypeUrl)) return "requestTypeUrl: string expected";
        if (message.requestStreaming != null && message.hasOwnProperty("requestStreaming")) if (typeof message.requestStreaming !== "boolean") return "requestStreaming: boolean expected";
        if (message.responseTypeUrl != null && message.hasOwnProperty("responseTypeUrl")) if (!$util.isString(message.responseTypeUrl)) return "responseTypeUrl: string expected";
        if (message.responseStreaming != null && message.hasOwnProperty("responseStreaming")) if (typeof message.responseStreaming !== "boolean") return "responseStreaming: boolean expected";

        if (message.options != null && message.hasOwnProperty("options")) {
          if (!Array.isArray(message.options)) return "options: array expected";

          for (var i = 0; i < message.options.length; ++i) {
            var error = $root.google.protobuf.Option.verify(message.options[i]);
            if (error) return "options." + error;
          }
        }

        if (message.syntax != null && message.hasOwnProperty("syntax")) switch (message.syntax) {
          default:
            return "syntax: enum value expected";

          case 0:
          case 1:
            break;
        }
        return null;
      };
      /**
       * Creates a Method message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Method
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Method} Method
       */


      Method.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Method) return object;
        var message = new $root.google.protobuf.Method();
        if (object.name != null) message.name = String(object.name);
        if (object.requestTypeUrl != null) message.requestTypeUrl = String(object.requestTypeUrl);
        if (object.requestStreaming != null) message.requestStreaming = Boolean(object.requestStreaming);
        if (object.responseTypeUrl != null) message.responseTypeUrl = String(object.responseTypeUrl);
        if (object.responseStreaming != null) message.responseStreaming = Boolean(object.responseStreaming);

        if (object.options) {
          if (!Array.isArray(object.options)) throw TypeError(".google.protobuf.Method.options: array expected");
          message.options = [];

          for (var i = 0; i < object.options.length; ++i) {
            if (_typeof(object.options[i]) !== "object") throw TypeError(".google.protobuf.Method.options: object expected");
            message.options[i] = $root.google.protobuf.Option.fromObject(object.options[i]);
          }
        }

        switch (object.syntax) {
          case "SYNTAX_PROTO2":
          case 0:
            message.syntax = 0;
            break;

          case "SYNTAX_PROTO3":
          case 1:
            message.syntax = 1;
            break;
        }

        return message;
      };
      /**
       * Creates a plain object from a Method message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Method
       * @static
       * @param {google.protobuf.Method} message Method
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Method.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.options = [];

        if (options.defaults) {
          object.name = "";
          object.requestTypeUrl = "";
          object.requestStreaming = false;
          object.responseTypeUrl = "";
          object.responseStreaming = false;
          object.syntax = options.enums === String ? "SYNTAX_PROTO2" : 0;
        }

        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        if (message.requestTypeUrl != null && message.hasOwnProperty("requestTypeUrl")) object.requestTypeUrl = message.requestTypeUrl;
        if (message.requestStreaming != null && message.hasOwnProperty("requestStreaming")) object.requestStreaming = message.requestStreaming;
        if (message.responseTypeUrl != null && message.hasOwnProperty("responseTypeUrl")) object.responseTypeUrl = message.responseTypeUrl;
        if (message.responseStreaming != null && message.hasOwnProperty("responseStreaming")) object.responseStreaming = message.responseStreaming;

        if (message.options && message.options.length) {
          object.options = [];

          for (var j = 0; j < message.options.length; ++j) {
            object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
          }
        }

        if (message.syntax != null && message.hasOwnProperty("syntax")) object.syntax = options.enums === String ? $root.google.protobuf.Syntax[message.syntax] : message.syntax;
        return object;
      };
      /**
       * Converts this Method to JSON.
       * @function toJSON
       * @memberof google.protobuf.Method
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Method.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Method;
    }();

    protobuf.Mixin = function () {
      /**
       * Properties of a Mixin.
       * @memberof google.protobuf
       * @interface IMixin
       * @property {string|null} [name] Mixin name
       * @property {string|null} [root] Mixin root
       */

      /**
       * Constructs a new Mixin.
       * @memberof google.protobuf
       * @classdesc Represents a Mixin.
       * @implements IMixin
       * @constructor
       * @param {google.protobuf.IMixin=} [properties] Properties to set
       */
      function Mixin(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Mixin name.
       * @member {string} name
       * @memberof google.protobuf.Mixin
       * @instance
       */


      Mixin.prototype.name = "";
      /**
       * Mixin root.
       * @member {string} root
       * @memberof google.protobuf.Mixin
       * @instance
       */

      Mixin.prototype.root = "";
      /**
       * Creates a new Mixin instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Mixin
       * @static
       * @param {google.protobuf.IMixin=} [properties] Properties to set
       * @returns {google.protobuf.Mixin} Mixin instance
       */

      Mixin.create = function create(properties) {
        return new Mixin(properties);
      };
      /**
       * Encodes the specified Mixin message. Does not implicitly {@link google.protobuf.Mixin.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Mixin
       * @static
       * @param {google.protobuf.IMixin} message Mixin message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Mixin.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        if (message.root != null && message.hasOwnProperty("root")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.root);
        return writer;
      };
      /**
       * Encodes the specified Mixin message, length delimited. Does not implicitly {@link google.protobuf.Mixin.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Mixin
       * @static
       * @param {google.protobuf.IMixin} message Mixin message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Mixin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a Mixin message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Mixin
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Mixin} Mixin
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Mixin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Mixin();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            case 2:
              message.root = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a Mixin message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Mixin
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Mixin} Mixin
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Mixin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a Mixin message.
       * @function verify
       * @memberof google.protobuf.Mixin
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Mixin.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";
        if (message.root != null && message.hasOwnProperty("root")) if (!$util.isString(message.root)) return "root: string expected";
        return null;
      };
      /**
       * Creates a Mixin message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Mixin
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Mixin} Mixin
       */


      Mixin.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Mixin) return object;
        var message = new $root.google.protobuf.Mixin();
        if (object.name != null) message.name = String(object.name);
        if (object.root != null) message.root = String(object.root);
        return message;
      };
      /**
       * Creates a plain object from a Mixin message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Mixin
       * @static
       * @param {google.protobuf.Mixin} message Mixin
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Mixin.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.name = "";
          object.root = "";
        }

        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        if (message.root != null && message.hasOwnProperty("root")) object.root = message.root;
        return object;
      };
      /**
       * Converts this Mixin to JSON.
       * @function toJSON
       * @memberof google.protobuf.Mixin
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Mixin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Mixin;
    }();

    protobuf.SourceContext = function () {
      /**
       * Properties of a SourceContext.
       * @memberof google.protobuf
       * @interface ISourceContext
       * @property {string|null} [fileName] SourceContext fileName
       */

      /**
       * Constructs a new SourceContext.
       * @memberof google.protobuf
       * @classdesc Represents a SourceContext.
       * @implements ISourceContext
       * @constructor
       * @param {google.protobuf.ISourceContext=} [properties] Properties to set
       */
      function SourceContext(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * SourceContext fileName.
       * @member {string} fileName
       * @memberof google.protobuf.SourceContext
       * @instance
       */


      SourceContext.prototype.fileName = "";
      /**
       * Creates a new SourceContext instance using the specified properties.
       * @function create
       * @memberof google.protobuf.SourceContext
       * @static
       * @param {google.protobuf.ISourceContext=} [properties] Properties to set
       * @returns {google.protobuf.SourceContext} SourceContext instance
       */

      SourceContext.create = function create(properties) {
        return new SourceContext(properties);
      };
      /**
       * Encodes the specified SourceContext message. Does not implicitly {@link google.protobuf.SourceContext.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.SourceContext
       * @static
       * @param {google.protobuf.ISourceContext} message SourceContext message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      SourceContext.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.fileName != null && message.hasOwnProperty("fileName")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.fileName);
        return writer;
      };
      /**
       * Encodes the specified SourceContext message, length delimited. Does not implicitly {@link google.protobuf.SourceContext.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.SourceContext
       * @static
       * @param {google.protobuf.ISourceContext} message SourceContext message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      SourceContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a SourceContext message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.SourceContext
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.SourceContext} SourceContext
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      SourceContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.SourceContext();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.fileName = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a SourceContext message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.SourceContext
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.SourceContext} SourceContext
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      SourceContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a SourceContext message.
       * @function verify
       * @memberof google.protobuf.SourceContext
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      SourceContext.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.fileName != null && message.hasOwnProperty("fileName")) if (!$util.isString(message.fileName)) return "fileName: string expected";
        return null;
      };
      /**
       * Creates a SourceContext message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.SourceContext
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.SourceContext} SourceContext
       */


      SourceContext.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.SourceContext) return object;
        var message = new $root.google.protobuf.SourceContext();
        if (object.fileName != null) message.fileName = String(object.fileName);
        return message;
      };
      /**
       * Creates a plain object from a SourceContext message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.SourceContext
       * @static
       * @param {google.protobuf.SourceContext} message SourceContext
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      SourceContext.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.fileName = "";
        if (message.fileName != null && message.hasOwnProperty("fileName")) object.fileName = message.fileName;
        return object;
      };
      /**
       * Converts this SourceContext to JSON.
       * @function toJSON
       * @memberof google.protobuf.SourceContext
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      SourceContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return SourceContext;
    }();

    protobuf.Type = function () {
      /**
       * Properties of a Type.
       * @memberof google.protobuf
       * @interface IType
       * @property {string|null} [name] Type name
       * @property {Array.<google.protobuf.IField>|null} [fields] Type fields
       * @property {Array.<string>|null} [oneofs] Type oneofs
       * @property {Array.<google.protobuf.IOption>|null} [options] Type options
       * @property {google.protobuf.ISourceContext|null} [sourceContext] Type sourceContext
       * @property {google.protobuf.Syntax|null} [syntax] Type syntax
       */

      /**
       * Constructs a new Type.
       * @memberof google.protobuf
       * @classdesc Represents a Type.
       * @implements IType
       * @constructor
       * @param {google.protobuf.IType=} [properties] Properties to set
       */
      function Type(properties) {
        this.fields = [];
        this.oneofs = [];
        this.options = [];
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Type name.
       * @member {string} name
       * @memberof google.protobuf.Type
       * @instance
       */


      Type.prototype.name = "";
      /**
       * Type fields.
       * @member {Array.<google.protobuf.IField>} fields
       * @memberof google.protobuf.Type
       * @instance
       */

      Type.prototype.fields = $util.emptyArray;
      /**
       * Type oneofs.
       * @member {Array.<string>} oneofs
       * @memberof google.protobuf.Type
       * @instance
       */

      Type.prototype.oneofs = $util.emptyArray;
      /**
       * Type options.
       * @member {Array.<google.protobuf.IOption>} options
       * @memberof google.protobuf.Type
       * @instance
       */

      Type.prototype.options = $util.emptyArray;
      /**
       * Type sourceContext.
       * @member {google.protobuf.ISourceContext|null|undefined} sourceContext
       * @memberof google.protobuf.Type
       * @instance
       */

      Type.prototype.sourceContext = null;
      /**
       * Type syntax.
       * @member {google.protobuf.Syntax} syntax
       * @memberof google.protobuf.Type
       * @instance
       */

      Type.prototype.syntax = 0;
      /**
       * Creates a new Type instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Type
       * @static
       * @param {google.protobuf.IType=} [properties] Properties to set
       * @returns {google.protobuf.Type} Type instance
       */

      Type.create = function create(properties) {
        return new Type(properties);
      };
      /**
       * Encodes the specified Type message. Does not implicitly {@link google.protobuf.Type.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Type
       * @static
       * @param {google.protobuf.IType} message Type message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Type.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        if (message.fields != null && message.fields.length) for (var i = 0; i < message.fields.length; ++i) {
          $root.google.protobuf.Field.encode(message.fields[i], writer.uint32(
          /* id 2, wireType 2 =*/
          18).fork()).ldelim();
        }
        if (message.oneofs != null && message.oneofs.length) for (var _i7 = 0; _i7 < message.oneofs.length; ++_i7) {
          writer.uint32(
          /* id 3, wireType 2 =*/
          26).string(message.oneofs[_i7]);
        }
        if (message.options != null && message.options.length) for (var _i8 = 0; _i8 < message.options.length; ++_i8) {
          $root.google.protobuf.Option.encode(message.options[_i8], writer.uint32(
          /* id 4, wireType 2 =*/
          34).fork()).ldelim();
        }
        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) $root.google.protobuf.SourceContext.encode(message.sourceContext, writer.uint32(
        /* id 5, wireType 2 =*/
        42).fork()).ldelim();
        if (message.syntax != null && message.hasOwnProperty("syntax")) writer.uint32(
        /* id 6, wireType 0 =*/
        48).int32(message.syntax);
        return writer;
      };
      /**
       * Encodes the specified Type message, length delimited. Does not implicitly {@link google.protobuf.Type.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Type
       * @static
       * @param {google.protobuf.IType} message Type message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Type.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a Type message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Type
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Type} Type
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Type.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Type();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            case 2:
              if (!(message.fields && message.fields.length)) message.fields = [];
              message.fields.push($root.google.protobuf.Field.decode(reader, reader.uint32()));
              break;

            case 3:
              if (!(message.oneofs && message.oneofs.length)) message.oneofs = [];
              message.oneofs.push(reader.string());
              break;

            case 4:
              if (!(message.options && message.options.length)) message.options = [];
              message.options.push($root.google.protobuf.Option.decode(reader, reader.uint32()));
              break;

            case 5:
              message.sourceContext = $root.google.protobuf.SourceContext.decode(reader, reader.uint32());
              break;

            case 6:
              message.syntax = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a Type message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Type
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Type} Type
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Type.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a Type message.
       * @function verify
       * @memberof google.protobuf.Type
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Type.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";

        if (message.fields != null && message.hasOwnProperty("fields")) {
          if (!Array.isArray(message.fields)) return "fields: array expected";

          for (var i = 0; i < message.fields.length; ++i) {
            var error = $root.google.protobuf.Field.verify(message.fields[i]);
            if (error) return "fields." + error;
          }
        }

        if (message.oneofs != null && message.hasOwnProperty("oneofs")) {
          if (!Array.isArray(message.oneofs)) return "oneofs: array expected";

          for (var _i9 = 0; _i9 < message.oneofs.length; ++_i9) {
            if (!$util.isString(message.oneofs[_i9])) return "oneofs: string[] expected";
          }
        }

        if (message.options != null && message.hasOwnProperty("options")) {
          if (!Array.isArray(message.options)) return "options: array expected";

          for (var _i10 = 0; _i10 < message.options.length; ++_i10) {
            var _error4 = $root.google.protobuf.Option.verify(message.options[_i10]);

            if (_error4) return "options." + _error4;
          }
        }

        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) {
          var _error5 = $root.google.protobuf.SourceContext.verify(message.sourceContext);

          if (_error5) return "sourceContext." + _error5;
        }

        if (message.syntax != null && message.hasOwnProperty("syntax")) switch (message.syntax) {
          default:
            return "syntax: enum value expected";

          case 0:
          case 1:
            break;
        }
        return null;
      };
      /**
       * Creates a Type message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Type
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Type} Type
       */


      Type.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Type) return object;
        var message = new $root.google.protobuf.Type();
        if (object.name != null) message.name = String(object.name);

        if (object.fields) {
          if (!Array.isArray(object.fields)) throw TypeError(".google.protobuf.Type.fields: array expected");
          message.fields = [];

          for (var i = 0; i < object.fields.length; ++i) {
            if (_typeof(object.fields[i]) !== "object") throw TypeError(".google.protobuf.Type.fields: object expected");
            message.fields[i] = $root.google.protobuf.Field.fromObject(object.fields[i]);
          }
        }

        if (object.oneofs) {
          if (!Array.isArray(object.oneofs)) throw TypeError(".google.protobuf.Type.oneofs: array expected");
          message.oneofs = [];

          for (var _i11 = 0; _i11 < object.oneofs.length; ++_i11) {
            message.oneofs[_i11] = String(object.oneofs[_i11]);
          }
        }

        if (object.options) {
          if (!Array.isArray(object.options)) throw TypeError(".google.protobuf.Type.options: array expected");
          message.options = [];

          for (var _i12 = 0; _i12 < object.options.length; ++_i12) {
            if (_typeof(object.options[_i12]) !== "object") throw TypeError(".google.protobuf.Type.options: object expected");
            message.options[_i12] = $root.google.protobuf.Option.fromObject(object.options[_i12]);
          }
        }

        if (object.sourceContext != null) {
          if (_typeof(object.sourceContext) !== "object") throw TypeError(".google.protobuf.Type.sourceContext: object expected");
          message.sourceContext = $root.google.protobuf.SourceContext.fromObject(object.sourceContext);
        }

        switch (object.syntax) {
          case "SYNTAX_PROTO2":
          case 0:
            message.syntax = 0;
            break;

          case "SYNTAX_PROTO3":
          case 1:
            message.syntax = 1;
            break;
        }

        return message;
      };
      /**
       * Creates a plain object from a Type message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Type
       * @static
       * @param {google.protobuf.Type} message Type
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Type.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.arrays || options.defaults) {
          object.fields = [];
          object.oneofs = [];
          object.options = [];
        }

        if (options.defaults) {
          object.name = "";
          object.sourceContext = null;
          object.syntax = options.enums === String ? "SYNTAX_PROTO2" : 0;
        }

        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;

        if (message.fields && message.fields.length) {
          object.fields = [];

          for (var j = 0; j < message.fields.length; ++j) {
            object.fields[j] = $root.google.protobuf.Field.toObject(message.fields[j], options);
          }
        }

        if (message.oneofs && message.oneofs.length) {
          object.oneofs = [];

          for (var _j3 = 0; _j3 < message.oneofs.length; ++_j3) {
            object.oneofs[_j3] = message.oneofs[_j3];
          }
        }

        if (message.options && message.options.length) {
          object.options = [];

          for (var _j4 = 0; _j4 < message.options.length; ++_j4) {
            object.options[_j4] = $root.google.protobuf.Option.toObject(message.options[_j4], options);
          }
        }

        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) object.sourceContext = $root.google.protobuf.SourceContext.toObject(message.sourceContext, options);
        if (message.syntax != null && message.hasOwnProperty("syntax")) object.syntax = options.enums === String ? $root.google.protobuf.Syntax[message.syntax] : message.syntax;
        return object;
      };
      /**
       * Converts this Type to JSON.
       * @function toJSON
       * @memberof google.protobuf.Type
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Type.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Type;
    }();

    protobuf.Field = function () {
      /**
       * Properties of a Field.
       * @memberof google.protobuf
       * @interface IField
       * @property {google.protobuf.Field.Kind|null} [kind] Field kind
       * @property {google.protobuf.Field.Cardinality|null} [cardinality] Field cardinality
       * @property {number|null} [number] Field number
       * @property {string|null} [name] Field name
       * @property {string|null} [typeUrl] Field typeUrl
       * @property {number|null} [oneofIndex] Field oneofIndex
       * @property {boolean|null} [packed] Field packed
       * @property {Array.<google.protobuf.IOption>|null} [options] Field options
       * @property {string|null} [jsonName] Field jsonName
       * @property {string|null} [defaultValue] Field defaultValue
       */

      /**
       * Constructs a new Field.
       * @memberof google.protobuf
       * @classdesc Represents a Field.
       * @implements IField
       * @constructor
       * @param {google.protobuf.IField=} [properties] Properties to set
       */
      function Field(properties) {
        this.options = [];
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Field kind.
       * @member {google.protobuf.Field.Kind} kind
       * @memberof google.protobuf.Field
       * @instance
       */


      Field.prototype.kind = 0;
      /**
       * Field cardinality.
       * @member {google.protobuf.Field.Cardinality} cardinality
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.cardinality = 0;
      /**
       * Field number.
       * @member {number} number
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.number = 0;
      /**
       * Field name.
       * @member {string} name
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.name = "";
      /**
       * Field typeUrl.
       * @member {string} typeUrl
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.typeUrl = "";
      /**
       * Field oneofIndex.
       * @member {number} oneofIndex
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.oneofIndex = 0;
      /**
       * Field packed.
       * @member {boolean} packed
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.packed = false;
      /**
       * Field options.
       * @member {Array.<google.protobuf.IOption>} options
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.options = $util.emptyArray;
      /**
       * Field jsonName.
       * @member {string} jsonName
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.jsonName = "";
      /**
       * Field defaultValue.
       * @member {string} defaultValue
       * @memberof google.protobuf.Field
       * @instance
       */

      Field.prototype.defaultValue = "";
      /**
       * Creates a new Field instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Field
       * @static
       * @param {google.protobuf.IField=} [properties] Properties to set
       * @returns {google.protobuf.Field} Field instance
       */

      Field.create = function create(properties) {
        return new Field(properties);
      };
      /**
       * Encodes the specified Field message. Does not implicitly {@link google.protobuf.Field.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Field
       * @static
       * @param {google.protobuf.IField} message Field message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Field.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.kind != null && message.hasOwnProperty("kind")) writer.uint32(
        /* id 1, wireType 0 =*/
        8).int32(message.kind);
        if (message.cardinality != null && message.hasOwnProperty("cardinality")) writer.uint32(
        /* id 2, wireType 0 =*/
        16).int32(message.cardinality);
        if (message.number != null && message.hasOwnProperty("number")) writer.uint32(
        /* id 3, wireType 0 =*/
        24).int32(message.number);
        if (message.name != null && message.hasOwnProperty("name")) writer.uint32(
        /* id 4, wireType 2 =*/
        34).string(message.name);
        if (message.typeUrl != null && message.hasOwnProperty("typeUrl")) writer.uint32(
        /* id 6, wireType 2 =*/
        50).string(message.typeUrl);
        if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex")) writer.uint32(
        /* id 7, wireType 0 =*/
        56).int32(message.oneofIndex);
        if (message.packed != null && message.hasOwnProperty("packed")) writer.uint32(
        /* id 8, wireType 0 =*/
        64).bool(message.packed);
        if (message.options != null && message.options.length) for (var i = 0; i < message.options.length; ++i) {
          $root.google.protobuf.Option.encode(message.options[i], writer.uint32(
          /* id 9, wireType 2 =*/
          74).fork()).ldelim();
        }
        if (message.jsonName != null && message.hasOwnProperty("jsonName")) writer.uint32(
        /* id 10, wireType 2 =*/
        82).string(message.jsonName);
        if (message.defaultValue != null && message.hasOwnProperty("defaultValue")) writer.uint32(
        /* id 11, wireType 2 =*/
        90).string(message.defaultValue);
        return writer;
      };
      /**
       * Encodes the specified Field message, length delimited. Does not implicitly {@link google.protobuf.Field.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Field
       * @static
       * @param {google.protobuf.IField} message Field message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Field.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a Field message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Field
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Field} Field
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Field.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Field();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.kind = reader.int32();
              break;

            case 2:
              message.cardinality = reader.int32();
              break;

            case 3:
              message.number = reader.int32();
              break;

            case 4:
              message.name = reader.string();
              break;

            case 6:
              message.typeUrl = reader.string();
              break;

            case 7:
              message.oneofIndex = reader.int32();
              break;

            case 8:
              message.packed = reader.bool();
              break;

            case 9:
              if (!(message.options && message.options.length)) message.options = [];
              message.options.push($root.google.protobuf.Option.decode(reader, reader.uint32()));
              break;

            case 10:
              message.jsonName = reader.string();
              break;

            case 11:
              message.defaultValue = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a Field message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Field
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Field} Field
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Field.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a Field message.
       * @function verify
       * @memberof google.protobuf.Field
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Field.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.kind != null && message.hasOwnProperty("kind")) switch (message.kind) {
          default:
            return "kind: enum value expected";

          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
            break;
        }
        if (message.cardinality != null && message.hasOwnProperty("cardinality")) switch (message.cardinality) {
          default:
            return "cardinality: enum value expected";

          case 0:
          case 1:
          case 2:
          case 3:
            break;
        }
        if (message.number != null && message.hasOwnProperty("number")) if (!$util.isInteger(message.number)) return "number: integer expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";
        if (message.typeUrl != null && message.hasOwnProperty("typeUrl")) if (!$util.isString(message.typeUrl)) return "typeUrl: string expected";
        if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex")) if (!$util.isInteger(message.oneofIndex)) return "oneofIndex: integer expected";
        if (message.packed != null && message.hasOwnProperty("packed")) if (typeof message.packed !== "boolean") return "packed: boolean expected";

        if (message.options != null && message.hasOwnProperty("options")) {
          if (!Array.isArray(message.options)) return "options: array expected";

          for (var i = 0; i < message.options.length; ++i) {
            var error = $root.google.protobuf.Option.verify(message.options[i]);
            if (error) return "options." + error;
          }
        }

        if (message.jsonName != null && message.hasOwnProperty("jsonName")) if (!$util.isString(message.jsonName)) return "jsonName: string expected";
        if (message.defaultValue != null && message.hasOwnProperty("defaultValue")) if (!$util.isString(message.defaultValue)) return "defaultValue: string expected";
        return null;
      };
      /**
       * Creates a Field message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Field
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Field} Field
       */


      Field.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Field) return object;
        var message = new $root.google.protobuf.Field();

        switch (object.kind) {
          case "TYPE_UNKNOWN":
          case 0:
            message.kind = 0;
            break;

          case "TYPE_DOUBLE":
          case 1:
            message.kind = 1;
            break;

          case "TYPE_FLOAT":
          case 2:
            message.kind = 2;
            break;

          case "TYPE_INT64":
          case 3:
            message.kind = 3;
            break;

          case "TYPE_UINT64":
          case 4:
            message.kind = 4;
            break;

          case "TYPE_INT32":
          case 5:
            message.kind = 5;
            break;

          case "TYPE_FIXED64":
          case 6:
            message.kind = 6;
            break;

          case "TYPE_FIXED32":
          case 7:
            message.kind = 7;
            break;

          case "TYPE_BOOL":
          case 8:
            message.kind = 8;
            break;

          case "TYPE_STRING":
          case 9:
            message.kind = 9;
            break;

          case "TYPE_GROUP":
          case 10:
            message.kind = 10;
            break;

          case "TYPE_MESSAGE":
          case 11:
            message.kind = 11;
            break;

          case "TYPE_BYTES":
          case 12:
            message.kind = 12;
            break;

          case "TYPE_UINT32":
          case 13:
            message.kind = 13;
            break;

          case "TYPE_ENUM":
          case 14:
            message.kind = 14;
            break;

          case "TYPE_SFIXED32":
          case 15:
            message.kind = 15;
            break;

          case "TYPE_SFIXED64":
          case 16:
            message.kind = 16;
            break;

          case "TYPE_SINT32":
          case 17:
            message.kind = 17;
            break;

          case "TYPE_SINT64":
          case 18:
            message.kind = 18;
            break;
        }

        switch (object.cardinality) {
          case "CARDINALITY_UNKNOWN":
          case 0:
            message.cardinality = 0;
            break;

          case "CARDINALITY_OPTIONAL":
          case 1:
            message.cardinality = 1;
            break;

          case "CARDINALITY_REQUIRED":
          case 2:
            message.cardinality = 2;
            break;

          case "CARDINALITY_REPEATED":
          case 3:
            message.cardinality = 3;
            break;
        }

        if (object.number != null) message.number = object.number | 0;
        if (object.name != null) message.name = String(object.name);
        if (object.typeUrl != null) message.typeUrl = String(object.typeUrl);
        if (object.oneofIndex != null) message.oneofIndex = object.oneofIndex | 0;
        if (object.packed != null) message.packed = Boolean(object.packed);

        if (object.options) {
          if (!Array.isArray(object.options)) throw TypeError(".google.protobuf.Field.options: array expected");
          message.options = [];

          for (var i = 0; i < object.options.length; ++i) {
            if (_typeof(object.options[i]) !== "object") throw TypeError(".google.protobuf.Field.options: object expected");
            message.options[i] = $root.google.protobuf.Option.fromObject(object.options[i]);
          }
        }

        if (object.jsonName != null) message.jsonName = String(object.jsonName);
        if (object.defaultValue != null) message.defaultValue = String(object.defaultValue);
        return message;
      };
      /**
       * Creates a plain object from a Field message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Field
       * @static
       * @param {google.protobuf.Field} message Field
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Field.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.options = [];

        if (options.defaults) {
          object.kind = options.enums === String ? "TYPE_UNKNOWN" : 0;
          object.cardinality = options.enums === String ? "CARDINALITY_UNKNOWN" : 0;
          object.number = 0;
          object.name = "";
          object.typeUrl = "";
          object.oneofIndex = 0;
          object.packed = false;
          object.jsonName = "";
          object.defaultValue = "";
        }

        if (message.kind != null && message.hasOwnProperty("kind")) object.kind = options.enums === String ? $root.google.protobuf.Field.Kind[message.kind] : message.kind;
        if (message.cardinality != null && message.hasOwnProperty("cardinality")) object.cardinality = options.enums === String ? $root.google.protobuf.Field.Cardinality[message.cardinality] : message.cardinality;
        if (message.number != null && message.hasOwnProperty("number")) object.number = message.number;
        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        if (message.typeUrl != null && message.hasOwnProperty("typeUrl")) object.typeUrl = message.typeUrl;
        if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex")) object.oneofIndex = message.oneofIndex;
        if (message.packed != null && message.hasOwnProperty("packed")) object.packed = message.packed;

        if (message.options && message.options.length) {
          object.options = [];

          for (var j = 0; j < message.options.length; ++j) {
            object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
          }
        }

        if (message.jsonName != null && message.hasOwnProperty("jsonName")) object.jsonName = message.jsonName;
        if (message.defaultValue != null && message.hasOwnProperty("defaultValue")) object.defaultValue = message.defaultValue;
        return object;
      };
      /**
       * Converts this Field to JSON.
       * @function toJSON
       * @memberof google.protobuf.Field
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Field.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      /**
       * Kind enum.
       * @name google.protobuf.Field.Kind
       * @enum {string}
       * @property {number} TYPE_UNKNOWN=0 TYPE_UNKNOWN value
       * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
       * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
       * @property {number} TYPE_INT64=3 TYPE_INT64 value
       * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
       * @property {number} TYPE_INT32=5 TYPE_INT32 value
       * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
       * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
       * @property {number} TYPE_BOOL=8 TYPE_BOOL value
       * @property {number} TYPE_STRING=9 TYPE_STRING value
       * @property {number} TYPE_GROUP=10 TYPE_GROUP value
       * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
       * @property {number} TYPE_BYTES=12 TYPE_BYTES value
       * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
       * @property {number} TYPE_ENUM=14 TYPE_ENUM value
       * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
       * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
       * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
       * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
       */


      Field.Kind = function () {
        var valuesById = {},
            values = Object.create(valuesById);
        values[valuesById[0] = "TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "TYPE_DOUBLE"] = 1;
        values[valuesById[2] = "TYPE_FLOAT"] = 2;
        values[valuesById[3] = "TYPE_INT64"] = 3;
        values[valuesById[4] = "TYPE_UINT64"] = 4;
        values[valuesById[5] = "TYPE_INT32"] = 5;
        values[valuesById[6] = "TYPE_FIXED64"] = 6;
        values[valuesById[7] = "TYPE_FIXED32"] = 7;
        values[valuesById[8] = "TYPE_BOOL"] = 8;
        values[valuesById[9] = "TYPE_STRING"] = 9;
        values[valuesById[10] = "TYPE_GROUP"] = 10;
        values[valuesById[11] = "TYPE_MESSAGE"] = 11;
        values[valuesById[12] = "TYPE_BYTES"] = 12;
        values[valuesById[13] = "TYPE_UINT32"] = 13;
        values[valuesById[14] = "TYPE_ENUM"] = 14;
        values[valuesById[15] = "TYPE_SFIXED32"] = 15;
        values[valuesById[16] = "TYPE_SFIXED64"] = 16;
        values[valuesById[17] = "TYPE_SINT32"] = 17;
        values[valuesById[18] = "TYPE_SINT64"] = 18;
        return values;
      }();
      /**
       * Cardinality enum.
       * @name google.protobuf.Field.Cardinality
       * @enum {string}
       * @property {number} CARDINALITY_UNKNOWN=0 CARDINALITY_UNKNOWN value
       * @property {number} CARDINALITY_OPTIONAL=1 CARDINALITY_OPTIONAL value
       * @property {number} CARDINALITY_REQUIRED=2 CARDINALITY_REQUIRED value
       * @property {number} CARDINALITY_REPEATED=3 CARDINALITY_REPEATED value
       */


      Field.Cardinality = function () {
        var valuesById = {},
            values = Object.create(valuesById);
        values[valuesById[0] = "CARDINALITY_UNKNOWN"] = 0;
        values[valuesById[1] = "CARDINALITY_OPTIONAL"] = 1;
        values[valuesById[2] = "CARDINALITY_REQUIRED"] = 2;
        values[valuesById[3] = "CARDINALITY_REPEATED"] = 3;
        return values;
      }();

      return Field;
    }();

    protobuf.Enum = function () {
      /**
       * Properties of an Enum.
       * @memberof google.protobuf
       * @interface IEnum
       * @property {string|null} [name] Enum name
       * @property {Array.<google.protobuf.IEnumValue>|null} [enumvalue] Enum enumvalue
       * @property {Array.<google.protobuf.IOption>|null} [options] Enum options
       * @property {google.protobuf.ISourceContext|null} [sourceContext] Enum sourceContext
       * @property {google.protobuf.Syntax|null} [syntax] Enum syntax
       */

      /**
       * Constructs a new Enum.
       * @memberof google.protobuf
       * @classdesc Represents an Enum.
       * @implements IEnum
       * @constructor
       * @param {google.protobuf.IEnum=} [properties] Properties to set
       */
      function Enum(properties) {
        this.enumvalue = [];
        this.options = [];
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Enum name.
       * @member {string} name
       * @memberof google.protobuf.Enum
       * @instance
       */


      Enum.prototype.name = "";
      /**
       * Enum enumvalue.
       * @member {Array.<google.protobuf.IEnumValue>} enumvalue
       * @memberof google.protobuf.Enum
       * @instance
       */

      Enum.prototype.enumvalue = $util.emptyArray;
      /**
       * Enum options.
       * @member {Array.<google.protobuf.IOption>} options
       * @memberof google.protobuf.Enum
       * @instance
       */

      Enum.prototype.options = $util.emptyArray;
      /**
       * Enum sourceContext.
       * @member {google.protobuf.ISourceContext|null|undefined} sourceContext
       * @memberof google.protobuf.Enum
       * @instance
       */

      Enum.prototype.sourceContext = null;
      /**
       * Enum syntax.
       * @member {google.protobuf.Syntax} syntax
       * @memberof google.protobuf.Enum
       * @instance
       */

      Enum.prototype.syntax = 0;
      /**
       * Creates a new Enum instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Enum
       * @static
       * @param {google.protobuf.IEnum=} [properties] Properties to set
       * @returns {google.protobuf.Enum} Enum instance
       */

      Enum.create = function create(properties) {
        return new Enum(properties);
      };
      /**
       * Encodes the specified Enum message. Does not implicitly {@link google.protobuf.Enum.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Enum
       * @static
       * @param {google.protobuf.IEnum} message Enum message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Enum.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        if (message.enumvalue != null && message.enumvalue.length) for (var i = 0; i < message.enumvalue.length; ++i) {
          $root.google.protobuf.EnumValue.encode(message.enumvalue[i], writer.uint32(
          /* id 2, wireType 2 =*/
          18).fork()).ldelim();
        }
        if (message.options != null && message.options.length) for (var _i13 = 0; _i13 < message.options.length; ++_i13) {
          $root.google.protobuf.Option.encode(message.options[_i13], writer.uint32(
          /* id 3, wireType 2 =*/
          26).fork()).ldelim();
        }
        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) $root.google.protobuf.SourceContext.encode(message.sourceContext, writer.uint32(
        /* id 4, wireType 2 =*/
        34).fork()).ldelim();
        if (message.syntax != null && message.hasOwnProperty("syntax")) writer.uint32(
        /* id 5, wireType 0 =*/
        40).int32(message.syntax);
        return writer;
      };
      /**
       * Encodes the specified Enum message, length delimited. Does not implicitly {@link google.protobuf.Enum.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Enum
       * @static
       * @param {google.protobuf.IEnum} message Enum message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Enum.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes an Enum message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Enum
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Enum} Enum
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Enum.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Enum();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            case 2:
              if (!(message.enumvalue && message.enumvalue.length)) message.enumvalue = [];
              message.enumvalue.push($root.google.protobuf.EnumValue.decode(reader, reader.uint32()));
              break;

            case 3:
              if (!(message.options && message.options.length)) message.options = [];
              message.options.push($root.google.protobuf.Option.decode(reader, reader.uint32()));
              break;

            case 4:
              message.sourceContext = $root.google.protobuf.SourceContext.decode(reader, reader.uint32());
              break;

            case 5:
              message.syntax = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes an Enum message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Enum
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Enum} Enum
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Enum.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies an Enum message.
       * @function verify
       * @memberof google.protobuf.Enum
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Enum.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";

        if (message.enumvalue != null && message.hasOwnProperty("enumvalue")) {
          if (!Array.isArray(message.enumvalue)) return "enumvalue: array expected";

          for (var i = 0; i < message.enumvalue.length; ++i) {
            var error = $root.google.protobuf.EnumValue.verify(message.enumvalue[i]);
            if (error) return "enumvalue." + error;
          }
        }

        if (message.options != null && message.hasOwnProperty("options")) {
          if (!Array.isArray(message.options)) return "options: array expected";

          for (var _i14 = 0; _i14 < message.options.length; ++_i14) {
            var _error6 = $root.google.protobuf.Option.verify(message.options[_i14]);

            if (_error6) return "options." + _error6;
          }
        }

        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) {
          var _error7 = $root.google.protobuf.SourceContext.verify(message.sourceContext);

          if (_error7) return "sourceContext." + _error7;
        }

        if (message.syntax != null && message.hasOwnProperty("syntax")) switch (message.syntax) {
          default:
            return "syntax: enum value expected";

          case 0:
          case 1:
            break;
        }
        return null;
      };
      /**
       * Creates an Enum message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Enum
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Enum} Enum
       */


      Enum.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Enum) return object;
        var message = new $root.google.protobuf.Enum();
        if (object.name != null) message.name = String(object.name);

        if (object.enumvalue) {
          if (!Array.isArray(object.enumvalue)) throw TypeError(".google.protobuf.Enum.enumvalue: array expected");
          message.enumvalue = [];

          for (var i = 0; i < object.enumvalue.length; ++i) {
            if (_typeof(object.enumvalue[i]) !== "object") throw TypeError(".google.protobuf.Enum.enumvalue: object expected");
            message.enumvalue[i] = $root.google.protobuf.EnumValue.fromObject(object.enumvalue[i]);
          }
        }

        if (object.options) {
          if (!Array.isArray(object.options)) throw TypeError(".google.protobuf.Enum.options: array expected");
          message.options = [];

          for (var _i15 = 0; _i15 < object.options.length; ++_i15) {
            if (_typeof(object.options[_i15]) !== "object") throw TypeError(".google.protobuf.Enum.options: object expected");
            message.options[_i15] = $root.google.protobuf.Option.fromObject(object.options[_i15]);
          }
        }

        if (object.sourceContext != null) {
          if (_typeof(object.sourceContext) !== "object") throw TypeError(".google.protobuf.Enum.sourceContext: object expected");
          message.sourceContext = $root.google.protobuf.SourceContext.fromObject(object.sourceContext);
        }

        switch (object.syntax) {
          case "SYNTAX_PROTO2":
          case 0:
            message.syntax = 0;
            break;

          case "SYNTAX_PROTO3":
          case 1:
            message.syntax = 1;
            break;
        }

        return message;
      };
      /**
       * Creates a plain object from an Enum message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Enum
       * @static
       * @param {google.protobuf.Enum} message Enum
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Enum.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.arrays || options.defaults) {
          object.enumvalue = [];
          object.options = [];
        }

        if (options.defaults) {
          object.name = "";
          object.sourceContext = null;
          object.syntax = options.enums === String ? "SYNTAX_PROTO2" : 0;
        }

        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;

        if (message.enumvalue && message.enumvalue.length) {
          object.enumvalue = [];

          for (var j = 0; j < message.enumvalue.length; ++j) {
            object.enumvalue[j] = $root.google.protobuf.EnumValue.toObject(message.enumvalue[j], options);
          }
        }

        if (message.options && message.options.length) {
          object.options = [];

          for (var _j5 = 0; _j5 < message.options.length; ++_j5) {
            object.options[_j5] = $root.google.protobuf.Option.toObject(message.options[_j5], options);
          }
        }

        if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) object.sourceContext = $root.google.protobuf.SourceContext.toObject(message.sourceContext, options);
        if (message.syntax != null && message.hasOwnProperty("syntax")) object.syntax = options.enums === String ? $root.google.protobuf.Syntax[message.syntax] : message.syntax;
        return object;
      };
      /**
       * Converts this Enum to JSON.
       * @function toJSON
       * @memberof google.protobuf.Enum
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Enum.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Enum;
    }();

    protobuf.EnumValue = function () {
      /**
       * Properties of an EnumValue.
       * @memberof google.protobuf
       * @interface IEnumValue
       * @property {string|null} [name] EnumValue name
       * @property {number|null} [number] EnumValue number
       * @property {Array.<google.protobuf.IOption>|null} [options] EnumValue options
       */

      /**
       * Constructs a new EnumValue.
       * @memberof google.protobuf
       * @classdesc Represents an EnumValue.
       * @implements IEnumValue
       * @constructor
       * @param {google.protobuf.IEnumValue=} [properties] Properties to set
       */
      function EnumValue(properties) {
        this.options = [];
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * EnumValue name.
       * @member {string} name
       * @memberof google.protobuf.EnumValue
       * @instance
       */


      EnumValue.prototype.name = "";
      /**
       * EnumValue number.
       * @member {number} number
       * @memberof google.protobuf.EnumValue
       * @instance
       */

      EnumValue.prototype.number = 0;
      /**
       * EnumValue options.
       * @member {Array.<google.protobuf.IOption>} options
       * @memberof google.protobuf.EnumValue
       * @instance
       */

      EnumValue.prototype.options = $util.emptyArray;
      /**
       * Creates a new EnumValue instance using the specified properties.
       * @function create
       * @memberof google.protobuf.EnumValue
       * @static
       * @param {google.protobuf.IEnumValue=} [properties] Properties to set
       * @returns {google.protobuf.EnumValue} EnumValue instance
       */

      EnumValue.create = function create(properties) {
        return new EnumValue(properties);
      };
      /**
       * Encodes the specified EnumValue message. Does not implicitly {@link google.protobuf.EnumValue.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.EnumValue
       * @static
       * @param {google.protobuf.IEnumValue} message EnumValue message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      EnumValue.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        if (message.number != null && message.hasOwnProperty("number")) writer.uint32(
        /* id 2, wireType 0 =*/
        16).int32(message.number);
        if (message.options != null && message.options.length) for (var i = 0; i < message.options.length; ++i) {
          $root.google.protobuf.Option.encode(message.options[i], writer.uint32(
          /* id 3, wireType 2 =*/
          26).fork()).ldelim();
        }
        return writer;
      };
      /**
       * Encodes the specified EnumValue message, length delimited. Does not implicitly {@link google.protobuf.EnumValue.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.EnumValue
       * @static
       * @param {google.protobuf.IEnumValue} message EnumValue message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      EnumValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes an EnumValue message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.EnumValue
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.EnumValue} EnumValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      EnumValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.EnumValue();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            case 2:
              message.number = reader.int32();
              break;

            case 3:
              if (!(message.options && message.options.length)) message.options = [];
              message.options.push($root.google.protobuf.Option.decode(reader, reader.uint32()));
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes an EnumValue message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.EnumValue
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.EnumValue} EnumValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      EnumValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies an EnumValue message.
       * @function verify
       * @memberof google.protobuf.EnumValue
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      EnumValue.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";
        if (message.number != null && message.hasOwnProperty("number")) if (!$util.isInteger(message.number)) return "number: integer expected";

        if (message.options != null && message.hasOwnProperty("options")) {
          if (!Array.isArray(message.options)) return "options: array expected";

          for (var i = 0; i < message.options.length; ++i) {
            var error = $root.google.protobuf.Option.verify(message.options[i]);
            if (error) return "options." + error;
          }
        }

        return null;
      };
      /**
       * Creates an EnumValue message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.EnumValue
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.EnumValue} EnumValue
       */


      EnumValue.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.EnumValue) return object;
        var message = new $root.google.protobuf.EnumValue();
        if (object.name != null) message.name = String(object.name);
        if (object.number != null) message.number = object.number | 0;

        if (object.options) {
          if (!Array.isArray(object.options)) throw TypeError(".google.protobuf.EnumValue.options: array expected");
          message.options = [];

          for (var i = 0; i < object.options.length; ++i) {
            if (_typeof(object.options[i]) !== "object") throw TypeError(".google.protobuf.EnumValue.options: object expected");
            message.options[i] = $root.google.protobuf.Option.fromObject(object.options[i]);
          }
        }

        return message;
      };
      /**
       * Creates a plain object from an EnumValue message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.EnumValue
       * @static
       * @param {google.protobuf.EnumValue} message EnumValue
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      EnumValue.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.options = [];

        if (options.defaults) {
          object.name = "";
          object.number = 0;
        }

        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        if (message.number != null && message.hasOwnProperty("number")) object.number = message.number;

        if (message.options && message.options.length) {
          object.options = [];

          for (var j = 0; j < message.options.length; ++j) {
            object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
          }
        }

        return object;
      };
      /**
       * Converts this EnumValue to JSON.
       * @function toJSON
       * @memberof google.protobuf.EnumValue
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      EnumValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return EnumValue;
    }();

    protobuf.Option = function () {
      /**
       * Properties of an Option.
       * @memberof google.protobuf
       * @interface IOption
       * @property {string|null} [name] Option name
       * @property {google.protobuf.IAny|null} [value] Option value
       */

      /**
       * Constructs a new Option.
       * @memberof google.protobuf
       * @classdesc Represents an Option.
       * @implements IOption
       * @constructor
       * @param {google.protobuf.IOption=} [properties] Properties to set
       */
      function Option(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Option name.
       * @member {string} name
       * @memberof google.protobuf.Option
       * @instance
       */


      Option.prototype.name = "";
      /**
       * Option value.
       * @member {google.protobuf.IAny|null|undefined} value
       * @memberof google.protobuf.Option
       * @instance
       */

      Option.prototype.value = null;
      /**
       * Creates a new Option instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Option
       * @static
       * @param {google.protobuf.IOption=} [properties] Properties to set
       * @returns {google.protobuf.Option} Option instance
       */

      Option.create = function create(properties) {
        return new Option(properties);
      };
      /**
       * Encodes the specified Option message. Does not implicitly {@link google.protobuf.Option.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Option
       * @static
       * @param {google.protobuf.IOption} message Option message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Option.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.name);
        if (message.value != null && message.hasOwnProperty("value")) $root.google.protobuf.Any.encode(message.value, writer.uint32(
        /* id 2, wireType 2 =*/
        18).fork()).ldelim();
        return writer;
      };
      /**
       * Encodes the specified Option message, length delimited. Does not implicitly {@link google.protobuf.Option.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Option
       * @static
       * @param {google.protobuf.IOption} message Option message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Option.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes an Option message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Option
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Option} Option
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Option.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Option();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            case 2:
              message.value = $root.google.protobuf.Any.decode(reader, reader.uint32());
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes an Option message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Option
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Option} Option
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Option.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies an Option message.
       * @function verify
       * @memberof google.protobuf.Option
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Option.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";

        if (message.value != null && message.hasOwnProperty("value")) {
          var error = $root.google.protobuf.Any.verify(message.value);
          if (error) return "value." + error;
        }

        return null;
      };
      /**
       * Creates an Option message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Option
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Option} Option
       */


      Option.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Option) return object;
        var message = new $root.google.protobuf.Option();
        if (object.name != null) message.name = String(object.name);

        if (object.value != null) {
          if (_typeof(object.value) !== "object") throw TypeError(".google.protobuf.Option.value: object expected");
          message.value = $root.google.protobuf.Any.fromObject(object.value);
        }

        return message;
      };
      /**
       * Creates a plain object from an Option message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Option
       * @static
       * @param {google.protobuf.Option} message Option
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Option.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.name = "";
          object.value = null;
        }

        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        if (message.value != null && message.hasOwnProperty("value")) object.value = $root.google.protobuf.Any.toObject(message.value, options);
        return object;
      };
      /**
       * Converts this Option to JSON.
       * @function toJSON
       * @memberof google.protobuf.Option
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Option.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Option;
    }();
    /**
     * Syntax enum.
     * @name google.protobuf.Syntax
     * @enum {string}
     * @property {number} SYNTAX_PROTO2=0 SYNTAX_PROTO2 value
     * @property {number} SYNTAX_PROTO3=1 SYNTAX_PROTO3 value
     */


    protobuf.Syntax = function () {
      var valuesById = {},
          values = Object.create(valuesById);
      values[valuesById[0] = "SYNTAX_PROTO2"] = 0;
      values[valuesById[1] = "SYNTAX_PROTO3"] = 1;
      return values;
    }();

    protobuf.Any = function () {
      /**
       * Properties of an Any.
       * @memberof google.protobuf
       * @interface IAny
       * @property {string|null} [type_url] Any type_url
       * @property {Uint8Array|null} [value] Any value
       */

      /**
       * Constructs a new Any.
       * @memberof google.protobuf
       * @classdesc Represents an Any.
       * @implements IAny
       * @constructor
       * @param {google.protobuf.IAny=} [properties] Properties to set
       */
      function Any(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Any type_url.
       * @member {string} type_url
       * @memberof google.protobuf.Any
       * @instance
       */


      Any.prototype.type_url = "";
      /**
       * Any value.
       * @member {Uint8Array} value
       * @memberof google.protobuf.Any
       * @instance
       */

      Any.prototype.value = $util.newBuffer([]);
      /**
       * Creates a new Any instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Any
       * @static
       * @param {google.protobuf.IAny=} [properties] Properties to set
       * @returns {google.protobuf.Any} Any instance
       */

      Any.create = function create(properties) {
        return new Any(properties);
      };
      /**
       * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Any
       * @static
       * @param {google.protobuf.IAny} message Any message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Any.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type_url != null && message.hasOwnProperty("type_url")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.type_url);
        if (message.value != null && message.hasOwnProperty("value")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).bytes(message.value);
        return writer;
      };
      /**
       * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Any
       * @static
       * @param {google.protobuf.IAny} message Any message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Any.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes an Any message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Any
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Any} Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Any.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Any();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.type_url = reader.string();
              break;

            case 2:
              message.value = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes an Any message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Any
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Any} Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Any.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies an Any message.
       * @function verify
       * @memberof google.protobuf.Any
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Any.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        if (message.type_url != null && message.hasOwnProperty("type_url")) if (!$util.isString(message.type_url)) return "type_url: string expected";
        if (message.value != null && message.hasOwnProperty("value")) if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value))) return "value: buffer expected";
        return null;
      };
      /**
       * Creates an Any message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Any
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Any} Any
       */


      Any.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Any) return object;
        var message = new $root.google.protobuf.Any();
        if (object.type_url != null) message.type_url = String(object.type_url);
        if (object.value != null) if (typeof object.value === "string") $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);else if (object.value.length) message.value = object.value;
        return message;
      };
      /**
       * Creates a plain object from an Any message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Any
       * @static
       * @param {google.protobuf.Any} message Any
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Any.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.type_url = "";
          if (options.bytes === String) object.value = "";else {
            object.value = [];
            if (options.bytes !== Array) object.value = $util.newBuffer(object.value);
          }
        }

        if (message.type_url != null && message.hasOwnProperty("type_url")) object.type_url = message.type_url;
        if (message.value != null && message.hasOwnProperty("value")) object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
      };
      /**
       * Converts this Any to JSON.
       * @function toJSON
       * @memberof google.protobuf.Any
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Any.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Any;
    }();

    protobuf.Empty = function () {
      /**
       * Properties of an Empty.
       * @memberof google.protobuf
       * @interface IEmpty
       */

      /**
       * Constructs a new Empty.
       * @memberof google.protobuf
       * @classdesc Represents an Empty.
       * @implements IEmpty
       * @constructor
       * @param {google.protobuf.IEmpty=} [properties] Properties to set
       */
      function Empty(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Creates a new Empty instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Empty
       * @static
       * @param {google.protobuf.IEmpty=} [properties] Properties to set
       * @returns {google.protobuf.Empty} Empty instance
       */


      Empty.create = function create(properties) {
        return new Empty(properties);
      };
      /**
       * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Empty
       * @static
       * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Empty.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };
      /**
       * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Empty
       * @static
       * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Empty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes an Empty message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Empty
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Empty} Empty
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Empty.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Empty();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes an Empty message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Empty
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Empty} Empty
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Empty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies an Empty message.
       * @function verify
       * @memberof google.protobuf.Empty
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Empty.verify = function verify(message) {
        if (_typeof(message) !== "object" || message === null) return "object expected";
        return null;
      };
      /**
       * Creates an Empty message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Empty
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Empty} Empty
       */


      Empty.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Empty) return object;
        return new $root.google.protobuf.Empty();
      };
      /**
       * Creates a plain object from an Empty message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Empty
       * @static
       * @param {google.protobuf.Empty} message Empty
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Empty.toObject = function toObject() {
        return {};
      };
      /**
       * Converts this Empty to JSON.
       * @function toJSON
       * @memberof google.protobuf.Empty
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Empty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Empty;
    }();

    return protobuf;
  }();

  return google;
}();

exports.google = google;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icmlkZ2UvYXV0aC5wYi5qcyJdLCJuYW1lcyI6WyIkUmVhZGVyIiwiJHByb3RvYnVmIiwiUmVhZGVyIiwiJFdyaXRlciIsIldyaXRlciIsIiR1dGlsIiwidXRpbCIsIiRyb290Iiwicm9vdHMiLCJicmlkZ2UiLCJBdXRoIiwicnBjSW1wbCIsInJlcXVlc3REZWxpbWl0ZWQiLCJyZXNwb25zZURlbGltaXRlZCIsInJwYyIsIlNlcnZpY2UiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImRlc2NyaXB0b3IiLCJyZXF1ZXN0IiwiY2FsbGJhY2siLCJycGNDYWxsIiwiZ29vZ2xlIiwicHJvdG9idWYiLCJFbXB0eSIsIkFwaSIsInZhbHVlIiwiYnlVc2VybmFtZUFuZFBhc3N3b3JkIiwiVXNlcm5hbWVBbmRQYXNzd29yZCIsInByb3BlcnRpZXMiLCJrZXlzIiwiaSIsImxlbmd0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiaGFzT3duUHJvcGVydHkiLCJ1aW50MzIiLCJzdHJpbmciLCJlbmNvZGVEZWxpbWl0ZWQiLCJsZGVsaW0iLCJkZWNvZGUiLCJyZWFkZXIiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImRlY29kZURlbGltaXRlZCIsInZlcmlmeSIsImlzU3RyaW5nIiwiZnJvbU9iamVjdCIsIm9iamVjdCIsIlN0cmluZyIsInRvT2JqZWN0Iiwib3B0aW9ucyIsImRlZmF1bHRzIiwidG9KU09OIiwidG9KU09OT3B0aW9ucyIsIm1ldGhvZHMiLCJtaXhpbnMiLCJuYW1lIiwiZW1wdHlBcnJheSIsInZlcnNpb24iLCJzb3VyY2VDb250ZXh0Iiwic3ludGF4IiwiTWV0aG9kIiwiZm9yayIsIk9wdGlvbiIsIlNvdXJjZUNvbnRleHQiLCJNaXhpbiIsImludDMyIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImVycm9yIiwiVHlwZUVycm9yIiwiYXJyYXlzIiwiZW51bXMiLCJqIiwiU3ludGF4IiwicmVxdWVzdFR5cGVVcmwiLCJyZXF1ZXN0U3RyZWFtaW5nIiwicmVzcG9uc2VUeXBlVXJsIiwicmVzcG9uc2VTdHJlYW1pbmciLCJib29sIiwiQm9vbGVhbiIsInJvb3QiLCJmaWxlTmFtZSIsIlR5cGUiLCJmaWVsZHMiLCJvbmVvZnMiLCJGaWVsZCIsImtpbmQiLCJjYXJkaW5hbGl0eSIsIm51bWJlciIsInR5cGVVcmwiLCJvbmVvZkluZGV4IiwicGFja2VkIiwianNvbk5hbWUiLCJkZWZhdWx0VmFsdWUiLCJpc0ludGVnZXIiLCJLaW5kIiwiQ2FyZGluYWxpdHkiLCJ2YWx1ZXNCeUlkIiwidmFsdWVzIiwiRW51bSIsImVudW12YWx1ZSIsIkVudW1WYWx1ZSIsIkFueSIsInR5cGVfdXJsIiwibmV3QnVmZmVyIiwiYnl0ZXMiLCJiYXNlNjQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBMUI7QUFBQSxJQUFrQ0MsT0FBTyxHQUFHRixTQUFTLENBQUNHLE1BQXREO0FBQUEsSUFBOERDLEtBQUssR0FBR0osU0FBUyxDQUFDSyxJQUFoRixDLENBRUE7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHTixTQUFTLENBQUNPLEtBQVYsQ0FBZ0IsU0FBaEIsTUFBK0JQLFNBQVMsQ0FBQ08sS0FBVixDQUFnQixTQUFoQixJQUE2QixFQUE1RCxDQUFkOztBQUVPLElBQU1DLE1BQU0sR0FBR0YsS0FBSyxDQUFDRSxNQUFOLEdBQWdCLFlBQU07QUFFeEM7Ozs7O0FBS0EsTUFBTUEsTUFBTSxHQUFHLEVBQWY7O0FBRUFBLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFlLFlBQVc7QUFFdEI7Ozs7Ozs7Ozs7QUFVQSxhQUFTQSxJQUFULENBQWNDLE9BQWQsRUFBdUJDLGdCQUF2QixFQUF5Q0MsaUJBQXpDLEVBQTREO0FBQ3hE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U0FBUyxDQUFDSyxJQUFWLENBQWUyRCxhQUEvQyxDQUFQO0FBQ0gsT0FGRDs7QUFJQSxhQUFPckMsS0FBUDtBQUNILEtBOUpnQixFQUFqQjs7QUFnS0EsV0FBT0QsUUFBUDtBQUNILEdBeHdHaUIsRUFBbEI7O0FBMHdHQSxTQUFPRCxNQUFQO0FBQ0gsQ0FweEdvQyxFQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbW1vbiBhbGlhc2VzXG5jb25zdCAkUmVhZGVyID0gJHByb3RvYnVmLlJlYWRlciwgJFdyaXRlciA9ICRwcm90b2J1Zi5Xcml0ZXIsICR1dGlsID0gJHByb3RvYnVmLnV0aWw7XG5cbi8vIEV4cG9ydGVkIHJvb3QgbmFtZXNwYWNlXG5jb25zdCAkcm9vdCA9ICRwcm90b2J1Zi5yb290c1tcImRlZmF1bHRcIl0gfHwgKCRwcm90b2J1Zi5yb290c1tcImRlZmF1bHRcIl0gPSB7fSk7XG5cbmV4cG9ydCBjb25zdCBicmlkZ2UgPSAkcm9vdC5icmlkZ2UgPSAoKCkgPT4ge1xuXG4gICAgLyoqXG4gICAgICogTmFtZXNwYWNlIGJyaWRnZS5cbiAgICAgKiBAZXhwb3J0cyBicmlkZ2VcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICovXG4gICAgY29uc3QgYnJpZGdlID0ge307XG5cbiAgICBicmlkZ2UuQXV0aCA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBBdXRoIHNlcnZpY2UuXG4gICAgICAgICAqIEBtZW1iZXJvZiBicmlkZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGFuIEF1dGhcbiAgICAgICAgICogQGV4dGVuZHMgJHByb3RvYnVmLnJwYy5TZXJ2aWNlXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SUENJbXBsfSBycGNJbXBsIFJQQyBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXF1ZXN0RGVsaW1pdGVkPWZhbHNlXSBXaGV0aGVyIHJlcXVlc3RzIGFyZSBsZW5ndGgtZGVsaW1pdGVkXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3BvbnNlRGVsaW1pdGVkPWZhbHNlXSBXaGV0aGVyIHJlc3BvbnNlcyBhcmUgbGVuZ3RoLWRlbGltaXRlZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQXV0aChycGNJbXBsLCByZXF1ZXN0RGVsaW1pdGVkLCByZXNwb25zZURlbGltaXRlZCkge1xuICAgICAgICAgICAgJHByb3RvYnVmLnJwYy5TZXJ2aWNlLmNhbGwodGhpcywgcnBjSW1wbCwgcmVxdWVzdERlbGltaXRlZCwgcmVzcG9uc2VEZWxpbWl0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgKEF1dGgucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSgkcHJvdG9idWYucnBjLlNlcnZpY2UucHJvdG90eXBlKSkuY29uc3RydWN0b3IgPSBBdXRoO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIG5ldyBBdXRoIHNlcnZpY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBycGMgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5BdXRoXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUlBDSW1wbH0gcnBjSW1wbCBSUEMgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbcmVxdWVzdERlbGltaXRlZD1mYWxzZV0gV2hldGhlciByZXF1ZXN0cyBhcmUgbGVuZ3RoLWRlbGltaXRlZFxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNwb25zZURlbGltaXRlZD1mYWxzZV0gV2hldGhlciByZXNwb25zZXMgYXJlIGxlbmd0aC1kZWxpbWl0ZWRcbiAgICAgICAgICogQHJldHVybnMge0F1dGh9IFJQQyBzZXJ2aWNlLiBVc2VmdWwgd2hlcmUgcmVxdWVzdHMgYW5kL29yIHJlc3BvbnNlcyBhcmUgc3RyZWFtZWQuXG4gICAgICAgICAqL1xuICAgICAgICBBdXRoLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShycGNJbXBsLCByZXF1ZXN0RGVsaW1pdGVkLCByZXNwb25zZURlbGltaXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHJwY0ltcGwsIHJlcXVlc3REZWxpbWl0ZWQsIHJlc3BvbnNlRGVsaW1pdGVkKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgYXMgdXNlZCBieSB7QGxpbmsgYnJpZGdlLkF1dGgjZGVzY3JpcHRvcn0uXG4gICAgICAgICAqIEBtZW1iZXJvZiBicmlkZ2UuQXV0aFxuICAgICAgICAgKiBAdHlwZWRlZiBEZXNjcmlwdG9yQ2FsbGJhY2tcbiAgICAgICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAgICAgKiBAcGFyYW0ge0Vycm9yfG51bGx9IGVycm9yIEVycm9yLCBpZiBhbnlcbiAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuQXBpfSBbcmVzcG9uc2VdIEFwaVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbHMgRGVzY3JpcHRvci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlc2NyaXB0b3JcbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5BdXRoXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JRW1wdHl9IHJlcXVlc3QgRW1wdHkgbWVzc2FnZSBvciBwbGFpbiBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIHticmlkZ2UuQXV0aC5EZXNjcmlwdG9yQ2FsbGJhY2t9IGNhbGxiYWNrIE5vZGUtc3R5bGUgY2FsbGJhY2sgY2FsbGVkIHdpdGggdGhlIGVycm9yLCBpZiBhbnksIGFuZCBBcGlcbiAgICAgICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgICAgICogQHZhcmlhdGlvbiAxXG4gICAgICAgICAqL1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aC5wcm90b3R5cGUuZGVzY3JpcHRvciA9IGZ1bmN0aW9uIGRlc2NyaXB0b3IocmVxdWVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJwY0NhbGwoZGVzY3JpcHRvciwgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkVtcHR5LCAkcm9vdC5nb29nbGUucHJvdG9idWYuQXBpLCByZXF1ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgIH0sIFwibmFtZVwiLCB7IHZhbHVlOiBcIkRlc2NyaXB0b3JcIiB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbHMgRGVzY3JpcHRvci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlc2NyaXB0b3JcbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5BdXRoXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JRW1wdHl9IHJlcXVlc3QgRW1wdHkgbWVzc2FnZSBvciBwbGFpbiBvYmplY3RcbiAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8Z29vZ2xlLnByb3RvYnVmLkFwaT59IFByb21pc2VcbiAgICAgICAgICogQHZhcmlhdGlvbiAyXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayBhcyB1c2VkIGJ5IHtAbGluayBicmlkZ2UuQXV0aCNieVVzZXJuYW1lQW5kUGFzc3dvcmR9LlxuICAgICAgICAgKiBAbWVtYmVyb2YgYnJpZGdlLkF1dGhcbiAgICAgICAgICogQHR5cGVkZWYgQnlVc2VybmFtZUFuZFBhc3N3b3JkQ2FsbGJhY2tcbiAgICAgICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAgICAgKiBAcGFyYW0ge0Vycm9yfG51bGx9IGVycm9yIEVycm9yLCBpZiBhbnlcbiAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuQXBpfSBbcmVzcG9uc2VdIEFwaVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbHMgQnlVc2VybmFtZUFuZFBhc3N3b3JkLlxuICAgICAgICAgKiBAZnVuY3Rpb24gYnlVc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEBtZW1iZXJvZiBicmlkZ2UuQXV0aFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHBhcmFtIHticmlkZ2UuSVVzZXJuYW1lQW5kUGFzc3dvcmR9IHJlcXVlc3QgVXNlcm5hbWVBbmRQYXNzd29yZCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ge2JyaWRnZS5BdXRoLkJ5VXNlcm5hbWVBbmRQYXNzd29yZENhbGxiYWNrfSBjYWxsYmFjayBOb2RlLXN0eWxlIGNhbGxiYWNrIGNhbGxlZCB3aXRoIHRoZSBlcnJvciwgaWYgYW55LCBhbmQgQXBpXG4gICAgICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICAgICAqIEB2YXJpYXRpb24gMVxuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGgucHJvdG90eXBlLmJ5VXNlcm5hbWVBbmRQYXNzd29yZCA9IGZ1bmN0aW9uIGJ5VXNlcm5hbWVBbmRQYXNzd29yZChyZXF1ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnBjQ2FsbChieVVzZXJuYW1lQW5kUGFzc3dvcmQsICRyb290LmJyaWRnZS5Vc2VybmFtZUFuZFBhc3N3b3JkLCAkcm9vdC5nb29nbGUucHJvdG9idWYuQXBpLCByZXF1ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgIH0sIFwibmFtZVwiLCB7IHZhbHVlOiBcIkJ5VXNlcm5hbWVBbmRQYXNzd29yZFwiIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxscyBCeVVzZXJuYW1lQW5kUGFzc3dvcmQuXG4gICAgICAgICAqIEBmdW5jdGlvbiBieVVzZXJuYW1lQW5kUGFzc3dvcmRcbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5BdXRoXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0ge2JyaWRnZS5JVXNlcm5hbWVBbmRQYXNzd29yZH0gcmVxdWVzdCBVc2VybmFtZUFuZFBhc3N3b3JkIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0XG4gICAgICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGdvb2dsZS5wcm90b2J1Zi5BcGk+fSBQcm9taXNlXG4gICAgICAgICAqIEB2YXJpYXRpb24gMlxuICAgICAgICAgKi9cblxuICAgICAgICByZXR1cm4gQXV0aDtcbiAgICB9KSgpO1xuXG4gICAgYnJpZGdlLlVzZXJuYW1lQW5kUGFzc3dvcmQgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBVc2VybmFtZUFuZFBhc3N3b3JkLlxuICAgICAgICAgKiBAbWVtYmVyb2YgYnJpZGdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSVVzZXJuYW1lQW5kUGFzc3dvcmRcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW3VzZXJuYW1lXSBVc2VybmFtZUFuZFBhc3N3b3JkIHVzZXJuYW1lXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtwYXNzd29yZF0gVXNlcm5hbWVBbmRQYXNzd29yZCBwYXNzd29yZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBVc2VybmFtZUFuZFBhc3N3b3JkLlxuICAgICAgICAgKiBAbWVtYmVyb2YgYnJpZGdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIFVzZXJuYW1lQW5kUGFzc3dvcmQuXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElVc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge2JyaWRnZS5JVXNlcm5hbWVBbmRQYXNzd29yZD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gVXNlcm5hbWVBbmRQYXNzd29yZChwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5c1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZXJuYW1lQW5kUGFzc3dvcmQgdXNlcm5hbWUuXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gdXNlcm5hbWVcbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5Vc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgVXNlcm5hbWVBbmRQYXNzd29yZC5wcm90b3R5cGUudXNlcm5hbWUgPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2VybmFtZUFuZFBhc3N3b3JkIHBhc3N3b3JkLlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHBhc3N3b3JkXG4gICAgICAgICAqIEBtZW1iZXJvZiBicmlkZ2UuVXNlcm5hbWVBbmRQYXNzd29yZFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFVzZXJuYW1lQW5kUGFzc3dvcmQucHJvdG90eXBlLnBhc3N3b3JkID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBVc2VybmFtZUFuZFBhc3N3b3JkIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgYnJpZGdlLlVzZXJuYW1lQW5kUGFzc3dvcmRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge2JyaWRnZS5JVXNlcm5hbWVBbmRQYXNzd29yZD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB7YnJpZGdlLlVzZXJuYW1lQW5kUGFzc3dvcmR9IFVzZXJuYW1lQW5kUGFzc3dvcmQgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFVzZXJuYW1lQW5kUGFzc3dvcmQuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlcm5hbWVBbmRQYXNzd29yZChwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIFVzZXJuYW1lQW5kUGFzc3dvcmQgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgYnJpZGdlLlVzZXJuYW1lQW5kUGFzc3dvcmQudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5Vc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHticmlkZ2UuSVVzZXJuYW1lQW5kUGFzc3dvcmR9IG1lc3NhZ2UgVXNlcm5hbWVBbmRQYXNzd29yZCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIFVzZXJuYW1lQW5kUGFzc3dvcmQuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgaWYgKCF3cml0ZXIpXG4gICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLnVzZXJuYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInVzZXJuYW1lXCIpKVxuICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMiA9Ki8xMCkuc3RyaW5nKG1lc3NhZ2UudXNlcm5hbWUpO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UucGFzc3dvcmQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicGFzc3dvcmRcIikpXG4gICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAyLCB3aXJlVHlwZSAyID0qLzE4KS5zdHJpbmcobWVzc2FnZS5wYXNzd29yZCk7XG4gICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgVXNlcm5hbWVBbmRQYXNzd29yZCBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBicmlkZ2UuVXNlcm5hbWVBbmRQYXNzd29yZC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZFxuICAgICAgICAgKiBAbWVtYmVyb2YgYnJpZGdlLlVzZXJuYW1lQW5kUGFzc3dvcmRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge2JyaWRnZS5JVXNlcm5hbWVBbmRQYXNzd29yZH0gbWVzc2FnZSBVc2VybmFtZUFuZFBhc3N3b3JkIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgKi9cbiAgICAgICAgVXNlcm5hbWVBbmRQYXNzd29yZC5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIFVzZXJuYW1lQW5kUGFzc3dvcmQgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgYnJpZGdlLlVzZXJuYW1lQW5kUGFzc3dvcmRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge2JyaWRnZS5Vc2VybmFtZUFuZFBhc3N3b3JkfSBVc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgVXNlcm5hbWVBbmRQYXNzd29yZC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XG4gICAgICAgICAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5icmlkZ2UuVXNlcm5hbWVBbmRQYXNzd29yZCgpO1xuICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnVzZXJuYW1lID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UucGFzc3dvcmQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBVc2VybmFtZUFuZFBhc3N3b3JkIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5Vc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEByZXR1cm5zIHticmlkZ2UuVXNlcm5hbWVBbmRQYXNzd29yZH0gVXNlcm5hbWVBbmRQYXNzd29yZFxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIFVzZXJuYW1lQW5kUGFzc3dvcmQuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xuICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZlcmlmaWVzIGEgVXNlcm5hbWVBbmRQYXNzd29yZCBtZXNzYWdlLlxuICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XG4gICAgICAgICAqIEBtZW1iZXJvZiBicmlkZ2UuVXNlcm5hbWVBbmRQYXNzd29yZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxuICAgICAgICAgKi9cbiAgICAgICAgVXNlcm5hbWVBbmRQYXNzd29yZC52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS51c2VybmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ1c2VybmFtZVwiKSlcbiAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UudXNlcm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1c2VybmFtZTogc3RyaW5nIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5wYXNzd29yZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJwYXNzd29yZFwiKSlcbiAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UucGFzc3dvcmQpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJwYXNzd29yZDogc3RyaW5nIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIFVzZXJuYW1lQW5kUGFzc3dvcmQgbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxuICAgICAgICAgKiBAbWVtYmVyb2YgYnJpZGdlLlVzZXJuYW1lQW5kUGFzc3dvcmRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgUGxhaW4gb2JqZWN0XG4gICAgICAgICAqIEByZXR1cm5zIHticmlkZ2UuVXNlcm5hbWVBbmRQYXNzd29yZH0gVXNlcm5hbWVBbmRQYXNzd29yZFxuICAgICAgICAgKi9cbiAgICAgICAgVXNlcm5hbWVBbmRQYXNzd29yZC5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5icmlkZ2UuVXNlcm5hbWVBbmRQYXNzd29yZClcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgJHJvb3QuYnJpZGdlLlVzZXJuYW1lQW5kUGFzc3dvcmQoKTtcbiAgICAgICAgICAgIGlmIChvYmplY3QudXNlcm5hbWUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnVzZXJuYW1lID0gU3RyaW5nKG9iamVjdC51c2VybmFtZSk7XG4gICAgICAgICAgICBpZiAob2JqZWN0LnBhc3N3b3JkICE9IG51bGwpXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5wYXNzd29yZCA9IFN0cmluZyhvYmplY3QucGFzc3dvcmQpO1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIFVzZXJuYW1lQW5kUGFzc3dvcmQgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxuICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5Vc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHticmlkZ2UuVXNlcm5hbWVBbmRQYXNzd29yZH0gbWVzc2FnZSBVc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgVXNlcm5hbWVBbmRQYXNzd29yZC50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucylcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICBsZXQgb2JqZWN0ID0ge307XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0cykge1xuICAgICAgICAgICAgICAgIG9iamVjdC51c2VybmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXNzYWdlLnVzZXJuYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInVzZXJuYW1lXCIpKVxuICAgICAgICAgICAgICAgIG9iamVjdC51c2VybmFtZSA9IG1lc3NhZ2UudXNlcm5hbWU7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5wYXNzd29yZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJwYXNzd29yZFwiKSlcbiAgICAgICAgICAgICAgICBvYmplY3QucGFzc3dvcmQgPSBtZXNzYWdlLnBhc3N3b3JkO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydHMgdGhpcyBVc2VybmFtZUFuZFBhc3N3b3JkIHRvIEpTT04uXG4gICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cbiAgICAgICAgICogQG1lbWJlcm9mIGJyaWRnZS5Vc2VybmFtZUFuZFBhc3N3b3JkXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBVc2VybmFtZUFuZFBhc3N3b3JkLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gVXNlcm5hbWVBbmRQYXNzd29yZDtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIGJyaWRnZTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBnb29nbGUgPSAkcm9vdC5nb29nbGUgPSAoKCkgPT4ge1xuXG4gICAgLyoqXG4gICAgICogTmFtZXNwYWNlIGdvb2dsZS5cbiAgICAgKiBAZXhwb3J0cyBnb29nbGVcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICovXG4gICAgY29uc3QgZ29vZ2xlID0ge307XG5cbiAgICBnb29nbGUucHJvdG9idWYgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWVzcGFjZSBwcm90b2J1Zi5cbiAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZVxuICAgICAgICAgKiBAbmFtZXNwYWNlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBwcm90b2J1ZiA9IHt9O1xuXG4gICAgICAgIHByb3RvYnVmLkFwaSA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGFuIEFwaS5cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWZcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUFwaVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW25hbWVdIEFwaSBuYW1lXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5Ljxnb29nbGUucHJvdG9idWYuSU1ldGhvZD58bnVsbH0gW21ldGhvZHNdIEFwaSBtZXRob2RzXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5Ljxnb29nbGUucHJvdG9idWYuSU9wdGlvbj58bnVsbH0gW29wdGlvbnNdIEFwaSBvcHRpb25zXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdmVyc2lvbl0gQXBpIHZlcnNpb25cbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Z29vZ2xlLnByb3RvYnVmLklTb3VyY2VDb250ZXh0fG51bGx9IFtzb3VyY2VDb250ZXh0XSBBcGkgc291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48Z29vZ2xlLnByb3RvYnVmLklNaXhpbj58bnVsbH0gW21peGluc10gQXBpIG1peGluc1xuICAgICAgICAgICAgICogQHByb3BlcnR5IHtnb29nbGUucHJvdG9idWYuU3ludGF4fG51bGx9IFtzeW50YXhdIEFwaSBzeW50YXhcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgQXBpLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGFuIEFwaS5cbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElBcGlcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUFwaT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBBcGkocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMubWl4aW5zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5c1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleXNbaV1dID0gcHJvcGVydGllc1trZXlzW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBcGkgbmFtZS5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5BcGlcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBBcGkucHJvdG90eXBlLm5hbWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFwaSBtZXRob2RzLlxuICAgICAgICAgICAgICogQG1lbWJlciB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JTWV0aG9kPn0gbWV0aG9kc1xuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5BcGlcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBBcGkucHJvdG90eXBlLm1ldGhvZHMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFwaSBvcHRpb25zLlxuICAgICAgICAgICAgICogQG1lbWJlciB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JT3B0aW9uPn0gb3B0aW9uc1xuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5BcGlcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBBcGkucHJvdG90eXBlLm9wdGlvbnMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFwaSB2ZXJzaW9uLlxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB2ZXJzaW9uXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkFwaVxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEFwaS5wcm90b3R5cGUudmVyc2lvbiA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQXBpIHNvdXJjZUNvbnRleHQuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtnb29nbGUucHJvdG9idWYuSVNvdXJjZUNvbnRleHR8bnVsbHx1bmRlZmluZWR9IHNvdXJjZUNvbnRleHRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQXBpXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXBpLnByb3RvdHlwZS5zb3VyY2VDb250ZXh0ID0gbnVsbDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBcGkgbWl4aW5zLlxuICAgICAgICAgICAgICogQG1lbWJlciB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JTWl4aW4+fSBtaXhpbnNcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQXBpXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXBpLnByb3RvdHlwZS5taXhpbnMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFwaSBzeW50YXguXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtnb29nbGUucHJvdG9idWYuU3ludGF4fSBzeW50YXhcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQXBpXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXBpLnByb3RvdHlwZS5zeW50YXggPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgQXBpIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQXBpXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JQXBpPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLkFwaX0gQXBpIGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEFwaS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXBpKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQXBpIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIGdvb2dsZS5wcm90b2J1Zi5BcGkudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkFwaVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUFwaX0gbWVzc2FnZSBBcGkgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXBpLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMiA9Ki8xMCkuc3RyaW5nKG1lc3NhZ2UubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubWV0aG9kcyAhPSBudWxsICYmIG1lc3NhZ2UubWV0aG9kcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5tZXRob2RzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk1ldGhvZC5lbmNvZGUobWVzc2FnZS5tZXRob2RzW2ldLCB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDIgPSovMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub3B0aW9ucyAhPSBudWxsICYmIG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi5lbmNvZGUobWVzc2FnZS5vcHRpb25zW2ldLCB3cml0ZXIudWludDMyKC8qIGlkIDMsIHdpcmVUeXBlIDIgPSovMjYpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudmVyc2lvbiAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ2ZXJzaW9uXCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDQsIHdpcmVUeXBlIDIgPSovMzQpLnN0cmluZyhtZXNzYWdlLnZlcnNpb24pO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnNvdXJjZUNvbnRleHQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic291cmNlQ29udGV4dFwiKSlcbiAgICAgICAgICAgICAgICAgICAgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQuZW5jb2RlKG1lc3NhZ2Uuc291cmNlQ29udGV4dCwgd3JpdGVyLnVpbnQzMigvKiBpZCA1LCB3aXJlVHlwZSAyID0qLzQyKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm1peGlucyAhPSBudWxsICYmIG1lc3NhZ2UubWl4aW5zLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLm1peGlucy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgICRyb290Lmdvb2dsZS5wcm90b2J1Zi5NaXhpbi5lbmNvZGUobWVzc2FnZS5taXhpbnNbaV0sIHdyaXRlci51aW50MzIoLyogaWQgNiwgd2lyZVR5cGUgMiA9Ki81MCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zeW50YXggIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic3ludGF4XCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDcsIHdpcmVUeXBlIDAgPSovNTYpLmludDMyKG1lc3NhZ2Uuc3ludGF4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQXBpIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIGdvb2dsZS5wcm90b2J1Zi5BcGkudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkFwaVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUFwaX0gbWVzc2FnZSBBcGkgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXBpLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVjb2RlcyBhbiBBcGkgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQXBpXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLkFwaX0gQXBpXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEFwaS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gJFJlYWRlci5jcmVhdGUocmVhZGVyKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5nb29nbGUucHJvdG9idWYuQXBpKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG1lc3NhZ2UubWV0aG9kcyAmJiBtZXNzYWdlLm1ldGhvZHMubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWV0aG9kcy5wdXNoKCRyb290Lmdvb2dsZS5wcm90b2J1Zi5NZXRob2QuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobWVzc2FnZS5vcHRpb25zICYmIG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zLnB1c2goJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnZlcnNpb24gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zb3VyY2VDb250ZXh0ID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShtZXNzYWdlLm1peGlucyAmJiBtZXNzYWdlLm1peGlucy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWl4aW5zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1peGlucy5wdXNoKCRyb290Lmdvb2dsZS5wcm90b2J1Zi5NaXhpbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN5bnRheCA9IHJlYWRlci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVjb2RlcyBhbiBBcGkgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlciwgbGVuZ3RoIGRlbGltaXRlZC5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQXBpXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuQXBpfSBBcGlcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXBpLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWZXJpZmllcyBhbiBBcGkgbWVzc2FnZS5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQXBpXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBtZXNzYWdlIFBsYWluIG9iamVjdCB0byB2ZXJpZnlcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEFwaS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIiB8fCBtZXNzYWdlID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3QgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm5hbWU6IHN0cmluZyBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm1ldGhvZHMgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibWV0aG9kc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZS5tZXRob2RzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm1ldGhvZHM6IGFycmF5IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5tZXRob2RzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuTWV0aG9kLnZlcmlmeShtZXNzYWdlLm1ldGhvZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm1ldGhvZHMuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5vcHRpb25zICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2Uub3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvcHRpb25zOiBhcnJheSBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi52ZXJpZnkobWVzc2FnZS5vcHRpb25zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvcHRpb25zLlwiICsgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudmVyc2lvbiAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ2ZXJzaW9uXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UudmVyc2lvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJzaW9uOiBzdHJpbmcgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zb3VyY2VDb250ZXh0ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInNvdXJjZUNvbnRleHRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQudmVyaWZ5KG1lc3NhZ2Uuc291cmNlQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInNvdXJjZUNvbnRleHQuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubWl4aW5zICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm1peGluc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZS5taXhpbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibWl4aW5zOiBhcnJheSBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UubWl4aW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuTWl4aW4udmVyaWZ5KG1lc3NhZ2UubWl4aW5zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJtaXhpbnMuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zeW50YXggIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic3ludGF4XCIpKVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2Uuc3ludGF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzeW50YXg6IGVudW0gdmFsdWUgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGFuIEFwaSBtZXNzYWdlIGZyb20gYSBwbGFpbiBvYmplY3QuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgaW50ZXJuYWwgdHlwZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5BcGlcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuQXBpfSBBcGlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXBpLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5nb29nbGUucHJvdG9idWYuQXBpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5BcGkoKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gU3RyaW5nKG9iamVjdC5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdC5tZXRob2RzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuQXBpLm1ldGhvZHM6IGFycmF5IGV4cGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubWV0aG9kcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QubWV0aG9kc1tpXSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCIuZ29vZ2xlLnByb3RvYnVmLkFwaS5tZXRob2RzOiBvYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1ldGhvZHNbaV0gPSAkcm9vdC5nb29nbGUucHJvdG9idWYuTWV0aG9kLmZyb21PYmplY3Qob2JqZWN0Lm1ldGhvZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0Lm9wdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLmdvb2dsZS5wcm90b2J1Zi5BcGkub3B0aW9uczogYXJyYXkgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5vcHRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5vcHRpb25zW2ldICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuQXBpLm9wdGlvbnM6IG9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9uc1tpXSA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24uZnJvbU9iamVjdChvYmplY3Qub3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC52ZXJzaW9uICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudmVyc2lvbiA9IFN0cmluZyhvYmplY3QudmVyc2lvbik7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5zb3VyY2VDb250ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Quc291cmNlQ29udGV4dCAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuQXBpLnNvdXJjZUNvbnRleHQ6IG9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zb3VyY2VDb250ZXh0ID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQuZnJvbU9iamVjdChvYmplY3Quc291cmNlQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubWl4aW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmplY3QubWl4aW5zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuQXBpLm1peGluczogYXJyYXkgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWl4aW5zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm1peGlucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QubWl4aW5zW2ldICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuQXBpLm1peGluczogb2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5taXhpbnNbaV0gPSAkcm9vdC5nb29nbGUucHJvdG9idWYuTWl4aW4uZnJvbU9iamVjdChvYmplY3QubWl4aW5zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5zeW50YXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1lOVEFYX1BST1RPMlwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1lOVEFYX1BST1RPM1wiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhbiBBcGkgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkFwaVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuQXBpfSBtZXNzYWdlIEFwaVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBBcGkudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFycmF5cyB8fCBvcHRpb25zLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5tZXRob2RzID0gW107XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5taXhpbnMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QudmVyc2lvbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zb3VyY2VDb250ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnN5bnRheCA9IG9wdGlvbnMuZW51bXMgPT09IFN0cmluZyA/IFwiU1lOVEFYX1BST1RPMlwiIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubmFtZSA9IG1lc3NhZ2UubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5tZXRob2RzICYmIG1lc3NhZ2UubWV0aG9kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtZXNzYWdlLm1ldGhvZHMubGVuZ3RoOyArK2opXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QubWV0aG9kc1tqXSA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5NZXRob2QudG9PYmplY3QobWVzc2FnZS5tZXRob2RzW2pdLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub3B0aW9ucyAmJiBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytqKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm9wdGlvbnNbal0gPSAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLnRvT2JqZWN0KG1lc3NhZ2Uub3B0aW9uc1tqXSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnZlcnNpb24gIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidmVyc2lvblwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZlcnNpb24gPSBtZXNzYWdlLnZlcnNpb247XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc291cmNlQ29udGV4dCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzb3VyY2VDb250ZXh0XCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3Quc291cmNlQ29udGV4dCA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0LnRvT2JqZWN0KG1lc3NhZ2Uuc291cmNlQ29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubWl4aW5zICYmIG1lc3NhZ2UubWl4aW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QubWl4aW5zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzc2FnZS5taXhpbnMubGVuZ3RoOyArK2opXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QubWl4aW5zW2pdID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk1peGluLnRvT2JqZWN0KG1lc3NhZ2UubWl4aW5zW2pdLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc3ludGF4ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInN5bnRheFwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnN5bnRheCA9IG9wdGlvbnMuZW51bXMgPT09IFN0cmluZyA/ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5TeW50YXhbbWVzc2FnZS5zeW50YXhdIDogbWVzc2FnZS5zeW50YXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBBcGkgdG8gSlNPTi5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQXBpXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXBpLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudG9PYmplY3QodGhpcywgJHByb3RvYnVmLnV0aWwudG9KU09OT3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gQXBpO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHByb3RvYnVmLk1ldGhvZCA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgTWV0aG9kLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJTWV0aG9kXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbbmFtZV0gTWV0aG9kIG5hbWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtyZXF1ZXN0VHlwZVVybF0gTWV0aG9kIHJlcXVlc3RUeXBlVXJsXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW58bnVsbH0gW3JlcXVlc3RTdHJlYW1pbmddIE1ldGhvZCByZXF1ZXN0U3RyZWFtaW5nXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbcmVzcG9uc2VUeXBlVXJsXSBNZXRob2QgcmVzcG9uc2VUeXBlVXJsXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW58bnVsbH0gW3Jlc3BvbnNlU3RyZWFtaW5nXSBNZXRob2QgcmVzcG9uc2VTdHJlYW1pbmdcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JT3B0aW9uPnxudWxsfSBbb3B0aW9uc10gTWV0aG9kIG9wdGlvbnNcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Z29vZ2xlLnByb3RvYnVmLlN5bnRheHxudWxsfSBbc3ludGF4XSBNZXRob2Qgc3ludGF4XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IE1ldGhvZC5cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWZcbiAgICAgICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIE1ldGhvZC5cbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElNZXRob2RcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSU1ldGhvZD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBNZXRob2QocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleXNbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWV0aG9kIG5hbWUuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWV0aG9kXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgTWV0aG9kLnByb3RvdHlwZS5uYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNZXRob2QgcmVxdWVzdFR5cGVVcmwuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHJlcXVlc3RUeXBlVXJsXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1ldGhvZC5wcm90b3R5cGUucmVxdWVzdFR5cGVVcmwgPSBcIlwiO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1ldGhvZCByZXF1ZXN0U3RyZWFtaW5nLlxuICAgICAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gcmVxdWVzdFN0cmVhbWluZ1xuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5NZXRob2RcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBNZXRob2QucHJvdG90eXBlLnJlcXVlc3RTdHJlYW1pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNZXRob2QgcmVzcG9uc2VUeXBlVXJsLlxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSByZXNwb25zZVR5cGVVcmxcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWV0aG9kXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgTWV0aG9kLnByb3RvdHlwZS5yZXNwb25zZVR5cGVVcmwgPSBcIlwiO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1ldGhvZCByZXNwb25zZVN0cmVhbWluZy5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IHJlc3BvbnNlU3RyZWFtaW5nXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1ldGhvZC5wcm90b3R5cGUucmVzcG9uc2VTdHJlYW1pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNZXRob2Qgb3B0aW9ucy5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge0FycmF5Ljxnb29nbGUucHJvdG9idWYuSU9wdGlvbj59IG9wdGlvbnNcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWV0aG9kXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgTWV0aG9kLnByb3RvdHlwZS5vcHRpb25zID0gJHV0aWwuZW1wdHlBcnJheTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNZXRob2Qgc3ludGF4LlxuICAgICAgICAgICAgICogQG1lbWJlciB7Z29vZ2xlLnByb3RvYnVmLlN5bnRheH0gc3ludGF4XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1ldGhvZC5wcm90b3R5cGUuc3ludGF4ID0gMDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IE1ldGhvZCBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSU1ldGhvZD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5NZXRob2R9IE1ldGhvZCBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBNZXRob2QuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1ldGhvZChwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIE1ldGhvZCBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBnb29nbGUucHJvdG9idWYuTWV0aG9kLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5NZXRob2RcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklNZXRob2R9IG1lc3NhZ2UgTWV0aG9kIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1ldGhvZC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobWVzc2FnZSwgd3JpdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3cml0ZXIpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlciA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJlcXVlc3RUeXBlVXJsICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInJlcXVlc3RUeXBlVXJsXCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDIgPSovMTgpLnN0cmluZyhtZXNzYWdlLnJlcXVlc3RUeXBlVXJsKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0U3RyZWFtaW5nICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInJlcXVlc3RTdHJlYW1pbmdcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMywgd2lyZVR5cGUgMCA9Ki8yNCkuYm9vbChtZXNzYWdlLnJlcXVlc3RTdHJlYW1pbmcpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJlc3BvbnNlVHlwZVVybCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJyZXNwb25zZVR5cGVVcmxcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgNCwgd2lyZVR5cGUgMiA9Ki8zNCkuc3RyaW5nKG1lc3NhZ2UucmVzcG9uc2VUeXBlVXJsKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yZXNwb25zZVN0cmVhbWluZyAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJyZXNwb25zZVN0cmVhbWluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCA1LCB3aXJlVHlwZSAwID0qLzQwKS5ib29sKG1lc3NhZ2UucmVzcG9uc2VTdHJlYW1pbmcpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9wdGlvbnMgIT0gbnVsbCAmJiBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24uZW5jb2RlKG1lc3NhZ2Uub3B0aW9uc1tpXSwgd3JpdGVyLnVpbnQzMigvKiBpZCA2LCB3aXJlVHlwZSAyID0qLzUwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnN5bnRheCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzeW50YXhcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgNywgd2lyZVR5cGUgMCA9Ki81NikuaW50MzIobWVzc2FnZS5zeW50YXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBNZXRob2QgbWVzc2FnZSwgbGVuZ3RoIGRlbGltaXRlZC4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWV0aG9kXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JTWV0aG9kfSBtZXNzYWdlIE1ldGhvZCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBNZXRob2QuZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgTWV0aG9kIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5NZXRob2R9IE1ldGhvZFxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBNZXRob2QuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk1ldGhvZCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJlcXVlc3RUeXBlVXJsID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdFN0cmVhbWluZyA9IHJlYWRlci5ib29sKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yZXNwb25zZVR5cGVVcmwgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yZXNwb25zZVN0cmVhbWluZyA9IHJlYWRlci5ib29sKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobWVzc2FnZS5vcHRpb25zICYmIG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zLnB1c2goJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN5bnRheCA9IHJlYWRlci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVjb2RlcyBhIE1ldGhvZCBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5NZXRob2RcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5NZXRob2R9IE1ldGhvZFxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBNZXRob2QuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgTWV0aG9kIG1lc3NhZ2UuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBNZXRob2QudmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJuYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0VHlwZVVybCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJyZXF1ZXN0VHlwZVVybFwiKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLnJlcXVlc3RUeXBlVXJsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJlcXVlc3RUeXBlVXJsOiBzdHJpbmcgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0U3RyZWFtaW5nICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInJlcXVlc3RTdHJlYW1pbmdcIikpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS5yZXF1ZXN0U3RyZWFtaW5nICE9PSBcImJvb2xlYW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJlcXVlc3RTdHJlYW1pbmc6IGJvb2xlYW4gZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yZXNwb25zZVR5cGVVcmwgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicmVzcG9uc2VUeXBlVXJsXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UucmVzcG9uc2VUeXBlVXJsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJlc3BvbnNlVHlwZVVybDogc3RyaW5nIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UucmVzcG9uc2VTdHJlYW1pbmcgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicmVzcG9uc2VTdHJlYW1pbmdcIikpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS5yZXNwb25zZVN0cmVhbWluZyAhPT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyZXNwb25zZVN0cmVhbWluZzogYm9vbGVhbiBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9wdGlvbnMgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZS5vcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9wdGlvbnM6IGFycmF5IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLnZlcmlmeShtZXNzYWdlLm9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9wdGlvbnMuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zeW50YXggIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic3ludGF4XCIpKVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2Uuc3ludGF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzeW50YXg6IGVudW0gdmFsdWUgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgTWV0aG9kIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBmcm9tT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5NZXRob2R9IE1ldGhvZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBNZXRob2QuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290Lmdvb2dsZS5wcm90b2J1Zi5NZXRob2QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk1ldGhvZCgpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm5hbWUgPSBTdHJpbmcob2JqZWN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QucmVxdWVzdFR5cGVVcmwgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0VHlwZVVybCA9IFN0cmluZyhvYmplY3QucmVxdWVzdFR5cGVVcmwpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QucmVxdWVzdFN0cmVhbWluZyAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJlcXVlc3RTdHJlYW1pbmcgPSBCb29sZWFuKG9iamVjdC5yZXF1ZXN0U3RyZWFtaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnJlc3BvbnNlVHlwZVVybCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJlc3BvbnNlVHlwZVVybCA9IFN0cmluZyhvYmplY3QucmVzcG9uc2VUeXBlVXJsKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnJlc3BvbnNlU3RyZWFtaW5nICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVzcG9uc2VTdHJlYW1pbmcgPSBCb29sZWFuKG9iamVjdC5yZXNwb25zZVN0cmVhbWluZyk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmplY3Qub3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCIuZ29vZ2xlLnByb3RvYnVmLk1ldGhvZC5vcHRpb25zOiBhcnJheSBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm9wdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm9wdGlvbnNbaV0gIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLmdvb2dsZS5wcm90b2J1Zi5NZXRob2Qub3B0aW9uczogb2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zW2ldID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi5mcm9tT2JqZWN0KG9iamVjdC5vcHRpb25zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5zeW50YXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1lOVEFYX1BST1RPMlwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1lOVEFYX1BST1RPM1wiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIE1ldGhvZCBtZXNzYWdlLiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byBvdGhlciB0eXBlcyBpZiBzcGVjaWZpZWQuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWV0aG9kXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5NZXRob2R9IG1lc3NhZ2UgTWV0aG9kXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1ldGhvZC50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXJyYXlzIHx8IG9wdGlvbnMuZGVmYXVsdHMpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVxdWVzdFR5cGVVcmwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVxdWVzdFN0cmVhbWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVzcG9uc2VUeXBlVXJsID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlc3BvbnNlU3RyZWFtaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zeW50YXggPSBvcHRpb25zLmVudW1zID09PSBTdHJpbmcgPyBcIlNZTlRBWF9QUk9UTzJcIiA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5hbWUgPSBtZXNzYWdlLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UucmVxdWVzdFR5cGVVcmwgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicmVxdWVzdFR5cGVVcmxcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZXF1ZXN0VHlwZVVybCA9IG1lc3NhZ2UucmVxdWVzdFR5cGVVcmw7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UucmVxdWVzdFN0cmVhbWluZyAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJyZXF1ZXN0U3RyZWFtaW5nXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVxdWVzdFN0cmVhbWluZyA9IG1lc3NhZ2UucmVxdWVzdFN0cmVhbWluZztcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yZXNwb25zZVR5cGVVcmwgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicmVzcG9uc2VUeXBlVXJsXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVzcG9uc2VUeXBlVXJsID0gbWVzc2FnZS5yZXNwb25zZVR5cGVVcmw7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UucmVzcG9uc2VTdHJlYW1pbmcgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicmVzcG9uc2VTdHJlYW1pbmdcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZXNwb25zZVN0cmVhbWluZyA9IG1lc3NhZ2UucmVzcG9uc2VTdHJlYW1pbmc7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub3B0aW9ucyAmJiBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytqKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm9wdGlvbnNbal0gPSAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLnRvT2JqZWN0KG1lc3NhZ2Uub3B0aW9uc1tqXSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnN5bnRheCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzeW50YXhcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zeW50YXggPSBvcHRpb25zLmVudW1zID09PSBTdHJpbmcgPyAkcm9vdC5nb29nbGUucHJvdG9idWYuU3ludGF4W21lc3NhZ2Uuc3ludGF4XSA6IG1lc3NhZ2Uuc3ludGF4O1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnZlcnRzIHRoaXMgTWV0aG9kIHRvIEpTT04uXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1ldGhvZFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1ldGhvZC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIE1ldGhvZDtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBwcm90b2J1Zi5NaXhpbiA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgTWl4aW4uXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmXG4gICAgICAgICAgICAgKiBAaW50ZXJmYWNlIElNaXhpblxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW25hbWVdIE1peGluIG5hbWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtyb290XSBNaXhpbiByb290XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IE1peGluLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgTWl4aW4uXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJTWl4aW5cbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSU1peGluPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIE1peGluKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1peGluIG5hbWUuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWl4aW5cbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBNaXhpbi5wcm90b3R5cGUubmFtZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWl4aW4gcm9vdC5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gcm9vdFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5NaXhpblxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1peGluLnByb3RvdHlwZS5yb290ID0gXCJcIjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IE1peGluIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWl4aW5cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklNaXhpbj19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5NaXhpbn0gTWl4aW4gaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgTWl4aW4uY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1peGluKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgTWl4aW4gbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgZ29vZ2xlLnByb3RvYnVmLk1peGluLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5NaXhpblxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSU1peGlufSBtZXNzYWdlIE1peGluIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1peGluLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMiA9Ki8xMCkuc3RyaW5nKG1lc3NhZ2UubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uucm9vdCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJyb290XCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDIgPSovMTgpLnN0cmluZyhtZXNzYWdlLnJvb3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBNaXhpbiBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBnb29nbGUucHJvdG9idWYuTWl4aW4udmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk1peGluXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JTWl4aW59IG1lc3NhZ2UgTWl4aW4gbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgTWl4aW4uZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgTWl4aW4gbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWl4aW5cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuTWl4aW59IE1peGluXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1peGluLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyZWFkZXIsIGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoLCBtZXNzYWdlID0gbmV3ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5NaXhpbigpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvb3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgTWl4aW4gbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlciwgbGVuZ3RoIGRlbGltaXRlZC5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWl4aW5cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5NaXhpbn0gTWl4aW5cbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgTWl4aW4uZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgTWl4aW4gbWVzc2FnZS5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWl4aW5cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgTWl4aW4udmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJuYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yb290ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInJvb3RcIikpXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS5yb290KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvb3Q6IHN0cmluZyBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgTWl4aW4gbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuTWl4aW5cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuTWl4aW59IE1peGluXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1peGluLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5nb29nbGUucHJvdG9idWYuTWl4aW4pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk1peGluKCk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IFN0cmluZyhvYmplY3QubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5yb290ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9vdCA9IFN0cmluZyhvYmplY3Qucm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIE1peGluIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b09iamVjdFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5NaXhpblxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuTWl4aW59IG1lc3NhZ2UgTWl4aW5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgTWl4aW4udG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJvb3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gbWVzc2FnZS5uYW1lO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJvb3QgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicm9vdFwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJvb3QgPSBtZXNzYWdlLnJvb3Q7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29udmVydHMgdGhpcyBNaXhpbiB0byBKU09OLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5NaXhpblxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE1peGluLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudG9PYmplY3QodGhpcywgJHByb3RvYnVmLnV0aWwudG9KU09OT3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gTWl4aW47XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcHJvdG9idWYuU291cmNlQ29udGV4dCA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgU291cmNlQ29udGV4dC5cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWZcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSVNvdXJjZUNvbnRleHRcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtmaWxlTmFtZV0gU291cmNlQ29udGV4dCBmaWxlTmFtZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBTb3VyY2VDb250ZXh0LlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgU291cmNlQ29udGV4dC5cbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElTb3VyY2VDb250ZXh0XG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklTb3VyY2VDb250ZXh0PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIFNvdXJjZUNvbnRleHQocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleXNbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU291cmNlQ29udGV4dCBmaWxlTmFtZS5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gZmlsZU5hbWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFNvdXJjZUNvbnRleHQucHJvdG90eXBlLmZpbGVOYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IFNvdXJjZUNvbnRleHQgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JU291cmNlQ29udGV4dD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0fSBTb3VyY2VDb250ZXh0IGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFNvdXJjZUNvbnRleHQuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNvdXJjZUNvbnRleHQocHJvcGVydGllcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBTb3VyY2VDb250ZXh0IG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIGdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0LnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JU291cmNlQ29udGV4dH0gbWVzc2FnZSBTb3VyY2VDb250ZXh0IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFNvdXJjZUNvbnRleHQuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmZpbGVOYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImZpbGVOYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLmZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgU291cmNlQ29udGV4dCBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBnb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSVNvdXJjZUNvbnRleHR9IG1lc3NhZ2UgU291cmNlQ29udGV4dCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBTb3VyY2VDb250ZXh0LmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVjb2RlcyBhIFNvdXJjZUNvbnRleHQgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0fSBTb3VyY2VDb250ZXh0XG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFNvdXJjZUNvbnRleHQuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQoKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmZpbGVOYW1lID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVjb2RlcyBhIFNvdXJjZUNvbnRleHQgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlciwgbGVuZ3RoIGRlbGltaXRlZC5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHR9IFNvdXJjZUNvbnRleHRcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgU291cmNlQ29udGV4dC5kZWNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWQocmVhZGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IG5ldyAkUmVhZGVyKHJlYWRlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmVyaWZpZXMgYSBTb3VyY2VDb250ZXh0IG1lc3NhZ2UuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHRcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgU291cmNlQ29udGV4dC52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIiB8fCBtZXNzYWdlID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3QgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5maWxlTmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJmaWxlTmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLmZpbGVOYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZpbGVOYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIFNvdXJjZUNvbnRleHQgbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0fSBTb3VyY2VDb250ZXh0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFNvdXJjZUNvbnRleHQuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290Lmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5maWxlTmFtZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmZpbGVOYW1lID0gU3RyaW5nKG9iamVjdC5maWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIFNvdXJjZUNvbnRleHQgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHRcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHR9IG1lc3NhZ2UgU291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBTb3VyY2VDb250ZXh0LnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QobWVzc2FnZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBvYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0cylcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZpbGVOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5maWxlTmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJmaWxlTmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZpbGVOYW1lID0gbWVzc2FnZS5maWxlTmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIFNvdXJjZUNvbnRleHQgdG8gSlNPTi5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFNvdXJjZUNvbnRleHQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBTb3VyY2VDb250ZXh0O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHByb3RvYnVmLlR5cGUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhIFR5cGUuXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmXG4gICAgICAgICAgICAgKiBAaW50ZXJmYWNlIElUeXBlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbbmFtZV0gVHlwZSBuYW1lXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5Ljxnb29nbGUucHJvdG9idWYuSUZpZWxkPnxudWxsfSBbZmllbGRzXSBUeXBlIGZpZWxkc1xuICAgICAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48c3RyaW5nPnxudWxsfSBbb25lb2ZzXSBUeXBlIG9uZW9mc1xuICAgICAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48Z29vZ2xlLnByb3RvYnVmLklPcHRpb24+fG51bGx9IFtvcHRpb25zXSBUeXBlIG9wdGlvbnNcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Z29vZ2xlLnByb3RvYnVmLklTb3VyY2VDb250ZXh0fG51bGx9IFtzb3VyY2VDb250ZXh0XSBUeXBlIHNvdXJjZUNvbnRleHRcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Z29vZ2xlLnByb3RvYnVmLlN5bnRheHxudWxsfSBbc3ludGF4XSBUeXBlIHN5bnRheFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBUeXBlLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgVHlwZS5cbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElUeXBlXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklUeXBlPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIFR5cGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5vbmVvZnMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFR5cGUgbmFtZS5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgVHlwZS5wcm90b3R5cGUubmFtZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHlwZSBmaWVsZHMuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtBcnJheS48Z29vZ2xlLnByb3RvYnVmLklGaWVsZD59IGZpZWxkc1xuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgVHlwZS5wcm90b3R5cGUuZmllbGRzID0gJHV0aWwuZW1wdHlBcnJheTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUeXBlIG9uZW9mcy5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge0FycmF5LjxzdHJpbmc+fSBvbmVvZnNcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuVHlwZVxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFR5cGUucHJvdG90eXBlLm9uZW9mcyA9ICR1dGlsLmVtcHR5QXJyYXk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHlwZSBvcHRpb25zLlxuICAgICAgICAgICAgICogQG1lbWJlciB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JT3B0aW9uPn0gb3B0aW9uc1xuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgVHlwZS5wcm90b3R5cGUub3B0aW9ucyA9ICR1dGlsLmVtcHR5QXJyYXk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHlwZSBzb3VyY2VDb250ZXh0LlxuICAgICAgICAgICAgICogQG1lbWJlciB7Z29vZ2xlLnByb3RvYnVmLklTb3VyY2VDb250ZXh0fG51bGx8dW5kZWZpbmVkfSBzb3VyY2VDb250ZXh0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLlR5cGVcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBUeXBlLnByb3RvdHlwZS5zb3VyY2VDb250ZXh0ID0gbnVsbDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUeXBlIHN5bnRheC5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge2dvb2dsZS5wcm90b2J1Zi5TeW50YXh9IHN5bnRheFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgVHlwZS5wcm90b3R5cGUuc3ludGF4ID0gMDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IFR5cGUgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JVHlwZT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5UeXBlfSBUeXBlIGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFR5cGUuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR5cGUocHJvcGVydGllcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBUeXBlIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIGdvb2dsZS5wcm90b2J1Zi5UeXBlLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JVHlwZX0gbWVzc2FnZSBUeXBlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFR5cGUuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAxLCB3aXJlVHlwZSAyID0qLzEwKS5zdHJpbmcobWVzc2FnZS5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5maWVsZHMgIT0gbnVsbCAmJiBtZXNzYWdlLmZpZWxkcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5maWVsZHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdC5nb29nbGUucHJvdG9idWYuRmllbGQuZW5jb2RlKG1lc3NhZ2UuZmllbGRzW2ldLCB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDIgPSovMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub25lb2ZzICE9IG51bGwgJiYgbWVzc2FnZS5vbmVvZnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2Uub25lb2ZzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAzLCB3aXJlVHlwZSAyID0qLzI2KS5zdHJpbmcobWVzc2FnZS5vbmVvZnNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9wdGlvbnMgIT0gbnVsbCAmJiBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24uZW5jb2RlKG1lc3NhZ2Uub3B0aW9uc1tpXSwgd3JpdGVyLnVpbnQzMigvKiBpZCA0LCB3aXJlVHlwZSAyID0qLzM0KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnNvdXJjZUNvbnRleHQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic291cmNlQ29udGV4dFwiKSlcbiAgICAgICAgICAgICAgICAgICAgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQuZW5jb2RlKG1lc3NhZ2Uuc291cmNlQ29udGV4dCwgd3JpdGVyLnVpbnQzMigvKiBpZCA1LCB3aXJlVHlwZSAyID0qLzQyKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnN5bnRheCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzeW50YXhcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgNiwgd2lyZVR5cGUgMCA9Ki80OCkuaW50MzIobWVzc2FnZS5zeW50YXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBUeXBlIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIGdvb2dsZS5wcm90b2J1Zi5UeXBlLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JVHlwZX0gbWVzc2FnZSBUeXBlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFR5cGUuZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgVHlwZSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLlR5cGV9IFR5cGVcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgVHlwZS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gJFJlYWRlci5jcmVhdGUocmVhZGVyKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5nb29nbGUucHJvdG9idWYuVHlwZSgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShtZXNzYWdlLmZpZWxkcyAmJiBtZXNzYWdlLmZpZWxkcy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZmllbGRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmZpZWxkcy5wdXNoKCRyb290Lmdvb2dsZS5wcm90b2J1Zi5GaWVsZC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShtZXNzYWdlLm9uZW9mcyAmJiBtZXNzYWdlLm9uZW9mcy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub25lb2ZzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm9uZW9mcy5wdXNoKHJlYWRlci5zdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobWVzc2FnZS5vcHRpb25zICYmIG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zLnB1c2goJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnNvdXJjZUNvbnRleHQgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3ludGF4ID0gcmVhZGVyLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgVHlwZSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5UeXBlXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuVHlwZX0gVHlwZVxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBUeXBlLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWZXJpZmllcyBhIFR5cGUgbWVzc2FnZS5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuVHlwZVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBUeXBlLnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdCBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibmFtZTogc3RyaW5nIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZmllbGRzICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImZpZWxkc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZS5maWVsZHMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZmllbGRzOiBhcnJheSBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UuZmllbGRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuRmllbGQudmVyaWZ5KG1lc3NhZ2UuZmllbGRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmaWVsZHMuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5vbmVvZnMgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwib25lb2ZzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlLm9uZW9mcykpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvbmVvZnM6IGFycmF5IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5vbmVvZnMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2Uub25lb2ZzW2ldKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvbmVvZnM6IHN0cmluZ1tdIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9wdGlvbnMgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZS5vcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9wdGlvbnM6IGFycmF5IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLnZlcmlmeShtZXNzYWdlLm9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9wdGlvbnMuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zb3VyY2VDb250ZXh0ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInNvdXJjZUNvbnRleHRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQudmVyaWZ5KG1lc3NhZ2Uuc291cmNlQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInNvdXJjZUNvbnRleHQuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc3ludGF4ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInN5bnRheFwiKSlcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnN5bnRheCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic3ludGF4OiBlbnVtIHZhbHVlIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIFR5cGUgbWVzc2FnZSBmcm9tIGEgcGxhaW4gb2JqZWN0LiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIGludGVybmFsIHR5cGVzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGZyb21PYmplY3RcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuVHlwZVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5UeXBlfSBUeXBlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFR5cGUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290Lmdvb2dsZS5wcm90b2J1Zi5UeXBlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5UeXBlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IFN0cmluZyhvYmplY3QubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdC5maWVsZHMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLmdvb2dsZS5wcm90b2J1Zi5UeXBlLmZpZWxkczogYXJyYXkgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZmllbGRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmZpZWxkcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZmllbGRzW2ldICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuVHlwZS5maWVsZHM6IG9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZmllbGRzW2ldID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkZpZWxkLmZyb21PYmplY3Qob2JqZWN0LmZpZWxkc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vbmVvZnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdC5vbmVvZnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLmdvb2dsZS5wcm90b2J1Zi5UeXBlLm9uZW9mczogYXJyYXkgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub25lb2ZzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm9uZW9mcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub25lb2ZzW2ldID0gU3RyaW5nKG9iamVjdC5vbmVvZnNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdC5vcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuVHlwZS5vcHRpb25zOiBhcnJheSBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm9wdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm9wdGlvbnNbaV0gIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLmdvb2dsZS5wcm90b2J1Zi5UeXBlLm9wdGlvbnM6IG9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9uc1tpXSA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24uZnJvbU9iamVjdChvYmplY3Qub3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5zb3VyY2VDb250ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Quc291cmNlQ29udGV4dCAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuVHlwZS5zb3VyY2VDb250ZXh0OiBvYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc291cmNlQ29udGV4dCA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0LmZyb21PYmplY3Qob2JqZWN0LnNvdXJjZUNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5zeW50YXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1lOVEFYX1BST1RPMlwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1lOVEFYX1BST1RPM1wiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIFR5cGUgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLlR5cGVcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLlR5cGV9IG1lc3NhZ2UgVHlwZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBUeXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QobWVzc2FnZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBvYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hcnJheXMgfHwgb3B0aW9ucy5kZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZmllbGRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5vbmVvZnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm9wdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Quc291cmNlQ29udGV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zeW50YXggPSBvcHRpb25zLmVudW1zID09PSBTdHJpbmcgPyBcIlNZTlRBWF9QUk9UTzJcIiA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5hbWUgPSBtZXNzYWdlLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZmllbGRzICYmIG1lc3NhZ2UuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZmllbGRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzc2FnZS5maWVsZHMubGVuZ3RoOyArK2opXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZmllbGRzW2pdID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkZpZWxkLnRvT2JqZWN0KG1lc3NhZ2UuZmllbGRzW2pdLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub25lb2ZzICYmIG1lc3NhZ2Uub25lb2ZzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Qub25lb2ZzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzc2FnZS5vbmVvZnMubGVuZ3RoOyArK2opXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qub25lb2ZzW2pdID0gbWVzc2FnZS5vbmVvZnNbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9wdGlvbnMgJiYgbWVzc2FnZS5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Qub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGg7ICsrailcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5vcHRpb25zW2pdID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi50b09iamVjdChtZXNzYWdlLm9wdGlvbnNbal0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zb3VyY2VDb250ZXh0ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInNvdXJjZUNvbnRleHRcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zb3VyY2VDb250ZXh0ID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQudG9PYmplY3QobWVzc2FnZS5zb3VyY2VDb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zeW50YXggIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic3ludGF4XCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3Quc3ludGF4ID0gb3B0aW9ucy5lbnVtcyA9PT0gU3RyaW5nID8gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlN5bnRheFttZXNzYWdlLnN5bnRheF0gOiBtZXNzYWdlLnN5bnRheDtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIFR5cGUgdG8gSlNPTi5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b0pTT05cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuVHlwZVxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFR5cGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBUeXBlO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHByb3RvYnVmLkZpZWxkID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBGaWVsZC5cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWZcbiAgICAgICAgICAgICAqIEBpbnRlcmZhY2UgSUZpZWxkXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2dvb2dsZS5wcm90b2J1Zi5GaWVsZC5LaW5kfG51bGx9IFtraW5kXSBGaWVsZCBraW5kXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2dvb2dsZS5wcm90b2J1Zi5GaWVsZC5DYXJkaW5hbGl0eXxudWxsfSBbY2FyZGluYWxpdHldIEZpZWxkIGNhcmRpbmFsaXR5XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbbnVtYmVyXSBGaWVsZCBudW1iZXJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtuYW1lXSBGaWVsZCBuYW1lXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdHlwZVVybF0gRmllbGQgdHlwZVVybFxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW29uZW9mSW5kZXhdIEZpZWxkIG9uZW9mSW5kZXhcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbnxudWxsfSBbcGFja2VkXSBGaWVsZCBwYWNrZWRcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JT3B0aW9uPnxudWxsfSBbb3B0aW9uc10gRmllbGQgb3B0aW9uc1xuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW2pzb25OYW1lXSBGaWVsZCBqc29uTmFtZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW2RlZmF1bHRWYWx1ZV0gRmllbGQgZGVmYXVsdFZhbHVlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEZpZWxkLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgRmllbGQuXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJRmllbGRcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUZpZWxkPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIEZpZWxkKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpZWxkIGtpbmQuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtnb29nbGUucHJvdG9idWYuRmllbGQuS2luZH0ga2luZFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5GaWVsZFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEZpZWxkLnByb3RvdHlwZS5raW5kID0gMDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaWVsZCBjYXJkaW5hbGl0eS5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge2dvb2dsZS5wcm90b2J1Zi5GaWVsZC5DYXJkaW5hbGl0eX0gY2FyZGluYWxpdHlcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRmllbGRcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBGaWVsZC5wcm90b3R5cGUuY2FyZGluYWxpdHkgPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpZWxkIG51bWJlci5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gbnVtYmVyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkZpZWxkXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQucHJvdG90eXBlLm51bWJlciA9IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmllbGQgbmFtZS5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5GaWVsZFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEZpZWxkLnByb3RvdHlwZS5uYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaWVsZCB0eXBlVXJsLlxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSB0eXBlVXJsXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkZpZWxkXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQucHJvdG90eXBlLnR5cGVVcmwgPSBcIlwiO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpZWxkIG9uZW9mSW5kZXguXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IG9uZW9mSW5kZXhcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRmllbGRcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBGaWVsZC5wcm90b3R5cGUub25lb2ZJbmRleCA9IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmllbGQgcGFja2VkLlxuICAgICAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gcGFja2VkXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkZpZWxkXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQucHJvdG90eXBlLnBhY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpZWxkIG9wdGlvbnMuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtBcnJheS48Z29vZ2xlLnByb3RvYnVmLklPcHRpb24+fSBvcHRpb25zXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkZpZWxkXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQucHJvdG90eXBlLm9wdGlvbnMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpZWxkIGpzb25OYW1lLlxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBqc29uTmFtZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5GaWVsZFxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEZpZWxkLnByb3RvdHlwZS5qc29uTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmllbGQgZGVmYXVsdFZhbHVlLlxuICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBkZWZhdWx0VmFsdWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRmllbGRcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBGaWVsZC5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEZpZWxkIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRmllbGRcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklGaWVsZD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5GaWVsZH0gRmllbGQgaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpZWxkKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgRmllbGQgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgZ29vZ2xlLnByb3RvYnVmLkZpZWxkLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5GaWVsZFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUZpZWxkfSBtZXNzYWdlIEZpZWxkIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEZpZWxkLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5raW5kICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImtpbmRcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMCA9Ki84KS5pbnQzMihtZXNzYWdlLmtpbmQpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNhcmRpbmFsaXR5ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImNhcmRpbmFsaXR5XCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDIsIHdpcmVUeXBlIDAgPSovMTYpLmludDMyKG1lc3NhZ2UuY2FyZGluYWxpdHkpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm51bWJlciAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJudW1iZXJcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMywgd2lyZVR5cGUgMCA9Ki8yNCkuaW50MzIobWVzc2FnZS5udW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCA0LCB3aXJlVHlwZSAyID0qLzM0KS5zdHJpbmcobWVzc2FnZS5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlVXJsICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVVcmxcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgNiwgd2lyZVR5cGUgMiA9Ki81MCkuc3RyaW5nKG1lc3NhZ2UudHlwZVVybCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub25lb2ZJbmRleCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJvbmVvZkluZGV4XCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDcsIHdpcmVUeXBlIDAgPSovNTYpLmludDMyKG1lc3NhZ2Uub25lb2ZJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UucGFja2VkICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInBhY2tlZFwiKSlcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCA4LCB3aXJlVHlwZSAwID0qLzY0KS5ib29sKG1lc3NhZ2UucGFja2VkKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5vcHRpb25zICE9IG51bGwgJiYgbWVzc2FnZS5vcHRpb25zLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLmVuY29kZShtZXNzYWdlLm9wdGlvbnNbaV0sIHdyaXRlci51aW50MzIoLyogaWQgOSwgd2lyZVR5cGUgMiA9Ki83NCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5qc29uTmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJqc29uTmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAxMCwgd2lyZVR5cGUgMiA9Ki84Mikuc3RyaW5nKG1lc3NhZ2UuanNvbk5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmRlZmF1bHRWYWx1ZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMTEsIHdpcmVUeXBlIDIgPSovOTApLnN0cmluZyhtZXNzYWdlLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEZpZWxkIG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIGdvb2dsZS5wcm90b2J1Zi5GaWVsZC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRmllbGRcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklGaWVsZH0gbWVzc2FnZSBGaWVsZCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBGaWVsZC5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikubGRlbGltKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlY29kZXMgYSBGaWVsZCBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5GaWVsZFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5GaWVsZH0gRmllbGRcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkZpZWxkKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5raW5kID0gcmVhZGVyLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jYXJkaW5hbGl0eSA9IHJlYWRlci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubnVtYmVyID0gcmVhZGVyLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudHlwZVVybCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm9uZW9mSW5kZXggPSByZWFkZXIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnBhY2tlZCA9IHJlYWRlci5ib29sKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobWVzc2FnZS5vcHRpb25zICYmIG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zLnB1c2goJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5qc29uTmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5kZWZhdWx0VmFsdWUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGEgRmllbGQgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlciwgbGVuZ3RoIGRlbGltaXRlZC5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRmllbGRcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5GaWVsZH0gRmllbGRcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGEgRmllbGQgbWVzc2FnZS5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB2ZXJpZnlcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRmllbGRcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQudmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uua2luZCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJraW5kXCIpKVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2Uua2luZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwia2luZDogZW51bSB2YWx1ZSBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNhcmRpbmFsaXR5ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImNhcmRpbmFsaXR5XCIpKVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UuY2FyZGluYWxpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNhcmRpbmFsaXR5OiBlbnVtIHZhbHVlIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubnVtYmVyICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm51bWJlclwiKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc0ludGVnZXIobWVzc2FnZS5udW1iZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVtYmVyOiBpbnRlZ2VyIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJuYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlVXJsICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVVcmxcIikpXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS50eXBlVXJsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInR5cGVVcmw6IHN0cmluZyBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9uZW9mSW5kZXggIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwib25lb2ZJbmRleFwiKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc0ludGVnZXIobWVzc2FnZS5vbmVvZkluZGV4KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9uZW9mSW5kZXg6IGludGVnZXIgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5wYWNrZWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicGFja2VkXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UucGFja2VkICE9PSBcImJvb2xlYW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInBhY2tlZDogYm9vbGVhbiBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9wdGlvbnMgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZS5vcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9wdGlvbnM6IGFycmF5IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLnZlcmlmeShtZXNzYWdlLm9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9wdGlvbnMuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5qc29uTmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJqc29uTmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLmpzb25OYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImpzb25OYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kZWZhdWx0VmFsdWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UuZGVmYXVsdFZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImRlZmF1bHRWYWx1ZTogc3RyaW5nIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBGaWVsZCBtZXNzYWdlIGZyb20gYSBwbGFpbiBvYmplY3QuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgaW50ZXJuYWwgdHlwZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5GaWVsZFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5GaWVsZH0gRmllbGRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290Lmdvb2dsZS5wcm90b2J1Zi5GaWVsZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyAkcm9vdC5nb29nbGUucHJvdG9idWYuRmllbGQoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5raW5kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRZUEVfVU5LTk9XTlwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5raW5kID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRZUEVfRE9VQkxFXCI6XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmtpbmQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiVFlQRV9GTE9BVFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5raW5kID0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRZUEVfSU5UNjRcIjpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJUWVBFX1VJTlQ2NFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5raW5kID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRZUEVfSU5UMzJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJUWVBFX0ZJWEVENjRcIjpcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJUWVBFX0ZJWEVEMzJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJUWVBFX0JPT0xcIjpcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJUWVBFX1NUUklOR1wiOlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5raW5kID0gOTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRZUEVfR1JPVVBcIjpcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmtpbmQgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRZUEVfTUVTU0FHRVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDExO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiVFlQRV9CWVRFU1wiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiVFlQRV9VSU5UMzJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmtpbmQgPSAxMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRZUEVfRU5VTVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDE0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiVFlQRV9TRklYRUQzMlwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDE1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiVFlQRV9TRklYRUQ2NFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2luZCA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiVFlQRV9TSU5UMzJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmtpbmQgPSAxNztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlRZUEVfU0lOVDY0XCI6XG4gICAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5raW5kID0gMTg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5jYXJkaW5hbGl0eSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDQVJESU5BTElUWV9VTktOT1dOXCI6XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNhcmRpbmFsaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkNBUkRJTkFMSVRZX09QVElPTkFMXCI6XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNhcmRpbmFsaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkNBUkRJTkFMSVRZX1JFUVVJUkVEXCI6XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNhcmRpbmFsaXR5ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkNBUkRJTkFMSVRZX1JFUEVBVEVEXCI6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNhcmRpbmFsaXR5ID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubnVtYmVyICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubnVtYmVyID0gb2JqZWN0Lm51bWJlciB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IFN0cmluZyhvYmplY3QubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC50eXBlVXJsICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudHlwZVVybCA9IFN0cmluZyhvYmplY3QudHlwZVVybCk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vbmVvZkluZGV4ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub25lb2ZJbmRleCA9IG9iamVjdC5vbmVvZkluZGV4IHwgMDtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhY2tlZCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnBhY2tlZCA9IEJvb2xlYW4ob2JqZWN0LnBhY2tlZCk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmplY3Qub3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCIuZ29vZ2xlLnByb3RvYnVmLkZpZWxkLm9wdGlvbnM6IGFycmF5IGV4cGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3Qub3B0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Qub3B0aW9uc1tpXSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCIuZ29vZ2xlLnByb3RvYnVmLkZpZWxkLm9wdGlvbnM6IG9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9uc1tpXSA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24uZnJvbU9iamVjdChvYmplY3Qub3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5qc29uTmFtZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmpzb25OYW1lID0gU3RyaW5nKG9iamVjdC5qc29uTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5kZWZhdWx0VmFsdWUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5kZWZhdWx0VmFsdWUgPSBTdHJpbmcob2JqZWN0LmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIEZpZWxkIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b09iamVjdFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5GaWVsZFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuRmllbGR9IG1lc3NhZ2UgRmllbGRcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFycmF5cyB8fCBvcHRpb25zLmRlZmF1bHRzKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3Qub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5raW5kID0gb3B0aW9ucy5lbnVtcyA9PT0gU3RyaW5nID8gXCJUWVBFX1VOS05PV05cIiA6IDA7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jYXJkaW5hbGl0eSA9IG9wdGlvbnMuZW51bXMgPT09IFN0cmluZyA/IFwiQ0FSRElOQUxJVFlfVU5LTk9XTlwiIDogMDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnR5cGVVcmwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Qub25lb2ZJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5wYWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lmpzb25OYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmRlZmF1bHRWYWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmtpbmQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwia2luZFwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmtpbmQgPSBvcHRpb25zLmVudW1zID09PSBTdHJpbmcgPyAkcm9vdC5nb29nbGUucHJvdG9idWYuRmllbGQuS2luZFttZXNzYWdlLmtpbmRdIDogbWVzc2FnZS5raW5kO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmNhcmRpbmFsaXR5ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImNhcmRpbmFsaXR5XCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FyZGluYWxpdHkgPSBvcHRpb25zLmVudW1zID09PSBTdHJpbmcgPyAkcm9vdC5nb29nbGUucHJvdG9idWYuRmllbGQuQ2FyZGluYWxpdHlbbWVzc2FnZS5jYXJkaW5hbGl0eV0gOiBtZXNzYWdlLmNhcmRpbmFsaXR5O1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm51bWJlciAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJudW1iZXJcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5udW1iZXIgPSBtZXNzYWdlLm51bWJlcjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gbWVzc2FnZS5uYW1lO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGVVcmwgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwidHlwZVVybFwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnR5cGVVcmwgPSBtZXNzYWdlLnR5cGVVcmw7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub25lb2ZJbmRleCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJvbmVvZkluZGV4XCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3Qub25lb2ZJbmRleCA9IG1lc3NhZ2Uub25lb2ZJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5wYWNrZWQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwicGFja2VkXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QucGFja2VkID0gbWVzc2FnZS5wYWNrZWQ7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub3B0aW9ucyAmJiBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytqKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm9wdGlvbnNbal0gPSAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLnRvT2JqZWN0KG1lc3NhZ2Uub3B0aW9uc1tqXSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmpzb25OYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImpzb25OYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuanNvbk5hbWUgPSBtZXNzYWdlLmpzb25OYW1lO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmRlZmF1bHRWYWx1ZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5kZWZhdWx0VmFsdWUgPSBtZXNzYWdlLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIEZpZWxkIHRvIEpTT04uXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkZpZWxkXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogS2luZCBlbnVtLlxuICAgICAgICAgICAgICogQG5hbWUgZ29vZ2xlLnByb3RvYnVmLkZpZWxkLktpbmRcbiAgICAgICAgICAgICAqIEBlbnVtIHtzdHJpbmd9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gVFlQRV9VTktOT1dOPTAgVFlQRV9VTktOT1dOIHZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gVFlQRV9ET1VCTEU9MSBUWVBFX0RPVUJMRSB2YWx1ZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFRZUEVfRkxPQVQ9MiBUWVBFX0ZMT0FUIHZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gVFlQRV9JTlQ2ND0zIFRZUEVfSU5UNjQgdmFsdWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBUWVBFX1VJTlQ2ND00IFRZUEVfVUlOVDY0IHZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gVFlQRV9JTlQzMj01IFRZUEVfSU5UMzIgdmFsdWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBUWVBFX0ZJWEVENjQ9NiBUWVBFX0ZJWEVENjQgdmFsdWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBUWVBFX0ZJWEVEMzI9NyBUWVBFX0ZJWEVEMzIgdmFsdWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBUWVBFX0JPT0w9OCBUWVBFX0JPT0wgdmFsdWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBUWVBFX1NUUklORz05IFRZUEVfU1RSSU5HIHZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gVFlQRV9HUk9VUD0xMCBUWVBFX0dST1VQIHZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gVFlQRV9NRVNTQUdFPTExIFRZUEVfTUVTU0FHRSB2YWx1ZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFRZUEVfQllURVM9MTIgVFlQRV9CWVRFUyB2YWx1ZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFRZUEVfVUlOVDMyPTEzIFRZUEVfVUlOVDMyIHZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gVFlQRV9FTlVNPTE0IFRZUEVfRU5VTSB2YWx1ZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFRZUEVfU0ZJWEVEMzI9MTUgVFlQRV9TRklYRUQzMiB2YWx1ZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFRZUEVfU0ZJWEVENjQ9MTYgVFlQRV9TRklYRUQ2NCB2YWx1ZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFRZUEVfU0lOVDMyPTE3IFRZUEVfU0lOVDMyIHZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gVFlQRV9TSU5UNjQ9MTggVFlQRV9TSU5UNjQgdmFsdWVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQuS2luZCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbMF0gPSBcIlRZUEVfVU5LTk9XTlwiXSA9IDA7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbMV0gPSBcIlRZUEVfRE9VQkxFXCJdID0gMTtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyXSA9IFwiVFlQRV9GTE9BVFwiXSA9IDI7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbM10gPSBcIlRZUEVfSU5UNjRcIl0gPSAzO1xuICAgICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzRdID0gXCJUWVBFX1VJTlQ2NFwiXSA9IDQ7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbNV0gPSBcIlRZUEVfSU5UMzJcIl0gPSA1O1xuICAgICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzZdID0gXCJUWVBFX0ZJWEVENjRcIl0gPSA2O1xuICAgICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzddID0gXCJUWVBFX0ZJWEVEMzJcIl0gPSA3O1xuICAgICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzhdID0gXCJUWVBFX0JPT0xcIl0gPSA4O1xuICAgICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzldID0gXCJUWVBFX1NUUklOR1wiXSA9IDk7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTBdID0gXCJUWVBFX0dST1VQXCJdID0gMTA7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTFdID0gXCJUWVBFX01FU1NBR0VcIl0gPSAxMTtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdmFsdWVzQnlJZFsxMl0gPSBcIlRZUEVfQllURVNcIl0gPSAxMjtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdmFsdWVzQnlJZFsxM10gPSBcIlRZUEVfVUlOVDMyXCJdID0gMTM7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTRdID0gXCJUWVBFX0VOVU1cIl0gPSAxNDtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdmFsdWVzQnlJZFsxNV0gPSBcIlRZUEVfU0ZJWEVEMzJcIl0gPSAxNTtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdmFsdWVzQnlJZFsxNl0gPSBcIlRZUEVfU0ZJWEVENjRcIl0gPSAxNjtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdmFsdWVzQnlJZFsxN10gPSBcIlRZUEVfU0lOVDMyXCJdID0gMTc7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbMThdID0gXCJUWVBFX1NJTlQ2NFwiXSA9IDE4O1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhcmRpbmFsaXR5IGVudW0uXG4gICAgICAgICAgICAgKiBAbmFtZSBnb29nbGUucHJvdG9idWYuRmllbGQuQ2FyZGluYWxpdHlcbiAgICAgICAgICAgICAqIEBlbnVtIHtzdHJpbmd9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQ0FSRElOQUxJVFlfVU5LTk9XTj0wIENBUkRJTkFMSVRZX1VOS05PV04gdmFsdWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDQVJESU5BTElUWV9PUFRJT05BTD0xIENBUkRJTkFMSVRZX09QVElPTkFMIHZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQ0FSRElOQUxJVFlfUkVRVUlSRUQ9MiBDQVJESU5BTElUWV9SRVFVSVJFRCB2YWx1ZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IENBUkRJTkFMSVRZX1JFUEVBVEVEPTMgQ0FSRElOQUxJVFlfUkVQRUFURUQgdmFsdWVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRmllbGQuQ2FyZGluYWxpdHkgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzBdID0gXCJDQVJESU5BTElUWV9VTktOT1dOXCJdID0gMDtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbdmFsdWVzQnlJZFsxXSA9IFwiQ0FSRElOQUxJVFlfT1BUSU9OQUxcIl0gPSAxO1xuICAgICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzJdID0gXCJDQVJESU5BTElUWV9SRVFVSVJFRFwiXSA9IDI7XG4gICAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlc0J5SWRbM10gPSBcIkNBUkRJTkFMSVRZX1JFUEVBVEVEXCJdID0gMztcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgcmV0dXJuIEZpZWxkO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHByb3RvYnVmLkVudW0gPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJvcGVydGllcyBvZiBhbiBFbnVtLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJRW51bVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW25hbWVdIEVudW0gbmFtZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48Z29vZ2xlLnByb3RvYnVmLklFbnVtVmFsdWU+fG51bGx9IFtlbnVtdmFsdWVdIEVudW0gZW51bXZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5Ljxnb29nbGUucHJvdG9idWYuSU9wdGlvbj58bnVsbH0gW29wdGlvbnNdIEVudW0gb3B0aW9uc1xuICAgICAgICAgICAgICogQHByb3BlcnR5IHtnb29nbGUucHJvdG9idWYuSVNvdXJjZUNvbnRleHR8bnVsbH0gW3NvdXJjZUNvbnRleHRdIEVudW0gc291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtnb29nbGUucHJvdG9idWYuU3ludGF4fG51bGx9IFtzeW50YXhdIEVudW0gc3ludGF4XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEVudW0uXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYW4gRW51bS5cbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElFbnVtXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklFbnVtPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIEVudW0ocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW51bXZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5c1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleXNbaV1dID0gcHJvcGVydGllc1trZXlzW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbnVtIG5hbWUuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEVudW0ucHJvdG90eXBlLm5hbWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVudW0gZW51bXZhbHVlLlxuICAgICAgICAgICAgICogQG1lbWJlciB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JRW51bVZhbHVlPn0gZW51bXZhbHVlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVudW1cbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtLnByb3RvdHlwZS5lbnVtdmFsdWUgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVudW0gb3B0aW9ucy5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge0FycmF5Ljxnb29nbGUucHJvdG9idWYuSU9wdGlvbj59IG9wdGlvbnNcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEVudW0ucHJvdG90eXBlLm9wdGlvbnMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVudW0gc291cmNlQ29udGV4dC5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge2dvb2dsZS5wcm90b2J1Zi5JU291cmNlQ29udGV4dHxudWxsfHVuZGVmaW5lZH0gc291cmNlQ29udGV4dFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bS5wcm90b3R5cGUuc291cmNlQ29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW51bSBzeW50YXguXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtnb29nbGUucHJvdG9idWYuU3ludGF4fSBzeW50YXhcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEVudW0ucHJvdG90eXBlLnN5bnRheCA9IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBFbnVtIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUVudW09fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuRW51bX0gRW51bSBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFbnVtKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgRW51bSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBnb29nbGUucHJvdG9idWYuRW51bS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUVudW19IG1lc3NhZ2UgRW51bSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMiA9Ki8xMCkuc3RyaW5nKG1lc3NhZ2UubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZW51bXZhbHVlICE9IG51bGwgJiYgbWVzc2FnZS5lbnVtdmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UuZW51bXZhbHVlLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZS5lbmNvZGUobWVzc2FnZS5lbnVtdmFsdWVbaV0sIHdyaXRlci51aW50MzIoLyogaWQgMiwgd2lyZVR5cGUgMiA9Ki8xOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5vcHRpb25zICE9IG51bGwgJiYgbWVzc2FnZS5vcHRpb25zLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLmVuY29kZShtZXNzYWdlLm9wdGlvbnNbaV0sIHdyaXRlci51aW50MzIoLyogaWQgMywgd2lyZVR5cGUgMiA9Ki8yNikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zb3VyY2VDb250ZXh0ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInNvdXJjZUNvbnRleHRcIikpXG4gICAgICAgICAgICAgICAgICAgICRyb290Lmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0LmVuY29kZShtZXNzYWdlLnNvdXJjZUNvbnRleHQsIHdyaXRlci51aW50MzIoLyogaWQgNCwgd2lyZVR5cGUgMiA9Ki8zNCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zeW50YXggIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic3ludGF4XCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDUsIHdpcmVUeXBlIDAgPSovNDApLmludDMyKG1lc3NhZ2Uuc3ludGF4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgRW51bSBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBnb29nbGUucHJvdG9idWYuRW51bS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUVudW19IG1lc3NhZ2UgRW51bSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVjb2RlcyBhbiBFbnVtIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVudW1cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuRW51bX0gRW51bVxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyZWFkZXIsIGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoLCBtZXNzYWdlID0gbmV3ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5FbnVtKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG1lc3NhZ2UuZW51bXZhbHVlICYmIG1lc3NhZ2UuZW51bXZhbHVlLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5lbnVtdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZW51bXZhbHVlLnB1c2goJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShtZXNzYWdlLm9wdGlvbnMgJiYgbWVzc2FnZS5vcHRpb25zLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm9wdGlvbnMucHVzaCgkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc291cmNlQ29udGV4dCA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0LmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSByZWFkZXIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlY29kZXMgYW4gRW51bSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuRW51bX0gRW51bVxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3ICRSZWFkZXIocmVhZGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWZXJpZmllcyBhbiBFbnVtIG1lc3NhZ2UuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVudW1cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIiB8fCBtZXNzYWdlID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3QgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHV0aWwuaXNTdHJpbmcobWVzc2FnZS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm5hbWU6IHN0cmluZyBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmVudW12YWx1ZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJlbnVtdmFsdWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2UuZW51bXZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImVudW12YWx1ZTogYXJyYXkgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmVudW12YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZS52ZXJpZnkobWVzc2FnZS5lbnVtdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImVudW12YWx1ZS5cIiArIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9wdGlvbnMgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZS5vcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9wdGlvbnM6IGFycmF5IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLnZlcmlmeShtZXNzYWdlLm9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9wdGlvbnMuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zb3VyY2VDb250ZXh0ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInNvdXJjZUNvbnRleHRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLlNvdXJjZUNvbnRleHQudmVyaWZ5KG1lc3NhZ2Uuc291cmNlQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInNvdXJjZUNvbnRleHQuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc3ludGF4ICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInN5bnRheFwiKSlcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnN5bnRheCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic3ludGF4OiBlbnVtIHZhbHVlIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlcyBhbiBFbnVtIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBmcm9tT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVudW1cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuRW51bX0gRW51bVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5nb29nbGUucHJvdG9idWYuRW51bSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyAkcm9vdC5nb29nbGUucHJvdG9idWYuRW51bSgpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm5hbWUgPSBTdHJpbmcob2JqZWN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QuZW51bXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmplY3QuZW51bXZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuRW51bS5lbnVtdmFsdWU6IGFycmF5IGV4cGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVudW12YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5lbnVtdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmVudW12YWx1ZVtpXSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCIuZ29vZ2xlLnByb3RvYnVmLkVudW0uZW51bXZhbHVlOiBvYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVudW12YWx1ZVtpXSA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWUuZnJvbU9iamVjdChvYmplY3QuZW51bXZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdC5vcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuRW51bS5vcHRpb25zOiBhcnJheSBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm9wdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm9wdGlvbnNbaV0gIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLmdvb2dsZS5wcm90b2J1Zi5FbnVtLm9wdGlvbnM6IG9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9uc1tpXSA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24uZnJvbU9iamVjdChvYmplY3Qub3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5zb3VyY2VDb250ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Quc291cmNlQ29udGV4dCAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuRW51bS5zb3VyY2VDb250ZXh0OiBvYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc291cmNlQ29udGV4dCA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0LmZyb21PYmplY3Qob2JqZWN0LnNvdXJjZUNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamVjdC5zeW50YXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1lOVEFYX1BST1RPMlwiOlxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiU1lOVEFYX1BST1RPM1wiOlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zeW50YXggPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhbiBFbnVtIG1lc3NhZ2UuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiB0b09iamVjdFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5FbnVtfSBtZXNzYWdlIEVudW1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLklDb252ZXJzaW9uT3B0aW9uc30gW29wdGlvbnNdIENvbnZlcnNpb24gb3B0aW9uc1xuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBQbGFpbiBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bS50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXJyYXlzIHx8IG9wdGlvbnMuZGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmVudW12YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Qub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zb3VyY2VDb250ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnN5bnRheCA9IG9wdGlvbnMuZW51bXMgPT09IFN0cmluZyA/IFwiU1lOVEFYX1BST1RPMlwiIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubmFtZSA9IG1lc3NhZ2UubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5lbnVtdmFsdWUgJiYgbWVzc2FnZS5lbnVtdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5lbnVtdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtZXNzYWdlLmVudW12YWx1ZS5sZW5ndGg7ICsrailcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5lbnVtdmFsdWVbal0gPSAkcm9vdC5nb29nbGUucHJvdG9idWYuRW51bVZhbHVlLnRvT2JqZWN0KG1lc3NhZ2UuZW51bXZhbHVlW2pdLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub3B0aW9ucyAmJiBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5vcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytqKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm9wdGlvbnNbal0gPSAkcm9vdC5nb29nbGUucHJvdG9idWYuT3B0aW9uLnRvT2JqZWN0KG1lc3NhZ2Uub3B0aW9uc1tqXSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnNvdXJjZUNvbnRleHQgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwic291cmNlQ29udGV4dFwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnNvdXJjZUNvbnRleHQgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dC50b09iamVjdChtZXNzYWdlLnNvdXJjZUNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnN5bnRheCAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJzeW50YXhcIikpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zeW50YXggPSBvcHRpb25zLmVudW1zID09PSBTdHJpbmcgPyAkcm9vdC5nb29nbGUucHJvdG9idWYuU3ludGF4W21lc3NhZ2Uuc3ludGF4XSA6IG1lc3NhZ2Uuc3ludGF4O1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnZlcnRzIHRoaXMgRW51bSB0byBKU09OLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIEVudW07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcHJvdG9idWYuRW51bVZhbHVlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYW4gRW51bVZhbHVlLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJRW51bVZhbHVlXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbbmFtZV0gRW51bVZhbHVlIG5hbWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtudW1iZXJdIEVudW1WYWx1ZSBudW1iZXJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JT3B0aW9uPnxudWxsfSBbb3B0aW9uc10gRW51bVZhbHVlIG9wdGlvbnNcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRW51bVZhbHVlLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGFuIEVudW1WYWx1ZS5cbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElFbnVtVmFsdWVcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUVudW1WYWx1ZT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBFbnVtVmFsdWUocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleXNbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW51bVZhbHVlIG5hbWUuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVZhbHVlXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bVZhbHVlLnByb3RvdHlwZS5uYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbnVtVmFsdWUgbnVtYmVyLlxuICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBudW1iZXJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVZhbHVlXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bVZhbHVlLnByb3RvdHlwZS5udW1iZXIgPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVudW1WYWx1ZSBvcHRpb25zLlxuICAgICAgICAgICAgICogQG1lbWJlciB7QXJyYXkuPGdvb2dsZS5wcm90b2J1Zi5JT3B0aW9uPn0gb3B0aW9uc1xuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWVcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtVmFsdWUucHJvdG90eXBlLm9wdGlvbnMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgRW51bVZhbHVlIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW51bVZhbHVlXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JRW51bVZhbHVlPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZX0gRW51bVZhbHVlIGluc3RhbmNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEVudW1WYWx1ZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRW51bVZhbHVlKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgRW51bVZhbHVlIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIGdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWUudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUVudW1WYWx1ZX0gbWVzc2FnZSBFbnVtVmFsdWUgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bVZhbHVlLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXdyaXRlcilcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5uYW1lICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlci51aW50MzIoLyogaWQgMSwgd2lyZVR5cGUgMiA9Ki8xMCkuc3RyaW5nKG1lc3NhZ2UubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubnVtYmVyICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm51bWJlclwiKSlcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAyLCB3aXJlVHlwZSAwID0qLzE2KS5pbnQzMihtZXNzYWdlLm51bWJlcik7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub3B0aW9ucyAhPSBudWxsICYmIG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5vcHRpb25zLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi5lbmNvZGUobWVzc2FnZS5vcHRpb25zW2ldLCB3cml0ZXIudWludDMyKC8qIGlkIDMsIHdpcmVUeXBlIDIgPSovMjYpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlcjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEVudW1WYWx1ZSBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBnb29nbGUucHJvdG9idWYuRW51bVZhbHVlLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWVcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklFbnVtVmFsdWV9IG1lc3NhZ2UgRW51bVZhbHVlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEVudW1WYWx1ZS5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikubGRlbGltKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlY29kZXMgYW4gRW51bVZhbHVlIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWV9IEVudW1WYWx1ZVxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtVmFsdWUuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlciwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9ICRSZWFkZXIuY3JlYXRlKHJlYWRlcik7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGgsIG1lc3NhZ2UgPSBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm51bWJlciA9IHJlYWRlci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG1lc3NhZ2Uub3B0aW9ucyAmJiBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucy5wdXNoKCRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGFuIEVudW1WYWx1ZSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWVcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWV9IEVudW1WYWx1ZVxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtVmFsdWUuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGFuIEVudW1WYWx1ZSBtZXNzYWdlLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWVcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bVZhbHVlLnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdCBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc1N0cmluZyhtZXNzYWdlLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibmFtZTogc3RyaW5nIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubnVtYmVyICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm51bWJlclwiKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdXRpbC5pc0ludGVnZXIobWVzc2FnZS5udW1iZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVtYmVyOiBpbnRlZ2VyIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uub3B0aW9ucyAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlLm9wdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib3B0aW9uczogYXJyYXkgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLm9wdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvciA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24udmVyaWZ5KG1lc3NhZ2Uub3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib3B0aW9ucy5cIiArIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGFuIEVudW1WYWx1ZSBtZXNzYWdlIGZyb20gYSBwbGFpbiBvYmplY3QuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgaW50ZXJuYWwgdHlwZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZnJvbU9iamVjdFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWVcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuRW51bVZhbHVlfSBFbnVtVmFsdWVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW51bVZhbHVlLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiAkcm9vdC5nb29nbGUucHJvdG9idWYuRW51bVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5uYW1lID0gU3RyaW5nKG9iamVjdC5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm51bWJlciAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm51bWJlciA9IG9iamVjdC5udW1iZXIgfCAwO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3Qub3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0Lm9wdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiLmdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWUub3B0aW9uczogYXJyYXkgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5vcHRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5vcHRpb25zW2ldICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuRW51bVZhbHVlLm9wdGlvbnM6IG9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9uc1tpXSA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24uZnJvbU9iamVjdChvYmplY3Qub3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhbiBFbnVtVmFsdWUgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuRW51bVZhbHVlfSBtZXNzYWdlIEVudW1WYWx1ZVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtVmFsdWUudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFycmF5cyB8fCBvcHRpb25zLmRlZmF1bHRzKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3Qub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5hbWUgPSBtZXNzYWdlLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubnVtYmVyICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcIm51bWJlclwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm51bWJlciA9IG1lc3NhZ2UubnVtYmVyO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm9wdGlvbnMgJiYgbWVzc2FnZS5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Qub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1lc3NhZ2Uub3B0aW9ucy5sZW5ndGg7ICsrailcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5vcHRpb25zW2pdID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi50b09iamVjdChtZXNzYWdlLm9wdGlvbnNbal0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIEVudW1WYWx1ZSB0byBKU09OLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbnVtVmFsdWVcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBKU09OIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbnVtVmFsdWUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBFbnVtVmFsdWU7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcHJvdG9idWYuT3B0aW9uID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYW4gT3B0aW9uLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJT3B0aW9uXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbbmFtZV0gT3B0aW9uIG5hbWVcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Z29vZ2xlLnByb3RvYnVmLklBbnl8bnVsbH0gW3ZhbHVlXSBPcHRpb24gdmFsdWVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgT3B0aW9uLlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGFuIE9wdGlvbi5cbiAgICAgICAgICAgICAqIEBpbXBsZW1lbnRzIElPcHRpb25cbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSU9wdGlvbj19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBPcHRpb24ocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleXNbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXlzW2ldXSA9IHByb3BlcnRpZXNba2V5c1tpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3B0aW9uIG5hbWUuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuT3B0aW9uXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgT3B0aW9uLnByb3RvdHlwZS5uYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPcHRpb24gdmFsdWUuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtnb29nbGUucHJvdG9idWYuSUFueXxudWxsfHVuZGVmaW5lZH0gdmFsdWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuT3B0aW9uXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgT3B0aW9uLnByb3RvdHlwZS52YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBPcHRpb24gaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5PcHRpb25cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklPcHRpb249fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuT3B0aW9ufSBPcHRpb24gaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgT3B0aW9uLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBPcHRpb24ocHJvcGVydGllcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBPcHRpb24gbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuT3B0aW9uXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JT3B0aW9ufSBtZXNzYWdlIE9wdGlvbiBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBPcHRpb24uZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLm5hbWUgIT0gbnVsbCAmJiBtZXNzYWdlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAxLCB3aXJlVHlwZSAyID0qLzEwKS5zdHJpbmcobWVzc2FnZS5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS52YWx1ZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkFueS5lbmNvZGUobWVzc2FnZS52YWx1ZSwgd3JpdGVyLnVpbnQzMigvKiBpZCAyLCB3aXJlVHlwZSAyID0qLzE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBPcHRpb24gbWVzc2FnZSwgbGVuZ3RoIGRlbGltaXRlZC4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgZ29vZ2xlLnByb3RvYnVmLk9wdGlvbi52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuT3B0aW9uXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JT3B0aW9ufSBtZXNzYWdlIE9wdGlvbiBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBPcHRpb24uZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGFuIE9wdGlvbiBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5PcHRpb25cbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuT3B0aW9ufSBPcHRpb25cbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgT3B0aW9uLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyZWFkZXIsIGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSAkUmVhZGVyLmNyZWF0ZShyZWFkZXIpO1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoLCBtZXNzYWdlID0gbmV3ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24oKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm5hbWUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS52YWx1ZSA9ICRyb290Lmdvb2dsZS5wcm90b2J1Zi5BbnkuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlY29kZXMgYW4gT3B0aW9uIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIsIGxlbmd0aCBkZWxpbWl0ZWQuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk9wdGlvblxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLk9wdGlvbn0gT3B0aW9uXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIE9wdGlvbi5kZWNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWQocmVhZGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEocmVhZGVyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IG5ldyAkUmVhZGVyKHJlYWRlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmVyaWZpZXMgYW4gT3B0aW9uIG1lc3NhZ2UuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk9wdGlvblxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IGBudWxsYCBpZiB2YWxpZCwgb3RoZXJ3aXNlIHRoZSByZWFzb24gd2h5IGl0IGlzIG5vdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBPcHRpb24udmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0IGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJuYW1lOiBzdHJpbmcgZXhwZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS52YWx1ZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuQW55LnZlcmlmeShtZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidmFsdWUuXCIgKyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYW4gT3B0aW9uIG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBmcm9tT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk9wdGlvblxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5PcHRpb259IE9wdGlvblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBPcHRpb24uZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290Lmdvb2dsZS5wcm90b2J1Zi5PcHRpb24pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm5hbWUgPSBTdHJpbmcob2JqZWN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC52YWx1ZSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIi5nb29nbGUucHJvdG9idWYuT3B0aW9uLnZhbHVlOiBvYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudmFsdWUgPSAkcm9vdC5nb29nbGUucHJvdG9idWYuQW55LmZyb21PYmplY3Qob2JqZWN0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhbiBPcHRpb24gbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLk9wdGlvblxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuT3B0aW9ufSBtZXNzYWdlIE9wdGlvblxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBPcHRpb24udG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubmFtZSA9IG1lc3NhZ2UubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS52YWx1ZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZhbHVlID0gJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkFueS50b09iamVjdChtZXNzYWdlLnZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIE9wdGlvbiB0byBKU09OLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvSlNPTlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5PcHRpb25cbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBKU09OIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBPcHRpb24ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBPcHRpb247XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN5bnRheCBlbnVtLlxuICAgICAgICAgKiBAbmFtZSBnb29nbGUucHJvdG9idWYuU3ludGF4XG4gICAgICAgICAqIEBlbnVtIHtzdHJpbmd9XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTWU5UQVhfUFJPVE8yPTAgU1lOVEFYX1BST1RPMiB2YWx1ZVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gU1lOVEFYX1BST1RPMz0xIFNZTlRBWF9QUk9UTzMgdmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIHByb3RvYnVmLlN5bnRheCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlc0J5SWQgPSB7fSwgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZSh2YWx1ZXNCeUlkKTtcbiAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzBdID0gXCJTWU5UQVhfUFJPVE8yXCJdID0gMDtcbiAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzFdID0gXCJTWU5UQVhfUFJPVE8zXCJdID0gMTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcHJvdG9idWYuQW55ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByb3BlcnRpZXMgb2YgYW4gQW55LlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJQW55XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdHlwZV91cmxdIEFueSB0eXBlX3VybFxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtVaW50OEFycmF5fG51bGx9IFt2YWx1ZV0gQW55IHZhbHVlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEFueS5cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWZcbiAgICAgICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhbiBBbnkuXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJQW55XG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklBbnk9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gQW55KHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFueSB0eXBlX3VybC5cbiAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gdHlwZV91cmxcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQW55XG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQW55LnByb3RvdHlwZS50eXBlX3VybCA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQW55IHZhbHVlLlxuICAgICAgICAgICAgICogQG1lbWJlciB7VWludDhBcnJheX0gdmFsdWVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQW55XG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQW55LnByb3RvdHlwZS52YWx1ZSA9ICR1dGlsLm5ld0J1ZmZlcihbXSk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBBbnkgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5BbnlcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLklBbnk9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtnb29nbGUucHJvdG9idWYuQW55fSBBbnkgaW5zdGFuY2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQW55LmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBbnkocHJvcGVydGllcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBBbnkgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgZ29vZ2xlLnByb3RvYnVmLkFueS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQW55XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JQW55fSBtZXNzYWdlIEFueSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3dyaXRlcl0gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBBbnkuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGVfdXJsICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVfdXJsXCIpKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIudWludDMyKC8qIGlkIDEsIHdpcmVUeXBlIDIgPSovMTApLnN0cmluZyhtZXNzYWdlLnR5cGVfdXJsKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS52YWx1ZSAhPSBudWxsICYmIG1lc3NhZ2UuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVyLnVpbnQzMigvKiBpZCAyLCB3aXJlVHlwZSAyID0qLzE4KS5ieXRlcyhtZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVyO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQW55IG1lc3NhZ2UsIGxlbmd0aCBkZWxpbWl0ZWQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIGdvb2dsZS5wcm90b2J1Zi5BbnkudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkFueVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUFueX0gbWVzc2FnZSBBbnkgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQW55LmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGVuY29kZURlbGltaXRlZChtZXNzYWdlLCB3cml0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKS5sZGVsaW0oKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVjb2RlcyBhbiBBbnkgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuQW55XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLkFueX0gQW55XG4gICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEFueS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gJFJlYWRlci5jcmVhdGUocmVhZGVyKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5nb29nbGUucHJvdG9idWYuQW55KCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS50eXBlX3VybCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnZhbHVlID0gcmVhZGVyLmJ5dGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGFuIEFueSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLCBsZW5ndGggZGVsaW1pdGVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5BbnlcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5Bbnl9IEFueVxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBBbnkuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGFuIEFueSBtZXNzYWdlLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHZlcmlmeVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5BbnlcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgUGxhaW4gb2JqZWN0IHRvIHZlcmlmeVxuICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQW55LnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdCBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGVfdXJsICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVfdXJsXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoISR1dGlsLmlzU3RyaW5nKG1lc3NhZ2UudHlwZV91cmwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHlwZV91cmw6IHN0cmluZyBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnZhbHVlICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIShtZXNzYWdlLnZhbHVlICYmIHR5cGVvZiBtZXNzYWdlLnZhbHVlLmxlbmd0aCA9PT0gXCJudW1iZXJcIiB8fCAkdXRpbC5pc1N0cmluZyhtZXNzYWdlLnZhbHVlKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ2YWx1ZTogYnVmZmVyIGV4cGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYW4gQW55IG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBmcm9tT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkFueVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5Bbnl9IEFueVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBBbnkuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mICRyb290Lmdvb2dsZS5wcm90b2J1Zi5BbnkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkFueSgpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QudHlwZV91cmwgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS50eXBlX3VybCA9IFN0cmluZyhvYmplY3QudHlwZV91cmwpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QudmFsdWUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QudmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAkdXRpbC5iYXNlNjQuZGVjb2RlKG9iamVjdC52YWx1ZSwgbWVzc2FnZS52YWx1ZSA9ICR1dGlsLm5ld0J1ZmZlcigkdXRpbC5iYXNlNjQubGVuZ3RoKG9iamVjdC52YWx1ZSkpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2JqZWN0LnZhbHVlLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudmFsdWUgPSBvYmplY3QudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhbiBBbnkgbWVzc2FnZS4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gb3RoZXIgdHlwZXMgaWYgc3BlY2lmaWVkLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIHRvT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkFueVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuQW55fSBtZXNzYWdlIEFueVxuICAgICAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuSUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IFBsYWluIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBBbnkudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC50eXBlX3VybCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmJ5dGVzID09PSBTdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC52YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYnl0ZXMgIT09IEFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC52YWx1ZSA9ICR1dGlsLm5ld0J1ZmZlcihvYmplY3QudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGVfdXJsICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInR5cGVfdXJsXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudHlwZV91cmwgPSBtZXNzYWdlLnR5cGVfdXJsO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnZhbHVlICE9IG51bGwgJiYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3QudmFsdWUgPSBvcHRpb25zLmJ5dGVzID09PSBTdHJpbmcgPyAkdXRpbC5iYXNlNjQuZW5jb2RlKG1lc3NhZ2UudmFsdWUsIDAsIG1lc3NhZ2UudmFsdWUubGVuZ3RoKSA6IG9wdGlvbnMuYnl0ZXMgPT09IEFycmF5ID8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZS52YWx1ZSkgOiBtZXNzYWdlLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnZlcnRzIHRoaXMgQW55IHRvIEpTT04uXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkFueVxuICAgICAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEFueS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnRvT2JqZWN0KHRoaXMsICRwcm90b2J1Zi51dGlsLnRvSlNPTk9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIEFueTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBwcm90b2J1Zi5FbXB0eSA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGFuIEVtcHR5LlxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1ZlxuICAgICAgICAgICAgICogQGludGVyZmFjZSBJRW1wdHlcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRW1wdHkuXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmXG4gICAgICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYW4gRW1wdHkuXG4gICAgICAgICAgICAgKiBAaW1wbGVtZW50cyBJRW1wdHlcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUVtcHR5PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIEVtcHR5KHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXlzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5c1tpXV0gPSBwcm9wZXJ0aWVzW2tleXNbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgRW1wdHkgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgICAgICogQG1lbWJlcm9mIGdvb2dsZS5wcm90b2J1Zi5FbXB0eVxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHBhcmFtIHtnb29nbGUucHJvdG9idWYuSUVtcHR5PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLkVtcHR5fSBFbXB0eSBpbnN0YW5jZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbXB0eS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRW1wdHkocHJvcGVydGllcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBFbXB0eSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBnb29nbGUucHJvdG9idWYuRW1wdHkudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVtcHR5XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JRW1wdHl9IG1lc3NhZ2UgRW1wdHkgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW1wdHkuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIGlmICghd3JpdGVyKVxuICAgICAgICAgICAgICAgICAgICB3cml0ZXIgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3cml0ZXI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBFbXB0eSBtZXNzYWdlLCBsZW5ndGggZGVsaW1pdGVkLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBnb29nbGUucHJvdG9idWYuRW1wdHkudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVtcHR5XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2dvb2dsZS5wcm90b2J1Zi5JRW1wdHl9IG1lc3NhZ2UgRW1wdHkgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW1wdHkuZW5jb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZW5jb2RlRGVsaW1pdGVkKG1lc3NhZ2UsIHdyaXRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShtZXNzYWdlLCB3cml0ZXIpLmxkZWxpbSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWNvZGVzIGFuIEVtcHR5IG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVtcHR5XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLkVtcHR5fSBFbXB0eVxuICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbXB0eS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUocmVhZGVyLCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gJFJlYWRlci5jcmVhdGUocmVhZGVyKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aCwgbWVzc2FnZSA9IG5ldyAkcm9vdC5nb29nbGUucHJvdG9idWYuRW1wdHkoKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlY29kZXMgYW4gRW1wdHkgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlciwgbGVuZ3RoIGRlbGltaXRlZC5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWRcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW1wdHlcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICogQHJldHVybnMge2dvb2dsZS5wcm90b2J1Zi5FbXB0eX0gRW1wdHlcbiAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW1wdHkuZGVjb2RlRGVsaW1pdGVkID0gZnVuY3Rpb24gZGVjb2RlRGVsaW1pdGVkKHJlYWRlcikge1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWRlciBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgJFJlYWRlcihyZWFkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZlcmlmaWVzIGFuIEVtcHR5IG1lc3NhZ2UuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdmVyaWZ5XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVtcHR5XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBtZXNzYWdlIFBsYWluIG9iamVjdCB0byB2ZXJpZnlcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEVtcHR5LnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeShtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdCBleHBlY3RlZFwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGFuIEVtcHR5IG1lc3NhZ2UgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBmcm9tT2JqZWN0XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVtcHR5XG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgUGxhaW4gb2JqZWN0XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Z29vZ2xlLnByb3RvYnVmLkVtcHR5fSBFbXB0eVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBFbXB0eS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkVtcHR5KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJHJvb3QuZ29vZ2xlLnByb3RvYnVmLkVtcHR5KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhbiBFbXB0eSBtZXNzYWdlLiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byBvdGhlciB0eXBlcyBpZiBzcGVjaWZpZWQuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9PYmplY3RcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBnb29nbGUucHJvdG9idWYuRW1wdHlcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Z29vZ2xlLnByb3RvYnVmLkVtcHR5fSBtZXNzYWdlIEVtcHR5XG4gICAgICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5JQ29udmVyc2lvbk9wdGlvbnN9IFtvcHRpb25zXSBDb252ZXJzaW9uIG9wdGlvbnNcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEVtcHR5LnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIEVtcHR5IHRvIEpTT04uXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gdG9KU09OXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgZ29vZ2xlLnByb3RvYnVmLkVtcHR5XG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gSlNPTiBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgRW1wdHkucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50b09iamVjdCh0aGlzLCAkcHJvdG9idWYudXRpbC50b0pTT05PcHRpb25zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBFbXB0eTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4gcHJvdG9idWY7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiBnb29nbGU7XG59KSgpOyJdfQ==
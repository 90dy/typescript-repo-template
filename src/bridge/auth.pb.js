// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const bridge = $root.bridge = (() => {

    /**
     * Namespace bridge.
     * @exports bridge
     * @namespace
     */
    const bridge = {};

    bridge.Auth = (function() {

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
        }, "name", { value: "Descriptor" });

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
        }, "name", { value: "ByUsernameAndPassword" });

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
    })();

    bridge.UsernameAndPassword = (function() {

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
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bridge.UsernameAndPassword();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
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
            if (object instanceof $root.bridge.UsernameAndPassword)
                return object;
            let message = new $root.bridge.UsernameAndPassword();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
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
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
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
    })();

    return bridge;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Api = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.methods != null && message.methods.length)
                    for (let i = 0; i < message.methods.length; ++i)
                        $root.google.protobuf.Method.encode(message.methods[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.options.length)
                    for (let i = 0; i < message.options.length; ++i)
                        $root.google.protobuf.Option.encode(message.options[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.version);
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext"))
                    $root.google.protobuf.SourceContext.encode(message.sourceContext, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.mixins != null && message.mixins.length)
                    for (let i = 0; i < message.mixins.length; ++i)
                        $root.google.protobuf.Mixin.encode(message.mixins[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.syntax);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Api();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.methods && message.methods.length))
                            message.methods = [];
                        message.methods.push($root.google.protobuf.Method.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.google.protobuf.Option.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        message.version = reader.string();
                        break;
                    case 5:
                        message.sourceContext = $root.google.protobuf.SourceContext.decode(reader, reader.uint32());
                        break;
                    case 6:
                        if (!(message.mixins && message.mixins.length))
                            message.mixins = [];
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.methods != null && message.hasOwnProperty("methods")) {
                    if (!Array.isArray(message.methods))
                        return "methods: array expected";
                    for (let i = 0; i < message.methods.length; ++i) {
                        let error = $root.google.protobuf.Method.verify(message.methods[i]);
                        if (error)
                            return "methods." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    if (!Array.isArray(message.options))
                        return "options: array expected";
                    for (let i = 0; i < message.options.length; ++i) {
                        let error = $root.google.protobuf.Option.verify(message.options[i]);
                        if (error)
                            return "options." + error;
                    }
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) {
                    let error = $root.google.protobuf.SourceContext.verify(message.sourceContext);
                    if (error)
                        return "sourceContext." + error;
                }
                if (message.mixins != null && message.hasOwnProperty("mixins")) {
                    if (!Array.isArray(message.mixins))
                        return "mixins: array expected";
                    for (let i = 0; i < message.mixins.length; ++i) {
                        let error = $root.google.protobuf.Mixin.verify(message.mixins[i]);
                        if (error)
                            return "mixins." + error;
                    }
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    switch (message.syntax) {
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
                if (object instanceof $root.google.protobuf.Api)
                    return object;
                let message = new $root.google.protobuf.Api();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.methods) {
                    if (!Array.isArray(object.methods))
                        throw TypeError(".google.protobuf.Api.methods: array expected");
                    message.methods = [];
                    for (let i = 0; i < object.methods.length; ++i) {
                        if (typeof object.methods[i] !== "object")
                            throw TypeError(".google.protobuf.Api.methods: object expected");
                        message.methods[i] = $root.google.protobuf.Method.fromObject(object.methods[i]);
                    }
                }
                if (object.options) {
                    if (!Array.isArray(object.options))
                        throw TypeError(".google.protobuf.Api.options: array expected");
                    message.options = [];
                    for (let i = 0; i < object.options.length; ++i) {
                        if (typeof object.options[i] !== "object")
                            throw TypeError(".google.protobuf.Api.options: object expected");
                        message.options[i] = $root.google.protobuf.Option.fromObject(object.options[i]);
                    }
                }
                if (object.version != null)
                    message.version = String(object.version);
                if (object.sourceContext != null) {
                    if (typeof object.sourceContext !== "object")
                        throw TypeError(".google.protobuf.Api.sourceContext: object expected");
                    message.sourceContext = $root.google.protobuf.SourceContext.fromObject(object.sourceContext);
                }
                if (object.mixins) {
                    if (!Array.isArray(object.mixins))
                        throw TypeError(".google.protobuf.Api.mixins: array expected");
                    message.mixins = [];
                    for (let i = 0; i < object.mixins.length; ++i) {
                        if (typeof object.mixins[i] !== "object")
                            throw TypeError(".google.protobuf.Api.mixins: object expected");
                        message.mixins[i] = $root.google.protobuf.Mixin.fromObject(object.mixins[i]);
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
                if (!options)
                    options = {};
                let object = {};
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
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.methods && message.methods.length) {
                    object.methods = [];
                    for (let j = 0; j < message.methods.length; ++j)
                        object.methods[j] = $root.google.protobuf.Method.toObject(message.methods[j], options);
                }
                if (message.options && message.options.length) {
                    object.options = [];
                    for (let j = 0; j < message.options.length; ++j)
                        object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext"))
                    object.sourceContext = $root.google.protobuf.SourceContext.toObject(message.sourceContext, options);
                if (message.mixins && message.mixins.length) {
                    object.mixins = [];
                    for (let j = 0; j < message.mixins.length; ++j)
                        object.mixins[j] = $root.google.protobuf.Mixin.toObject(message.mixins[j], options);
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = options.enums === String ? $root.google.protobuf.Syntax[message.syntax] : message.syntax;
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
        })();

        protobuf.Method = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.requestTypeUrl != null && message.hasOwnProperty("requestTypeUrl"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.requestTypeUrl);
                if (message.requestStreaming != null && message.hasOwnProperty("requestStreaming"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.requestStreaming);
                if (message.responseTypeUrl != null && message.hasOwnProperty("responseTypeUrl"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.responseTypeUrl);
                if (message.responseStreaming != null && message.hasOwnProperty("responseStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.responseStreaming);
                if (message.options != null && message.options.length)
                    for (let i = 0; i < message.options.length; ++i)
                        $root.google.protobuf.Option.encode(message.options[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.syntax);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Method();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                        if (!(message.options && message.options.length))
                            message.options = [];
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.requestTypeUrl != null && message.hasOwnProperty("requestTypeUrl"))
                    if (!$util.isString(message.requestTypeUrl))
                        return "requestTypeUrl: string expected";
                if (message.requestStreaming != null && message.hasOwnProperty("requestStreaming"))
                    if (typeof message.requestStreaming !== "boolean")
                        return "requestStreaming: boolean expected";
                if (message.responseTypeUrl != null && message.hasOwnProperty("responseTypeUrl"))
                    if (!$util.isString(message.responseTypeUrl))
                        return "responseTypeUrl: string expected";
                if (message.responseStreaming != null && message.hasOwnProperty("responseStreaming"))
                    if (typeof message.responseStreaming !== "boolean")
                        return "responseStreaming: boolean expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    if (!Array.isArray(message.options))
                        return "options: array expected";
                    for (let i = 0; i < message.options.length; ++i) {
                        let error = $root.google.protobuf.Option.verify(message.options[i]);
                        if (error)
                            return "options." + error;
                    }
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    switch (message.syntax) {
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
                if (object instanceof $root.google.protobuf.Method)
                    return object;
                let message = new $root.google.protobuf.Method();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.requestTypeUrl != null)
                    message.requestTypeUrl = String(object.requestTypeUrl);
                if (object.requestStreaming != null)
                    message.requestStreaming = Boolean(object.requestStreaming);
                if (object.responseTypeUrl != null)
                    message.responseTypeUrl = String(object.responseTypeUrl);
                if (object.responseStreaming != null)
                    message.responseStreaming = Boolean(object.responseStreaming);
                if (object.options) {
                    if (!Array.isArray(object.options))
                        throw TypeError(".google.protobuf.Method.options: array expected");
                    message.options = [];
                    for (let i = 0; i < object.options.length; ++i) {
                        if (typeof object.options[i] !== "object")
                            throw TypeError(".google.protobuf.Method.options: object expected");
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
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.options = [];
                if (options.defaults) {
                    object.name = "";
                    object.requestTypeUrl = "";
                    object.requestStreaming = false;
                    object.responseTypeUrl = "";
                    object.responseStreaming = false;
                    object.syntax = options.enums === String ? "SYNTAX_PROTO2" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.requestTypeUrl != null && message.hasOwnProperty("requestTypeUrl"))
                    object.requestTypeUrl = message.requestTypeUrl;
                if (message.requestStreaming != null && message.hasOwnProperty("requestStreaming"))
                    object.requestStreaming = message.requestStreaming;
                if (message.responseTypeUrl != null && message.hasOwnProperty("responseTypeUrl"))
                    object.responseTypeUrl = message.responseTypeUrl;
                if (message.responseStreaming != null && message.hasOwnProperty("responseStreaming"))
                    object.responseStreaming = message.responseStreaming;
                if (message.options && message.options.length) {
                    object.options = [];
                    for (let j = 0; j < message.options.length; ++j)
                        object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = options.enums === String ? $root.google.protobuf.Syntax[message.syntax] : message.syntax;
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
        })();

        protobuf.Mixin = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.root != null && message.hasOwnProperty("root"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.root);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Mixin();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.root != null && message.hasOwnProperty("root"))
                    if (!$util.isString(message.root))
                        return "root: string expected";
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
                if (object instanceof $root.google.protobuf.Mixin)
                    return object;
                let message = new $root.google.protobuf.Mixin();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.root != null)
                    message.root = String(object.root);
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
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.root = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.root != null && message.hasOwnProperty("root"))
                    object.root = message.root;
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
        })();

        protobuf.SourceContext = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileName);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceContext();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    if (!$util.isString(message.fileName))
                        return "fileName: string expected";
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
                if (object instanceof $root.google.protobuf.SourceContext)
                    return object;
                let message = new $root.google.protobuf.SourceContext();
                if (object.fileName != null)
                    message.fileName = String(object.fileName);
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
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.fileName = "";
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    object.fileName = message.fileName;
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
        })();

        protobuf.Type = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.fields != null && message.fields.length)
                    for (let i = 0; i < message.fields.length; ++i)
                        $root.google.protobuf.Field.encode(message.fields[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.oneofs != null && message.oneofs.length)
                    for (let i = 0; i < message.oneofs.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.oneofs[i]);
                if (message.options != null && message.options.length)
                    for (let i = 0; i < message.options.length; ++i)
                        $root.google.protobuf.Option.encode(message.options[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext"))
                    $root.google.protobuf.SourceContext.encode(message.sourceContext, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.syntax);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Type();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.fields && message.fields.length))
                            message.fields = [];
                        message.fields.push($root.google.protobuf.Field.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.oneofs && message.oneofs.length))
                            message.oneofs = [];
                        message.oneofs.push(reader.string());
                        break;
                    case 4:
                        if (!(message.options && message.options.length))
                            message.options = [];
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!Array.isArray(message.fields))
                        return "fields: array expected";
                    for (let i = 0; i < message.fields.length; ++i) {
                        let error = $root.google.protobuf.Field.verify(message.fields[i]);
                        if (error)
                            return "fields." + error;
                    }
                }
                if (message.oneofs != null && message.hasOwnProperty("oneofs")) {
                    if (!Array.isArray(message.oneofs))
                        return "oneofs: array expected";
                    for (let i = 0; i < message.oneofs.length; ++i)
                        if (!$util.isString(message.oneofs[i]))
                            return "oneofs: string[] expected";
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    if (!Array.isArray(message.options))
                        return "options: array expected";
                    for (let i = 0; i < message.options.length; ++i) {
                        let error = $root.google.protobuf.Option.verify(message.options[i]);
                        if (error)
                            return "options." + error;
                    }
                }
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) {
                    let error = $root.google.protobuf.SourceContext.verify(message.sourceContext);
                    if (error)
                        return "sourceContext." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    switch (message.syntax) {
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
                if (object instanceof $root.google.protobuf.Type)
                    return object;
                let message = new $root.google.protobuf.Type();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.fields) {
                    if (!Array.isArray(object.fields))
                        throw TypeError(".google.protobuf.Type.fields: array expected");
                    message.fields = [];
                    for (let i = 0; i < object.fields.length; ++i) {
                        if (typeof object.fields[i] !== "object")
                            throw TypeError(".google.protobuf.Type.fields: object expected");
                        message.fields[i] = $root.google.protobuf.Field.fromObject(object.fields[i]);
                    }
                }
                if (object.oneofs) {
                    if (!Array.isArray(object.oneofs))
                        throw TypeError(".google.protobuf.Type.oneofs: array expected");
                    message.oneofs = [];
                    for (let i = 0; i < object.oneofs.length; ++i)
                        message.oneofs[i] = String(object.oneofs[i]);
                }
                if (object.options) {
                    if (!Array.isArray(object.options))
                        throw TypeError(".google.protobuf.Type.options: array expected");
                    message.options = [];
                    for (let i = 0; i < object.options.length; ++i) {
                        if (typeof object.options[i] !== "object")
                            throw TypeError(".google.protobuf.Type.options: object expected");
                        message.options[i] = $root.google.protobuf.Option.fromObject(object.options[i]);
                    }
                }
                if (object.sourceContext != null) {
                    if (typeof object.sourceContext !== "object")
                        throw TypeError(".google.protobuf.Type.sourceContext: object expected");
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
                if (!options)
                    options = {};
                let object = {};
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
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.fields && message.fields.length) {
                    object.fields = [];
                    for (let j = 0; j < message.fields.length; ++j)
                        object.fields[j] = $root.google.protobuf.Field.toObject(message.fields[j], options);
                }
                if (message.oneofs && message.oneofs.length) {
                    object.oneofs = [];
                    for (let j = 0; j < message.oneofs.length; ++j)
                        object.oneofs[j] = message.oneofs[j];
                }
                if (message.options && message.options.length) {
                    object.options = [];
                    for (let j = 0; j < message.options.length; ++j)
                        object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
                }
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext"))
                    object.sourceContext = $root.google.protobuf.SourceContext.toObject(message.sourceContext, options);
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = options.enums === String ? $root.google.protobuf.Syntax[message.syntax] : message.syntax;
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
        })();

        protobuf.Field = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.kind != null && message.hasOwnProperty("kind"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.kind);
                if (message.cardinality != null && message.hasOwnProperty("cardinality"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardinality);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                if (message.typeUrl != null && message.hasOwnProperty("typeUrl"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeUrl);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.oneofIndex);
                if (message.packed != null && message.hasOwnProperty("packed"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.packed);
                if (message.options != null && message.options.length)
                    for (let i = 0; i < message.options.length; ++i)
                        $root.google.protobuf.Option.encode(message.options[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.defaultValue);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Field();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                        if (!(message.options && message.options.length))
                            message.options = [];
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.kind != null && message.hasOwnProperty("kind"))
                    switch (message.kind) {
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
                if (message.cardinality != null && message.hasOwnProperty("cardinality"))
                    switch (message.cardinality) {
                    default:
                        return "cardinality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.typeUrl != null && message.hasOwnProperty("typeUrl"))
                    if (!$util.isString(message.typeUrl))
                        return "typeUrl: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    if (!Array.isArray(message.options))
                        return "options: array expected";
                    for (let i = 0; i < message.options.length; ++i) {
                        let error = $root.google.protobuf.Option.verify(message.options[i]);
                        if (error)
                            return "options." + error;
                    }
                }
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
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
                if (object instanceof $root.google.protobuf.Field)
                    return object;
                let message = new $root.google.protobuf.Field();
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
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.typeUrl != null)
                    message.typeUrl = String(object.typeUrl);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                if (object.options) {
                    if (!Array.isArray(object.options))
                        throw TypeError(".google.protobuf.Field.options: array expected");
                    message.options = [];
                    for (let i = 0; i < object.options.length; ++i) {
                        if (typeof object.options[i] !== "object")
                            throw TypeError(".google.protobuf.Field.options: object expected");
                        message.options[i] = $root.google.protobuf.Option.fromObject(object.options[i]);
                    }
                }
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
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
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.options = [];
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
                if (message.kind != null && message.hasOwnProperty("kind"))
                    object.kind = options.enums === String ? $root.google.protobuf.Field.Kind[message.kind] : message.kind;
                if (message.cardinality != null && message.hasOwnProperty("cardinality"))
                    object.cardinality = options.enums === String ? $root.google.protobuf.Field.Cardinality[message.cardinality] : message.cardinality;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.typeUrl != null && message.hasOwnProperty("typeUrl"))
                    object.typeUrl = message.typeUrl;
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.options && message.options.length) {
                    object.options = [];
                    for (let j = 0; j < message.options.length; ++j)
                        object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
                }
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
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
            Field.Kind = (function() {
                const valuesById = {}, values = Object.create(valuesById);
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
            })();

            /**
             * Cardinality enum.
             * @name google.protobuf.Field.Cardinality
             * @enum {string}
             * @property {number} CARDINALITY_UNKNOWN=0 CARDINALITY_UNKNOWN value
             * @property {number} CARDINALITY_OPTIONAL=1 CARDINALITY_OPTIONAL value
             * @property {number} CARDINALITY_REQUIRED=2 CARDINALITY_REQUIRED value
             * @property {number} CARDINALITY_REPEATED=3 CARDINALITY_REPEATED value
             */
            Field.Cardinality = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CARDINALITY_UNKNOWN"] = 0;
                values[valuesById[1] = "CARDINALITY_OPTIONAL"] = 1;
                values[valuesById[2] = "CARDINALITY_REQUIRED"] = 2;
                values[valuesById[3] = "CARDINALITY_REPEATED"] = 3;
                return values;
            })();

            return Field;
        })();

        protobuf.Enum = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.enumvalue != null && message.enumvalue.length)
                    for (let i = 0; i < message.enumvalue.length; ++i)
                        $root.google.protobuf.EnumValue.encode(message.enumvalue[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.options.length)
                    for (let i = 0; i < message.options.length; ++i)
                        $root.google.protobuf.Option.encode(message.options[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext"))
                    $root.google.protobuf.SourceContext.encode(message.sourceContext, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.syntax);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Enum();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.enumvalue && message.enumvalue.length))
                            message.enumvalue = [];
                        message.enumvalue.push($root.google.protobuf.EnumValue.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.options && message.options.length))
                            message.options = [];
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.enumvalue != null && message.hasOwnProperty("enumvalue")) {
                    if (!Array.isArray(message.enumvalue))
                        return "enumvalue: array expected";
                    for (let i = 0; i < message.enumvalue.length; ++i) {
                        let error = $root.google.protobuf.EnumValue.verify(message.enumvalue[i]);
                        if (error)
                            return "enumvalue." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    if (!Array.isArray(message.options))
                        return "options: array expected";
                    for (let i = 0; i < message.options.length; ++i) {
                        let error = $root.google.protobuf.Option.verify(message.options[i]);
                        if (error)
                            return "options." + error;
                    }
                }
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext")) {
                    let error = $root.google.protobuf.SourceContext.verify(message.sourceContext);
                    if (error)
                        return "sourceContext." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    switch (message.syntax) {
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
                if (object instanceof $root.google.protobuf.Enum)
                    return object;
                let message = new $root.google.protobuf.Enum();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.enumvalue) {
                    if (!Array.isArray(object.enumvalue))
                        throw TypeError(".google.protobuf.Enum.enumvalue: array expected");
                    message.enumvalue = [];
                    for (let i = 0; i < object.enumvalue.length; ++i) {
                        if (typeof object.enumvalue[i] !== "object")
                            throw TypeError(".google.protobuf.Enum.enumvalue: object expected");
                        message.enumvalue[i] = $root.google.protobuf.EnumValue.fromObject(object.enumvalue[i]);
                    }
                }
                if (object.options) {
                    if (!Array.isArray(object.options))
                        throw TypeError(".google.protobuf.Enum.options: array expected");
                    message.options = [];
                    for (let i = 0; i < object.options.length; ++i) {
                        if (typeof object.options[i] !== "object")
                            throw TypeError(".google.protobuf.Enum.options: object expected");
                        message.options[i] = $root.google.protobuf.Option.fromObject(object.options[i]);
                    }
                }
                if (object.sourceContext != null) {
                    if (typeof object.sourceContext !== "object")
                        throw TypeError(".google.protobuf.Enum.sourceContext: object expected");
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
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.enumvalue = [];
                    object.options = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.sourceContext = null;
                    object.syntax = options.enums === String ? "SYNTAX_PROTO2" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.enumvalue && message.enumvalue.length) {
                    object.enumvalue = [];
                    for (let j = 0; j < message.enumvalue.length; ++j)
                        object.enumvalue[j] = $root.google.protobuf.EnumValue.toObject(message.enumvalue[j], options);
                }
                if (message.options && message.options.length) {
                    object.options = [];
                    for (let j = 0; j < message.options.length; ++j)
                        object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
                }
                if (message.sourceContext != null && message.hasOwnProperty("sourceContext"))
                    object.sourceContext = $root.google.protobuf.SourceContext.toObject(message.sourceContext, options);
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = options.enums === String ? $root.google.protobuf.Syntax[message.syntax] : message.syntax;
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
        })();

        protobuf.EnumValue = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && message.options.length)
                    for (let i = 0; i < message.options.length; ++i)
                        $root.google.protobuf.Option.encode(message.options[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        if (!(message.options && message.options.length))
                            message.options = [];
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    if (!Array.isArray(message.options))
                        return "options: array expected";
                    for (let i = 0; i < message.options.length; ++i) {
                        let error = $root.google.protobuf.Option.verify(message.options[i]);
                        if (error)
                            return "options." + error;
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
                if (object instanceof $root.google.protobuf.EnumValue)
                    return object;
                let message = new $root.google.protobuf.EnumValue();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options) {
                    if (!Array.isArray(object.options))
                        throw TypeError(".google.protobuf.EnumValue.options: array expected");
                    message.options = [];
                    for (let i = 0; i < object.options.length; ++i) {
                        if (typeof object.options[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValue.options: object expected");
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
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.options = [];
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options && message.options.length) {
                    object.options = [];
                    for (let j = 0; j < message.options.length; ++j)
                        object.options[j] = $root.google.protobuf.Option.toObject(message.options[j], options);
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
        })();

        protobuf.Option = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.hasOwnProperty("value"))
                    $root.google.protobuf.Any.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Option();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    let error = $root.google.protobuf.Any.verify(message.value);
                    if (error)
                        return "value." + error;
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
                if (object instanceof $root.google.protobuf.Option)
                    return object;
                let message = new $root.google.protobuf.Option();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value != null) {
                    if (typeof object.value !== "object")
                        throw TypeError(".google.protobuf.Option.value: object expected");
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
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.value = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = $root.google.protobuf.Any.toObject(message.value, options);
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
        })();

        /**
         * Syntax enum.
         * @name google.protobuf.Syntax
         * @enum {string}
         * @property {number} SYNTAX_PROTO2=0 SYNTAX_PROTO2 value
         * @property {number} SYNTAX_PROTO3=1 SYNTAX_PROTO3 value
         */
        protobuf.Syntax = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SYNTAX_PROTO2"] = 0;
            values[valuesById[1] = "SYNTAX_PROTO3"] = 1;
            return values;
        })();

        protobuf.Any = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
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
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                let message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
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
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
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
        })();

        protobuf.Empty = (function() {

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
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
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
                if (!writer)
                    writer = $Writer.create();
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
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
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
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
        })();

        return protobuf;
    })();

    return google;
})();
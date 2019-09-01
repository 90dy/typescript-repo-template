import * as $protobuf from "protobufjs";
/** Namespace bridge. */
export namespace bridge {

    /** Represents an Auth */
    class Auth extends $protobuf.rpc.Service {

        /**
         * Constructs a new Auth service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Auth service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Auth;

        /**
         * Calls Descriptor.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and Api
         */
        public descriptor(request: google.protobuf.IEmpty, callback: bridge.Auth.DescriptorCallback): void;

        /**
         * Calls Descriptor.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public descriptor(request: google.protobuf.IEmpty): Promise<google.protobuf.Api>;

        /**
         * Calls ByUsernameAndPassword.
         * @param request UsernameAndPassword message or plain object
         * @param callback Node-style callback called with the error, if any, and Api
         */
        public byUsernameAndPassword(request: bridge.IUsernameAndPassword, callback: bridge.Auth.ByUsernameAndPasswordCallback): void;

        /**
         * Calls ByUsernameAndPassword.
         * @param request UsernameAndPassword message or plain object
         * @returns Promise
         */
        public byUsernameAndPassword(request: bridge.IUsernameAndPassword): Promise<google.protobuf.Api>;
    }

    namespace Auth {

        /**
         * Callback as used by {@link bridge.Auth#descriptor}.
         * @param error Error, if any
         * @param [response] Api
         */
        type DescriptorCallback = (error: (Error|null), response?: google.protobuf.Api) => void;

        /**
         * Callback as used by {@link bridge.Auth#byUsernameAndPassword}.
         * @param error Error, if any
         * @param [response] Api
         */
        type ByUsernameAndPasswordCallback = (error: (Error|null), response?: google.protobuf.Api) => void;
    }

    /** Properties of a UsernameAndPassword. */
    interface IUsernameAndPassword {

        /** UsernameAndPassword username */
        username?: (string|null);

        /** UsernameAndPassword password */
        password?: (string|null);
    }

    /** Represents a UsernameAndPassword. */
    class UsernameAndPassword implements IUsernameAndPassword {

        /**
         * Constructs a new UsernameAndPassword.
         * @param [properties] Properties to set
         */
        constructor(properties?: bridge.IUsernameAndPassword);

        /** UsernameAndPassword username. */
        public username: string;

        /** UsernameAndPassword password. */
        public password: string;

        /**
         * Creates a new UsernameAndPassword instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UsernameAndPassword instance
         */
        public static create(properties?: bridge.IUsernameAndPassword): bridge.UsernameAndPassword;

        /**
         * Encodes the specified UsernameAndPassword message. Does not implicitly {@link bridge.UsernameAndPassword.verify|verify} messages.
         * @param message UsernameAndPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bridge.IUsernameAndPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UsernameAndPassword message, length delimited. Does not implicitly {@link bridge.UsernameAndPassword.verify|verify} messages.
         * @param message UsernameAndPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bridge.IUsernameAndPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UsernameAndPassword message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UsernameAndPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bridge.UsernameAndPassword;

        /**
         * Decodes a UsernameAndPassword message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UsernameAndPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bridge.UsernameAndPassword;

        /**
         * Verifies a UsernameAndPassword message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UsernameAndPassword message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UsernameAndPassword
         */
        public static fromObject(object: { [k: string]: any }): bridge.UsernameAndPassword;

        /**
         * Creates a plain object from a UsernameAndPassword message. Also converts values to other types if specified.
         * @param message UsernameAndPassword
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bridge.UsernameAndPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UsernameAndPassword to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Api. */
        interface IApi {

            /** Api name */
            name?: (string|null);

            /** Api methods */
            methods?: (google.protobuf.IMethod[]|null);

            /** Api options */
            options?: (google.protobuf.IOption[]|null);

            /** Api version */
            version?: (string|null);

            /** Api sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Api mixins */
            mixins?: (google.protobuf.IMixin[]|null);

            /** Api syntax */
            syntax?: (google.protobuf.Syntax|null);
        }

        /** Represents an Api. */
        class Api implements IApi {

            /**
             * Constructs a new Api.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IApi);

            /** Api name. */
            public name: string;

            /** Api methods. */
            public methods: google.protobuf.IMethod[];

            /** Api options. */
            public options: google.protobuf.IOption[];

            /** Api version. */
            public version: string;

            /** Api sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Api mixins. */
            public mixins: google.protobuf.IMixin[];

            /** Api syntax. */
            public syntax: google.protobuf.Syntax;

            /**
             * Creates a new Api instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Api instance
             */
            public static create(properties?: google.protobuf.IApi): google.protobuf.Api;

            /**
             * Encodes the specified Api message. Does not implicitly {@link google.protobuf.Api.verify|verify} messages.
             * @param message Api message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IApi, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Api message, length delimited. Does not implicitly {@link google.protobuf.Api.verify|verify} messages.
             * @param message Api message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IApi, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Api message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Api
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Api;

            /**
             * Decodes an Api message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Api
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Api;

            /**
             * Verifies an Api message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Api message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Api
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Api;

            /**
             * Creates a plain object from an Api message. Also converts values to other types if specified.
             * @param message Api
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Api to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Method. */
        interface IMethod {

            /** Method name */
            name?: (string|null);

            /** Method requestTypeUrl */
            requestTypeUrl?: (string|null);

            /** Method requestStreaming */
            requestStreaming?: (boolean|null);

            /** Method responseTypeUrl */
            responseTypeUrl?: (string|null);

            /** Method responseStreaming */
            responseStreaming?: (boolean|null);

            /** Method options */
            options?: (google.protobuf.IOption[]|null);

            /** Method syntax */
            syntax?: (google.protobuf.Syntax|null);
        }

        /** Represents a Method. */
        class Method implements IMethod {

            /**
             * Constructs a new Method.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethod);

            /** Method name. */
            public name: string;

            /** Method requestTypeUrl. */
            public requestTypeUrl: string;

            /** Method requestStreaming. */
            public requestStreaming: boolean;

            /** Method responseTypeUrl. */
            public responseTypeUrl: string;

            /** Method responseStreaming. */
            public responseStreaming: boolean;

            /** Method options. */
            public options: google.protobuf.IOption[];

            /** Method syntax. */
            public syntax: google.protobuf.Syntax;

            /**
             * Creates a new Method instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Method instance
             */
            public static create(properties?: google.protobuf.IMethod): google.protobuf.Method;

            /**
             * Encodes the specified Method message. Does not implicitly {@link google.protobuf.Method.verify|verify} messages.
             * @param message Method message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Method message, length delimited. Does not implicitly {@link google.protobuf.Method.verify|verify} messages.
             * @param message Method message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Method message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Method
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Method;

            /**
             * Decodes a Method message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Method
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Method;

            /**
             * Verifies a Method message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Method message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Method
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Method;

            /**
             * Creates a plain object from a Method message. Also converts values to other types if specified.
             * @param message Method
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Method, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Method to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Mixin. */
        interface IMixin {

            /** Mixin name */
            name?: (string|null);

            /** Mixin root */
            root?: (string|null);
        }

        /** Represents a Mixin. */
        class Mixin implements IMixin {

            /**
             * Constructs a new Mixin.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMixin);

            /** Mixin name. */
            public name: string;

            /** Mixin root. */
            public root: string;

            /**
             * Creates a new Mixin instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Mixin instance
             */
            public static create(properties?: google.protobuf.IMixin): google.protobuf.Mixin;

            /**
             * Encodes the specified Mixin message. Does not implicitly {@link google.protobuf.Mixin.verify|verify} messages.
             * @param message Mixin message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMixin, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Mixin message, length delimited. Does not implicitly {@link google.protobuf.Mixin.verify|verify} messages.
             * @param message Mixin message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMixin, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Mixin message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Mixin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Mixin;

            /**
             * Decodes a Mixin message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Mixin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Mixin;

            /**
             * Verifies a Mixin message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Mixin message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Mixin
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Mixin;

            /**
             * Creates a plain object from a Mixin message. Also converts values to other types if specified.
             * @param message Mixin
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Mixin, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Mixin to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SourceContext. */
        interface ISourceContext {

            /** SourceContext fileName */
            fileName?: (string|null);
        }

        /** Represents a SourceContext. */
        class SourceContext implements ISourceContext {

            /**
             * Constructs a new SourceContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceContext);

            /** SourceContext fileName. */
            public fileName: string;

            /**
             * Creates a new SourceContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceContext instance
             */
            public static create(properties?: google.protobuf.ISourceContext): google.protobuf.SourceContext;

            /**
             * Encodes the specified SourceContext message. Does not implicitly {@link google.protobuf.SourceContext.verify|verify} messages.
             * @param message SourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceContext message, length delimited. Does not implicitly {@link google.protobuf.SourceContext.verify|verify} messages.
             * @param message SourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceContext;

            /**
             * Decodes a SourceContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceContext;

            /**
             * Verifies a SourceContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceContext
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceContext;

            /**
             * Creates a plain object from a SourceContext message. Also converts values to other types if specified.
             * @param message SourceContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Type. */
        interface IType {

            /** Type name */
            name?: (string|null);

            /** Type fields */
            fields?: (google.protobuf.IField[]|null);

            /** Type oneofs */
            oneofs?: (string[]|null);

            /** Type options */
            options?: (google.protobuf.IOption[]|null);

            /** Type sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Type syntax */
            syntax?: (google.protobuf.Syntax|null);
        }

        /** Represents a Type. */
        class Type implements IType {

            /**
             * Constructs a new Type.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IType);

            /** Type name. */
            public name: string;

            /** Type fields. */
            public fields: google.protobuf.IField[];

            /** Type oneofs. */
            public oneofs: string[];

            /** Type options. */
            public options: google.protobuf.IOption[];

            /** Type sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Type syntax. */
            public syntax: google.protobuf.Syntax;

            /**
             * Creates a new Type instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Type instance
             */
            public static create(properties?: google.protobuf.IType): google.protobuf.Type;

            /**
             * Encodes the specified Type message. Does not implicitly {@link google.protobuf.Type.verify|verify} messages.
             * @param message Type message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Type message, length delimited. Does not implicitly {@link google.protobuf.Type.verify|verify} messages.
             * @param message Type message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Type message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Type
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Type;

            /**
             * Decodes a Type message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Type
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Type;

            /**
             * Verifies a Type message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Type message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Type
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Type;

            /**
             * Creates a plain object from a Type message. Also converts values to other types if specified.
             * @param message Type
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Type to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Field. */
        interface IField {

            /** Field kind */
            kind?: (google.protobuf.Field.Kind|null);

            /** Field cardinality */
            cardinality?: (google.protobuf.Field.Cardinality|null);

            /** Field number */
            number?: (number|null);

            /** Field name */
            name?: (string|null);

            /** Field typeUrl */
            typeUrl?: (string|null);

            /** Field oneofIndex */
            oneofIndex?: (number|null);

            /** Field packed */
            packed?: (boolean|null);

            /** Field options */
            options?: (google.protobuf.IOption[]|null);

            /** Field jsonName */
            jsonName?: (string|null);

            /** Field defaultValue */
            defaultValue?: (string|null);
        }

        /** Represents a Field. */
        class Field implements IField {

            /**
             * Constructs a new Field.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IField);

            /** Field kind. */
            public kind: google.protobuf.Field.Kind;

            /** Field cardinality. */
            public cardinality: google.protobuf.Field.Cardinality;

            /** Field number. */
            public number: number;

            /** Field name. */
            public name: string;

            /** Field typeUrl. */
            public typeUrl: string;

            /** Field oneofIndex. */
            public oneofIndex: number;

            /** Field packed. */
            public packed: boolean;

            /** Field options. */
            public options: google.protobuf.IOption[];

            /** Field jsonName. */
            public jsonName: string;

            /** Field defaultValue. */
            public defaultValue: string;

            /**
             * Creates a new Field instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Field instance
             */
            public static create(properties?: google.protobuf.IField): google.protobuf.Field;

            /**
             * Encodes the specified Field message. Does not implicitly {@link google.protobuf.Field.verify|verify} messages.
             * @param message Field message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Field message, length delimited. Does not implicitly {@link google.protobuf.Field.verify|verify} messages.
             * @param message Field message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Field message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Field;

            /**
             * Decodes a Field message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Field;

            /**
             * Verifies a Field message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Field message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Field
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Field;

            /**
             * Creates a plain object from a Field message. Also converts values to other types if specified.
             * @param message Field
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Field to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Field {

            /** Kind enum. */
            enum Kind {
                TYPE_UNKNOWN = 0,
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Cardinality enum. */
            enum Cardinality {
                CARDINALITY_UNKNOWN = 0,
                CARDINALITY_OPTIONAL = 1,
                CARDINALITY_REQUIRED = 2,
                CARDINALITY_REPEATED = 3
            }
        }

        /** Properties of an Enum. */
        interface IEnum {

            /** Enum name */
            name?: (string|null);

            /** Enum enumvalue */
            enumvalue?: (google.protobuf.IEnumValue[]|null);

            /** Enum options */
            options?: (google.protobuf.IOption[]|null);

            /** Enum sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Enum syntax */
            syntax?: (google.protobuf.Syntax|null);
        }

        /** Represents an Enum. */
        class Enum implements IEnum {

            /**
             * Constructs a new Enum.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnum);

            /** Enum name. */
            public name: string;

            /** Enum enumvalue. */
            public enumvalue: google.protobuf.IEnumValue[];

            /** Enum options. */
            public options: google.protobuf.IOption[];

            /** Enum sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Enum syntax. */
            public syntax: google.protobuf.Syntax;

            /**
             * Creates a new Enum instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Enum instance
             */
            public static create(properties?: google.protobuf.IEnum): google.protobuf.Enum;

            /**
             * Encodes the specified Enum message. Does not implicitly {@link google.protobuf.Enum.verify|verify} messages.
             * @param message Enum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Enum message, length delimited. Does not implicitly {@link google.protobuf.Enum.verify|verify} messages.
             * @param message Enum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Enum message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Enum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Enum;

            /**
             * Decodes an Enum message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Enum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Enum;

            /**
             * Verifies an Enum message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Enum message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Enum
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Enum;

            /**
             * Creates a plain object from an Enum message. Also converts values to other types if specified.
             * @param message Enum
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Enum, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Enum to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValue. */
        interface IEnumValue {

            /** EnumValue name */
            name?: (string|null);

            /** EnumValue number */
            number?: (number|null);

            /** EnumValue options */
            options?: (google.protobuf.IOption[]|null);
        }

        /** Represents an EnumValue. */
        class EnumValue implements IEnumValue {

            /**
             * Constructs a new EnumValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValue);

            /** EnumValue name. */
            public name: string;

            /** EnumValue number. */
            public number: number;

            /** EnumValue options. */
            public options: google.protobuf.IOption[];

            /**
             * Creates a new EnumValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValue instance
             */
            public static create(properties?: google.protobuf.IEnumValue): google.protobuf.EnumValue;

            /**
             * Encodes the specified EnumValue message. Does not implicitly {@link google.protobuf.EnumValue.verify|verify} messages.
             * @param message EnumValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValue message, length delimited. Does not implicitly {@link google.protobuf.EnumValue.verify|verify} messages.
             * @param message EnumValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValue;

            /**
             * Decodes an EnumValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValue;

            /**
             * Verifies an EnumValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValue;

            /**
             * Creates a plain object from an EnumValue message. Also converts values to other types if specified.
             * @param message EnumValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Option. */
        interface IOption {

            /** Option name */
            name?: (string|null);

            /** Option value */
            value?: (google.protobuf.IAny|null);
        }

        /** Represents an Option. */
        class Option implements IOption {

            /**
             * Constructs a new Option.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOption);

            /** Option name. */
            public name: string;

            /** Option value. */
            public value?: (google.protobuf.IAny|null);

            /**
             * Creates a new Option instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Option instance
             */
            public static create(properties?: google.protobuf.IOption): google.protobuf.Option;

            /**
             * Encodes the specified Option message. Does not implicitly {@link google.protobuf.Option.verify|verify} messages.
             * @param message Option message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Option message, length delimited. Does not implicitly {@link google.protobuf.Option.verify|verify} messages.
             * @param message Option message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Option message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Option
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Option;

            /**
             * Decodes an Option message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Option
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Option;

            /**
             * Verifies an Option message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Option message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Option
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Option;

            /**
             * Creates a plain object from an Option message. Also converts values to other types if specified.
             * @param message Option
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Option, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Option to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Syntax enum. */
        enum Syntax {
            SYNTAX_PROTO2 = 0,
            SYNTAX_PROTO3 = 1
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

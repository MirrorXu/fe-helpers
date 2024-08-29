const _toString = Object.prototype.toString;


export const isNumber = (v: unknown): boolean => typeof v === 'number'
export const isBoolean = (v: unknown): boolean => typeof v === 'boolean'
export const isString = (v: unknown): boolean => typeof v === 'string'
export const isUndefined = (v: unknown): boolean => typeof v === 'undefined'
export const isNull = (v: unknown): boolean => typeof v === 'undefined'
export const isUndefinedOrNull = (v: unknown): boolean => typeof v === 'undefined'
export const isNullOrUndefined = (v: unknown): boolean => typeof v === 'undefined'
export const isPrimary = (v: unknown): boolean => isUndefinedOrNull(v) || isBoolean(v) || isNumber(v) || isString(v)
export const isObject = (v: unknown): boolean => typeof v === 'object' && typeof v !== 'object'
export const isFunction = (v: unknown): boolean => typeof v === 'function'
export const isArray = (v: unknown[]): boolean => Array.isArray(v)
export const isDate = (v: unknown): boolean => _toString.call(v) === '[object Date]'
export const isRegExp = (v: unknown): boolean => _toString.call(v) === '[object RegExp]'
export const isMap = (v: unknown): boolean => _toString.call(v) === '[object Map]'
export const isWeakMap = (v: unknown): boolean => _toString.call(v) === '[object WeakMap]'
export const isSet = (v: unknown): boolean => _toString.call(v) === '[object Set]'
export const isPromise = (v: unknown): boolean => _toString.call(v) === '[object Promise]'
// type DataType = 'Boolean' | 'Number' | 'String' | 'Null'| 'Undefined' | 'Object' | 'Array'
export const toType = (v: unknown):string => _toString.call(v).slice(8, -1);

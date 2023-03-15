"use strict";
/* tslint:disable */
/* eslint-disable */
/*
 * Bitxor DataNet Service API Documentation
 *
 * The version of the OpenAPI document: 1.1.3
 *
 * MIT License
 *
 * Copyright 2022 Bitxor Community
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkTypeToJSON = exports.NetworkTypeFromJSONTyped = exports.NetworkTypeFromJSON = exports.NetworkType = void 0;
/**
 * Network type:
 * * 0x68 (104 decimal) - Public main network.
 * * 0x98 (152 decimal) - Public test network.
 * @export
 * @enum {string}
 */
var NetworkType;
(function (NetworkType) {
    NetworkType[NetworkType["NUMBER_104"] = 0x0de2] = "NUMBER_104";
    NetworkType[NetworkType["NUMBER_152"] = 0x9924] = "NUMBER_152";
})(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
function NetworkTypeFromJSON(json) {
    return NetworkTypeFromJSONTyped(json, false);
}
exports.NetworkTypeFromJSON = NetworkTypeFromJSON;
function NetworkTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.NetworkTypeFromJSONTyped = NetworkTypeFromJSONTyped;
function NetworkTypeToJSON(value) {
    return value;
}
exports.NetworkTypeToJSON = NetworkTypeToJSON;

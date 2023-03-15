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
exports.NodeListFilterToJSON = exports.NodeListFilterFromJSONTyped = exports.NodeListFilterFromJSON = exports.NodeListFilter = void 0;
/**
 * `suggested`: All available API nodes that have a REST endpoint and are online.
 * `preferred`: Preferred API nodes that have a REST endpoint and are online. Preferred nodes match some specific domains.
 * @export
 * @enum {string}
 */
var NodeListFilter;
(function (NodeListFilter) {
    NodeListFilter["Suggested"] = "suggested";
    NodeListFilter["Preferred"] = "preferred";
})(NodeListFilter = exports.NodeListFilter || (exports.NodeListFilter = {}));
function NodeListFilterFromJSON(json) {
    return NodeListFilterFromJSONTyped(json, false);
}
exports.NodeListFilterFromJSON = NodeListFilterFromJSON;
function NodeListFilterFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.NodeListFilterFromJSONTyped = NodeListFilterFromJSONTyped;
function NodeListFilterToJSON(value) {
    return value;
}
exports.NodeListFilterToJSON = NodeListFilterToJSON;

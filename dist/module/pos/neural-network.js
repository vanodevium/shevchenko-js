"use strict";

var synaptic = require("synaptic");

var NETWORK_LAYER_SIZE_INPUT = 360;
var NETWORK_LAYER_SIZE_HIDDEN = 100;
var NETWORK_LAYER_SIZE_OUTPUT = 2;

var POS = {
  adjective: [0, 1],
  noun: [1, 0]
};

/**
 * NeuralNetwork used for the part of speech recognizing.
 */
function NeuralNetwork(structure) {
  var _this = this;

  /**
   * Neural network instance.
   *
   * @property {synaptic.Network}
   */
  this.network = synaptic.Network.fromJSON(structure);

  /**
   * Run the neural network on the input data.
   *
   * @param {string} value
   * @return {string|null}
   */
  this.run = function (value) {
    var normalizedInput = NeuralNetwork.normalizeInput(value);
    var normalizedOutput = _this.network.activate(normalizedInput);
    var denormalizedOutput = NeuralNetwork.denormalizeOutput(normalizedOutput);
    return typeof denormalizedOutput !== "undefined" ? denormalizedOutput : null;
  };

  return this;
}

/**
 * Build the neural network on the training data array.
 *
 * @param {Array<Object>} samples
 * @param {Object} options
 * @return {Object}
 */
NeuralNetwork.build = function (samples, options) {
  var network = new synaptic.Architect.Perceptron(NETWORK_LAYER_SIZE_INPUT, NETWORK_LAYER_SIZE_HIDDEN, NETWORK_LAYER_SIZE_OUTPUT);
  var trainer = new synaptic.Trainer(network);
  trainer.train(samples, options);
  return network.toJSON();
};

/**
 * Get an array of part of speech names.
 *
 * @return {Array<string>}
 */
NeuralNetwork.getPosNames = function () {
  return Object.keys(POS);
};

/**
 * Determine if a value is a valid part of speech name.
 *
 * @param value
 */
NeuralNetwork.isValidPosName = function (value) {
  return NeuralNetwork.getPosNames().indexOf(value) !== -1;
};

/**
 * Normalize the input for the neural network. Human-readable -> Machine-readable.
 *
 * @param {string} value
 * @return {Array<number>}
 */
NeuralNetwork.normalizeInput = function (value) {
  /**
   * @param {string} string
   * @return {string}
   */
  var stringToBinary = function stringToBinary(string) {
    return string.split("").map(function (char) {
      return char.charCodeAt(0).toString(2);
    }).join("");
  };

  /**
   * @param {string} string
   * @param {number} length
   * @param {string} symbol
   * @return {string}
   */
  var stringFillLeft = function stringFillLeft(string) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NETWORK_LAYER_SIZE_INPUT;
    var symbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";

    var filler = new Array(length + 1).join(symbol);
    return filler.substring(0, filler.length - string.length) + string;
  };

  return stringFillLeft(stringToBinary(value)).split("");
};

/**
 * Normalize the output for the neural network. Human-readable -> Machine-readable.
 *
 * @param {string} value
 * @return {Array<number>|null}
 */
NeuralNetwork.normalizeOutput = function (value) {
  return POS[value];
};

/**
 * Denormalize the output of the neural network. Machine-readable -> Human-readable.
 *
 * @param {Array<number>} value
 * @return {string|null}
 */
NeuralNetwork.denormalizeOutput = function (value) {
  var maxValueIndex = value.reduce(function (accumulator, value, index, array) {
    return value > array[accumulator] ? index : accumulator;
  }, 0);
  var normalizedValue = value.map(function (value, index) {
    return Number(index === maxValueIndex);
  });
  var posIndex = Object.values(POS).map(function (value) {
    return value.join("");
  }).indexOf(normalizedValue.join(""));
  return Object.keys(POS)[posIndex];
};

module.exports = NeuralNetwork;
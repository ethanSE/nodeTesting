// this is to test out testing in node with the assert module
// this logic is building towards being able to 
// assert that a sequence of points is a closed non-intersecting polygon

module.exports = {
    isPoint: (input) => {
        return Array.isArray(input) && input.length == 2 && typeof input[0] === 'number' && typeof input[1] === 'number'
    },
    pointsEqual: function (point1, point2) {
        return this.isPoint(point1) && this.isPoint(point2) && point1[0] === point2[0] && point1[1] === point2[1];
    },
    //only interested in length >1 here
    isPchain: function (input) {
        return Array.isArray(input) && input.length > 1 && !input.some((index) => !this.isPoint(index));
    },
    isPChainClosed: function (input) {
        return this.isPchain(input) && this.pointsEqual(input[0], input[input.length - 1]);
    }
}
// Dependencies
const assert = require('assert');
const lib = require('../app/lib')

// Holder for Tests
let unit = {};

// -----isPoint-----
unit['isPoint returns true for valid point'] = (done) => {
    assert.ok(lib.isPoint([0, 0]));
    done();
};

unit['isPoint returns false for invalid point - arg type not Array'] = (done) => {
    assert.strictEqual(lib.isPoint((0, 0)), false);
    done();
};

unit['isPoint returns false for invalid point - length not 2'] = (done) => {
    assert.strictEqual(lib.isPoint([0, 0, 0]), false);
    done();
};

unit['isPoint returns false for invalid point - component type not number - string'] = (done) => {
    assert.strictEqual(lib.isPoint([0, 'a']), false);
    done();
};

unit['isPoint returns false for invalid point - component type not number - obj'] = (done) => {
    assert.strictEqual(lib.isPoint([0, {}]), false);
    done();
};

// -----pointsEqual-----
unit['pointsEqual'] = (done) => {
    assert.ok(lib.pointsEqual([0, 0], [0, 0]));
    done()
}

unit['pointsEqual - invalid point'] = (done) => {
    assert.strictEqual(lib.pointsEqual([0, 0], ['1', 0]), false);
    done()
}

unit['pointsEqual - unequal points'] = (done) => {
    assert.strictEqual(lib.pointsEqual([0, 0], [1, 0]), false);
    done()
}

// -----isPchain-----
unit['isPchain - valid'] = (done) => {
    assert.ok(lib.isPchain([[0, 0], [1, 1], [2, 2]]));
    done();
};
unit['isPchain - invalid - arg is not array'] = (done) => {
    assert.strictEqual(lib.isPchain('aaa'), false)
    done();
}
unit['isPchain - invalid - all indeces must be points'] = (done) => {
    assert.strictEqual(lib.isPchain([[0, 0], ['a', 1]]), false);
    done();
};
unit['isPchain - invalid - too short'] = (done) => {
    assert.strictEqual(lib.isPchain([[0, 0]]), false);
    done();
};

// -----isPChainClosed-----
unit['isPChainClosed'] = (done) => {
    assert.ok(lib.isPChainClosed([[0, 0], [1, 1], [0, 0]]));
    done()
}
unit['isPChainClosed - not closed'] = (done) => {
    assert.strictEqual(lib.isPChainClosed([[0, 0], [1, 1], [0, 2]]), false);
    done()
}

// Export the tests to the runner
module.exports = unit;
import * as assert from 'assert';
import { formatValueWithHex } from '../../src/common';

suite('Common formatting helpers', () => {
    test('Appends hex for integer displays', () => {
        assert.strictEqual(formatValueWithHex('5'), '5 (0x00000005)');
        assert.strictEqual(formatValueWithHex('-1'), '-1 (0xffffffff)');
        assert.strictEqual(formatValueWithHex(`65 'A'`), '65 "A" (0x00000041)');
        assert.strictEqual(formatValueWithHex('166 \'\\246\''), '166 "" (0x000000a6)');
        assert.strictEqual(formatValueWithHex('0 \'\\000\''), '0 "" (0x00000000)');
        assert.strictEqual(formatValueWithHex('10 \'\\n\''), '10 "" (0x0000000a)');
    });

    test('Leaves non-integer displays unchanged', () => {
        assert.strictEqual(formatValueWithHex('0x20'), '0x20');
        assert.strictEqual(formatValueWithHex('3.14'), '3.14');
        assert.strictEqual(formatValueWithHex('false'), 'false');
    });
});

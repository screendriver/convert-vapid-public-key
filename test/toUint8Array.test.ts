import test from 'tape';
import atob from 'atob';
import { toUint8Array } from '../src/toUint8Array';

test('convert given base64 string to an Uint8Array', t => {
  t.plan(1);
  const actual = toUint8Array('BIW2q45TM1wfJz9', atob);
  t.equal(actual.toString(), '4,133,182,171,142,83,51,92,31,39,63');
});

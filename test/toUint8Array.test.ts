import test from 'ava';
import atob from 'atob';
import { toUint8Array } from '../src/toUint8Array';

test('convert given base64 string to an Uint8Array', t => {
  const actual = toUint8Array('BIW2q45TM1wfJz9', atob);
  t.is(actual.toString(), '4,133,182,171,142,83,51,92,31,39,63');
});

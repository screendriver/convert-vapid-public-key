import { toUint8Array } from './toUint8Array';

export function urlBase64ToUint8Array(base64String: string): Uint8Array {
  return toUint8Array(base64String, atob);
}

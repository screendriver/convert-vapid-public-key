import { toUint8Array } from "./toUint8Array.js";

/**
 * Converts the given VAPID public key to an Uint8Array.
 * @param base64String your Base64 VAPID public key
 */
export default function urlBase64ToUint8Array(base64String: string): Uint8Array {
	return toUint8Array(base64String, atob);
}

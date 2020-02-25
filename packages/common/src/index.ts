import crypto from 'crypto';

export function getRandomBytes() {
  return crypto.randomBytes(32).toString('hex');
}

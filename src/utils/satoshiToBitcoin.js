import { SATOSHI_PER_BITCOIN } from '../constants';

export default function satoshiToBitcoin(units) {
  return (units) ? (units / SATOSHI_PER_BITCOIN) : 0;
}


// import { atomFamily, atom, selectorFamily, selector } from 'recoil';
//
import { atom, atomFamily } from 'recoil';
import { BaseNode } from './types';

/**
 * An atom that stores the IDs of all Elements on the canvas.
 *
 * https://recoiljs.org/docs/api-reference/core/atom
 */
export const nodesState = atom<string[]>({
  key: 'nodes',
  default: [],
});

/**
 * An atomFamily that stores the states for all Elements.
 *
 * https://recoiljs.org/docs/api-reference/utils/atomFamily
 */

export const nodeState = atomFamily<BaseNode, string>({
  key: 'node',
  default: (s) => {
    console.log('@@@@', s);
    return {
      id: 'page-01',
      type: 'PAGE',
      parent: 'document-1',
      children: [],
    };
  },
});

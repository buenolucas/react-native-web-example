import { useRecoilState, useRecoilCallback } from 'recoil';
import { nodeState, nodesState } from '../nodes/nodeStates';
import { BaseNode } from '../nodes/types';
import { nanoid } from 'nanoid';
export const useInsertNode = () => {
  const [nodes, setNodes] = useRecoilState(nodesState);

  return useRecoilCallback(
    ({ set }) => {
      return (type: BaseNode['type'], props?: Partial<BaseNode>) => {
        const newId = props.id || nanoid(11);

        setNodes((nodes) => [...nodes, newId]);

        if (type === 'DOCUMENT') {
          set(nodeState(newId), {
            id: newId,
            type: 'DOCUMENT',
            children: [],
          });
        }
      };
    },
    [nodes],
  );
};

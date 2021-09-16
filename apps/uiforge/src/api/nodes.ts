import { RectangleNode, FrameNode, PageNode, DocumentNode, TextNode } from '../nodes/types';
import { nanoid } from 'nanoid';
import * as mixins from './mixins';

export function createDocument(id?: string): DocumentNode {
  id = id || nanoid(11);
  const node: DocumentNode = {
    type: 'DOCUMENT',
    ...mixins.craeteBaseNodeMixin(id),
    children: [],
  };
  return node;
}

export function createPage(id: string, parent: string): PageNode {
  id = id || nanoid(11);
  const node: PageNode = {
    type: 'PAGE',
    ...mixins.craeteBaseNodeMixin(id),
    children: [],
    parent,
  };
  return node;
}

/**
 * Crate a Frame Node
 * @param id
 * @param parent
 */
export function createFrame(id: string | null, parent: string | null): FrameNode {
  id = id || nanoid(11);
  const node: FrameNode = {
    type: 'FRAME',
    ...mixins.craeteBaseNodeMixin(id),
    ...mixins.createSceneMixin(),
    ...mixins.createBlendMixin(),
    ...mixins.createContainerMixin(),
    ...mixins.createCornerMixin(),
    ...mixins.createGeometyMixin(),
    ...mixins.createCornerMixin(),
    ...mixins.createRectangleCornerMixin(),
    ...mixins.createConstraintMixin(),
    ...mixins.createLayoutMixin(),
    ...mixins.createFrameMixin(),
    children: [],
    parent,
  };
  return node;
}

export function createRectangle(id?: string): RectangleNode {
  id = id || nanoid(11);
  const node: RectangleNode = {
    type: 'RECTANGLE',
    ...mixins.createDefultShapeMixin(id),
    ...mixins.createConstraintMixin(),
    ...mixins.createCornerMixin(),
    ...mixins.createRectangleCornerMixin(),
  };
  return node;
}

export function createText(id: string | null): TextNode {
  id = id || nanoid(11);
  const node: TextNode = {
    type: 'TEXT',
    ...mixins.createDefultShapeMixin(id),
    ...mixins.createConstraintMixin(),
    ...mixins.craeteTextMixin(),
  };
  return node;
}

import {
  SceneNodeMixin,
  LayoutMixin,
  BlendMixin,
  GeometryMixin,
  RectangleCornerMixin,
  CornerMixin,
  BaseNodeMixin,
  FrameMixin,
  ContainerMixin,
  DefaultShapeMixin,
  ConstraintMixin,
  TextMixin,
} from '../nodes/types';
import { mergeProps } from '@casca/framework';

const sceneMixinDefaults: SceneNodeMixin = {
  visible: true,
  locked: true,
};

export function createSceneMixin(props: Partial<SceneNodeMixin> = {}): SceneNodeMixin {
  const node = mergeProps(props, sceneMixinDefaults) as SceneNodeMixin;
  return node;
}

const constraintMixinDefaults: ConstraintMixin = {
  constraints: {
    horizontal: 'CENTER',
    vertical: 'CENTER',
  },
};

export function createConstraintMixin(props: Partial<ConstraintMixin> = {}): ConstraintMixin {
  const node = mergeProps(props, constraintMixinDefaults) as ConstraintMixin;
  return node;
}

const layoutMixinDefaults: LayoutMixin = {
  relativeTransform: [
    [0, 0, 0],
    [0, 0, 0],
  ],
  x: 0,
  y: 0,
  rotation: 0,
  constrainProportions: false,
  layoutAlign: 'CENTER', // applicable only inside auto-layout frames
  layoutGrow: 0,
};

export function createLayoutMixin(props: Partial<LayoutMixin> = {}): LayoutMixin {
  const node = mergeProps(props, layoutMixinDefaults) as LayoutMixin;
  return node;
}

const blendMixinDefaults: BlendMixin = {
  opacity: 1,
  blendMode: 'PASS_THROUGH',
  isMask: false,
  effects: [],
  effectStyleId: null,
};

export function createBlendMixin(props: Partial<BlendMixin> = {}): BlendMixin {
  const node = mergeProps(props, blendMixinDefaults) as BlendMixin;
  return node;
}

const containerMixinDefaults: ContainerMixin = {
  expanded: false,
};

export function createContainerMixin(props: Partial<ContainerMixin> = {}): ContainerMixin {
  const node = mergeProps(props, containerMixinDefaults) as ContainerMixin;
  return node;
}

const geometryMixinDefaults: GeometryMixin = {
  fills: [],
  strokes: [],
  strokeWeight: 1,
  strokeMiterLimit: 1,
  strokeAlign: 'INSIDE',
  strokeCap: 'NONE',
  strokeJoin: 'ROUND',
  dashPattern: [],
  fillStyleId: null, //| PluginAPI['mixed'];
  strokeStyleId: null,
};

export function createGeometyMixin(props: Partial<GeometryMixin> = {}): GeometryMixin {
  const node = mergeProps(props, geometryMixinDefaults) as GeometryMixin;
  return node;
}

const cornerMixinDefaults: CornerMixin = {
  cornerRadius: 0,
  cornerSmoothing: 0,
};

export function createCornerMixin(props: Partial<CornerMixin> = {}): CornerMixin {
  const node = mergeProps(props, cornerMixinDefaults) as CornerMixin;
  return node;
}

const rectangleCornerixinDefaults: RectangleCornerMixin = {
  topLeftRadius: 0,
  topRightRadius: 0,
  bottomLeftRadius: 0,
  bottomRightRadius: 0,
};

export function createRectangleCornerMixin(props: Partial<RectangleCornerMixin> = {}): RectangleCornerMixin {
  const node = mergeProps(props, rectangleCornerixinDefaults) as RectangleCornerMixin;
  return node;
}
const createBaseFrameDefaults: FrameMixin = {
  layoutMode: 'NONE',
  primaryAxisSizingMode: 'AUTO', // applicable only if layoutMode != "NONE"
  counterAxisSizingMode: 'AUTO', // applicable only if layoutMode != "NONE"

  primaryAxisAlignItems: 'CENTER', // applicable only if layoutMode != "NONE"
  counterAxisAlignItems: 'CENTER', // applicable only if layoutMode != "NONE"

  paddingLeft: 0, // applicable only if layoutMode != "NONE"
  paddingRight: 0, // applicable only if layoutMode != "NONE"
  paddingTop: 0, // applicable only if layoutMode != "NONE"
  paddingBottom: 0, // applicable only if layoutMode != "NONE"
  itemSpacing: 0, // applicable only if layoutMode != "NONE"

  //horizontalPadding: number; // DEPRECATED: use the individual paddings
  //verticalPadding: number; // DEPRECATED: use the individual paddings

  //layoutGrids: ReadonlyArray<LayoutGrid>;
  layoutGrids: [],
  gridStyleId: null,
  clipsContent: false,
  guides: [],
};

export function createFrameMixin(props: Partial<FrameMixin> = {}): FrameMixin {
  const node = mergeProps(props, createBaseFrameDefaults) as FrameMixin;
  return node;
}

const textMixinDefaults: TextMixin = {
  textAlignHorizontal: 'LEFT',
  textAlignVertical: 'TOP',
  textAutoResize: 'NONE',
  paragraphIndent: 0,
  paragraphSpacing: 0,
  autoRename: false,

  textStyleId: null,
  fontSize: 16,
  fontName: {
    family: 'Arial',
    style: 'regular',
  },
  textCase: 'ORIGINAL',
  textDecoration: 'NONE',
  letterSpacing: { value: 1, unit: 'PERCENT' },
  lineHeight: { unit: 'AUTO' },
  hyperlink: null,
};

export function craeteTextMixin(props: Partial<TextMixin> = {}): TextMixin {
  const node = mergeProps(props, textMixinDefaults) as TextMixin;
  return node;
}

export function craeteBaseNodeMixin(id: string, parent?: string): BaseNodeMixin {
  return {
    id,
    parent: parent || null,
  };
}

export function createDefultShapeMixin(id: string, parent?: string, props: Partial<DefaultShapeMixin> = {}): DefaultShapeMixin {
  const node = mergeProps(props, {
    ...craeteBaseNodeMixin(id, parent),
    ...createSceneMixin(props),
    ...createBlendMixin(props),
    ...createGeometyMixin(props),
    ...createLayoutMixin(props),
  }) as DefaultShapeMixin;
  return node;
}

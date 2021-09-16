//////////////
// data types
export type Transform = [[number, number, number], [number, number, number]];

export interface Vector {
  readonly x: number;
  readonly y: number;
}

export interface Rect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface RGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface RGBA {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;
}

export interface ShadowEffect {
  readonly type: 'DROP_SHADOW' | 'INNER_SHADOW';
  readonly color: RGBA;
  readonly offset: Vector;
  readonly radius: number;
  readonly spread?: number;
  readonly visible: boolean;
  readonly blendMode: BlendMode;
}

export interface BlurEffect {
  readonly type: 'LAYER_BLUR' | 'BACKGROUND_BLUR';
  readonly radius: number;
  readonly visible: boolean;
}

export type Effect = ShadowEffect | BlurEffect;

export type ConstraintType = 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'SCALE';

export interface Constraints {
  readonly horizontal: ConstraintType;
  readonly vertical: ConstraintType;
}

export interface ColorStop {
  readonly position: number;
  readonly color: RGBA;
}

export interface ImageFilters {
  readonly exposure?: number;
  readonly contrast?: number;
  readonly saturation?: number;
  readonly temperature?: number;
  readonly tint?: number;
  readonly highlights?: number;
  readonly shadows?: number;
}

export interface SolidPaint {
  readonly type: 'SOLID';
  readonly color: RGB;

  readonly visible?: boolean;
  readonly opacity?: number;
  readonly blendMode?: BlendMode;
}

export interface GradientPaint {
  readonly type: 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND';
  readonly gradientTransform: Transform;
  readonly gradientStops: ReadonlyArray<ColorStop>;

  readonly visible?: boolean;
  readonly opacity?: number;
  readonly blendMode?: BlendMode;
}

export interface ImagePaint {
  readonly type: 'IMAGE';
  readonly scaleMode: 'FILL' | 'FIT' | 'CROP' | 'TILE';
  readonly imageHash: string | null;
  readonly imageTransform?: Transform; // setting for "CROP"
  readonly scalingFactor?: number; // setting for "TILE"
  readonly rotation?: number; // setting for "FILL" | "FIT" | "TILE"
  readonly filters?: ImageFilters;

  readonly visible?: boolean;
  readonly opacity?: number;
  readonly blendMode?: BlendMode;
}

export type Paint = SolidPaint | GradientPaint | ImagePaint;

//
//
//
export interface Guide {
  readonly axis: 'X' | 'Y';
  readonly offset: number;
}

export interface RowsColsLayoutGrid {
  readonly pattern: 'ROWS' | 'COLUMNS';
  readonly alignment: 'MIN' | 'MAX' | 'STRETCH' | 'CENTER';
  readonly gutterSize: number;

  readonly count: number; // Infinity when "Auto" is set in the UI
  readonly sectionSize?: number; // Not set for alignment: "STRETCH"
  readonly offset?: number; // Not set for alignment: "CENTER"

  readonly visible?: boolean;
  readonly color?: RGBA;
}

export interface GridLayoutGrid {
  readonly pattern: 'GRID';
  readonly sectionSize: number;

  readonly visible?: boolean;
  readonly color?: RGBA;
}

export type LayoutGrid = RowsColsLayoutGrid | GridLayoutGrid;

//
// Export
//

export interface ExportSettingsConstraints {
  readonly type: 'SCALE' | 'WIDTH' | 'HEIGHT';
  readonly value: number;
}

export interface ExportSettingsImage {
  readonly format: 'JPG' | 'PNG';
  readonly contentsOnly?: boolean; // defaults to true
  readonly useAbsoluteBounds?: boolean; // defaults to false
  readonly suffix?: string;
  readonly constraint?: ExportSettingsConstraints;
}

export interface ExportSettingsSVG {
  readonly format: 'SVG';
  readonly contentsOnly?: boolean; // defaults to true
  readonly useAbsoluteBounds?: boolean; // defaults to false
  readonly suffix?: string;
  readonly svgOutlineText?: boolean; // defaults to true
  readonly svgIdAttribute?: boolean; // defaults to false
  readonly svgSimplifyStroke?: boolean; // defaults to true
}

export interface ExportSettingsPDF {
  readonly format: 'PDF';
  readonly contentsOnly?: boolean; // defaults to true
  readonly useAbsoluteBounds?: boolean; // defaults to false
  readonly suffix?: string;
}

export type ExportSettings = ExportSettingsImage | ExportSettingsSVG | ExportSettingsPDF;

// typography

export interface FontName {
  readonly family: string;
  readonly style: string;
}

export type TextCase = 'ORIGINAL' | 'UPPER' | 'LOWER' | 'TITLE';

export type TextDecoration = 'NONE' | 'UNDERLINE' | 'STRIKETHROUGH';

type LetterSpaccingUnit = 'PIXELS' | 'PERCENT';

export interface LetterSpacing {
  readonly value: number;
  readonly unit: LetterSpaccingUnit;
}

export type LineHeight =
  | {
      readonly value: number;
      readonly unit: 'PIXELS' | 'PERCENT';
    }
  | {
      readonly unit: 'AUTO';
    };

export type HyperlinkTarget = {
  type: 'URL' | 'NODE';
  value: string;
};

export type TextListOptions = {
  type: 'ORDERED' | 'UNORDERED' | 'NONE';
};

type BlendMode =
  | 'NORMAL'
  | 'DARKEN'
  | 'MULTIPLY'
  | 'LINEAR_BURN'
  | 'COLOR_BURN'
  | 'LIGHTEN'
  | 'SCREEN'
  | 'LINEAR_DODGE'
  | 'COLOR_DODGE'
  | 'OVERLAY'
  | 'SOFT_LIGHT'
  | 'HARD_LIGHT'
  | 'DIFFERENCE'
  | 'EXCLUSION'
  | 'HUE'
  | 'SATURATION'
  | 'COLOR'
  | 'LUMINOSITY';

////////////////////////////////////////////////////////////////////////////////
// Mixins

export interface BaseNodeMixin {
  id: string;
  parent?: (BaseNode & ChildrenMixin) | string | null;
}

export interface SceneNodeMixin {
  visible: boolean;
  locked: boolean;
}

export interface ChildrenMixin {
  children: ReadonlyArray<SceneNode>;
}

export interface ConstraintMixin {
  constraints: Constraints;
}

export interface LayoutMixin {
  //readonly absoluteTransform: Transform;
  relativeTransform: Transform;
  x: number;
  y: number;
  rotation: number; // In degrees

  //readonly width: number;
  //readonly height: number;
  constrainProportions: boolean;

  layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'; // applicable only inside auto-layout frames
  layoutGrow: number;
}

export interface BlendMixin {
  opacity: number;
  blendMode: 'PASS_THROUGH';
  isMask: boolean;
  effects: Array<string>;
  effectStyleId: string | null;
}

export interface ContainerMixin {
  expanded: boolean;
}

export type StrokeCap = 'NONE' | 'ROUND' | 'SQUARE' | 'ARROW_LINES' | 'ARROW_EQUILATERAL';
export type StrokeJoin = 'MITER' | 'BEVEL' | 'ROUND';
export type HandleMirroring = 'NONE' | 'ANGLE' | 'ANGLE_AND_LENGTH';

export interface GeometryMixin {
  fills: ReadonlyArray<Paint>; //| PluginAPI['mixed']
  strokes: ReadonlyArray<Paint>;
  strokeWeight: number;
  strokeMiterLimit: number;
  strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE';
  strokeCap: StrokeCap; // | PluginAPI['mixed'];
  strokeJoin: StrokeJoin; // | PluginAPI['mixed'];
  dashPattern: ReadonlyArray<number>;
  fillStyleId: string | null; //| PluginAPI['mixed'];
  strokeStyleId: string | null;
}

export interface CornerMixin {
  cornerRadius: number;
  cornerSmoothing: number;
}

export interface RectangleCornerMixin {
  topLeftRadius: number;
  topRightRadius: number;
  bottomLeftRadius: number;
  bottomRightRadius: number;
}

export interface FrameMixin {
  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
  primaryAxisSizingMode: 'FIXED' | 'AUTO'; // applicable only if layoutMode != "NONE"
  counterAxisSizingMode: 'FIXED' | 'AUTO'; // applicable only if layoutMode != "NONE"

  primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'; // applicable only if layoutMode != "NONE"
  counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER'; // applicable only if layoutMode != "NONE"

  paddingLeft: number; // applicable only if layoutMode != "NONE"
  paddingRight: number; // applicable only if layoutMode != "NONE"
  paddingTop: number; // applicable only if layoutMode != "NONE"
  paddingBottom: number; // applicable only if layoutMode != "NONE"
  itemSpacing: number; // applicable only if layoutMode != "NONE"

  ///horizontalPadding: number; // DEPRECATED: use the individual paddings
  //verticalPadding: number; // DEPRECATED: use the individual paddings

  layoutGrids: ReadonlyArray<LayoutGrid>;
  gridStyleId: string | null;
  clipsContent: boolean;
  guides: ReadonlyArray<Guide>;
}

export interface TextMixin {
  textAlignHorizontal: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED';
  textAlignVertical: 'TOP' | 'CENTER' | 'BOTTOM';
  textAutoResize: 'NONE' | 'WIDTH_AND_HEIGHT' | 'HEIGHT';
  paragraphIndent: number;
  paragraphSpacing: number;
  autoRename: boolean;

  textStyleId: string | null;
  fontSize: number;
  fontName: FontName;
  textCase: TextCase;
  textDecoration: TextDecoration;
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;

  hyperlink: HyperlinkTarget | null;
}

///////////
///
/////

export interface DefaultShapeMixin extends BaseNodeMixin, SceneNodeMixin, BlendMixin, GeometryMixin, LayoutMixin {}

export interface BaseFrameMixin
  extends BaseNodeMixin,
    SceneNodeMixin,
    ChildrenMixin,
    ContainerMixin,
    GeometryMixin,
    CornerMixin,
    RectangleCornerMixin,
    BlendMixin,
    ConstraintMixin,
    LayoutMixin,
    FrameMixin {}

export interface DefaultFrameMixin extends BaseFrameMixin {}

////////////////////////////////////////////////////////////////////////////////
// Nodes

export interface DocumentNode extends BaseNodeMixin {
  readonly type: 'DOCUMENT';
  readonly children: ReadonlyArray<PageNode>;
}

export interface PageNode extends BaseNodeMixin, ChildrenMixin {
  readonly type: 'PAGE';
}

export interface FrameNode extends DefaultFrameMixin {
  readonly type: 'FRAME';
}

export interface GroupNode extends BaseNodeMixin, SceneNodeMixin, ChildrenMixin, ContainerMixin, BlendMixin, LayoutMixin {
  readonly type: 'GROUP';
}

export interface SliceNode extends BaseNodeMixin {
  readonly type: 'SLICE';
  clone(): SliceNode;
}

export interface RectangleNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin, RectangleCornerMixin {
  readonly type: 'RECTANGLE';
}

export interface VectorNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
  readonly type: 'VECTOR';
}
export interface TextNode extends DefaultShapeMixin, ConstraintMixin, TextMixin {
  readonly type: 'TEXT';
}

export interface ComponentSetNode extends BaseFrameMixin {
  readonly type: 'COMPONENT_SET';
}

export interface ComponentNode extends DefaultFrameMixin {
  readonly type: 'COMPONENT';
}

export interface InstanceNode extends DefaultFrameMixin {
  readonly type: 'INSTANCE';
}

export type BaseNode = DocumentNode | PageNode | SceneNode;

export type SceneNode =
  | SliceNode
  | FrameNode
  | GroupNode
  | ComponentSetNode
  | ComponentNode
  | InstanceNode
  //| BooleanOperationNode
  | VectorNode
  //| StarNode
  //| LineNode
  //| EllipseNode
  //| PolygonNode
  | RectangleNode
  | TextNode;

export type NodeType =
  | 'DOCUMENT'
  | 'PAGE'
  | 'SLICE'
  | 'FRAME'
  | 'GROUP'
  | 'COMPONENT_SET'
  | 'COMPONENT'
  | 'INSTANCE'
  //| 'BOOLEAN_OPERATION'
  | 'VECTOR'
  //| 'STAR'
  //| 'LINE'
  //| 'ELLIPSE'
  //| 'POLYGON'
  | 'RECTANGLE'
  | 'TEXT';

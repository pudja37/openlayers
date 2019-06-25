/**
 * @module ol/render/replay
 */
import ReplayType from './ReplayType.js';


/**
 * @const
 * @type {Array<ReplayType>}
 */
export const ORDER = [
  ReplayType.POLYGON,
  ReplayType.CIRCLE,
  ReplayType.LINE_STRING,
  ReplayType.IMAGE,
  ReplayType.TEXT,
  ReplayType.DEFAULT
];

/**
 * @const
 * @enum {number}
 */
export const TEXT_ALIGN = {
  left: 0,
  end: 0,
  center: 0.5,
  right: 1,
  start: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1,
};

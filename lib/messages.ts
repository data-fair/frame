import { isUrl } from './utils/url.js'

export type MouseEventMessage = ['df-global', 'mouse', MouseEvent['type'], Pick<MouseEvent, 'altKey' | 'ctrlKey' | 'shiftKey' | 'metaKey'>]

export function isMouseEventMessage (message: any): message is MouseEventMessage {
  return message[0] === 'df-global' && message[1] === 'mouse' && typeof message[2] === 'string'
}

// sent by the child as first part of initialization handshake
export type InitChildMessage = ['df-child', 'init']
export type HeightMessage = ['df-child', 'height', number]
export type ReinitHeightMessage = ['df-child', 'reinit-height']
export type StateChangeMessage = ['df-child', 'stateChange', 'replace' | 'push', string ]
export type CustomMessage = ['df-child', 'custom', any ]
export type NotifMessage = ['df-child', 'notif', Notif]
export type AddParentUrlListenerMessage = ['df-child', 'addParentUrlListener', string]
export type RemoveParentUrlListenerMessage = ['df-child', 'removeParentUrlListener', string]
export type ReadyMessage = ['df-child', 'ready']
export type ChildMessage =
  InitChildMessage |
  HeightMessage |
  ReinitHeightMessage |
  StateChangeMessage |
  CustomMessage |
  NotifMessage |
  MouseEventMessage |
  AddParentUrlListenerMessage |
  RemoveParentUrlListenerMessage |
  ReadyMessage

export type Notif = {
  type: 'default' | 'info' | 'success' | 'warning' | 'error',
  title: string,
  detail?: string
}

export function isInitChildMessage (message: any): message is InitChildMessage {
  return message[0] === 'df-child' && message[1] === 'init'
}
export function isHeightMessage (message: any): message is HeightMessage {
  // the height is written in the style of the wrapper, anything else than a number would inject css
  return message[0] === 'df-child' && message[1] === 'height' && typeof message[2] === 'number' && Number.isFinite(message[2]) && message[2] >= 0
}
export function isReinitHeightMessage (message: any): message is ReinitHeightMessage {
  return message[0] === 'df-child' && message[1] === 'reinit-height'
}
export function isStateChangeMessage (message: any): message is StateChangeMessage {
  return message[0] === 'df-child' && message[1] === 'stateChange' && (message[2] === 'push' || message[2] === 'replace') && isUrl(message[3])
}
export function isCustomMessage (message: any): message is CustomMessage {
  return message[0] === 'df-child' && message[1] === 'custom'
}
export function isNotifMessage (message: any): message is NotifMessage {
  return message[0] === 'df-child' && message[1] === 'notif'
}
export function isAddParentUrlListenerMessage (message: any): message is AddParentUrlListenerMessage {
  return message[0] === 'df-child' && message[1] === 'addParentUrlListener' && isUrl(message[2])
}
export function isRemoveParentUrlListenerMessage (message: any): message is RemoveParentUrlListenerMessage {
  return message[0] === 'df-child' && message[1] === 'removeParentUrlListener'
}
export function isReadyMessage (message: any): message is ReadyMessage {
  return message[0] === 'df-child' && message[1] === 'ready'
}

// sent as response by the parent as second part of initialization handshake
export type InitParentMessage = ['df-parent', 'init', {
  id: string,
  debug?: boolean,
  resize: 'yes' | 'no' | 'auto',
  syncParams: boolean,
  syncPath: boolean,
  stateChangeEvents: boolean,
  mouseEvents: null | string[],
  src: string | null
}]
export type UpdateSrcMessage = ['df-parent', 'updateSrc', string]
export type ParentUrlMessage = ['df-parent', 'parentUrl', string, string]
export type ParentMessage =
  InitParentMessage |
  UpdateSrcMessage |
  MouseEventMessage |
  ParentUrlMessage

export function isInitParentMessage (message: any[]): message is InitParentMessage {
  return message[0] === 'df-parent' && message[1] === 'init'
}
export function isUpdateSrcMessage (message: any[]): message is UpdateSrcMessage {
  return message[0] === 'df-parent' && message[1] === 'updateSrc'
}
export function isParentUrlMessage (message: any[]): message is ParentUrlMessage {
  return message[0] === 'df-parent' && message[1] === 'parentUrl'
}

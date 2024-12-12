// sent by the child as first part of initialization handshake
export type InitChildMessage = ['df-child', 'init']
export type HeightMessage = ['df-child', 'height', number]
export type StateChangeMessage = ['df-child', 'stateChange', 'replace' | 'push', string ]
export type ChildMessage = InitChildMessage | HeightMessage | StateChangeMessage

export function isInitChildMessage (message: any[]): message is InitChildMessage {
  return message[0] === 'df-child' && message[1] === 'init'
}
export function isHeightMessage (message: any[]): message is HeightMessage {
  return message[0] === 'df-child' && message[1] === 'height'
}
export function isStateChangeMessage (message: any[]): message is StateChangeMessage {
  return message[0] === 'df-child' && message[1] === 'stateChange'
}

// sent as response by the parent as second part of initialization handshake
export type InitParentMessage = ['df-parent', 'init', { debug?: boolean, resize: 'yes' | 'no' | 'auto', syncParams: boolean }]
export type UpdateSrcMessage = ['df-parent', 'updateSrc', string]
export type ParentMessage = InitParentMessage | UpdateSrcMessage

export function isInitParentMessage (message: any[]): message is InitParentMessage {
  return message[0] === 'df-parent' && message[1] === 'init'
}
export function isUpdateSrcMessage (message: any[]): message is UpdateSrcMessage {
  return message[0] === 'df-parent' && message[1] === 'updateSrc'
}

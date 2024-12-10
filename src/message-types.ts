export type Message = { dFrame: 'parent' | 'child', type: string, data?: any }

// sent by the child as first part of initialization handshake
export type InitChildMessage = { dFrame: 'child', type: 'init' }

export function isInitChildMessage (message: Message): message is InitChildMessage {
  return message.dFrame === 'child' && message.type === 'init'
}

// sent as response by the parent as second part of initialization handshake
export type InitParentMessage = { dFrame: 'parent', type: 'init', data: { debug?: boolean, resize: 'yes' | 'no' | 'auto', syncParams: boolean } }

export function isInitParentMessage (message: Message): message is InitParentMessage {
  return message.dFrame === 'parent' && message.type === 'init'
}

export type HeightMessage = { dFrame: 'child', type: 'height', data: number }

export function isHeightMessage (message: Message): message is HeightMessage {
  return message.dFrame === 'child' && message.type === 'height'
}

export type UpdateSrcMessage = { dFrame: 'parent', type: 'updateSrc', data: string }

export function isUpdateSrcMessage (message: Message): message is UpdateSrcMessage {
  return message.dFrame === 'parent' && message.type === 'updateSrc'
}

export type StateChangeMessage = { dFrame: 'child', type: 'stateChange', data: { action: 'replace' | 'push', href: string } }
export function isStateChangeMessage (message: Message): message is StateChangeMessage {
  return message.dFrame === 'child' && message.type === 'stateChange'
}

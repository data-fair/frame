import type { Notif } from '../messages.js'

type NotifType = 'default' | 'info' | 'success' | 'warning' | 'error'

export type PartialUiNotif = string | {
  type?: NotifType
  msg: string
  error?: any
  errorMsg?: string
  clientError?: boolean
}

export type VIframeUiNotif = { vIframe: true, uiNotification: PartialUiNotif }

export function isVIframeUiNotif (message: any): message is VIframeUiNotif {
  return message.vIframe === true && message.uiNotification !== undefined
}

export function convertVIframeUiNotif (notif: PartialUiNotif): Notif {
  if (typeof notif === 'string') return { type: 'default', title: notif }
  if (notif.error && !notif.errorMsg) {
    const errorMsg = (notif.error.response && (notif.error.response.data || notif.error.response.status)) || notif.error.message || notif.error as (string | undefined)
    if (notif.msg) {
      return {
        type: 'error',
        title: notif.msg,
        detail: errorMsg
      }
    } else {
      return {
        type: 'error',
        title: errorMsg
      }
    }
  }
  if (notif.type === 'error') {
    return {
      type: notif.clientError ? 'warning' : 'error',
      title: notif.msg,
      detail: notif.errorMsg
    }
  }
  return {
    type: notif.type ?? 'default',
    title: notif.msg
  }
}

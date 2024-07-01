import { createDialogItem, nextItem } from './utils'
import { dialog } from './global-variables'

export function handleOpenDialog(e, item, dataArray) {
  const id = parseInt(e.target.dataset.itemId)
  const theItem = dataArray.find((item) => item.id === id)
  createDialogItem(theItem)
  dialog.showModal()
}

export function handleDialogButtonClick(e, itemsArray, dataArray) {
  const currentItem = document.querySelector('dialog .item')
  const direction = e.target.dataset.direction
  const newItem = nextItem(direction, currentItem, itemsArray, dataArray)
  createDialogItem(newItem)
}

export function handleItemClick(items, eventFunction) {
  items.forEach((item) => {
    item.addEventListener('click', eventFunction)
  })
}

export function cancelItemClick(items, eventFunction) {
  items.forEach((item) => {
    item.removeEventListener('click', eventFunction)
  })
}

export function handleButtonClick(buttons, eventFunction) {
  buttons.forEach((button) => {
    button.addEventListener('click', eventFunction)
  })
}

export function cancelButtonClick(buttons, eventFunction) {
  buttons.forEach((button) => {
    button.removeEventListener('click', eventFunction)
  })
}

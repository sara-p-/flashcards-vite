import { jsArrayMethods } from '../data/data'
import { createItems, createArrayOfNumbers, shuffle } from './utils'
import {
  handleOpenDialog,
  handleItemClick,
  cancelItemClick,
  handleDialogButtonClick,
  handleButtonClick,
  cancelButtonClick,
} from './events'
import { dialog, closeButton } from './global-variables'

let itemsArray

export default function itemsSwitch() {
  // ******************* VARIABLES *******************//
  const itemsBox = document.querySelector('.items')
  const sortToggle = document.querySelector('.toggle-sort')
  const buttons = document.querySelectorAll('button.dialog__button')

  // ***************** FUNCTIONS THAT REFERENCE EVENT HANDLERS **************//
  function itemClickHandlerReference(event) {
    handleOpenDialog(event, itemsArray, jsArrayMethods)
  }
  function dialogButtonHandlerReference(event) {
    handleDialogButtonClick(event, itemsArray, jsArrayMethods)
  }

  // ***************** ON LOAD CREATE DEFAULT ITEMS *********************//
  // On load, the sort method should default to alphabetical so we can create the items with the normal order
  jsArrayMethods.forEach((item) => {
    itemsBox.append(createItems(item))
  })

  // ***************** OPEN DIALOG ON CLICK OF DEFAULT ITEMS *********************//
  // On click of one of the function cards, open the dialog and fill it with the function info
  itemsArray = [...document.querySelectorAll('button.item')]

  handleItemClick(itemsArray, itemClickHandlerReference)
  handleButtonClick(buttons, dialogButtonHandlerReference)
  // on click of the close button, close the dialog
  closeButton.addEventListener('click', () => {
    dialog.close()
  })

  // **************** ON TOGGLE - RESET ITEMS AND OPEN DIALOG ************//
  // On toggle, switch between alphabetical and random
  sortToggle.addEventListener('change', (e) => {
    // remove the previous item event listeners
    cancelItemClick(itemsArray, itemClickHandlerReference)
    cancelButtonClick(buttons, dialogButtonHandlerReference)
    // empty the items array
    itemsBox.innerHTML = ''

    // Toggle Event = Random Order
    if (e.target.checked) {
      // Create an array of shuffled numbers that is the same length as our jsArrayMethods array
      const arrayToBeShuffled = createArrayOfNumbers(jsArrayMethods)
      const shuffledArray = shuffle(arrayToBeShuffled)
      // Create the items in the order of the shuffled array
      for (let i = 0; i < shuffledArray.length; i++) {
        const shuffledIndex = shuffledArray[i]
        itemsBox.append(createItems(jsArrayMethods[shuffledIndex]))
      }
      // reset the itemsArray with the new randomized order
      itemsArray = [...document.querySelectorAll('button.item')]
      // reset the item click event listener to work with the new array
      handleItemClick(itemsArray, itemClickHandlerReference)
      // handle next/last dialog button click events
      handleButtonClick(buttons, dialogButtonHandlerReference)
    } else {
      // Alphabetical sort
      jsArrayMethods.forEach((item) => {
        itemsBox.append(createItems(item))
      })
      // reset the itemsArray with the new alphabetical order
      itemsArray = [...document.querySelectorAll('button.item')]
      // reset the item click event listener to work with the new array
      handleItemClick(itemsArray, itemClickHandlerReference)
      // handle next/last dialog button click events
      handleButtonClick(buttons, dialogButtonHandlerReference)
    }
  })
}

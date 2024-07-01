// import * as images from '../../../images/*.png'

// Create all of the card items from the data array
export function createItems({ id, functionName }) {
  const item = document.createElement('button')
  item.innerHTML = `<span>${functionName}</span>`
  item.setAttribute('data-item-id', id)
  item.classList.add('item')

  return item
}

// Create the item info that lives in the dialog box
export function createDialogItem({
  id,
  functionName,
  description,
  imageSrc,
  link,
}) {
  const item = document.querySelector('dialog .item')
  item.setAttribute('data-item-id', id)
  const itemContent = document.querySelector('dialog .item__content')
  const itemTitleBox = document.querySelector('dialog .item__title-box')

  // Clear out the last item content
  itemTitleBox.innerHTML = ''
  itemContent.innerHTML = ''

  const itemName = document.createElement('h2')
  itemName.classList.add('name')
  itemName.innerHTML = functionName

  const itemDescription = document.createElement('p')
  itemDescription.classList.add('description')
  itemDescription.innerHTML = description

  const itemImage = document.createElement('img')
  itemImage.classList.add('image')
  itemImage.setAttribute('src', `/images/${imageSrc}.png`)
  itemImage.setAttribute('alt', `An example of the ${functionName} function.`)

  const itemLink = document.createElement('a')
  itemLink.classList.add('button-link', 'icon', 'chevron-right')
  itemLink.setAttribute('target', '_blank')
  itemLink.setAttribute('href', link)
  itemLink.innerHTML = `Link to MDN page<span class="visually-hidden"> for the ${functionName} function</span>`

  itemTitleBox.append(itemName)
  itemContent.append(itemDescription)
  itemContent.append(itemImage)
  itemContent.append(itemLink)
}

// find the itemId of the given item and return the new item
export function nextItem(direction, currentItem, items, dataArray) {
  const id = currentItem.dataset.itemId
  const currentItemIndex = items.findIndex((item) => item.dataset.itemId === id)
  // use the direction to know how to calculate the next item index
  let newItemIndex
  if (direction === 'next') {
    // check to make sure it's not the last item in the items array
    if (currentItemIndex >= items.length - 1) {
      newItemIndex = 0
    } else {
      newItemIndex = currentItemIndex + 1
    }
  } else {
    // check to make sure it's not the last item in the items array
    if (currentItemIndex == 0) {
      newItemIndex = items.length - 1
    } else {
      newItemIndex = currentItemIndex - 1
    }
  }

  // Get the itemId of the new item by using its index
  const newItemId = parseInt(items[newItemIndex].dataset.itemId)
  // Use that itemId to find that item in the dataArray
  const newItem = dataArray.find((item) => item.id === newItemId)

  return newItem
}

// function to create an array of numbers from the index of a given array
export function createArrayOfNumbers(arr) {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = i
  }
  return newArray
}

// Function that I stole from the internet to shuffle a set of numbers. I got it from here: https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
export function shuffle(array) {
  var i = array.length,
    j = 0,
    temp

  while (i--) {
    j = Math.floor(Math.random() * (i + 1))

    // swap randomly chosen element with current element
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}

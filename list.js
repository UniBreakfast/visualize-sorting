function showList(arr, changeInterval) {
  const list = document.createElement('ul')

  const listItems = arr.map((item, i) => {
    const listItem = document.createElement('li')

    listItem.textContent = item
    listItem.style.top = `${i * 17}px`

    return listItem
  })

  list.append(...listItems)
  list.style.setProperty('--change-interval', `${changeInterval}ms`)

  document.body.append(list)

  return function switchPlaces(i1, i2) {
    [listItems[i1], listItems[i2]] = [listItems[i2], listItems[i1]]
    // [listItems[i2].style.top, listItems[i1].style.top] = [listItems[i1].style.top, listItems[i2].style.top]

    const temp = listItems[i2].style.top

    listItems[i2].style.top = listItems[i1].style.top
    listItems[i1].style.top = temp
  }
}

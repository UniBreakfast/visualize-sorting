function asyncGradualSort(arr, changeInterval) {
  const eventEmitter = new EventTarget

  setTimeout(async () => {
    let isSorted = false

    while (!isSorted) {
      isSorted = true

      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          const temp = arr[i - 1]

          arr[i - 1] = arr[i]
          arr[i] = temp

          const event = new Event('change')
          
          event.switchedIndices = [i - 1, i]
          
          eventEmitter.dispatchEvent(event)

          isSorted = false

          await sleep(changeInterval)
        }
      }
    }
  }, 100)

  return eventEmitter
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

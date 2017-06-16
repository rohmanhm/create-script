export type attrs = {
  [key: string]: string
}

function createScript (url: string, attrs?: attrs) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url

    script.addEventListener('load', () => resolve(true))
    script.addEventListener('error', e => reject(e))

    document.body.appendChild(script)
  })
}

export default createScript

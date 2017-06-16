import createScript from '../src/index'

const cdnExample = 'https://code.jquery.com/jquery-3.2.1.min.js'
const wrongCdnExample = 'https://localhost/lorem.min.js'

describe('check correct cdn', () => {
  const script = createScript(cdnExample)
  test('should load script correctly', async () => {
    try {
      expect(await script).toBeTruthy()
    } catch (e) {
      expect(e).toBeFalsy()
    }
  })
})

describe('check wrong cdn', () => {
  const script = createScript(wrongCdnExample)
  test('should handle wrong load script correctly', async () => {
    try {
      expect(await script).toBeFalsy()
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
})

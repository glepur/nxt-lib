const { resolveTemplate } = require('../src/util')

test('replaces strings', async () => {
  expect(await resolveTemplate('{{test}}', { test: '111' })).toBe('111')
  expect(await resolveTemplate('pre{{test}}post', { test: '111' })).toBe('pre111post')
  expect(await resolveTemplate('123{{test}}456{{test}}{{test}}', { test: 'body' })).toBe('123body456bodybody')
  expect(await resolveTemplate('test{{test.foo}}test{{test.bar.baz}}test', { test: { foo: '111', bar: { baz: '222' } } })).toBe('test111test222test')
})

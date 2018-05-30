/*eslint-disable*/
import { htmlDecode, dsHTML } from './utils';

describe('Testing utils', () => {
  it('htmlDecode', () => {
    expect(htmlDecode('hello &amp; world')).toBe('hello & world');
  });

  it('dsHTML', () => {
    expect(dsHTML('hello &amp; world')).toEqual({__html: 'hello & world'})
  });
});

import 'jest-localstorage-mock'
import cardItems from '..';
import items from '../../mocks';
import {setToken, getToken} from '..'

describe('helpers', () => {
  afterEach(() => {
    localStorage.clear();
  });
  describe('cardItem', () => {
    it('should return a list of card object', () => {
      const items = [{ key: 'value' }];
      const button = 'button';
      const expected = [{ key: 'value' }];
      expect(cardItems(items, button)[0].extra).toBe('button');
    });
  });
  describe('setToken', () => {
    it('should set token in local storage', () => {
      setToken('token')
      expect(localStorage.getItem('token')).toBe('token');
    });
  });
  describe('getToken', () => {
    it('should get token from local storage', () => {
      localStorage.setItem('token', 'token')
      expect(getToken()).toBe('token');
    });
  });
});

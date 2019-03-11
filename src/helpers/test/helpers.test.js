import 'jest-localstorage-mock'
import sinon from 'sinon';
import cardItems from '..';
import items, {jwtToken, user} from '../../mocks';
import {setToken, getToken, getUserFromLocalStorage, isUserAuthenticated} from '..'

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
  describe('getUserFromLocalStorage', () => {
    afterEach(() => {
      localStorage.clear();
    });
    it('should not get a user', () => {
      expect(getUserFromLocalStorage()).toBe(null);
    });
    it('should return a user', () => {
      setToken(jwtToken);
      expect(getUserFromLocalStorage()).toEqual(user);
    });
  });
  
  describe('isUserAuthenticated', () => {
    afterEach(() => {
      localStorage.clear();
      sinon.restore();
    });
    it('should return false when there is no token in the local storage', () => {
      localStorage.clear();
      expect(isUserAuthenticated()).toBe(false);
    });
    it('should return false when token cannot be deoded', () => {
      setToken('bad_token');
      expect(isUserAuthenticated()).toBe(false);
    });
    it('should return false when token has expired', () => {
      setToken(jwtToken);
      expect(isUserAuthenticated()).toBe(false);
    });
    it('should return true when token is decoded and has not expired', () => {
      sinon.useFakeTimers({ now: 1551374324363 });
      setToken(jwtToken);
      expect(isUserAuthenticated()).toBe(true);
    });
  });
});

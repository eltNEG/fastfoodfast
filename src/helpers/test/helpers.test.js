import cardItems from '..';
import items from '../../mocks';

describe('helpers', () => {
  describe('cardItem', () => {
    it('should return a list of card object', () => {
      const items = [{ key: 'value' }];
      const button = 'button';
      const expected = [{ key: 'value' }];
      expect(cardItems(items, button)[0].extra).toBe('button');
    });
  });
});

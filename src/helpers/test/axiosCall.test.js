import axios from 'axios';
import moxios from 'moxios';
import getFoods from '../axiosCall';
import { italic } from 'ansi-colors';

describe('axiosCall', () => {
    beforeEach(() => {
        moxios.install();
      });
      afterEach(() => {
        moxios.uninstall();
      });
    describe('getFoods', () => {
        it('should get food items', async () => {
            axios.get = jest.fn().mockResolvedValue({});
            await getFoods();
            expect(axios.get).toBeCalledTimes(1);
        })
    })
})
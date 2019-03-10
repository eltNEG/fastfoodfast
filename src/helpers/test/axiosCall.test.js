import axios from 'axios';
import moxios from 'moxios';
import getFoods, {login, register} from '../axiosCall';
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
    describe('login', () => {
      it('should get food items', async () => {
          axios.post = jest.fn().mockResolvedValue({});
          await login({});
          expect(axios.post).toBeCalledTimes(1);
      })
  })
  describe('register', () => {
    it('should get food items', async () => {
        axios.post = jest.fn().mockResolvedValue({});
        await register({});
        expect(axios.post).toBeCalledTimes(1);
    })
})
})
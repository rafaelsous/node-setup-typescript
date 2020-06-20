import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Rafael Sousa';

  expect(user.name).toEqual('Rafael Sousa');
});
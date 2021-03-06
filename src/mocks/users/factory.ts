import dayjs from 'dayjs';
import { internet, name, date } from 'faker';
import { Factory } from 'miragejs';

type Authority = 'ROLE_ADMIN' | 'ROLE_USER';

export const UserFactory = Factory.extend({
  login: (): string => internet.userName(),
  email: (): string => internet.email(),
  firstName: (): string => name.firstName(),
  lastName: (): string => name.lastName(),
  createdBy: (): string => name.firstName(),
  createdDate: () => dayjs(date.past()).format('YYYY-MM-DD'),
  lastModifiedBy: (): string => name.firstName(),
  lastModifiedDate: () => dayjs(date.past()).format('YYYY-MM-DD'),
  langKey: (): string => 'en',
  activated: (): boolean => true,
  authorities: (): Authority[] => ['ROLE_USER', 'ROLE_ADMIN'],
});

import { faker } from '@faker-js/faker';
import { UserEntity, UserInterface } from '../../user.entity';

describe('UserEntity unit tests', () => {
  let user: UserInterface;
  let sut: UserEntity;

  beforeEach(() => {
    user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    sut = new UserEntity(user);
  });
  it('Constuctor method', () => {
    expect(sut.props.name).toEqual(user.name);
    expect(sut.props.email).toEqual(user.email);
    expect(sut.props.password).toEqual(user.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
});

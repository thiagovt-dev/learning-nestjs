import { UserEntity, UserInterface } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/userDataBuilder';

describe('UserEntity unit tests', () => {
  let user: UserInterface;
  let sut: UserEntity;

  beforeEach(() => {
    (user = UserDataBuilder({})), (sut = new UserEntity(user));
  });
  it('Constuctor method', () => {
    expect(sut.props.name).toEqual(user.name);
    expect(sut.props.email).toEqual(user.email);
    expect(sut.props.password).toEqual(user.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(user.name);
    expect(typeof sut.name).toBe('string');
  });

  it('Getter of email field', () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toEqual(user.email);
    expect(typeof sut.email).toBe('string');
  });
  it('Getter of password field', () => {
    expect(sut.password).toBeDefined();
    expect(sut.password).toEqual(user.password);
    expect(typeof sut.email).toBe('string');
  });
  it('Getter of createdAt field', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
});

import { Entity } from '@/shared/domain/entities/entity';

export interface UserInterface {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

export class UserEntity extends Entity {
  constructor(
    public readonly props: UserInterface,
    id?: string,
  ) {
    super(props, id);
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  updateName(value: string): void {
    this.props.name = value;
  }
  updatePassword(value: string): void {
    this.props.password = value;
  }

  get name() {
    return this.props.name;
  }
  private set name(value: string) {
    this.props.name = value;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}

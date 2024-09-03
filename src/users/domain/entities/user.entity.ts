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

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}

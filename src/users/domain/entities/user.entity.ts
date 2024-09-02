export interface UserInterface {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

export class UserEntity {
  constructor(public readonly props: UserInterface) {
    this.props.createdAt = this.props.createdAt ?? new Date();
  }
}

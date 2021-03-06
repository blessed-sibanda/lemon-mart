import { Role } from '../auth/auth.enum'

export interface IName {
  first: string
  middle?: string
  last: string
}

export enum PhoneType {
  None = 'none',
  Mobile = 'mobile',
  Home = 'home',
  Work = 'work',
}

export interface IPhone {
  type: PhoneType
  digits: string
  _id: string
}

export interface IUser {
  _id: string
  email: string
  name: IName
  picture: string
  role: Role | string
  userStatus: boolean
  dateOfBirth: string
  level: number
  address: {
    line1: string
    line2?: string
    city: string
    state: string
    zip: string
  }
  phones: IPhone[]
  readonly fullName: string
}

export class User implements IUser {
  constructor(
    public _id = '',
    public email = '',
    public name = { first: '', middle: '', last: '' } as IName,
    public picture = '',
    public role = Role.None,
    public dateOfBirth = '',
    public userStatus = false,
    public level = 0,
    public address = {
      line1: '',
      city: '',
      state: '',
      zip: '',
    },
    public phones: IPhone[] = []
  ) {}

  static Build(user: IUser) {
    if (!user) {
      return new User()
    }

    return new User(
      user._id,
      user.email,
      user.name,
      user.picture,
      user.role as Role,
      user.dateOfBirth,
      user.userStatus,
      user.level,
      user.address,
      user.phones
    )
  }

  get fullName(): string {
    return `${this.name.first} ${this.name.middle ?? ''} ${this.name.last}`
  }

  toJSON(): object {
    const serialized = Object.assign(this)
    delete serialized.id
    delete serialized.fullName
    return serialized
  }
}

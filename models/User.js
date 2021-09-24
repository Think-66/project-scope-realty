import shortid from 'shortid';
import Adapters from "next-auth/adapters"

// Extend the built-in models using class inheritance
export default class User extends Adapters.TypeORM.Models.User.model {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  constructor(name, email, image, emailVerified) {
    super(name, email, image, emailVerified)

    this.isAdmin = false;

    if (emailVerified) {
      var currentDate = new Date();
      this.emailVerified = currentDate;
    }
  }
}

export const UserSchema = {
  name: 'User',
  target: User,
  columns: {
    isAdmin: {
      type: 'boolean',
      default: false
    },
    ...Adapters.TypeORM.Models.User.schema.columns
  }
};
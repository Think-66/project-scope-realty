import shortid from "shortid";

// Extend the built-in models using class inheritance
export default class Profile {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  constructor(id) {
    if (id) {
      this.id = id;
    }
  }
}

export const UserSchema = {
  name: "Profile",
  target: Profile,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
  },
};

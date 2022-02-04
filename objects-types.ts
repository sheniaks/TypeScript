type Person = { name: string, age: number, nickName?: string , getPass?: () => string,};

let user: Person = {
  name: "Alex",
  age: 28,
  nickName: "ashe",
};

let admin: Person = {
  name: "Admin",
  age: 30,
  nickName: "admin",
  getPass(): string {
    return `${this.name}${this.age}`;
  }
};

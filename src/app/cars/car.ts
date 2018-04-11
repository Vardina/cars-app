export class Comment {
  text: string;
  tag: string;
}

export class Car {
  constructor(
    public id?: number,
    public make?: string,
    public model?: string,
    public owner?: string,
    public img?: string,
    public date?: string,
    public comments?: Comment[],
    public description?: string
  ) { }
}


// https://embed.plnkr.co/ZwQB5EENaR7wYdMA2rDs/ - edit forms
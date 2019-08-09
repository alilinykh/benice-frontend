export class Contact {
  id: number;
  name: string;
  category: string;
  description: string;
  pictureUrl: string;
  location: string;

  constructor() {
    this.id = null;
    this.name = '';
    this.category = '';
    this.description = '';
    this.pictureUrl = 'https://miro.medium.com/max/1248/1*eu4dAuXCqJGM7vjKx3D8WA.png';
    this.location = '';
  }
}

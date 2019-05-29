export class rental { 
  public location: string;
  public price: string; 
  public accomodation: string;
  public image: string;

  constructor (loc: string, p: string, room: string, img: string) {
      this.location=loc;
      this.price=p;
      this.accomodation=room;
      this.image=img;

  }

}
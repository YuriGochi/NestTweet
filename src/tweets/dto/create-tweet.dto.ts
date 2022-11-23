export class CreateTweetDto {
    constructor(props) {
        this.id = props.id
        this.name = props.name;
    }
    name: string;
    id: string
}
  
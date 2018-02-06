export class Category {


    public id: Number;
    public name: String;
    public parentId: Number;
    public active: Number;
    public pic: String;
    public subCategories:Category[]=[];
}
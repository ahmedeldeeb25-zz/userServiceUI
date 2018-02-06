export class Comment{

    
	public Id:Number;
	public comment:String;
	public user_id:Number;
	public post_id:Number;	 
	public posted_in:Date;


	set _comment(comment:String){
		this.comment=comment;
	}

	set _user_id(user_id:Number){
		this.user_id=user_id;
	}
	set _post_id(post_id:Number){
		this.post_id=post_id;
	}
}
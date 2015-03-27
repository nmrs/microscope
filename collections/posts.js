Posts = new Meteor.Collection('posts');

Posts.allow({
	insert: function(userID, doc) {
		//only if the user is logged in
		return !! userID;
	}
});
var headerView = Titanium.UI.createView({
  backgroundColor:'#111111',
  top:0,
  left:0,
  height:50,
  width:320,
  opacity:0.8
});

// create logo

var logo = Titanium.UI.createImageView({
	url:'images/logo.png',
	width:150,
	height:50,
	left:10,
	bottom:0,
	opacity:1
});
headerView.add(logo);
 
var profile = Titanium.UI.createButton({
	backgroundImage:'images/profile-button.png',
	width:33,
	height:35,
	right:10,
	bottom:5,
	opacity:1
});
headerView.add(profile);
 
var username = Titanium.UI.createLabel({
	color:'#ddd',
	text:'',
	textAlign:'right',
	height:'auto',
	font:{fontSize:16,fontWeight:'normal'},
	right:50,
	bottom:15
});
headerView.add(username);
 
profile.addEventListener("click",function(e) {
  Titanium.App.fireEvent("profileClicked");
});

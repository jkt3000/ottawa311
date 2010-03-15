
var view = Titanium.UI.createScrollView({
  contentWidth:320,
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true
});

var settings = Titanium.UI.createWindow({
  title: 'Settings'
});


var label = Titanium.UI.createLabel({
  text: 'User settings to be implemented',
  textAlign:'center',
  font:{
    fontSize:14,
    fontFamily:'Arial'
  },
  color: '#666'
});

view.add(label);
settings.add(view);

// add table view to the window
Titanium.UI.currentWindow.add(settings);
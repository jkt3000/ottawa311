Titanium.UI.setBackgroundColor('#000');

Titanium.App.remote_url      = 'http://ottawa311.heroku.com/reports'; 
Titanium.App.report_photo    = null;
Titanium.App.report_thumb    = null;
Titanium.App.report_category = null;
Titanium.App.report_desc     = null;
Titanium.App.curr_lat        = null;
Titanium.App.curr_lng        = null;
Titanium.App.curr_acc        = null;


var tabGroup = Titanium.UI.createTabGroup();

// report win
var win1 = Titanium.UI.createWindow({
  url: 'windows/report.js',
  title: 'Create Report',
  width: 320
});

// report tab
var tab1 = Titanium.UI.createTab({
  title: 'Create Report',
  icon: 'images/eye.png',
  window: win1
});

// settings win
var win2 = Titanium.UI.createWindow({
  url: 'windows/settings.js',
  title: "Settings"
});

// settings tab
var tab2 = Titanium.UI.createTab({
  title: "Settings",
  icon: 'images/gear2.png',
  window: win2
});

function createReport() {
  Titanium.UI.currentWindow.add(create_report);
  create_report.show();
}


// set background color back to white after tab group transition
tabGroup.addEventListener('open',function() {
	Titanium.UI.setBackgroundColor('#fff');
});

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.setActiveTab(1);
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});

Titanium.API.info("done loading...");

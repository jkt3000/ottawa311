Titanium.UI.setBackgroundColor('#000');
 
var report_photo    = null;
var report_thumb    = null;
var report_category = null;
var report_desc     = null;

//Construct main content views
Titanium.include('config.js'); // config view
Titanium.include('new_report.js'); // start a new report
Titanium.include('create_report.js'); // show's other input and submit
Titanium.include('result_report.js'); // response to submission

var tabGroup = Titanium.UI.createTabGroup();

// report win
var win1 = Titanium.UI.createWindow({
  title: 'Create Report'
});

// report tab
var tab1 = Titanium.UI.createTab({
  title: 'Create Report',
  icon: 'images/eye.png',
  win: win1
});

// settings win
var win2 = Titanium.UI.createWindow({
  title: "Settings"
});


// settings tab
var tab2 = Titanium.UI.createTab({
  title: "Settings",
  icon: 'images/gear2.png',
  win: win2
});

// set background color back to white after tab group transition
tabGroup.addEventListener('open',function() {
	Titanium.UI.setBackgroundColor('#fff');
});

win1.add(new_report);
win1.add(create_report);
win1.add(result_report);


tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.setActiveTab(1);
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});

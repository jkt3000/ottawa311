Titanium.API.info('config settings');

// create table view data object
var data = [
	{title:'Play Movie', hasChild:true, test:'../examples/movie.js'},
	{title:'Vibrate', hasChild:true, test:'../examples/vibrate.js'},
	{title:'Geolocation', hasChild:true, test:'../examples/geolocation.js'},
	{title:'Accelerometer', hasChild:true, test:'../examples/accelerometer.js'},
	{title:'Sound', hasChild:true, test:'../examples/sound.js'},
	// {title:'Contacts', hasChild:true, test:'../examples/contacts.js'}
	{title:'Photo Gallery', hasChild:true, test:'../examples/photo_gallery.js'}
];

data.push({title:'Orientation', hasChild:true, test:'../examples/orientation.js'});

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true})
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
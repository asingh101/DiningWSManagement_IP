//Function to add even listeners when window is loaded
function openDefaultTab()
{
	document.getElementsById('defaultOpen').click();
}

function getActiveTabElement(evt, tabName) {
    var i, tabcontent,tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
	document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
	if(tabName == "DashBoard")
		showSchedular();
	else if(tabName == "HoursSummary")
		showHoursWorked();	
	else if(tabName == "Complaint")
		openCompainForm();
	else if(tabName == "Contact")
		openContact();
	else if(tabName == "LogOut")
		logOut();
}



function showSchedular(e)
{
	e.target.classList.add('active');
	
}

function showHoursWorked(e)
{
	e.target.classList.add('active');
	
}

function openCompainForm(e)
{
	e.target.classList.add('active');
	
}

function openContact(e)
{
	e.target.classList.add('active');
	
}

function logOut(e)
{
	e.target.classList.add('active');
	
}


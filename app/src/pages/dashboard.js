rightFit.Pages.Dashboard = (function(){
	'use strict';

	var dashboard;
	var dateCalendar;
	var currentDate;

	function init() {
		rightFit.User.checkLogin();

		app.onPageBeforeInit( 'dashboard', function( page ) {
			console.log('dashboard onPageBeforeInit');
		   
		    ///CALENDAR 
		    currentDate = moment().format('YYYY-MM-DD');

		    $$('.dateYesterday').on( 'click', setDateYesterday );
		    $$('.dateTomorrow').on( 'click', setDateTomorrow );
				
			dateCalendar = app.calendar({
			    input: '#currentDay'
			});

			getActivities();
		});

		app.onPageBeforeRemove( 'dashboard', function( page ) {
			console.log('dashboard off');
		    $$('.dateYesterday').off( 'click', setDateYesterday );
		    $$('.dateTomorrow').off( 'click', setDateTomorrow );
		});

	}

	function getActivities(){
		/*
		var ListItems = React.createClass({displayName: 'ListItems',
			render: function() {
				return (
					React.DOM.div({className: "page-content"}, 
						React.DOM.div({className: "list-block contacts-list"}, 
							React.DOM.ul(null, items)
						)
					)
				);
			}
		});

		React.renderComponent(ListItems(), document.getElementById('cardioActivities'));
		*/



		/*
		var activities = [
		  {id: 1, name: "sprint", time: "30 min"},
		  {id: 2, name: "jog", time: "90 min"},
		  {id: 3, name: "spin bike", time: "30 min"},
		]

		var activityItems = React.createClass({
		  propTypes: {
		    name: React.PropTypes.string.isRequired,
		    time: React.PropTypes.string
		  },

		  render: function() {
		    // I wrap mult-line return statements in parentheses to avoid the
		    // inevitable bugs caused by forgetting that JavaScript will throw away
		    // the final lines when possible. The parentheses are not strictly
		    // necessary.
		    return (
		      React.createElement('tr', {}, 
			    React.createElement('td', {className:'label-cell'}, this.name),
			    React.createElement('td', {className:'numeric-cell'}, this.time)
			  )
		    )
		  },
		})

		var activityItemElements = activities
		.filter(function(activity) { return activity.name })
		.map(function(activity) { return React.createElement(activityItems, activity) })


		var rootElement = React.createElement('tbody', {}, activityItemElements);
		ReactDOM.render(rootElement, document.getElementById('cardioActivities'));
		*/

	}

	function setDateYesterday(e){
		e.preventDefault();

		currentDate = moment(currentDate, "YYYY-MM-DD").add(1, 'days');
		dateCalendar.setValue([currentDate]);
	}

	function setDateTomorrow(e){
		e.preventDefault();

		console.log('set tomorrows date');
		currentDate = moment(currentDate, "YYYY-MM-DD").add(1, 'days');
	    dateCalendar.setValue([currentDate]);
	}

	return{
		init: init
	}

})();

rightFit.Pages.Dashboard.init();
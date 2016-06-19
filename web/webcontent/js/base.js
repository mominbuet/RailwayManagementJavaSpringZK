
		document.observe('dom:loaded', function() {

			var nav_links = $$('site_nav>li');

			nav_links.invoke('observe', 'mouseout', function(event) {event.element().removeClassName('ie6-hover');})

			nav_links.invoke('observe', 'mouseover', function(event) {event.element().addClassName('ie6-hover');})

			$$('input[type="text"]').invoke('addClassName','ie6-text');

			$$('input[type="password"]').invoke('addClassName','ie6-text');

		});

	




		var ImbeddedTabGroup = Class.create({

			initialize: function(el) {

				this.base = $(el);

				

				var firstContentId = this.base.select('.tab_contents .tab_content').first().readAttribute('id');

				this.makeActive(firstContentId);

				

				this.buttons = this.base.select('.button_row .button');

				this.buttons.invoke('observe', 'click', this.buttonClicked.bindAsEventListener(this));

			},

			makeActive: function(contentId) {

				this.hideCurrentlyActive();

				this.activeContent = contentId;

				this.showContent(contentId);

			},

			hideCurrentlyActive: function() {

				if(this.activeContent)

					this.hideContent(this.activeContent);

			},

			buttonClicked: function(event) {

				var element = event.element().up('.button');

				var contentId = this.getContentName(element.readAttribute('id'));

				this.makeActive(contentId);

				

				Event.stop( event );

				return false;

			},

			/* private functions */

			hideContent: function(id) {

				$(id).removeClassName('active_tab_content');

				$(this.getButtonName(id)).removeClassName('active_button');

			},

			showContent: function(id) {
				

				$(id).addClassName('active_tab_content');


				$(this.getButtonName(id)).addClassName('active_button');

			},

			

			getButtonName: function(contentId) {

				return contentId + "_btn";

			},

			getContentName: function(buttonId) {

				return buttonId.substr(0, buttonId.length - 4);

			}

		});


	$(document).observe('dom:loaded', function() { 
var groupsRaw = Selector.findChildElements($('content_body'), [ 'div.tab_group' ]);
groupsRaw.map(function(el) {return new ImbeddedTabGroup(el);});
});
			

	
		document.observe('dom:loaded', function() {

			var nav_links = $$('site_nav>li');

			nav_links.invoke('observe', 'mouseout', function(event) {event.element().removeClassName('ie6-hover');})

			nav_links.invoke('observe', 'mouseover', function(event) {event.element().addClassName('ie6-hover');})

			$$('input[type="text"]').invoke('addClassName','ie6-text');

			$$('input[type="password"]').invoke('addClassName','ie6-text');

		});



		var LoginPopout = {

			show: function() {

				$$("#tickets_ret_time, #tickets_dep_time, #schedules_dep_time, #schedules_ret_time").invoke('setStyle', {visibility: "hidden"});

				Popout.show("login_popout");

			},

			hide: function() {

				$$("#tickets_ret_time, #tickets_dep_time, #schedules_dep_time, #schedules_ret_time").invoke('setStyle', {visibility: "visible"});

				Popout.hide("login_popout");

			}

		};



	    var Popout = {

			toggle: function(el) {

				$(el).toggleClassName("popoutvisible");

			},

			show: function(el) {

				$(el).addClassName("popoutvisible");

			},

			hide: function(el) {

				$(el).removeClassName("popoutvisible");

			},

			toggleContentVisiblity: function(/* ... */) {

				$A(arguments).each(function(el) {

					$(el).toggleClassName("popout_content_hidden");

				});

			}

		};

var popUpWin = 0;

function popUpWindow(URLStr, width, height, options) {
var opts = {toolbar:'no',
location:'no',
directories:'no',
status:'no',
menubar:'no',
scrollbars:'no',
resizable:'no',
copyhistory:'yes'};
if(options) Object.extend(opts,options);

var winL=(screen.width-width)/2;
var winT=(screen.height-height)/2;

if(popUpWin) {
if(!popUpWin.closed) popUpWin.close();
}

popUpWin = open(URLStr, 'popUpWin', $H(opts).invoke('join','=').join(',') + ',width='+width+',height='+height+',left='+winL+', top='+winT+',screenX='+winL+',screenY='+winT+'');
}
	




function loadVirtualAssistImg() {
	$('askjulie').style.display ="block";

}

function loadJulieImg() {
	setTimeout("loadVirtualAssistImg()",1000)
}


		Element.addMethods({

			offsetEdges: function(element) {

				element = $(element);

				var co = element.cumulativeOffset();

				var dim = element.getDimensions();

				co.bottom = co.top + dim.height;

				co.right = co.left + dim.width;

				return co;

			}

		});

	

		/* menu object */

		var SelectStats;

		var Menu = Class.create({

			initialize: function(trigger, menu) {

				this.trigger = trigger;

				this.menu = menu;

				this.setOverlapSelects();

				this.timeout = null;

				this.trigger.observe('mouseover', this.triggerOver.bindAsEventListener(this));

				this.trigger.observe('mouseout', this.setTimeout.bindAsEventListener(this));

				this.menu.observe('mouseover', this.menuOver.bindAsEventListener(this));

				this.menu.observe('mouseout', this.setTimeout.bindAsEventListener(this));

				document.observe('menu:opened', this.menuOpened.bindAsEventListener(this));

			},

			setOverlapSelects: function() {

				if (Prototype.Browser.IE && (parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5)) == 6)) {

					var co = this.menu.offsetEdges();

					this.overlapSelects = SelectStats.findAll(function(stat) {

						return (stat.edges.bottom > co.top && stat.edges.top < co.bottom &&

						stat.edges.left < co.right && stat.edges.right > co.left);

					}).pluck('element');

				} else {

					this.overlapSelects = [];

				}

			},

			close: function() {

				this.clearTimeout();

				this.menu.removeClassName('dynlist_active');

				this.overlapSelects.invoke('setStyle', {visibility: 'visible'});

			},

			menuOpened: function(e) {

				if (this.trigger != e.target) {

					this.close();

				}

			},

			triggerOver: function(e) {

				this.clearTimeout();

				this.trigger.fire('menu:opened');

				this.overlapSelects.invoke('setStyle', {visibility: 'hidden'});

				this.menu.addClassName('dynlist_active');

			},

			menuOver: function(e) {

				this.clearTimeout();

			},

			setTimeout: function() {

				this.timeout = this.close.bind(this).delay(Menu.Settings.timeout_length);

			},

			clearTimeout: function() {

				if (this.timeout) {

					window.clearTimeout(this.timeout);

					this.timeout = null;

				}

			}

		});



		Menu.Settings = {timeout_length: 0.5};



		var Menus;


		
		document.observe('dom:loaded', function() {

			SelectStats = $$('select').map(function(el) {

				var oe = el.offsetEdges();

				return {element: el, edges: el.offsetEdges()};

			});

			/* instantiate menus */

			Menus = $$('.dynlist').map(function(dynlist) {return new Menu(dynlist.previous(), dynlist);});

			/* background functionality */

			var fcl = $$('.dynlist li:first-child a'), lcl = $$('.dynlist li:last-child a');

			fcl.invoke('observe', 'mouseover', function(e) {e.element().up('.dynlist').addClassName('first_highlighted');});

			fcl.invoke('observe', 'mouseout', function(e) {e.element().up('.dynlist').removeClassName('first_highlighted');});

			lcl.invoke('observe', 'mouseover', function(e) {e.element().up('.dynlist').addClassName('last_highlighted');});

			lcl.invoke('observe', 'mouseout', function(e) {e.element().up('.dynlist').removeClassName('last_highlighted');});



			/* set javascript event for language page */

			$('language_select').observe('change', function() {


				switch ($F('language_select')) {
				

					case 'es':
					 
						  
						switchLanguage('es') ;

						break;

					case 'de':
						
						switchLanguage('de') ;

						break;
					
					case 'fs':
						
						switchLanguage('fr') ;

						break;


					default:

						break;

				}

			});

		});


		
		

	









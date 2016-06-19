
		function show_ff_tab(tab_name) {
			$('ff_tabbar_'+tab_name).addClassName('active');
			$$('#ff_tabbar>div[id!=ff_tabbar_'+tab_name+']').invoke('removeClassName','active');
			$('farefinder_tabbody_'+tab_name).addClassName('ff_active');
			$$('.farefinder_tabbody[id!=farefinder_tabbody_'+tab_name+']').invoke('removeClassName','ff_active');
		}
		Event.observe(window, 'load', function() {
			if ($('farefinder')) {
				var tbs = $('farefinder').select('.farefinder_tabbody');
				var maxheight = tbs.map(function(tb) {
					var hidden = !tb.hasClassName('ff_active');
					if(hidden) tb.addClassName('ff_active');
					var h = tb.clientHeight;
					if(hidden) tb.removeClassName('ff_active');
					return h;
				}).max()-65;
				if (Prototype.Browser.IE && (parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5)) == 6)) {
					tbs.invoke('setStyle', {'height': maxheight+'px'});
				} else {
					tbs.invoke('setStyle', {'minHeight': maxheight+'px'});
				}
			}
		});

	









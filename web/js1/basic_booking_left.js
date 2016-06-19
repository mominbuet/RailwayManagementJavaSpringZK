		function show_ff_tab(tab_name) {

			$('ff_tabbar_'+tab_name).addClassName('active');

			$$('#ff_tabbar>div[id!=ff_tabbar_'+tab_name+']').invoke('removeClassName','active');

			$('farefinder_tabbody_'+tab_name).addClassName('ff_active');

			$$('#farefinder>div.farefinder_tabbody[id!=farefinder_tabbody_'+tab_name+']').invoke('removeClassName','ff_active');
			
			if(tab_name != 'tickets'){
				showHideRedeemTabBarSection('ff_sub_tabbar', false);				
			} else {
				showHideRedeemTabBarSection('ff_sub_tabbar', true);	
				show_ff_sub_tab('bookatrip');
				if(document.getElementById('return').checked){
					document.getElementById('return').checked = true;
				} else {
					document.getElementById('oneway').checked = true;
				}
			} 
		}
		
		
		function show_ff_sub_tab(tab_name) {
			//showHideRedeemTabBarSection('ff_sub_tabbar', true);
			//activate selected sub tab
			$('ff_sub_tabbar_'+tab_name).addClassName('active');
			
			//de-activate other sub tabs (tabs only not the content)
			$$('#ff_sub_tabbar>div[id!=ff_sub_tabbar_'+tab_name+']').invoke('removeClassName','active');
						
			//de-activate all sub tab content
			$$('#farefinder>div.farefinder_tabbody[id!=farefinder_tabbody_'+tab_name+']').invoke('removeClassName','ff_active');
			
			//activate selected sub tab content
			if(tab_name == 'bookatrip'){
				$('farefinder_tabbody_tickets').addClassName('ff_active');
			} else {			
				$('farefinder_tabbody_'+tab_name).addClassName('ff_active');
			}
						
			if(tab_name == 'bookatrip'){
				if(document.getElementById('return').checked){
					document.getElementById('return').checked = true;
				} else {
					document.getElementById('oneway').checked = true;
				}
			} 
		}
		
		function showHideRedeemTabBarSection(shID, show) {    
    		if(show == true) {
    			if (document.getElementById(shID)) {
    				document.getElementById(shID).style.display = 'block';
    			}
    		} else {
    			if (document.getElementById(shID)) {
    				document.getElementById(shID).style.display = 'none';    		
    			}
    		}
		}
		
		function showHideSection(shID, show) {    
    		if(show == true) {
    			if (document.getElementById(shID)) {
    				document.getElementById(shID).style.display = 'block';
    			}
    		} else {
    			if (document.getElementById(shID)) {
    				document.getElementById(shID).style.display = 'none';    		
    			}
    		}
		}
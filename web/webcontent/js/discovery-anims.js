// ******
// * Shim requestAnimationFrame for cross-browser usage.
//  	This appears to have issues when adding to a namespace.
// ******

window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(callback){
                window.setTimeout(callback, 1000/60); // 16.67 ms == 60 hz.
              };
    })(); 	

$da = function _discoveryAnims(obj, context)
{
	// Use Jquery temporarily.
	return jQuery(obj, context);
}
$da.ret = [];

$da.isArray = function(obj)
{
	return Object.prototype.toString.call(obj) == "[object Array]";
}

$da.sibling = function(node){
	var ret = new $da.ret();
	for (; node; node=node.nextSibling)
	{
	
	}
}

$da.create = function(htmlText){
	var pDiv = document.createElement('div');
	$da.html(htmlText, pDiv);
	return $da(pDiv).children();
}
$da.html = function(html, target)
{
	var pItems = $da(target);
	for (var ii =0; ii< pItems.length; ii++ )
	{
		pItems[ii].innerHTML = html;
	}
	return pItems;
}
$da.append = function(obj, target)
{
	var pList = $da(obj);
	var pTarget = $da(target)[0];
	for (var ii=0; ii < pList.length; ii++)
	{
		pTarget.appendChild(pList[ii]);
	}
	return pList;
}

$da.getOverlay = function _discoveryAnims_getOverlay()
{
	if ($da.cache.overlay)
	{
		return $da.cache.overlay;
	}
	var pDiv = $da('#discovery_overlay');
	if (pDiv.length != 0)
	{
		$da.cache.overlay = pDiv;
	}
	else
	{
		pDiv = $da.create('<div id="discovery_overlay" style="position:fixed; width:100%; height:100%; z-index:999; background:#000; opacity:0; top:0; left:0; display:none"></div>').appendTo('body');
	}
	return pDiv;
};

$da.cache = {};
$da.consts = {OVERLAY_FADETIME: 350, OVERLAY_OPACITY:0.7};

$da.queue ={
	_count:0,
	queuedFunctions:[],
	enQueue:function _discoveryAnims_queue_enQueue (key){
		// key isn't currently used.  We'll just increment the preque;
		$da.queue._count++;
	},
	consumeQueue:function _discoveryAnims_queue_consumeQueue(key){
		$da.queue._count--;
		if ($da.queue.checkQueue)
		{
			for (var ii =0; ii < $da.queue.queuedFunctions.length; ii++)
			{
				$da.queue.queuedFunctions[ii]();
			}
		}
	},
	checkQueue:function _discoveryAnims_queue_checkQueue(){
		return ($da.queue._count == 0);
	},
	postQueue:function _discoveryAnims_queue_postQueue(closure){
		$da.queue.queuedFunctions.push(closure);
	}
};

// ******
// * Begin Animation Class
// ******
$da.animation = function _discoveryAnims_animation(element)
{

	this.animStart = new Date();
	this.standardEl = $da(element);

	this.duration = 0;
	this.totalTime = 0;
	this.currentFrame = 0;
	this.currentTime = 0;
	
	this.properties = [];

};

$da.animation.prototype.addProperties = function _discoveryAnims_animation_adProperties (newProperties)
{
	var pMaxTime = 0, ii=0;
	if (!$da.isArray(newProperties))
	{
		newProperties = [newProperties];
	}

	for (ii = 0; ii< newProperties.length; ii++)
	{
		this.properties.push(newProperties[ii]);
	}

	for (ii=0; ii < this.properties.length; ii++)
	{
		pMaxTime = Math.max(pMaxTime, this.properties[ii].duration + this.properties[ii].startOffset);
	}
	this.duration = pMaxTime;
	this.totalTime = this.animStart.valueOf() + this.duration;
}

$da.animation.prototype.step = function _discoveryAnims_animation_step (newTime)
{
	var pLastTime = this.currentTime,
		ii =0,
		pOffsets = {}, 
		pOffsetsUsed = false,
		pAnimationsFound = false;
	this.currentTime = newTime;// (newTime - this.animStart.valueOf());// - this.animStart;
	
	var objects = [];
	function findObject(obj)
	{
		for (var i=0; i < objects.length; i++)
		{
			if (objects[i].el[0] == obj[0]) return objects[i];
		}
		var pObj = {el:obj, css:{'__avail':false}, offset:{'__avail':false}, time:newTime};
		objects.push(pObj);
		return pObj;
	}
	
	for (ii = 0; ii < this.properties.length; ii++)
	{
		var pProperty = this.properties[ii];
		if (pProperty.complete) continue;
		var pTarget = null;		
		if ((pProperty.duration + pProperty.startOffset)  > newTime)
		{
			pTarget = pProperty.calculate(newTime);
		}
		else
		{
			pTarget = pProperty.targetVal;
			pProperty.complete = true;
		}
		var relObj = findObject(pProperty.el);
		if (pTarget == null) continue;

		if( pProperty.type == 'offset' )
		{
			relObj.offset[pProperty.propName] = pTarget;
			relObj.offset['__avail'] = true;
		}
		else
		{
			relObj.css[pProperty.propName] = pTarget;
			relObj.css['__avail'] = true;
		}
		pAnimationsFound = true;
	}
	if (pAnimationsFound)
	{

		for (var jj = 0; jj < objects.length; jj++)
		{
			pAnimationsFound = false;

			var relObj = objects[jj];
			if (relObj.css['__avail'])
			{
				pAnimationsFound = true;
				delete relObj.css['avail'];
				relObj.el.css(relObj.css);
			}
			if (relObj.offset['__avail'])
			{
				pAnimationsFound = true;
				delete relObj.offset['avail'];
				relObj.el.offset(relObj.offset);
			}
			
//			if ((pAnimationsFound) && ($da('.pin-drag')[0] == relObj.el[0])) console.log(relObj);
		}
	}
}
$da.animation.prototype.reset = function _discoveryAnims_animation_tween_reset()
{
	this.currentTime = 0;
	this.animStart = (new Date()).valueOf();
	this.step(0);

	return this;
}
$da.animation.prototype.start = function _discoveryAnims_animation_tween_start()
{
	var pThis = this;
	if (!$da.queue.checkQueue())
	{
		$da.queue.postQueue(function _anon_postQueue(){
			pThis.start();
		});
		return;
	}
	this.reset();
	this.animStart = new Date();
	for (var ii=0; ii < this.properties.length; ii++)
	{
		// SPECIAL CASES
		if (this.properties[ii].propName == 'opacity')
		{
			this.properties[ii].el.show();
		}
	}
	this.recurse((new Date()).valueOf());
}

$da.animation.prototype.recurse = function _discoveryAnims_animation__recurse(callTime)
{
	var thisObj = this;
	callTime = callTime - this.animStart.valueOf();
	if (callTime <= (this.duration))
	{

		window.requestAnimFrame(function(newTime){
			if (isNaN(newTime)) newTime = (new Date()).valueOf();
			thisObj.recurse(newTime)
		});
		thisObj.step(callTime);
	}
};
// ******
// * Tween Static Definitions
// ******
$da.animation.tween = {
	discrete:function _discoveryAnims_animation_tween_discrete()
	{
		return this.targetVal;
	},
	linear:function _discoveryAnims_animation_tween_linear(timeDelta)
	{
		return (this.delta) * ((timeDelta - this.startOffset) / (this.duration)) + this.startVal;
	},
	easeIn:function _discoveryAnims_animation_tween_easeIn(timeDelta)
	{
		var percent = ((timeDelta - this.startOffset) / (this.duration));
		return (this.delta) * percent * percent + this.startVal;
	},
	easeOut:function _discoveryAnims_animation_tween_easeOut(timeDelta)
	{
		var percent = ((timeDelta - this.startOffset) / (this.duration));

		return this.targetVal *(percent)*(percent) + this.startVal;		
	},
	easeInOut: function _discoveryAnims_animation_tween_easeInOut(timeDelta) 
	{
		var percent = (timeDelta - this.startOffset) / (this.duration); 
//		console.log(timeDelta + '::' + this.duration + '::' + this.startOffset);
		if (percent > 1) return null;
		return ((-Math.cos(percent*Math.PI)/2) + 0.5) * this.delta + this.startVal;
	},
	bubble:function(timeDelta)
	{
		var percent = (timeDelta - this.startOffset) / (this.duration); 
		if (percent > 1) return null;
		return (((-Math.sin(percent*Math.PI))) ) * this.delta + this.targetVal * percent + this.startVal * (1-percent);
	}
	
};

// ******
// * Begin Animation Property Class
// ******
$da.animation.property = function _discoveryAnims_animation_property (el, propName, targetVal, type, easing, duration, startOffset, startVal)
{
	this.el = $da(el);
	this.propName = propName;
	this.easing = easing || $da.animation.tween.linear;
	this.duration = duration;

	this.complete =  false;
	this.startOffset = startOffset ? startOffset : 0;
	
	this.type = type;
	this.targetVal = targetVal;
	this.startVal = startVal;
//console.log(arguments);
	if ((startVal == null) || (startVal == 'undefined'))
	{
		switch (propName)
		{
			case 'left':
				// jQuery code
				this.startVal = this.currentVal = $da(el).offset().left;
				break;
			case 'top':
				this.startVal = this.currentVal = $da(el).offset().top;
				break;
			case 'width':
				this.startVal = this.currentVal = $da(el).width();
				break;
			case 'height':
				this.startVal = this.currentVal = $da(el).height();
				break;
			case 'backgroundPosition':
				this.startVal = this.currentVal = $da(el).height();
				break;
			default:
				this.startVal = parseFloat($da(el).css(propName)); // May need to be extended for properties requiring a suffix.
				break;
		}
	}
	this.delta = this.targetVal - this.startVal;
}

$da.animation.property.prototype.calculate = function _discoveryAnims_animation_property_calculate(currentTime)
{
	if (currentTime < this.startOffset) return null;
	if (currentTime > this.startOffset+this.duration) return null;
	return this.easing.call(this,currentTime);	
}

$da.animation.property.params = {
	ELEMENT:'element',
	PROPNAME:'propName',
	EASING:'easing',
	TARGET_VALUE:'targetVal',
	START_VALUE:'startVal',
	TYPE:'type',
	DURATION:'duration',
	START_OFFSET:'startOffset'
};
$da.animation.property.types = {
	OFFSET:'offset',
	OPACITY:'opacity',
	STANDARD:'standard'
};

$da.animation.property.fromParams = function _discoveryAnims_animation_property_fromParams(paramObj)
{
	var paramCache = $da.animation.property.params,
		pProp = new $da.animation.property(
			paramObj[paramCache.ELEMENT], 
			paramObj[paramCache.PROPNAME],
			paramObj[paramCache.TARGET_VALUE],
			paramObj[paramCache.TYPE],
			paramObj[paramCache.EASING],
			paramObj[paramCache.DURATION],
			paramObj[paramCache.START_OFFSET],
			paramObj[paramCache.START_VALUE]);
		return pProp;
}

$da.bootstrap = {
	styles : function _discoveryAnims_bootstrap_styles(){
		var baseHref = '/css/',
			pStylesheet = 'discovery-anims.css',
	    	pLinks = $da('link'),
	    	pStyleExists = false;
	  

	    for (var i = 0; i < pLinks.length; i++)
	    {
		   if ($da(pLinks[i]).attr('href').indexOf(pStylesheet) > -1)
	       {
	        	// We believe the style exists.
		        return; 
		    }
		}
		
		if (document.createStyleSheet) 
		{
		    document.createStyleSheet(baseHref+pStylesheet);
		} 
		else 
		{
			var newSS = $da.create('<link rel="stylesheet" type="text/css" href="'+baseHref+pStylesheet+'" />');
	        $da('head').prepend(newSS);
		}     
	}
};

$da.bootstrap.view = function _discoveryAnims_bootstrap_view(){
	// Although it would be nice to load an external file, loading this as a simple string obviates cross-domain issues.
	var pHtml = '<div id="overlay-cursor"></div>\
		<div id="start-bar-container" style="opacity:0">\
			<div class="taskbar-wrapper">\
				<div class="border-darkline"></div>\
				<div class="border-brightline"></div>\
				<div class="desktop-overlay-darkener"></div>\
				<div class="desktop-overlay-container"><img class="blur-image desktop-overlay" src="data:image/jpeg;base64,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%3D" width="100%" /></div>\
				<ul class="icon-list">\
					<li class="no-vertical-margin">\
						<div class="icon-start-button-inline"></div>\
					</li>\
					<li class="bordered">\
						<div class="icon-ie9-inline"></div>\
					</li>\
					<li>\
						<div class="icon-explorer-inline"></div>\
					</li>\
					<li class="pin-target"></li>\
				</ul>\
				<div class="time-area">\
					<div class="time"></div>\
					<div class="dat"></div>\
				</div>\
				<div class="bordered extra-grad"></div>\
			</div>\
			<div class="helper-text">Drag the icon to your Windows 7 Taskbar to pin it. ( <span class="hide-me">Hide Me</span> )</div>\
		</div>\
		<div id="pinner-popup">\
			<div class="icon-pinner-inline"></div>\
			<span class="color-pin-start">Pin to</span>\
			<span class="color-pin-end">Taskbar</span>\
		</div>';
	var pItems = $da.create(pHtml);
	$da.append(pItems, $da('body'))
	$da.append('<img style="opacity:0; height:32px" src="'+$da('.msPinSite').attr('src')+'" />', $da('.pin-target'));

	$da('#start-bar-container .time-area').each(function(idx, el)
	{
		var $el = $da(el),
			pNow = new Date(),
			pHours = pNow.getHours(),
			pMinutes = pNow.getMinutes(),
			pAmPm = 'AM';
		if (pHours == 0)
		{
			pHours = 12;
		}
		else if (pHours > 12)
		{
			pHours = pHours -12;
			pAmPm = 'PM';
		}
		$da.html([pHours,':',(pMinutes > 10)?pMinutes : '0'+pMinutes,' ', pAmPm].join(''), $da('.time', $el));
		$da.html([pNow.getMonth()+1,pNow.getDate(), pNow.getFullYear()].join('/'), $da('.dat', $el));
//		$da('.time', $el).html([pHours,':',(pMinutes > 10)?pMinutes : '0'+pMinutes,' ', pAmPm].join(''));
//		$da('.dat', $el).html([pNow.getMonth()+1,pNow.getDate(), pNow.getFullYear()].join('/'));
	});
};




// ******
// * Begin Page-Level info
// 		Bootstrap the CSS before page load.  Should be safe because 'head' should already exist.
// ******
$da.bootstrap.styles();
$da(document).ready(function _discoveryAnims_document_ready(){
	// Inject HTML into the DOM
	$da.bootstrap.view();
	$da('.hide-me').click(function(){
		$da('#start-bar-container').hide();
		$da('#pinner-popup').hide();
		$da.getOverlay().hide();
		pAnim.standardEl.remove();
		$da('.msPinSite').unbind('mouseover', doDiscoveryAnims);
	});

	function doDiscoveryAnims()
	{
		var paramCache = $da.animation.property.params;
		$da('.msPinSite').unbind('mouseover', doDiscoveryAnims);
		var $pOrig = $da($da(this));
        
		var $target = $pOrig.clone().appendTo('body').addClass('pin-drag').css({'zIndex': 4000, 'position':'fixed'}).offset($pOrig.offset());
		
		$da('#start-bar-container').show().css({opacity:0, bottom:0});

		pAnim = new $da.animation($target);

		
var pOffset1 = 1900;
var pOffset2 = 2000;
var pOffset3 = 3100;
var pOffset4 = 3300;

		pAnim.addProperties([
				new $da.animation.property($target, 'position', 'fixed','discrete', $da.animation.tween.discrete,1),		
				new $da.animation.property($target, 'left', $da('.pin-target').offset().left-20, 'offset',$da.animation.tween.bubble,1200,pOffset1),
				new $da.animation.property($target, 'top', $da('.pin-target').offset().top-60, 'offset',$da.animation.tween.easeInOut,1200,pOffset1),
				new $da.animation.property($da.getOverlay(), 'opacity', $da.consts.OVERLAY_OPACITY, 'float' ,$da.animation.tween.easeInOut, $da.consts.OVERLAY_FADETIME),
//				new $da.animation.property($target, 'top', '', 'discrete',$da.animation.tween.discrete,1,10),
				new $da.animation.property($target, 'bottom', $da('body').height() - ($da('.pin-target').offset().top-60) - $target.outerHeight(true)  + 'px', 'discrete',$da.animation.tween.discrete,1,2700)
			]);
		$da('#start-bar-container').css({bottom:'-60px'});

		var $startBar = $da('#start-bar-container');
		var $cursor = $da('#overlay-cursor');
		var pOpacity = {};
			pOpacity[paramCache.ELEMENT] = $cursor;
			pOpacity[paramCache.PROPNAME] = 'opacity';
			pOpacity[paramCache.TARGET_VALUE] = 1;
			pOpacity[paramCache.TYPE] = 'opacity';
			pOpacity[paramCache.DURATION] = 200;
			pOpacity[paramCache.EASING] = $da.animation.tween.easeInOut;
			pOpacity[paramCache.START_VALUE] = 0;
		
		var pCursorX = {};
			pCursorX[paramCache.ELEMENT] = $cursor;
			pCursorX[paramCache.PROPNAME] = 'left';
			pCursorX[paramCache.TARGET_VALUE] = $target.offset().left+20;
			pCursorX[paramCache.TYPE] = 'standard';
			pCursorX[paramCache.DURATION] = 1200;
			pCursorX[paramCache.EASING] = $da.animation.tween.easeInOut;
			pCursorX[paramCache.START_OFFSET] = 100;

		var pCursorY = {};
			pCursorY[paramCache.ELEMENT] = $cursor;
			pCursorY[paramCache.PROPNAME] = 'top';
			pCursorY[paramCache.TARGET_VALUE] = $target.offset().top+60;
			pCursorY[paramCache.TYPE] = 'standard';
			pCursorY[paramCache.DURATION] = 1200;
			pCursorY[paramCache.EASING] = $da.animation.tween.easeInOut;			
			pCursorY[paramCache.START_VALUE] = $da('body').height();
			pCursorX[paramCache.START_OFFSET] = 100;

		$cursor.css({'backgroundPosition':'0 0'});		

		var pFrameChange = {};
			pFrameChange[paramCache.ELEMENT] = $cursor;
			pFrameChange[paramCache.PROPNAME] = 'backgroundPosition';
			pFrameChange[paramCache.TARGET_VALUE] = '64px 0';
			pFrameChange[paramCache.TYPE] = 'discrete';
			pFrameChange[paramCache.START_OFFSET] = 1300;
			pFrameChange[paramCache.DURATION] = 1;
			pFrameChange[paramCache.EASING] = $da.animation.tween.discrete;				

		

			
		var pCursorX2 = {};
			pCursorX2[paramCache.ELEMENT] = $cursor;
			pCursorX2[paramCache.PROPNAME] = 'left';
			pCursorX2[paramCache.TARGET_VALUE] = $da('.pin-target').offset().left;
			pCursorX2[paramCache.TYPE] = 'standard';
			pCursorX2[paramCache.DURATION] = 1200;
			pCursorX2[paramCache.START_OFFSET] = pOffset1;			
			pCursorX2[paramCache.EASING] = $da.animation.tween.bubble;
			pCursorX2[paramCache.START_VALUE] = $target.offset().left+20;			
		
		var pCursorY2 = {};
			pCursorY2[paramCache.ELEMENT] = $cursor;
			pCursorY2[paramCache.PROPNAME] = 'top';
			pCursorY2[paramCache.TARGET_VALUE] = $da('.pin-target').offset().top-60;
			pCursorY2[paramCache.TYPE] = 'standard';
			pCursorY2[paramCache.DURATION] = 1200;
			pCursorY2[paramCache.START_OFFSET] = pOffset1;			
			pCursorY2[paramCache.EASING] = $da.animation.tween.easeInOut;			
			pCursorY2[paramCache.START_VALUE] = $target.offset().top+60;		
					
		var pStartBar = {};
			pStartBar[paramCache.ELEMENT] = $startBar;
			pStartBar[paramCache.PROPNAME] = 'opacity';
			pStartBar[paramCache.TARGET_VALUE] = 1;
			pStartBar[paramCache.TYPE] = 'opacity';
			pStartBar[paramCache.DURATION] = 800;
			pStartBar[paramCache.START_OFFSET] = pOffset2;
		var pStartBar2 = {};
			pStartBar2[paramCache.ELEMENT] = $startBar;
			pStartBar2[paramCache.PROPNAME] = 'bottom';
			pStartBar2[paramCache.TARGET_VALUE] = 0;
			pStartBar2[paramCache.TYPE] = 'standard';
			pStartBar2[paramCache.DURATION] = 500;
			pStartBar2[paramCache.START_OFFSET] = pOffset1;	
		$da('.helper-text', $startBar).css({'opacity':0});		
		var pHelper = {};
			pHelper[paramCache.ELEMENT] = $da('.helper-text', $startBar);
			pHelper[paramCache.PROPNAME] = 'opacity';
			pHelper[paramCache.TARGET_VALUE] = 1;
			pHelper[paramCache.TYPE] = 'opacity';
			pHelper[paramCache.DURATION] = 500;
			pHelper[paramCache.START_OFFSET] = pOffset4;
		
		$da('#pinner-popup').css({'opacity':0});		
		var pPopup = {};
			pPopup[paramCache.ELEMENT] = $da('#pinner-popup');
			pPopup[paramCache.PROPNAME] = 'opacity';
			pPopup[paramCache.TARGET_VALUE] = 1;
			pPopup[paramCache.TYPE] = 'opacity';
			pPopup[paramCache.DURATION] = 150;
			pPopup[paramCache.START_OFFSET] = pOffset3;
		var pPopup2 = {};
			pPopup2[paramCache.ELEMENT] = $da('#pinner-popup');
			pPopup2[paramCache.PROPNAME] = 'left';
			pPopup2[paramCache.TARGET_VALUE] = $da('.pin-target').offset().left+20;
			pPopup2[paramCache.TYPE] = 'offset';
			pPopup2[paramCache.DURATION] = 0;
			pPopup2[paramCache.START_OFFSET] = pOffset1;
			
		$da('.pin-target img', $startBar).css({'opacity':0});		
		var pDrop1 = {};
			pDrop1[paramCache.ELEMENT] = $da('.pin-target img');
			pDrop1[paramCache.PROPNAME] = 'opacity';
			pDrop1[paramCache.TARGET_VALUE] = 1;
			pDrop1[paramCache.TYPE] = 'opacity';
			pDrop1[paramCache.DURATION] = 250;
			pDrop1[paramCache.START_OFFSET] = pOffset4+1200;
			
		var pDrop2a = {};
			pDrop2a[paramCache.ELEMENT] = $cursor;
			pDrop2a[paramCache.PROPNAME] = 'top';
			pDrop2a[paramCache.TARGET_VALUE] = $da('.pin-target').offset().top-250;
			pDrop2a[paramCache.TYPE] = 'standard';
			pDrop2a[paramCache.DURATION] = 500;
			pDrop2a[paramCache.START_OFFSET] = pOffset4+600;			
			pDrop2a[paramCache.START_VALUE] = $da('.pin-target').offset().top-60;			
			pDrop2a[paramCache.EASING] = $da.animation.tween.bubble;

		var pDrop2b = {};
			pDrop2b[paramCache.ELEMENT] = $cursor;
			pDrop2b[paramCache.PROPNAME] = 'left';
			pDrop2b[paramCache.TARGET_VALUE] = $da('.pin-target').offset().left-250;
			pDrop2b[paramCache.TYPE] = 'standard';
			pDrop2b[paramCache.DURATION] = 500;
			pDrop2b[paramCache.START_OFFSET] = pOffset4+600;	
			pDrop2b[paramCache.START_VALUE] = $da('.pin-target').offset().left;	
			pDrop2b[paramCache.EASING] = $da.animation.tween.bubble;
					
		var pDrop2 = {};
			pDrop2[paramCache.ELEMENT] = $cursor;
			pDrop2[paramCache.PROPNAME] = 'opacity';
			pDrop2[paramCache.TARGET_VALUE] = 0;
			pDrop2[paramCache.TYPE] = 'opacity';
			pDrop2[paramCache.DURATION] = 250;
			pDrop2[paramCache.START_OFFSET] = pOffset4+1200;		
		
		var pDrop3 = {};
			pDrop3[paramCache.ELEMENT] = $target;
			pDrop3[paramCache.PROPNAME] = 'opacity';
			pDrop3[paramCache.TARGET_VALUE] = 0;
			pDrop3[paramCache.TYPE] = 'opacity';
			pDrop3[paramCache.DURATION] = 250;
			pDrop3[paramCache.START_OFFSET] = pOffset4+1200;
		var pDrop4 = {};
			pDrop4[paramCache.ELEMENT] =$da('#pinner-popup');
			pDrop4[paramCache.PROPNAME] = 'opacity';
			pDrop4[paramCache.TARGET_VALUE] = 0;
			pDrop4[paramCache.TYPE] = 'opacity';
			pDrop4[paramCache.DURATION] = 250;
			pDrop4[paramCache.START_OFFSET] = pOffset4+1200;
			
		var pEnd = {};
			pEnd[paramCache.ELEMENT] = $target;
			pEnd[paramCache.PROPNAME] = 'opacity';
			pEnd[paramCache.TARGET_VALUE] = 0;
			pEnd[paramCache.TYPE] = 'discrete';
			pEnd[paramCache.DURATION] = 1;
			pEnd[paramCache.START_OFFSET] = pOffset4+1450;	
			pEnd[paramCache.EASING] = $da.animation.tween.discrete;				
											
		pAnim.addProperties([
		
							$da.animation.property.fromParams(pOpacity),
							$da.animation.property.fromParams(pStartBar),
							$da.animation.property.fromParams(pStartBar2),
							$da.animation.property.fromParams(pCursorX),
							$da.animation.property.fromParams(pCursorY),
							$da.animation.property.fromParams(pFrameChange),
							
							$da.animation.property.fromParams(pCursorX2),
							$da.animation.property.fromParams(pCursorY2),
							$da.animation.property.fromParams(pHelper),
							$da.animation.property.fromParams(pPopup),
							$da.animation.property.fromParams(pPopup2),
							$da.animation.property.fromParams(pDrop1),
							$da.animation.property.fromParams(pDrop2),
							$da.animation.property.fromParams(pDrop2a),
							$da.animation.property.fromParams(pDrop2b),
							$da.animation.property.fromParams(pDrop3),
							$da.animation.property.fromParams(pDrop4),
							$da.animation.property.fromParams(pEnd),
							]);
						
		pAnim.start();

        $da('#discovery_overlay').click(function(){
            $da('#start-bar-container').hide();
		    $da('#pinner-popup').hide();
		    $da.getOverlay().hide();
		    pAnim.standardEl.remove();
            $da('.msPinSite').unbind('mouseover', doDiscoveryAnims);		    
        });
	}
	// this is an example trigger.
	$da('.msPinSite').mouseover(doDiscoveryAnims);
});

if(/example/.test(window.location.search)){
	config = exampleConfig	
}

(function(config){
	
	function tag(tag){
		return function(attr,content){
			content = content || ''
			content = content.join && content.join('') || content
			return [
				'<',tag,attributes(attr),'>',
					content,
				'</',tag,'>'
			].join('')
		}
	}

	function attributes(attr){
		return ' ' + _(attr).map(function(value,key){
		  return key+'='+'"'+value+'"'
		}).join(' ')
	}

	var div = tag('div'), h1 = tag('h1'), img = tag('img'), p = tag('p'), a = tag('a'), script = tag('script');
	

	templates = {
		
		sidebar:
			div({class:'intro'},
				h1({},config.heading)+
				img({class:"profile",src:config.profile})+
				div({id:'blurb'},
					[
						p({},config.description.join('</p><p>')),
						a({href:'https://twitter.com/'+config.twitter},
							img({class:'icon', src:'img/twitter_white.png'})
						),
						a({href:'https://canyongames.tumblr.com/'+config.twitter},
							img({class:'icon', src:'img/tumblr_white.png'})
						),
						p({},config.otherHTML)
					]
				)
			)
		,
		//tumblr: (function(){
			//TODO: use tumblr api so config can alter live which blog to pull from
		//}(),
			


		prettify: (function(){
			//'<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?skin=sunburst"></script>'
		})()
	}

})(config)

$('body').append(templates.sidebar)

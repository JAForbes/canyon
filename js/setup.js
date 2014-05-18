(function(config){

	templates = {
		
		sidebar:
			div({class:'intro'},
				[
					h1(config.heading),
					img({class:"profile",src:config.profile},''),
					div({id:'blurb'},
						[
							p(config.description.join('</p><p>')),
							a({href:'https://twitter.com/'+config.twitter},
								img({class:'icon', src:'img/twitter_white.png'},'')
							),
							a({href:'https://canyongames.tumblr.com/'+config.tumblr},
								img({class:'icon', src:'img/tumblr_white.png'},'')
							),

							p(config.otherHTML)
						]
					)
				]
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
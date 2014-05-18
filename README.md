canyon
======

The code for my website.  Hijacks blog posts from my tumblr, with some light code formatting.

Feel free to fork.

Quick Start
-----------

1. Clone the repo or download a zip file.
2. Edit the `config.js` in the root directory.
3. Edit the tumblr url in the `index.html` in the root directory.

Preview
-------

Check out my example page at [here](http://jaforbes.github.io/canyon?example)

config.js
---------

Fairly self explanatory.

```javascript
config = {
	heading: 'Example',//the heading
	tumblr: 'canyongames', //your tumblr url
	twitter: 'james_a_forbes',//your twitter name
	profile: 'img/profile.jpeg',//url for a nice pic of you
	
	//A couple of short sentences that describe you
	description: [
		'Programmer and musician.',
		'I write; code, music and stories.',
		'I live in Melbourne.',
	],
	
	//Extra links (other than the twitter,tumblr) ...whatever you want.
	
	otherHTML: [
		'Check out some of my <a href="http://canyon.itch.io/">games.</a>'
	],
	css: { 
			backgroundColor: '#AABBDD',//
			color: 'white',
	}
}
```
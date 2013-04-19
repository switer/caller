var skins = {
	/*black*/
	"black" : {
		key : {
			backgroundColor: '#383838',
			margin : '3px',
			fontFamily: 'asia',
			border: '1px solid rgba(255,255,255,0.3)',
			// background: '-webkit-radial-gradient(#4F4F4F, black)',
			color:'#CCC',
			fontSize : '45px',
			height : '70px'
		},
		input : {
			color :'white'
		},
		keyboardBackground : 'black',
		globalBackground : 'black'
	},
	/*pureblack*/
	"pureblack" : {
		key : {
			backgroundColor: 'rgba(56,56,56,0.8)',
			margin : '3px',
			fontFamily: 'asia',
			// border: '1px solid rgba(255,255,255,0.3)',
			// background: '-webkit-radial-gradient(#4F4F4F, black)',
			color:'white',
			fontSize : '45px',
			height : '70px'
		},
		input : {
			color :'white'
		},
		keyboardBackground : 'black',
		globalBackground : 'black'
	},
	"white" : {	
		key : {
			/*white*/
			margin: '2px',
			fontFamily: 'cursive',
			backgroundColor: '#F8F8F8',
			boxShadow: '0px 2px 2px black, inset 2px -2px 6px #BBD1DF',
			textShadow: '0px -1px 1px white',
			color:'black',
			fontSize : '49px',
			borderRadius: '4px'
		},
		input : {
			color :'black'
		},
		keyboardBackground : 'white',
		globalBackground : 'white'
		
	},
	"blue" : {
		key : {
			/*blue*/
			margin: '2px',
			fontFamily: 'cursive',
			backgroundColor: "#D4E5EE",
			boxShadow: "0px 2px 2px black, inset 2px -2px 6px #BBD4E3",
			textShadow: "0px 1px 1px black",
			color: "#696969",
			fontSize : "44px",
			borderRadius: "4px"
		},
		input : {
			color :'black'
		},
		keyboardBackground : 'black',
		globalBackground : 'black'
	},
	"sogou" : {
		key : {
			/*blue*/
			margin: '1px',
			backgroundColor: "#D4E5EE",
			border : '1px solid black',
			color: "black",
			fontSize : "44px",
			borderRadius: "3px"
		},
		input : {
			color :'black'
		},
		keyboardBackground : 'white',
		globalBackground : 'purewhite'
	},
	"galaxyS3" : {
		key : {
			/*blue*/
			margin: '1px',
			backgroundColor: "#253A4C",
			boxShadow: "inset 1px 1px 1px #4C6679,inset 0px -1px 1px #293F52",
			border : '1px solid black',
			color: "white",
			fontSize : "44px",
			borderRadius: "0px"
		},
		input : {
			color :'white'
		},
		keyboardBackground : 'black',
		globalBackground : 'black'
	},
	"purewhite" : {
		key : {
			/*blue*/
			margin: '3px',
			backgroundColor: "white",
			border : '1px solid black',
			color: "black",
			fontSize : "44px",
			borderRadius: "6px"
		},
		input : {
			color :'black'
		},
		keyboardBackground : 'grey',
		globalBackground : 'grey'
	}
};
var skinbackground = 
{
	globalBackground : {
		/*black*/
		black : {
			backgroundColor: 'black'
		},
		white : {
			backgroundColor: '#515151'
		},
		blue : {
			backgroundColor: '#515151'
		},
		grey : {
			backgroundColor: '#CCC'
		}
	},
	keyboardBackground : {
		/*black*/
		black : {
			backgroundColor: 'black',
		},
		white : {
			backgroundColor: '#515151'
		},
		blue : {
			backgroundColor: '#515151'
		},
		purewhite : {
			backgroundColor: '#F8F8F8',
			borderTopLeftRadius: '30px',
			borderTopRightRadius: '30px',
			boxShadow: '0px 0px 15px black,inset 10px 10px 30px #CCC,inset 20px 20px 100px white'
		},
		grey : {
			// width : '40%',
			backgroundColor: '#EEE',
			borderRadius : '20px',
			border: '1px solid black',
			paddingBottom : '10px'
			// position : 'relative',
			// margin : 'auto'
		}
	}
}
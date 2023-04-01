// The Conqueror Virtual Challenges Medal Checklist
// https://codepen.io/Ricardo373/pen/LYjdPLX
// https://codepen.io/Ricardo373

// import $ from "https://cdn.skypack.dev/jquery@3.6.0";
// import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.1.3";

var medals = [
	{
	    "id": "ANKR",
		"title": "Angkor Wat",
		"country": "Cambodia",
		"distance": {
			"km": 32.2,
			"mi": 20
		},
		"image": "https://i.imgur.com/Udmr6M5.jpg",
		"event": "0"
	},
	{
	    "id": "TENC",
		"title": "The English Channel",
		"country": "U.K. & France",
		"distance": {
			"km": 33,
			"mi": 21
		},
		"image": "https://i.imgur.com/exVyXHk.jpg",
		"event": "0"
	},
	{
	    "id": "INCA",
		"title": "Inca Trail",
		"country": "Peru",
		"distance": {
			"km": 42,
			"mi": 26
		},
		"image": "https://i.imgur.com/cDOQCnC.jpg",
		"event": "0"
	},
	{
	    "id": "MTOA",
		"title": "Marathon to Athens",
		"country": "Greece",
		"distance": {
			"km": 42,
			"mi": 26
		},
		"image": "https://i.imgur.com/O7ich4n.jpg",
		"event": "0"
	},
  {
	    "id": "BRWL",
		"title": "Berlin Wall",
		"country": "Germany",
		"distance": {
			"km": 48,
			"mi": 30
		},
		"image": "https://i.imgur.com/03FM5Xq.jpg",
		"event": "0"
	},
	{
	    "id": "AMAL",
		"title": "Amalfi Coast",
		"country": "Italy",
		"distance": {
			"km": 56,
			"mi": 35
		},
		"image": "https://i.imgur.com/a9BCljV.jpg",
		"event": "0"
	},
  {
	    "id": "EAST",
		"title": "Easter Island",
		"country": "Chile",
		"distance": {
			"km": 61,
			"mi": 38
		},
		"image": "https://i.imgur.com/UzEwP9i.jpg",
		"event": "0"
	},
	{
	    "id": "EVER",
		"title": "Mount Everest",
		"country": "Nepal",
		"distance": {
			"km": 64,
			"mi": 40
		},
		"image": "https://i.imgur.com/wQrC6A1.jpg",
		"event": "0"
	},
	{
	    "id": "PETR",
		"title": "Trek to Pètra",
		"country": "Jordan",
		"distance": {
			"km": 65,
			"mi": 40
		},
		"image": "https://i.imgur.com/hnxZGHJ.jpg",
		"event": "0"
	},
	{
	    "id": "FLOW",
		"title": "Flower Route",
		"country": "The Netherlands",
		"distance": {
			"km": 66,
			"mi": 41
		},
		"image": "https://i.imgur.com/ertdu1w.jpg",
		"event": "0"
	},
	{
	    "id": "FUJI",
		"title": "Mount Fuji",
		"country": "Japan",
		"distance": {
			"km": 74,
			"mi": 46
		},
		"image": "https://i.imgur.com/w2HREyy.jpg",
		"event": "0"
	},
	{
	    "id": "GIZA",
		"title": "Giza Pyramids",
		"country": "Egypt",
		"distance": {
			"km": 75,
			"mi": 46
		},
		"image": "https://i.imgur.com/PU8tl0Y.jpg",
		"event": "0"
	},
    {
	  "id": "KRNP2",
		"title": "Kruger National Park",
		"country": "South Africa & Eswatini",
		"distance": {
			"km": 80.5,
			"mi": 50
		},
		"image": "https://i.imgur.com/IcCG89H.png",
		"event": "0"
	},
  {
	  "id": "TODP",
		"title": "Torres del Paine",
		"country": "Chile",
		"distance": {
			"km": 87,
			"mi": 54
		},
		"image": "https://i.imgur.com/uQ8S6A9.png",
		"event": "0"
	},
  {
	    "id": "KOKO",
		"title": "Kokoda Trail",
		"country": "Papua New Guinea",
		"distance": {
			"km": 91,
			"mi": 56
		},
		"image": "https://i.imgur.com/bGdRgwQ.jpg",
		"event": "0"
	},
	{
	    "id": "KILI",
		"title": "Mount Kilimanjaro",
		"country": "Tanzania",
		"distance": {
			"km": 97,
			"mi": 60
		},
		"image": "https://i.imgur.com/1hL1G2D.jpg",
		"event": "0"
	},
	{
	    "id": "HANA",
		"title": "Road to Hana",
		"country": "U.S.A.",
		"distance": {
			"km": 103.6,
			"mi": 64.4
		},
		"image": "https://i.imgur.com/D2B6atl.jpg",
		"event": "0"
	},
  {
	  "id": "NIAG",
		"title": "Niagara Falls",
		"country": "U.S.A.",
		"distance": {
			"km": 113,
			"mi": 70
		},
		"image": "https://i.imgur.com/dKUVa8a.png",
		"event": "0"
	},
  {
	    "id": "YSPR",
		"title": "Yellowstone Park",
		"country": "U.S.A.",
		"distance": {
			"km": 120,
			"mi": 75
		},
		"image": " https://i.imgur.com/AoFQ21c.jpg",
		"event": "0"
	},
	{
	    "id": "HAWA",
		"title": "Hadrian's Wall",
		"country": "U.K.",
		"distance": {
			"km": 145,
			"mi": 90
		},
		"image": "https://i.imgur.com/cV015bQ.jpg",
		"event": "0"
	},
	{
	    "id": "BTOB",
		"title": "Brighton to Brompton",
		"country": "U.K.",
		"distance": {
			"km": 149,
			"mi": 93
		},
		"image": "https://i.imgur.com/a8j2jlB.png",
		"event": "1",
		"discontinued": 1
	},
  {
	    "id": "ESRS",
		"title": "Estrada Real - Short",
		"country": "Brazil",
		"distance": {
			"km": 153,
			"mi": 95
		},
		"image": "https://i.imgur.com/3kmzUws.png",
		"event": "0"
	},
  {
	    "id": "COTS",
		"title": "Cotswold Way",
		"country": "U.K.",
		"distance": {
			"km": 157,
			"mi": 97
		},
		"image": "https://i.imgur.com/PkkqJtN.png",
		"event": "0"
	},
	{
	    "id": "CDAZ",
		"title": "Côte d'Azur",
		"country": "France",
		"distance": {
			"km": 161,
			"mi": 100
		},
		"image": "https://i.imgur.com/GG7IoKw.jpg",
		"event": "0"
	},
	{
	    "id": "ROFK",
		"title": "Ring of Kerry",
		"country": "Ireland",
		"distance": {
			"km": 200,
			"mi": 124
		},
		"image": "https://i.imgur.com/BeoDE5V.jpg",
		"event": "0"
	},
  {
	    "id": "FLKE",
		"title": "Florida Keys",
		"country": "U.S.A.",
		"distance": {
			"km": 201,
			"mi": 125
		},
		"image": "https://i.imgur.com/6gzoLtl.png",
		"event": "0"
	},
	{
	    "id": "GROR",
		"title": "Great Ocean Road",
		"country": "Australia",
		"distance": {
			"km": 240,
			"mi": 149
		},

		"image": "https://i.imgur.com/xttZeRx.jpg",
		"event": "0"
	},
  {
	    "id": "GWLS",
		"title": "Great Wall of China - Short",
		"country": "China",
		"distance": {
			"km": 259,
			"mi": 161
		},

		"image": "https://i.imgur.com/C1m2VL5.jpg",
		"event": "0"
	},
	{
	    "id": "ATOO",
		"title": "Alps to Ocean",
		"country": "New Zealand",
		"distance": {
			"km": 290,
			"mi": 180
		},
		"image": "https://i.imgur.com/rgB1tRU.jpg",
		"event": "0"
	},
	{
	    "id": "CABT",
		"title": "Cabot Trail",
		"country": "Canada",
		"distance": {
			"km": 297,
			"mi": 185
		},
		"image": "https://i.imgur.com/51TSBYR.jpg",
		"event": "0"
	},
  {
	    "id": "TRAN",
		"title": "Transylvania",
		"country": "Romania",
		"distance": {
			"km": 372,
			"mi": 231
		},
		"image": "https://i.imgur.com/4YP4ZBs.png",
		"event": "0"
	},
	{
	    "id": "KRNP",
		"title": "Kruger National Park",
		"country": "South Africa & Eswatini",
		"distance": {
			"km": 412,
			"mi": 268
		},
		"image": "https://i.imgur.com/IcCG89H.png",
		"event": "0",
		"discontinued": 1
	},
	{
	    "id": "ROMA",
		"title": "Romantic Road",
		"country": "Germany",
		"distance": {
			"km": 431,
			"mi": 268
		},
		"image": "https://i.imgur.com/hCMo89u.jpg",
		"event": "0"
	},
	{
	    "id": "GRCA",
		"title": "Grand Canyon",
		"country": "U.S.A.",
		"distance": {
			"km": 451,
			"mi": 280
		},
		"image": "https://i.imgur.com/RVRWz4m.jpg",
		"event": "0"
	},
	{
	    "id": "STFW",
		"title": "St. Francis Way",
		"country": "Italy",
		"distance": {
			"km": 503,
			"mi": 312
		},
		"image": "https://i.imgur.com/56EmPhS.jpg",
		"event": "0"
	},
	{
	    "id": "NAKA",
		"title": "Nakasendo Trail",
		"country": "Japan",
		"distance": {
			"km": 552,
			"mi": 343
		},
		"image": "https://i.imgur.com/tnIrblJ.jpg",
		"event": "0"
	},
	{
	    "id": "GTIN",
		"title": "Golden Triangle",
		"country": "India",
		"distance": {
			"km": 766,
			"mi": 476
		},
		"image": "https://i.imgur.com/t30aC5T.jpg",
		"event": "0"
	},
	{
	    "id": "CDES",
		"title": "Camino de Santiago",
		"country": "Spain",
		"distance": {
			"km": 772,
			"mi": 480
		},
		"image": "https://i.imgur.com/GZNeUc1.jpg",
		"event": "0"
	},
	{
	    "id": "NC5H",
		"title": "North Coast 500",
		"country": "U.K.",
		"distance": {
			"km": 806,
			"mi": 500
		},
		"image": "https://i.imgur.com/BJjz3FM.jpg",
		"event": "0"
	},
	{
	    "id": "RING",
		"title": "Ring Road",
		"country": "Iceland",
		"distance": {
			"km": 1332,
			"mi": 828
		},
		"image": "https://i.imgur.com/VzalQYl.jpg",
		"event": "0"
	},
  {
	    "id": "ESRL",
		"title": "Estrada Real - Long",
		"country": "Brazil",
		"distance": {
			"km": 1698,
			"mi": 1049
		},
		"image": "https://i.imgur.com/3kmzUws.png",
		"event": "0"
	},
	{
	    "id": "LEJG",
		"title": "Lands End to John O'Groats",
		"country": "U.K.",
		"distance": {
			"km": 1743,
			"mi": 1083
		},
		"image": "https://i.imgur.com/G6lTIQV.jpg",
		"event": "0"
	},
	{
	    "id": "APPA",
		"title": "Appalachian Trial",
		"country": "U.S.A.",
		"distance": {
			"km": 3167,
			"mi": 1968
		},
		"image": "https://i.imgur.com/DyitgsK.jpg",
		"event": "0"
	},
  {
	    "id": "GWLL",
		"title": "Great Wall of China - Long",
		"country": "China",
		"distance": {
			"km": 3513,
			"mi": 2183
		},
		"image": "https://i.imgur.com/C1m2VL5.jpg",
		"event": "0"
	},
	{
	    "id": "RT66",
		"title": "Route 66",
		"country": "U.S.A.",
		"distance": {
			"km": 3669,
			"mi": 2280
		},
		"image": "https://i.imgur.com/04lGtFa.jpg",
		"event": "0"
	},
	{
	    "id": "PACT",
		"title": "Pacific Crest Trail",
		"country": "U.S.A.",
		"distance": {
			"km": 4000,
			"mi": 2485
		},
		"image": "https://i.imgur.com/5Yehyh0.jpg",
		"event": "0"
	},
	{
	    "id": "2020",
		"title": "Yearly challenge 2020",
		"country": "Personal",
		"distance": {
			"km": "?",
			"mi": "?"
		},
		"image": "https://i.imgur.com/HKYKJ97.png",
		"event": "0",
		"discontinued": 1
	},
	{
	    "id": "2021",
		"title": "Yearly challenge 2021",
		"country": "Personal",
		"distance": {
			"km": "?",
			"mi": "?"
		},
		"image": "https://i.imgur.com/bZCszff.png",
		"event": "0",
		"discontinued": 1
	},
	{
	    "id": "2022",
		"title": "Yearly challenge 2022",
		"country": "Personal",
		"distance": {
			"km": "?",
			"mi": "?"
		},
		"image": "https://i.imgur.com/HN9gFth.jpg",
		"event": "0"
	},
	{
	    "id": "LOTR1",
		"title": "The Shire",
		"country": "Middle Earth",
		"distance": {
			"km": "233",
			"mi": "145"
		},
		"image": "https://i.imgur.com/uudXtq7.png",
		"event": "2a"
	},
	{
	    "id": "LOTR2",
		"title": "The Fellowship",
		"country": "Middle Earth",
		"distance": {
			"km": "157/1094",
			"mi": "98/680"
		},
		"image": "https://i.imgur.com/Qsdehix.png",
		"event": "2b"
	},
	{
	    "id": "LOTR3",
		"title": "Mines of Moria",
		"country": "Middle Earth",
		"distance": {
			"km": "64",
			"mi": "40"
		},
		"image": "https://i.imgur.com/VHZ6xUB.png",
		"event": "2c"
	},
	{
	    "id": "LOTR4",
		"title": "The Eye of Sauron",
		"country": "Middle Earth",
		"distance": {
			"km": "153/1075",
			"mi": "95/668"
		},
		"image": "https://i.imgur.com/GQrBim5.png",
		"event": "2d"
	},
	{
	    "id": "LOTR5",
		"title": "Mordor",
		"country": "Middle Earth",
		"distance": {
			"km": "454",
			"mi": "282"
		},
		"image": "https://i.imgur.com/8ycpxzA.png",
		"event": "2e"
	}
];

medals.sort(sortByDistance);
medals.sort(sortByEvent);

var c = $('#medal-canvas')[0];
var ctx = c.getContext('2d');

if(localStorage.getItem('hide_dc') === null){
    localStorage.setItem('hide_dc', '0');
}

function toImageData(url, callback) {
	var xhr = new XMLHttpRequest();
	
	xhr.onload = function() {
		var reader = new FileReader();
		
		reader.onloadend = function() {
			callback(reader.result);
		}
		
		reader.readAsDataURL(xhr.response);
	};
	
	xhr.open('GET', url);
	xhr.responseType = 'blob';
	xhr.send();
}

function loadImage(index){
	var dc = medals[index].hasOwnProperty('discontinued') && medals[index].discontinued == 1 ? 1 : 0;
        
	toImageData(medals[index].image, function(img_data) {
		$('.medals').append('<div class="card col-sm-6 col-md-3" data-dc="' + dc + '"><img id="' + medals[index].id + '" class="medal-image unselected card-img-top" src="' + img_data + '" alt="' + medals[index].title + '"><div class="card-body"><h5 class="card-title">' + medals[index].title + '</h5><p class="card-text">' + medals[index].country + '</p><p class="card-text">' + medals[index].distance.km + ' km / ' + medals[index].distance.mi + ' mi</p></div></div>');
	
		if(localStorage.getItem(medals[index].id + '-status') === null){
			localStorage.setItem(medals[index].id + '-status', '0');
		}
		
		$('#' + medals[index].id).attr('data-status', localStorage.getItem(medals[index].id + '-status'));
		
		updateMedalDisplay(medals[index].id);
		
		if((index  + 1) < medals.length){
			loadImage((index + 1));
		}else{
			updateDiscontinuedDisplay();
		}
	});
}

$(document).ready(function() {
    loadImage(0);
});

$(document).on('click', '.hide-dc', function(){
    toggleDiscontinued();
})

$(document).on('click', '.medal-image', function(e){
	var status = parseInt($(this).attr('data-status'));
	status = status < 3 ? status + 1 : 0;
	
	localStorage.setItem($(this).attr('id') + '-status', status);
	$(this).attr('data-status', status);
	
    updateMedalDisplay($(this).attr('id'));
	
    updateDiscontinuedDisplay();
})

$(document).on('click', '.image-renderer', function(){
    canvas();
});

$(document).on('click', '.return', function(){
    $('.export').hide();
    $('.return').hide();
  
    $('.checklist').show();
    $('.image-renderer').show();
});

function toggleDiscontinued(){
    if(localStorage.getItem('hide_dc') === '0'){
        localStorage.setItem('hide_dc', '1');
    }else{
        localStorage.setItem('hide_dc', '0');
    }
    
    updateDiscontinuedDisplay();
}

function updateDiscontinuedDisplay(){
    if(localStorage.getItem('hide_dc') === '1'){
        $('[data-dc="1"]').has('.unselected').hide();
        $('[name="toggle-dc"]').prop('checked', true);
    }else{
        $('[data-dc="1"]').has('.unselected').show();
        $('[name="toggle-dc"]').prop('checked', false);
    }
}

function updateMedalDisplay(id){
	if(localStorage.getItem(id + '-status') === '0'){
		$('#' + id).addClass('unselected');
		$('#' + id).removeClass('bought');
		$('#' + id).removeClass('inprogress');
		$('#' + id).removeClass('conquered');
	}else if(localStorage.getItem(id + '-status') === '1'){
		$('#' + id).removeClass('unselected');
		$('#' + id).addClass('bought');
		$('#' + id).removeClass('inprogress');
		$('#' + id).removeClass('conquered');
	}else if(localStorage.getItem(id + '-status') === '2'){
		$('#' + id).removeClass('unselected');
		$('#' + id).removeClass('bought');
		$('#' + id).addClass('inprogress');
		$('#' + id).removeClass('conquered');
	}else if(localStorage.getItem(id + '-status') === '3'){
		$('#' + id).removeClass('unselected');
		$('#' + id).removeClass('bought');
		$('#' + id).removeClass('inprogress');
		$('#' + id).addClass('conquered');
	}
}

function sortByDistance(a, b){
    var distance_a = a.distance.km;
    var distance_b = b.distance.km; 
    var title_a = a.title;
    var title_b = b.title;
    
    return ((distance_a < distance_b) ? -1 : ((distance_a > distance_b) ? 1 : ((title_a < title_b) ? -1 : ((title_a > title_b) ? 1 : 0))));
}

function sortByEvent(a, b){
	var event_a = a.event;
    var event_b = b.event; 

    return event_a < event_b ? -1 : 1;
}

var open_count = 0;

function canvas(){
    open_count++;
    var visible_medals = [];
    
    $.each(medals, function(index, value) {
        if(localStorage.getItem('hide_dc') === '1'){
            if(value.discontinued != 1){
               visible_medals.push(value);
            }else{
                if(!$('#' + value.id).hasClass('unselected')){
                    visible_medals.push(value);
                }
            }
        }else{
            visible_medals.push(value);
        }
    });

    var width = 140;
    var height = 77;
    
    var max_col = 3;
    var max_row = Math.ceil(visible_medals.length / (max_col + 1));
    
    var current_col = 0;
    var current_row = 0;
    
    ctx.canvas.height = max_row * height;
	
    $.each(visible_medals, function(index, value) {
        var img = $('#' + value.id)[0];
        img.crossOrigin = "Anonymous";
		
		if(localStorage.getItem(value.id + '-status') == '0'){
			ctx.globalAlpha = 0.3;
            ctx.filter = 'grayscale(1)';
		}else if(localStorage.getItem(value.id + '-status') == '1'){
			ctx.globalAlpha = 0.9;
            ctx.filter = 'grayscale(1)';
		}else if(localStorage.getItem(value.id + '-status') == '2'){
			ctx.globalAlpha = 0.9;
            ctx.filter = 'grayscale(0.7)';
		}else{
			ctx.globalAlpha = 1;
            ctx.filter = 'grayscale(0)';
		}

        ctx.drawImage(img, current_col * width, current_row * height, width, height);
        
		if(localStorage.getItem(value.id + '-status') == '1'){
			ctx.beginPath(); 
			ctx.strokeStyle = '#f00';
			ctx.lineWidth = 10;  
			ctx.strokeRect(current_col * width + ctx.lineWidth / 2, current_row * height + ctx.lineWidth / 2, width - ctx.lineWidth, height - ctx.lineWidth);
			ctx.font = "bolder 16px Arial" ;
			ctx.fillStyle = "white";
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 1.2;

			var metrics = ctx.measureText("BOUGHT");
			var mwidth = metrics.width;
			var mheight = 16;

			var hpad = (width - mwidth) / 2;
			var vpad = (height - mheight);

			ctx.fillText("BOUGHT", current_col * width + hpad, current_row * height + vpad);
			ctx.strokeText("BOUGHT", current_col * width + hpad, current_row * height + vpad);
        }else if(localStorage.getItem(value.id + '-status') == '2'){
			ctx.beginPath(); 
			ctx.strokeStyle = '#f00';
			ctx.lineWidth = 7;  
			ctx.strokeRect(current_col * width + ctx.lineWidth / 2, current_row * height + ctx.lineWidth / 2, width - ctx.lineWidth, height - ctx.lineWidth);
			ctx.font = "bolder 16px Arial" ;
			ctx.fillStyle = "white";
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 1.2;

			var metrics = ctx.measureText("IN PROGRESS");
			var mwidth = metrics.width;
			var mheight = 16;

			var hpad = (width - mwidth) / 2;
			var vpad = (height - mheight);

			ctx.fillText("IN PROGRESS", current_col * width + hpad, current_row * height + vpad);
			ctx.strokeText("IN PROGRESS", current_col * width + hpad, current_row * height + vpad);
        }
        
        if(current_col < max_col){
            current_col++;
        }else{
            current_col = 0;
            current_row++;
        }
    });
	

    
    if(open_count == 1){
        setTimeout(function(){ canvas(); }, 2000);
    }
    
    var exported_image = c.toDataURL("image/png");
    
    $('.checklist').hide();
    $('.image-renderer').hide();
    
    $('.export .image-container').html('<img src="' + exported_image + '"/>');
    
    $('.export').show();
    $('.return').show();
}
function Address(data){
	var self = this;
	self.id = ko.observable();
	self.address1 = ko.observable();
	self.address2 = ko.observable();
	self.city = ko.observable();
	self.state = ko.observable();
	self.zip = ko.observable();
	
	if(data){
		self.id(data.id);
		self.address1(data.address1);
		self.address2(data.address2);
		self.city(data.city);
		self.state(data.state);		
		self.zip(data.zip);
	}
}

function HoleResult(data){
	var self = this;
	self.id = ko.observable();
	self.number = ko.observable();
	self.strokes = ko.observable();
	self.putts = ko.observable();
	self.fir = ko.observable();
	self.gir = ko.observable();
	
	self.load = function(data){
		if(data){
			self.id(data.id);
			self.number(data.number);
			self.strokes(data.strokes);
			self.putts(data.putts);
			self.fir(data.fir);
			self.gir(data.gir);
		}
	}
	self.load(data);
}

function Hole(data){
	var self = this;
	self.id = ko.observable();
	self.number = ko.observable();
	self.par = ko.observable();
	self.yardage = ko.observable();
	self.handicap = ko.observable();
	
	self.load = function(data){
		if(data){
			self.id(data.id);
			self.number(data.number);
			self.par(data.par);
			self.yardage(data.yardage);
			self.handicap(data.handicap);		
		}
	}
	self.load(data);
	
	self.label = ko.computed(function(){		
		return (self.yardage() != null ? self.yardage() : '') + "\n" + (self.handicap() != null ? self.handicap() : '') + "\n" + (self.par() != null ? self.par() : '')
	});
}

function Tee(data){
	var self = this;
	self.id = ko.observable();
	self.name = ko.observable();
	self.rating = ko.observable();
	self.slope = ko.observable();
	self.holes = ko.observableArray([]);
	
	self.load = function(data){
		if(data){
			self.id(data.id);
			self.name(data.name);
			self.rating(data.rating);
			self.slope(data.slope);
			
			var holeArray = $.map(data.holes, function(item){ return new Hole(item) });
			self.holes(holeArray);		
		}
	}
	self.load(data);

	self.badge = ko.computed(function(){		
		return self.name() != null ? self.name().substring(0,1) : "(tee)";
	});

	self.fullLabel = ko.computed(function(){		
		return self.name() + " (" + self.rating() + "/" + self.slope() + ")";
	});
	
	self.label = ko.computed(function(){		
		return self.name() != null && self.name().length > 0 ? self.name() + "\n" + self.rating() + "\n" + self.slope() : "(tee)";
	});
	
	self.editTee = ko.observable(false);
	self.selectTee = function(){
		self.editTee(true);
	}
	
	self.cancelTee = function(){
		$.getJSON(router.getTee({id: self.id}), function(tee){
			self.load(tee);
			self.editTee(!self.editTee());
		});		
	}
	
	self.saveTee = function(){
		$.post(router.saveTee({tee: ko.toJSON(self), courseId: course.id()}), function(data){
			self.editTee(!self.editTee());
		});		
	}
	
	self.parOut = ko.computed(function(){
		var front = 0;
		for(var i = 0; i < 9; i++){
			if(self.holes()[i] && self.holes()[i].par()){
				front += parseInt(self.holes()[i].par());				
			}
		}
		return front;
	});

	self.parIn = ko.computed(function(){
		var back = 0;
		for(var i = 9; i < 18; i++){
			if(self.holes()[i] && self.holes()[i].par()){
				back += parseInt(self.holes()[i].par());	
			}
		}
		return back;
	});
	
	self.parTotal = ko.computed(function(){
		return self.parOut() + self.parIn();
	});
	
	self.yardageOut = ko.computed(function(){
		var front = 0;
		for(var i = 0; i < 9; i++){
			if(self.holes()[i] && self.holes()[i].yardage()){
				front += parseInt(self.holes()[i].yardage());				
			}
		}
		return front;
	});

	self.yardageIn = ko.computed(function(){
		var back = 0;
		for(var i = 9; i < 18; i++){
			if(self.holes()[i] && self.holes()[i].yardage()){
				back += parseInt(self.holes()[i].yardage());	
			}
		}
		return back;
	});
	
	self.yardageTotal = ko.computed(function(){
		return self.yardageOut() + self.yardageIn();
	});

}

function Golfer(data){
	var self = this;
	self.id = ko.observable();
	self.name = ko.observable();
	self.followed = ko.observable(false);
	
	self.label = ko.computed(function(){		
		return self.name() != null ? self.name() : "(golfer)";
	});
	
	if(data){
		self.id(data.id);
		self.name(data.name);
		self.followed(data.followed);
	}
	
	self.follow = function(){
		$.post(router.followGolfer({id: self.id()}), function(){
			self.followed(true);
		});		
	}
	
	self.unfollow = function(){
		$.post(router.unfollowGolfer({id: self.id()}), function(){
			self.followed(false);
		});		
	}
}

function golferResult(ul, item){
	var body = "";
	var label = '&nbsp;&nbsp;&nbsp;<span>' + item.label + '</span></a>';
	if(item.id > 0){
		body += '<a style="height:60px" class="ui-corner-all" tabindex="-1"><img style="float: left;" src="/golfers/icon?size=50&id=' + item.id + '"/>' + label;
	}else{
		body += '<a style="height:60px" class="ui-corner-all" tabindex="-1" ><img src="/public/images/blank.gif" height="50" width="50"/>' + label;
	}
	return $( '<li style="height:60px; margin-bottom:10px;">' ).append(body).data("item.autocomplete", item ).appendTo( ul );
}

function Score(data) {
	var self = this;
	
	self.id = ko.observable(data.id);
	self.tee = ko.observable(new Tee(data.tee));
	self.editTee = ko.observable(false);
	self.selectTee = function(){
		self.editTee(true);
		$('.teeId').change(function() {
			if($(this).find(":selected").val()){
				self.tee().id($(this).find(":selected").val());
				self.tee().name($(this).find(":selected").text());
				
				$.post(router.updateTee({id: self.id(), teeId: self.tee().id()}), function(data){
					self.editTee(false);
				});					
			}
		});
	}
	
	self.golfer = ko.observable(new Golfer(data.golfer));
	self.editGolfer = ko.observable(false);
	self.selectGolfer = function(){
		self.editGolfer(true);
		$('.golferId').each(function() {
			$(this).autocomplete({
				source: router.searchGolfer({scoreId: self.id()}),
				minLength: 1,
				select: function(event, ui) {
					if(ui.item.id > 0){
						self.golfer().id(ui.item.id);
						self.golfer().name(ui.item.value);
						
						$.post(router.updateGolfer({id: self.id(), golferId: self.golfer().id()}), function(data){
							self.editGolfer(false);
							$(".golferId").val('');
						});		
					}
				}
			}).data( "autocomplete" )._renderItem = function(ul,item){
				return golferResult(ul, item);
			};
			$('.golferId').focus();
		});
	}
	
	self.results = ko.observableArray($.map(data.results, function(item){ return new HoleResult(item) }));
	self.editResults = ko.observable(false);
	
	self.scoreOut = ko.computed(function(){
		var front = 0;
		for(var i = 0; i < 9; i++){
			if(self.results()[i].strokes()){
				front += parseInt(self.results()[i].strokes());				
			}
		}
		return front;
	});

	self.scoreIn = ko.computed(function(){
		var back = 0;
		for(var i = 9; i < 18; i++){
			if(self.results()[i].strokes()){
				back += parseInt(self.results()[i].strokes());	
			}
		}
		return back;
	});
	
	self.scoreTotal = ko.computed(function(){
		return self.scoreOut() + self.scoreIn();
	});

	self.editScore = function(){
		self.editResults(!self.editResults());
		$('.score').first().focus();
	}

	self.cancelScore = function(){
		$.getJSON(router.getScore({id: self.id}), function(score){
			if(score){
				self.results(score.results);
			}
			self.editResults(!self.editResults());
		});		
	}
	
	self.saveScore = function(){
		$.post(router.saveScore({score: ko.toJSON(this)}), function(data){
			self.editResults(!self.editResults());
		});		
	}
}

function Course(id){
	var self = this;
	self.id = ko.observable();
	self.name = ko.observable();
	self.nickname = ko.observable();
	self.address = ko.observable();
	self.followed = ko.observable(false);
	self.tees = ko.observableArray([]);
	
	self.firstTee = ko.computed(function(){
		if(self.tees() && self.tees().length > 0){
			return self.tees()[0];
		}
		return null;
	});
	
	self.label = ko.computed(function(){		
		return self.nickname() != null && self.nickname().length > 0 ? self.nickname() : "(course)";
	});
	
	self.load = function(data){
		if(data){
			self.id(data.id);
			self.name(data.name);
			self.nickname(data.nickname);
			self.followed(data.followed);
			self.address(new Address(data.address));
			self.tees($.map(data.tees, function(item){	return new Tee(item.tee) }));
		}
	}
	
	self.refresh = function(id){
		if(id){
			$.getJSON(router.getCourse({id: id}), function(course){
				self.load(course);
			});			
		}
	}
	self.refresh(id);
	
	self.addTee = function(){
		$.post(router.addTee({id: self.id()}), function(data){
			var newTee = new Tee($.parseJSON(data));
			self.tees.push(newTee);	
		});
	}
	
	self.follow = function(){
		$.post(router.followCourse({id: self.id()}), function(){
			self.followed(true);
		});		
	}
	
	self.unfollow = function(){
		$.post(router.unfollowCourse({id: self.id()}), function(){
			self.followed(false);
		});		
	}
}

function courseResult(ul, item){
	var body = "";
	var label = '&nbsp;&nbsp;&nbsp;<span>' + item.label + '</span></a>';
	if(item.id > 0){
		body += '<a style="height:60px" class="ui-corner-all" tabindex="-1"><img style="float: left;" src="/courses/icon?size=50&id=' + item.id + '"/>' + label;
	}else{
		body += '<a style="height:60px" class="ui-corner-all" tabindex="-1" ><img src="/public/images/blank.gif" height="50" width="50"/>' + label;
	}
	return $( '<li style="height:60px; margin-bottom:10px;">' ).append(body).data("item.autocomplete", item ).appendTo( ul );
}

function Round(id) {
	var self = this;
	self.id = ko.observable();
	self.datePlayed = ko.observable();
	self.course = ko.observable(new Course());
	self.scores = ko.observableArray([]);
	self.comments = ko.observableArray([]);
	
	self.editCourse = ko.observable(false);
	self.selectCourse = function(){
		self.editCourse(true);
		$(".courseId").autocomplete({
			source: router.searchCourse,
			minLength: 1,
			select: function(event, ui) {
				if(ui.item.id > 0){
					self.course(new Course(ui.item.id));
					$.post(router.saveRound({id: self.id(), courseId: ui.item.id, datePlayed: self.datePlayed()}), function(data){
						self.editCourse(false);
						$(".courseId").val('');
					});
				}
			}
		}).data( "autocomplete" )._renderItem = function(ul,item){
			return courseResult(ul, item);
		};
		$(".courseId").focus();
	}
	self.cancelCourse = function(){
		self.editCourse(false);
	}
	
	if(id){
		$.getJSON(router.getRound({id: id}), function(round){
			self.id(round.id);
			self.datePlayed(round.datePlayed);
			self.course().load(round.course);
			self.scores($.map(round.scores, function(item) { return new Score(item) }));
		});	
	}
	
	self.addScore = function(){
		$.post(router.addScore({id: self.id()}), function(data){
			var newScore = new Score($.parseJSON(data));
			self.scores.push(newScore);	
		});
	}
	
	self.deleteScore = function(score){
		$.post(router.deleteScore({id: score.id()}), function(data){
			self.scores.remove(score)
		});
	}
	
	self.loadComments = function(){
		$.getJSON(router.getCommentsByRound({id: id}), function(comments){
			self.comments($.map(comments, function(item){	return new Comment(item)	}));	
		});
	}
}

function CourseList(){
	var self = this;
	self.name = ko.observable("");
	self.state = ko.observable("");
	self.courses = ko.observableArray([]);
	
	self.initButtons = function(){
		$('.follow').live('mouseover mouseout', function(event) {
		    if (event.type == 'mouseover') {
		    	$(this).removeClass("btn-golf");
		    	$(this).addClass("btn-danger");
		    	$(this).html("Unfollow");
		    } else {
		    	$(this).removeClass("btn-danger");
		    	$(this).addClass("btn-golf");
		    	$(this).html("Following");
		    }
		});
	}
	
	self.searchCourses = function(){
		$.getJSON(router.filterCourse({name: self.name(), state: self.state()}), function(courses){
			self.courses($.map(courses, function(item){ 
				var course = new Course();	
				course.load(item);
				return course 
			}));
			
			self.initButtons();
		});		
	}

	self.name.subscribe(function(value) {
		self.searchCourses();
	});
	
	self.state.subscribe(function(value) {
		self.searchCourses();
    });
	
	self.findByGolfer = function(){
		$.getJSON(router.getCourseByUser(), function(courses){
			self.courses($.map(courses, function(item){ 
				var course = new Course();	
				course.load(item);
				return course 
			}));
			
			self.initButtons();
		});	
	}
}

function GolferList(){
	var self = this
	self.name = ko.observable("");
	self.golfers = ko.observableArray([]);
	
	self.initButtons = function(){
		$('.follow').live('mouseover mouseout', function(event) {
		    if (event.type == 'mouseover') {
		    	$(this).removeClass("btn-golf");
		    	$(this).addClass("btn-danger");
		    	$(this).html("Unfollow");
		    } else {
		    	$(this).removeClass("btn-danger");
		    	$(this).addClass("btn-golf");
		    	$(this).html("Following");
		    }
		});
	}
	
	self.searchGolfers = function(){
		$.getJSON(router.filterGolfer({name: self.name()}), function(golfers){
			self.golfers($.map(golfers, function(item){		return new Golfer(item)		}));			
			self.initButtons();
		});		
	}

	self.name.subscribe(function(value) {
		self.searchGolfers();
	});
	
	self.findByGolfer = function(){
		$.getJSON(router.getGolferByUser(), function(golfers){
			self.golfers($.map(golfers, function(item){		return new Golfer(item)		}));	
			self.initButtons();
		});	
	}
}

function Schedule(){
	var self = this;
	self.course = ko.observable(new Course());
	self.golferList = ko.observable(new GolferList());
	$(".courseId").autocomplete({
		source: router.searchCourse,
		minLength: 1,
		select: function(event, ui) {
			if(ui.item.id > 0){
				self.course(new Course(ui.item.id));
			}
		}
	}).data( "autocomplete" )._renderItem = function(ul,item){
		return courseResult(ul, item);
	};
	$(".courseId").focus();
}

function Comment(data){
	var self = this;
	self.id = ko.observable();
	self.body = ko.observable();
	self.author = ko.observable();
	self.comments = ko.observableArray([]);
	
	if(data){
		self.id(data.id);
		self.body(data.body);
		self.author(data.author);
		if(data.comments){
			self.comments($.map(data.comments, function(item){		return new Comment(item)		}));			
		}
	}
	
	self.authorImg = function(){
		return '/golfers/icon?size=60&id=' + self.author().id;
	}
}

function CommentList(){
	var self = this;
}
describe('my-module', function() {

	describe('capitalize', function() {
		
		it('should make the first character uppercase', function() {
			var result = capitalize('table');
			expect(result).toEqual('Table');
		});

	});


	describe('capitalizeSentence', function() {
	
		// if we use black-box approach (we don't care about implementation details):
		it('should capitalize all words - black-box test', function() {
			// we just test the behavior, we don't care if we use external dependencies or not
			var s = "Happy new year!";
			var result = capitalizeSentence(s);
			expect(result).toEqual('Happy New Year!');
		});

		// if we use white-box approach (test in strict isolation):
		it('should capitalize all words', function() {
			// we have to mock capitalize() method
			spyOn(window, 'capitalize').and.callFake(function(x) {
				return "!"+x;
			});

			var s = "Happy new year!";
			var result = capitalizeSentence(s);
			expect(result).toEqual('!Happy !new !year!');
		});

	});
});

xdescribe('CalendarUnitTests for Directive', function() {

    var element,scope, e;

    /**
     * Load Calendar Templates
     */
    beforeEach(module('bossy-templates'));

    /**
     * using module() makes the calendar module
     * available for testing
     */
    beforeEach(angular.mock.module('bossy.calendar'));

    beforeEach(inject(function($rootScope,$compile){

        scope=$rootScope.$new();
        scope.directiveConfig={};
        element = angular.element(
            '<div>' +
            '<bossy-calendar config="directiveConfig">' +
            '</bossy-calendar>'+
            '</div>');

        e = $compile(element)(scope);
        scope.$digest();

    }));

    describe('Bossy Calender Directive',function(){

        it('bossyCalendar template should not be null',function(){

            var a = element.html();

            console.log(scope);
            console.log('##', a);
            console.log('###', element.html());

        });
    });
});
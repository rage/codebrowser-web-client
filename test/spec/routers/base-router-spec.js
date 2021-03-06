describe('Base router', function () {

    beforeEach(function () {

        Backbone.history.stop();
    });

    it('catches an non-existent URL', function () {

        spyOn(codebrowser.router.BaseRouter.prototype, 'notFound');

        var router = new codebrowser.router.BaseRouter();

        Backbone.history.start();
        router.navigate('#/this/url/is/not/legit', true);

        expect(codebrowser.router.BaseRouter.prototype.notFound).toHaveBeenCalled();
    });

    it('pushes error view to ViewController', function () {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.BaseRouter();

        Backbone.history.start();
        router.navigate('#/this/url/is/not/valid', true);

        expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
    });
});

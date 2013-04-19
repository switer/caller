/**
*
**/
S.app.Caller.module.CallerController = Framework.Controller.extend(function () {

	return {
		initialize : function () {
			this.model = S.app.Caller.instance.model;
		},
		onCall : function (number) {
			this.model.request('callNumber', number);
		}
	};
});
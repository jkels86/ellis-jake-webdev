(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService() {
        var widgets = [
            {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"
            },
            {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E"
            },
            {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        var api = {
            createWidget: createWidget,
            findWidgetByPageId: findWidgetByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };

        return api;

        function createWidget(pageId, widget) {
            var widgetId = parseInt(Math.floor(Math.random() * 999));
            widget._id = widgetId;
            widget.pageId = pageId;
            widgets.push(widget);
        }

        function findWidgetByPageId(pageId) {
            var result = [];
            for (var w in widgets) {
                if (widgets[w].pageId === pageId) {
                    result.push(widgets[w]);
                }
            }
            return result;
        }

        function findWidgetById(widgetId) {
            for (var w in widgets) {
                if (widgets[w]._Id === widgetId) {
                    return widgets[w];
                }
            }
            return null;
        }

        function updateWidget(widgetId, widget) {
            for (var w in widgets) {
                if (widgets[w]._id === pageId) {
                    widgets[w].widgetType = widget.widgetType;
                    widgets[w].pageId = widget.pageId;
                    break;
                }
            }
        }

        function deleteWidget(widgetId) {
            for (var w in widgets) {
                if (widgets[w]._id === widgetId) {
                    widgets.splice(w, 1);
                    break;
                }
            }
        }
    }
})();
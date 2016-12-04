(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        return api;

        function createPage(websiteId, page) {
            var pageId = parseInt(Math.floor(Math.random() * 999));
            page._id = pageId;
            page.websiteId = websiteId;
            pages.push(page);
        }

        function findPageByWebsiteId(websiteId) {
            var result = [];
            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    result.push(pages[p]);
                }
            }
            return result;
        }

        function findPageById(pageId) {
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    return pages[p];
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    pages[p].name = page.name;
                    pages[p].description = page.description;
                    break;
                }
            }
        }

        function deletePage(pageId) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages.splice(p, 1);
                    break;
                }
            }
        }
    }
})();
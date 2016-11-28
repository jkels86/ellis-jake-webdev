(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);


    function WebsiteService () {
        var websites = [
                { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
                { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
                { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
                { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
                { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
                { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
            ];

        var api = {
            createWebsite: createWebsite,
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;

        function createWebsite(userId, website) {
            var websiteId = parseInt(Math.floor(Math.random() * 999));
            website._id = websiteId;
            website.developerId = userId;
            websites.push(website);
        }

        function findWebsiteById(wid) {
            for(var w in websites) {
                if(websites[w]._id === wid) {
                    return websites[w];
                }
            }
            return null;
        }

        function findWebsitesForUser(uid) {
            var result = [];
            for(var w in websites) {
                if(websites[w].uid === uid) {
                    result.push(websites[w]);
                }
            }
            return result;
        }

        function updateWebsite(websiteId, website) {
            for(var w in websites) {
                if(websites[w]._id === websiteId) {
                    websites[w].name = website.name;
                    websites[w].description = website.description;
                    break;
                }
            }
        }

        function deleteWebsite(websiteId) {
            for(var w in websites) {
                if(websites[w]._id === websiteId) {
                    websites.splice(w,1);
                    break;
                }
            }
        }
    }
})();
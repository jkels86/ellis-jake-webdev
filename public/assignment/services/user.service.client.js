(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
                {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
            ];

        var api = {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            deleteUser: deleteUser
        };
        return api;

        function createUser(user) {
            var userId = parseInt(Math.floor(Math.random() * 999));
            if(findUserByUsername(user.username)) {
                console.log("Please choose another username");
            } else {
                user._id = userId;
                users.push(user);
                console.log("User successfully added")
                return user;
            }
        }

        function findUserById(userId) {
            for (var u in users) {
                var currentuser = users[u];
                if (currentuser._id === userId) {
                    currentuser = user;
                }
            }
        }

        function findUserByCredentials(username, password) {
            for(var u in users) {
                user = users[u];
                if(    user.username === username
                    && user.password === password) {
                    return user;
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for(var u in users) {
                user = user[u];
                if(user.username === username) {
                    return user;
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            for(var u in users) {
                var renameuser = users[u];
                if(renameuser._id === userId) {
                    renameuser.username = user.username;
                    renameuser.email = user.email;
                    renameuser.first = user.first;
                    renameuser.last = user.last;

                    return renameuser;
                }
            }
            return null;
        }

        function deleteUser(userId) {
            for(var u in users) {
                var user = users[u];
                if(user._id === userId) {
                    console.log("User" + user.username + "has been deleted");
                    users.splice(u,1);
                }
            }
        }
    }
})();
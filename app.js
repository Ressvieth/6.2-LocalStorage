(function () {
    var div = document.querySelector("#alert");
    var shower = document.querySelector("#shower");
    var btnload = document.querySelector("#load");
            
    function Database(storage) {
        this.storage = storage;
    }

    Database.prototype = {
                
        save: function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
                
        get: function (key) {
            return JSON.parse(localStorage.getItem(key));
        }
    };

    if (typeof Database !== undefined) {
        div.innerHTML = "LocalStorage is supported. Check console [f12]";
        div.classList.add("alert-success");

        var DB1 = new Database("DB1");
        var janek = {
            firstName: "Jan",
            lastName: "Kowalski",
            age: 32
        };

        DB1.save("janek", janek);
        
        btnload.onclick = function () {
            console.log(DB1.get("janek"));
            shower.innerHTML = JSON.stringify(DB1.get("janek"));
        }
    } else {
        div.innerHTML = "Your browser does not support Web Storage!";
        div.classList.add("alert-danger");
    }
})();
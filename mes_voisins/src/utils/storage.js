const storage = {


    set: function (key, value) {

        const json = JSON.stringify(value);


        window.localStorage.setItem(key, json);
    },



    get: function (key) {
        const json = window.localStorage.getItem(key);
        return JSON.parse(json);
    },


    unset: function (key) {
        window.localStorage.removeItem(key);
    },


};

export default storage;
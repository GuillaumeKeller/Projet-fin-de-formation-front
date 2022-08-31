import axios from "axios";
import storage from "@/utils/storage";

const userService = {
    
    base_url: "http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json",

    
    async login(p_login, p_password) {
        const response = await axios.post(this.base_url + "/jwt-auth/v1/token", {
            username: p_login,
            password: p_password,
        }).catch(function () {
            return {
                data: null
            };
        });
        return response.data;
    },


    async isConnected() {
        const userData = storage.get("userData");

        if (userData != null) {

            if (userData.token) {

                await axios.post(
                    this.base_url + "/jwt-auth/v1/token/validate",
                    null, {

                        headers: {
                            Authorization: "Bearer " + userData.token
                        }
                    }
                ).catch(function () {
                    return false;
                });


                return true;
            }
        }

        return false;
    }
};
  
  export default userService;
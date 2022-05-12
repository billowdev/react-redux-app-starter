import axios from "axios";
import config from "../../config"

const BASE_URL: string | undefined = config.ENDPOINT;

export default {
	getArticles: async () => {
		const resp = await axios.get(BASE_URL + "/api.json")
		return resp.data
	}
}
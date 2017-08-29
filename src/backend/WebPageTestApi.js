import axios from 'axios'

const 	BASE_URL = 'http://www.webpagetest.org/runtest.php'
const WEB_PAGE_TEST_API_KEY = "fda12478fe5745c88ae8abdd152ce8f1";

class WebPageTestApi {

	static getFinalResult(url) {
		return this.getJsonUrl(url)
		.then(response => this.getJsonResults(response))
		.catch(err => console.log("Error making http calls: " + err))
	}

	static getJsonUrl(url) {
		return axios.get(BASE_URL,{
			params: {
				runs: 1,
				f: 'json',
				fvonly: 1,
				video: 1,
				url: 'https://www.wikipedia.org/',
				k: WEB_PAGE_TEST_API_KEY
			}
		})
		.then(response => response.data.data.jsonUrl
		
		/*{
			let jsonUrl = response.data.data.jsonUrl
			console.log("json url pulled from response: "+ jsonUrl)
		}*/
		).catch(err => {
			console.log("Error during json url fetch: " + err)
		})

	}

	 static getJsonResults(url) {
		return axios.get(url)
		.then(response => response.data)
		.catch(err => console.log("Error during json data fetch: " + err))
	}
	
}

export default WebPageTestApi;
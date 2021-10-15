import axios from 'axios';

const IPL_REST_API_URL = "http://localhost:8080/team";

class MatchService{
    getTeamName(teamName){
        return axios.get(IPL_REST_API_URL+ '/' + teamName)
    }
    getMatches(teamName,year){
        return axios.get(IPL_REST_API_URL+ '/' + teamName + '/matches?year=' + year)
    }
    getAllIPLTeams(){
        return axios.get(IPL_REST_API_URL)
    }
}
export default new MatchService();
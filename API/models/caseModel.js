const db = require ('./conn');

class caseModel {
    constructor(id, test_date, testing_site, state) {
        this.is = id,
        this.test_date = test_date,
        this.testing_site = testing_site,
        this.state = state
    }

    static async getCases() {
        try {
            const response = await db.any(`SELECT * FROM corona_cases;`);
            console.log(response);
            return response;
        } catch(error) {
            console.error('ERROR GETTING ALL CASES: ', error);
            return error;
        }
    }

    static async addCase(test_date, testing_site, state) {
        try{
            const response = await db.one(
                `INSERT INTO corona_cases (test_date, testing_site, state) VALUES ($1, $2, $3) RETURNING id`, 
                [test_date, testing_site, state]
            );
            console.log('RESPONSE FROM USER: ', response);
            return response;
        } catch(error) {
            console.log('THERE WAS AN ERROR WITH POST TO DB: ', error);
            return error;
        }
    }
}

module.exports = caseModel;
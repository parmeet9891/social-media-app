
export default class UserService {
    constructor() {
        this.user = [];
        this.init();

    }

    init() {
        try {
            let items = localStorage.getItem('user');
            if(items !== null) {
                this.user = JSON.parse(items);
            }
            else {
                this.user = [
                    {
                        'id': '1',
                        'email': 'admin@example.com',
                        'password': 'admin',
                        'fullName': 'ADMIN'
                    }
                ];
            }
        }
        catch(error) {
            console.log('Error Operating Local Storage');
        }
    }

    handleEmptyChecks() {
        return Object.keys(this.user).length;
    }

    addUser(userObj) {
        let checkUserExist = this.user.filter(el => el.email === userObj.email);
        if(checkUserExist.length > 0)
            return 0;
        else {
            this.user.push(userObj);
            try {
                localStorage.setItem('user', JSON.stringify(this.user));
                return true;
            }
            catch(error) {
                return false;
            }
        }
    }

    checkUser(email,password) {
       let userExistence = this.user.filter(el => el.email === email && el.password === password);
        if(userExistence.length > 0)
            return userExistence[0];
        else
            return 0;

    }

    getUser(id) {
        console.log(this.user);
        let findUser = this.user.filter(el => el.id === id);
        if(findUser.length > 0)
            return findUser;
        else
            return 0;
    }

}


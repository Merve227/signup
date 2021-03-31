import UserData from '../model/UserModel';
import {generateAuthToken} from '../helpers/Token';
import bcrypt from 'bcrypt'


const users = [];
class UserController {
    static signup = (req, res) => {
        const id = users.length + 1;
        let {
            firstName,
            lastName,
            email,
            password,
            gender,
            role,
            department,
            address
        } = req.body;
        password=bcrypt.hashSync(password,10)
        const isEmailExist = users.find(user => user.email === email);
        if (isEmailExist) {
            return res.status(409).json({ statu: 409, error: "email is duplicated" })
        }
        const user = new UserData(id, firstName, lastName, email, password, gender, role, department, address);
        users.push(user);
        const data = users.find(user => user.email === email);
        if (!data) {
            return res.status(417).json({
                status: 417,
                message: "signup failed",
            })
        }
        else{
          let{password,...dataWithOutPassword}=data
        
        return res.status(201).json({
            status: 201,
            message: "Account created succesfully",
            data
        })
    }
  }

static signin = (req, res) => {
    let {
      email,
      password,
    } = req.body;
    const user = new UserData(email, password);
    users.push(user);
    const data = users.find((User)=>User.email === email);
    const is_userExist = users.find((user) => user.email === email);
    if (is_userExist && bcrypt.compareSync(password,is_userExist.password)) {
      const token = generateAuthToken({id:data.id,
      email:data.email,
    role:data.role});
      return res.status(201).json({
        status: 201,
        message: 'user exist',
        token: token,
        data
      })
    }
    return res.status(404).json({
      status: 404,
      message: 'Not Find'
    })
}

}

export default {UserController, users};

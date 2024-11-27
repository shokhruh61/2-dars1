
import Address from '../Adress';

import Car from '../Car';

import '../User/index.css';

function User(props) {

    const  {firstName, lastName, phone, email, address, image, cars} = props.user;
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h3>{firstName} {lastName}</h3>

            <div>
                <span>{email}</span>
                <span>{phone}</span>
            </div>

            <Address address = {address}></Address>
            {
                cars.length > 0 && cars.map((car, index) =>{
                    return(
                        <Car car = {car}></Car>
                    );
                })
            }
        </div>
    );
}

export default User;
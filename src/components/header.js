import * as React from 'react';
import './header.css';
import headimg from '../images/img1.png';
const Header = () => {
    return (
        <div>
            <div class="row">
                <div class="col-sm-6 item">
                    <h1 style={{ fontSize: '65px', fontWeight: 'bold' }}>Blogger</h1>
                    <h5 style={{ fontSize: '20px',fontWeight:'normal' }}>Welcome to the home of tech writers, where experts from the tech field share their insights on modern technology. Blogify will help you stay up-to-date with the latest developments in the tech field so you can always stay ahead of the curve.

</h5>
                </div>
                <div class="col-sm-6 item" >
                    <img src={headimg} class="img-fluid" alt="..." />
                </div>
            </div>
        </div>
    );
}
export default Header;
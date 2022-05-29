import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (

     <div id='footer'>
            <div id="bontop"><a href="#apple">Back on top</a></div>
        <div id="footmain">
            <table>
                <tr>
                    <th>Get us know</th>
                    <th>Connect with us</th>
                    <th>Let Us Help You</th>
                </tr>
                <tr>
                    <td>About Us</td>
                    <td>FaceBook</td>
                    <td>Covid-19 & Amazon</td>
                </tr>
                <tr>
                    <td>Carrier</td>
                    <td>Twitter</td>
                    <td>Your Account</td>
                </tr>
                <tr>
                    <td>press release</td>
                    <td>Instagram</td>
                    <td>Returns Centers</td>
                </tr>
                <tr>
                    <td>Amazon Cares</td>
                    <td>&nbsp;</td>
                    <td>100% Purchase Protection</td>
                </tr>
                <tr>
                    <td>Get a Smile</td>
                    <td>&nbsp;</td>
                    <td>Help</td>
                </tr>
            </table>
            <hr/>
            <img src="https://i.ibb.co/XkRZBSx/amazon.png" alt=""/>
            <button><i class="fa-solid fa-globe"></i> English </button>
            <br/>
            <p>
                <span>Australia</span>
                <span>Brazil</span>
                <span>Canada</span>
                <span>china</span>
                <span>France</span>
                <span>Germany</span>
                <span>India</span>
                <span>Italy</span>
                <span>Japan</span>
                <span>Mexico</span>
                <span>Netherlands</span>
                <span>Poland</span>
                <span>Singapore</span>
                <span>Spain</span>
                <span>Turkey</span>
                <span>United Arab Emirates</span>
                <span>United Kingdome</span>
                <span>Unites Status</span>
            </p>
        </div>
        </div>
    )
}

export default Footer;
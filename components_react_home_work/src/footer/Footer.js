import React from 'react';
import './Footer.css';



class Footer extends React.Component {



    render() {
        const date = new Date().toLocaleDateString();
        return ( <
                div className = 'footer' >

                <
                p > Где - то в Минске < /p>  {
                date
            }



            <
            /div>



    );
}
}

export default Footer;
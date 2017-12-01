import React, { Component } from 'react';
import DanasApp from './DanasApp.css';
;
class Danasapp extends Component {
    render() {
        return (
            <div className="Danasapp">
                WELCOME!

                <div className = "Main">
                </div>
                <div className = "Nav">

                </div>

                    <header>
                        <h1>BLOG SITE!!</h1>
                    </header>
                <div className = "flex-container">

                    <nav className="nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Old Blogs</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </nav>

                    <article className="article">
                        <h1>Blog 1</h1>
                        <p>Today is Veterans Day.  It is a special day to honor the fallen soldiers of our country.  Everyone should take a moment to think about the men and who have their lives to defend our country. </p>
                        <p>Additionally, buy a poppy to support our troops!</p>
                        <p><strong>November 11th, 2017</strong></p>

                        <h2> Blog 2</h2>
                        <p> Today is my friend Christi's bday.  In honour of that we have decided to go to Tao for dinner with a few of our other friends.  Tao is always a great time and the food is delicious.  My favorite thing to eat is the miso cod. It's insanely good!</p>
                        <p><strong> November 21st, 2017</strong></p>

                        <h3> Blog 3</h3>
                        <p> Today is Thanksgiving!! I travelled all the way to florida to celebrate with friends. It was a b*tch of a drive though. I opted to rent a car and drive down so that I could take my dogs too.  I used to live in Florida so goin down there is like going to visit family.  We fried a turkey. YUM!</p>
                        <p><strong> November 23rd, 2017</strong></p>
                    </article>
                </div>
                    <footer>Copyright &copy; DanaCarlin Inc</footer>



            </div>
        );

    }
}

export default Danasapp;

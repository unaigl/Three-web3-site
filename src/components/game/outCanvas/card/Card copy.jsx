import React from 'react'

import './Card.css'

const card = () => {
    return (
        <section>
            <div className="container">
                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src="https://image.flaticon.com/icons/png/256/4213/4213732.png" />
                        </div>
                        <div className="contentBx">
                            <h3>Lion<br /><span>Happy Birthday</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo ipsum ratione. Delectus molestiae voluptates ab qui error eveniet facilis adipisci harum quo officia sit natus, repellendus minima voluptatibus et?</a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default card
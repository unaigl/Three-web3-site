import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiBuffer } from "react-icons/si";

import '../../App.css';


const OutCanvasFooter = (props) => {


  return (
    <>
      <div className="md-12 ">
        <div className="footer-center">
          <div className="responsive-contact-footer" style={{ gridTemplateColumns: `repeat(${6}, 1fr)` }}>
            <h2 className="footer-display">
              <a
                href="https://github.com/unaigl"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </h2>

            <h2 className="footer-display">
              <a
                href="https://twitter.com/Unai_naz"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </h2>
            <h2 className="footer-display">
              <a
                href="https://www.linkedin.com/in/unaiiglesias"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </h2>
            <h2 className="footer-display">
              <a
                target="_blank"
                href="https://www.instagram.com/unai_igl/"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </h2>
            <h2 className="footer-display">
              <a
                target="_blank"
                href="https://dev.to/uigla"
                rel="noreferrer"
              >
                <SiBuffer />
              </a>
            </h2>
            {/* FOOTER SCROLL TO TOP */}
            <div style={{ height: '80px' }}>
              <div className='row'>
                <div className='col-md-12 text-center'>
                  <button
                    onClick={() => { window.scrollTo(0, 0) }}
                    type='button'
                    className='btn btn-outline-dark btn-md'
                    style={{ display: 'inline-flex', margin: '20px' }}>
                    ⇑
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default OutCanvasFooter
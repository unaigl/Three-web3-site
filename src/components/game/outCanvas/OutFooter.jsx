import PropTypes from 'prop-types';
import { useEffect } from 'react';
import TransactionCoinbaseWallet from "../../web3Connectors/transactionCards/TransactionCoinbaseWallet";
import TransactionMetaMask from "../../web3Connectors/transactionCards/TransactionMetaMask";
import TransactionWalletConnect from "../../web3Connectors/transactionCards/TransactionWalletConnect";


import '../../../App.css';
import ContactFooter from "./ContactFooter";



const OutCanvasFooter = (props) => {

    useEffect(() => {
        props.setcounter(0);
    }, []);

    return (
        <>
            <div className="bg-footer-color">
                <div className="container">
                    <div className="footer-bg">
                        <div className="footer-card-margin">
                            <div className='footer-card-style'>
                                <div className="col-md-12 text-center card-title-margin">
                                    {props.tokens ? <h5 >Now you can claim tokens</h5> : <h5 >Play to be able to claim tokens</h5>}
                                    <hr />
                                    <p>Currently available in two chains </p>
                                    <small>0x41e6913Ce749018910e45980996dAC1F99012c96
                                        <br />
                                        <a href={'https://mumbai.polygonscan.com/address/0x41e6913Ce749018910e45980996dAC1F99012c96'}
                                            target='_blank' rel='noopener noreferrer'>{`  check it out`}</a>
                                    </small>
                                    <p>Mumbai (Polygon testnet)</p>
                                    {/* <small>0x6Ec4c5Ce6cC67729d89785f715e103e5981C9780
                                        <br />
                                        <a href={'https://testnet.bscscan.com/address/0x6Ec4c5Ce6cC67729d89785f715e103e5981C9780'}
                                            target='_blank' rel='noopener noreferrer'>{`  check it out`}</a>
                                    </small>
                                    <p>BSC testnet</p> */}
                                    <p>Claim or Burn ONE token for each transaction</p>
                                    <small>Select a wallet</small>
                                </div>
                                <hr />
                                <div className="col-md-12 text-center responsive-cards ">
                                    <TransactionMetaMask
                                        tokens={props.tokens}
                                        setbuttonOpenModal={props.setbuttonOpenModal}
                                        buttonOpenModal={props.buttonOpenModal}
                                    />
                                    <TransactionCoinbaseWallet
                                        tokens={props.tokens}
                                        setbuttonOpenModal={props.setbuttonOpenModal}
                                        buttonOpenModal={props.buttonOpenModal}
                                    />
                                    <TransactionWalletConnect
                                        tokens={props.tokens}
                                        setbuttonOpenModal={props.setbuttonOpenModal}
                                        buttonOpenModal={props.buttonOpenModal}
                                    />
                                </div>
                                <div className="col-md-12 text-center card-title-margin">
                                    <hr />
                                    <small >
                                        Check how has been built
                                        <a
                                            href='https://dev.to/uigla/setting-up-3d-website-using-threejs-fiber-react-web3-and-vite-as-bundler-f1f'
                                            target='_blank'
                                            rel='noopener noreferrer'>
                                            {`  here`}
                                        </a>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactFooter />
                </div>
            </div>
        </>
    )
}

OutCanvasFooter.propTypes = {
    arePlaying: PropTypes.object,
    hasWin: PropTypes.object,
    gameover: PropTypes.object,
    counter: PropTypes.number,
    move: PropTypes.object,
    setcounter: PropTypes.func,
    tokens: PropTypes.bool,
    setbuttonOpenModal: PropTypes.func,
    buttonOpenModal: PropTypes.bool,

}

export default OutCanvasFooter
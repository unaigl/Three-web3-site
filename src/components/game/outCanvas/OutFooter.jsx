import PropTypes from 'prop-types';
import { useEffect } from 'react'
import { useWeb3React } from "@web3-react/core";
import { getContract } from "../../web3Connectors/transactionCards/contract";
import TransactionMetaMask from "../../web3Connectors/transactionCards/TransactionMetaMask";
import TransactionCoinbaseWallet from "../../web3Connectors/transactionCards/TransactionCoinbaseWallet";
import TransactionWalletConnect from "../../web3Connectors/transactionCards/TransactionWalletConnect";

import { coinbaseWallet, hooks as coinbaseWalletHooks } from '../../web3Connectors/connectors/coinbaseWallet';
import { hooks as metaMaskHooks, metaMask } from '../../web3Connectors/connectors/metaMask';
import { hooks as networkHooks, network } from '../../web3Connectors/connectors/network';
import { hooks as walletConnectHooks, walletConnect } from '../../web3Connectors/connectors/walletConnect';

import '../../App.css';
import Card from './card/Card'
import ContactFooter from "./ContactFooter";



const OutCanvasFooter = (props) => {

    // Sin useEffect daba el siguiente Warning: Cannot update a component To locate the bad setState() call inside OutCanvasFooter
    useEffect(() => {
        props.setcounter(0);
        // console.log('web3reactContextweb3reactContext', web3reactContext.chainId)
    }, []);

    // TODO tendria que conseguir el library de react-web3-provider (que acutalmente no lo uso), se estan utilizando directamente hooks de los connectores 
    // que es library? me parece que es del tipo -> Web3Provider
    // Me ha permitido utilizar provider en lugar de library, para -> "provider.getSigner(account).connectUnchecked()" YES, ambos son un Web3Provider

    // Escribe en el contrato de la CHAIN en la que esta
    // TODO MIERCOLES, esta haciendo la transaccion con la 1era wallet que pilla, la que estara en el [0] en el array de wallets de ethers?
    // TODO Siemrpe sera la wallet 0 la que firme
    // hay que revisar

    // const cards = [
    //     ['/cardPhotos/metamask.jpg', <> <p>Coinbase Wallet! You can change chain using this web interface. </p>
    //         <b>Is posible also using Coinbase Wallet?</b></>],
    //     ['/cardPhotos/coinbase.jpg', <> <p>Coinbase Wallet! You can change chain using this web interface. </p>
    //         <b>Is posible also using Coinbase Wallet?</b></>],
    //     ['/cardPhotos/walletConnect.jpg', <><p>Wallet Connect! You can change chain using this web interface.</p>
    //         <b>TODO ...</b></>],
    // ]

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
                                    <p>You are able to claim in two chains </p>
                                    <small>0x41e6913Ce749018910e45980996dAC1F99012c96</small>
                                    <p>Mumbai</p>
                                    <small>0x6Ec4c5Ce6cC67729d89785f715e103e5981C9780</small>
                                    <p>BSC testnet</p>
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
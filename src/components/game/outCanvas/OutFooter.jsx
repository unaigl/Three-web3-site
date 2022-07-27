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
            <div className="my-container">
                <div className="game-prebox">
                    <div className='gameover-footer '>
                        {/* <div className="col-md-12 text-center some-margin ">
                            <h4>{!props.arePlaying.play ? 'Try ! One minute Game ' : 'Good luck'}</h4>
                        </div> */}
                        <div className="col-md-12 text-center some-margin">
                            {props.tokens ? <h4 >You can claim  token</h4> : <h4 >Play to be able to claim tokens</h4>}
                            <hr />
                            <p>Tokens available in the following chains:</p>
                            <p>Mumbai (polygon testnet): __ 0x41e6913Ce749018910e45980996dAC1F99012c96</p>
                            <p>BSC testnet: __ 0x41e6913Ce749018910e45980996dAC1F99012c96</p>
                        </div>
                        {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
                        <hr />
                        <div className="col-md-12 text-center  ">
                            {/* {cards && cards.map((card, i) => {
                                return (<Card
                                    key={i}
                                    buttonContent={'Claim Tokens'}
                                    buttonTwoContent={'Transfer Tokens'}
                                    tx={writeToContractUsingWeb3React}
                                    photo={card[0]}
                                    text={card[1]}
                                />)
                            })} */}
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
                    </div>
                </div>
            </div>

            {/* FOOTER SCROLL TO TOP */}
            <div className='bg-light' style={{ height: '100px' }}>
                {/* <div className='container '> */}
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <button
                            onClick={() => { window.scrollTo(0, 0) }}
                            type='button'
                            className='btn btn-outline-dark btn-lg'
                            style={{ display: 'inline-flex', margin: '20px' }}>
                            ⇑
                        </button>
                        {/* </div> */}
                    </div>
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
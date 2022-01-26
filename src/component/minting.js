import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../redux/blockchain/blockchainActions';
import { fetchData } from '../redux/data/dataActions';
import '../main.css';
const Minting = (props) => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(
    `Click 'MINT' to mint a Flappy Bird`
  );
  const secondsToRelease = 1633896000000 - new Date().getTime();
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log('Cost: ', totalCostWei);
    console.log('Gas limit: ', totalGasLimit);
    setFeedback(`Minting ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mintFlorence(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log(err);
        setFeedback('Sorry, something went wrong please try again later.');
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `<div>
          <span>Congratulations! You have successfully minted ticket</span>
          <br />
          <br />
          </div>`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch('/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <>
      {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
        <>
          <p>The sale has ended.</p>
          <p>You can still find {CONFIG.NFT_NAME} on</p>
          <br />
          <a target={'_blank'} href={CONFIG.MARKETPLACE_LINK}>
            {CONFIG.MARKETPLACE}
          </a>
        </>
      ) : (
        <>
          <p className='costClass'>
            1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{' '}
            {/* 1 Ticket costs {CONFIG.DISPLAY_COST} */}
            {CONFIG.NETWORK.SYMBOL}.
          </p>
          {/* <br /> */}
          {/* <div>
                  <span>View your collection at: </span>
                  <span>
                    <a
                      href="https://paintswap.finance/marketplace/collections/0xEffAc34E551b4868EBFc555e64b4c6329ea9Ac3b"
                      style="color: #fad841;"
                      target="_blank"
                    >
                      PaintSwap{' '}
                    </a>
                  </span>
                </div> */}
          {/* <div className="verified-link">
            <span>View verified collection at: </span>
            <a
              href="https://paintswap.finance/marketplace/collections/0xEffAc34E551b4868EBFc555e64b4c6329ea9Ac3b"
              // style="color: #fad841;"
              target="_blank"
              className="verified-link-color"
            >
              PaintSwap
            </a>
          </div> */}

          <div>
            {secondsToRelease < 0 && (
              <div>
                {blockchain.account === '' ||
                blockchain.smartContract === null ? (
                  <div className='connectButton'>
                    <p>Connect to the {CONFIG.NETWORK.NAME} network</p>

                    <button
                      className='ConnectBtn'
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}>
                      CONNECT
                    </button>
                    {blockchain.errorMsg !== '' ? (
                      <>
                        <br />
                        <p>{blockchain.errorMsg}</p>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <div className='abc'>
                    <div
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}>
                      <p dangerouslySetInnerHTML={{ __html: feedback }}></p>
                    </div>

                    <div className='counterBtn'>
                      <button
                        className='minusButtonSize'
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}>
                        -
                      </button>

                      <p className='NumbersField'>
                        <span>{mintAmount}</span>
                      </p>

                      <button
                        className='PlusButtonSize'
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}>
                        +
                      </button>
                    </div>

                    <button
                      id='mintaBtn'
                      className='mintBtn'
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}>
                      {claimingNft ? 'MINTING...' : 'MINT'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Minting;

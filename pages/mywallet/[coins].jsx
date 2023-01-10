import { useRouter } from "next/router";
import style from "../../styles/coins.module.css";
import Layout from "../../public/components/layout.pages";
import TransactionWallet from "../../public/transaction-wallet";
import Transaction from "../../public/components/transaction";
import AreaGraph from "../../public/components/areagraph";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";
import { MdContentCopy } from "react-icons/md";
import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import Crypto from "../../public/crypto";
const CoinPage = () => {
  const router = useRouter();
  const [singleCoin, setSingleCoin] = useState({});
  useEffect(() => {
    const Coin = router.query.coins;
    console.log(Coin);
    console.log(router.query.coins);
    if (Coin) {
      const data = Crypto.find(
        (element) => element.name.toLowerCase() === Coin
      );
      setSingleCoin(data);
    }
  }, [router.query.coins]);
  console.log(singleCoin);
  return (
    <Layout>
      <div className={style.coinbox}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "25%",
              marginRight: "5%",
            }}
          >
            <button className={style.backbtn}>
              <MdKeyboardArrowLeft className={style.angle} />
              Back
            </button>
            <button className={style.coinbtn}>
              Bitcoin
              <img src="/images/Shape (2).svg" />
              <FaAngleDown className={style.angle} />
            </button>
          </div>
          <span>
            {" "}
            <BiDotsVertical className={style.dot} />{" "}
          </span>
        </div>
        <div className={style.cardsContainer}>
          <div className={style.firstcard}>
            <div className={style.firstdiv}>
              <div className={style.content}>
                <span
                  className={style.contentSpan}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>Total balance</p>
                  <BiDotsVertical />{" "}
                </span>
                <span
                  className={style.contentSpan2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    marginTop: ".2rem",
                  }}
                >
                  <h2>{singleCoin.percent}</h2>
                  <h4>{singleCoin.coin}</h4>
                </span>
                <div className={style.contentBtns}>
                  <button className={style.send}>Send</button>
                  <button className={style.receive}>Receive</button>
                </div>
                <p className={style.para}>Your bitcoin address:</p>
                <div
                  style={{
                    background: "#FAF3F1",
                    borderRadius: "2px",
                    width: "100%",
                    height: "35px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                    padding: ".5rem",
                  }}
                >
                  <p className={style.para2}>{singleCoin.code}</p>
                  <MdContentCopy className={style.copy} />
                </div>
                <p className={style.para3}>
                  Hey Boss!, kindly confirm the wallet address you copied.{" "}
                </p>
              </div>
            </div>
            <div className={style.seconddiv}>
              <div className={style.transactions}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p className={style.paragraph}>Transactions</p>
                  <span
                    className={style.transactionSpan}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ color: "#A7A4A8" }}>ALL</p>
                    <p style={{ color: "#606166" }}>SEND</p>
                    <p style={{ color: "#606166" }}>RECENT</p>
                  </span>
                </div>
                <div className={style.transact}>
                  {TransactionWallet.map((element) => (
                    <Transaction element={element} />
                  ))}
                  <button>View more</button>
                </div>
              </div>
            </div>
          </div>
          <div className={style.secondcard}>
          <AreaGraph/>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CoinPage;

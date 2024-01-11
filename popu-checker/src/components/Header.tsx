import { FC, useState, useEffect } from "react";
import "../App.css";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // console.log("[Debug]", window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const scrollSize = 150; // スクロールの閾値
      setIsScrolled(window.scrollY > scrollSize);
    };

    // スクロールイベントを登録
    window.addEventListener("scroll", handleScroll);

    // コンポーネントのアンマウント時にイベントリスナーをクリーンアップ
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // isScrolledがtrueのときに"scroll"クラスを適用
  const headerClass = isScrolled ? "header scroll" : "header";

  return (
    <header id="header" className={headerClass}>
      <div className="checker-ttl">
        <svg
          className="checker-ico"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.7407 26.7407L26.7407 0L38 11.2593V38H38H11.2592L-1.14441e-05 26.7407L26.7407 26.7407H26.7407Z"
            fill="black"
          />
        </svg>
        <h1>人間チェッカー</h1>
      </div>
    </header>
  );
};

export default Header;

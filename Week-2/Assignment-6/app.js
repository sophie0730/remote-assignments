const interestItems = [
  {
    item: "行動",
    id: "1",
  },
  {
    item: "位置/地圖",
    id: "2",
  },
  {
    item: "物聯網(IoT)",
    id: "3",
  },
  {
    item: "設計",
    id: "4",
  },
  {
    item: "智慧型住宅生態系統",
    id: "5",
  },
  {
    item: "開放原始碼",
    id: "6",
  },
  {
    item: "搜尋",
    id: "7",
  },
  {
    item: "網路",
    id: "8",
  },
  {
    item: "廣告",
    id: "9",
  },
  {
    item: "AI與機器學習",
    id: "10",
  },
  {
    item: "Android",
    id: "11",
  },
  {
    item: "AR/VR",
    id: "12",
  },
  {
    item: "C",
    id: "13",
  },
  {
    item: "C#",
    id: "14",
  },
  {
    item: "ChromeOS",
    id: "15",
  },
  {
    item: "Firebase",
    id: "16",
  },
  {
    item: "Flutter",
    id: "17",
  },
  {
    item: "Google助理",
    id: "18",
  },
  {
    item: "Google Cloud",
    id: "19",
  },
];

const interestBlocks = [
  {
    classType: "ARTICLE",
    title: "設定 Android Studio",
    context:
      "安裝及設定 Android Studio，以便建立第一個專案，並在裝置或模擬器上執行。",
    bottom: "Mobile",
    id: "20",
  },
  {
    classType: "ARTICLE",
    title: "Code Samples",
    context:
      "All of the examples contained in the Maps JavaScript API documentation set are listed below for quick reference.",
    bottom: "Location/Maps",
    id: "21",
  },
  {
    classType: "MARKETING",
    title: "資料存取透明化控管機制",
    context:
      "資料存取透明化控管機制能提供近乎即時的記錄檔，詳實呈現 Google Cloud 管理員對於系統和資料的存取活動。",
    bottom: "Cloud",
    id: "22",
  },
  {
    classType: "MARKETING",
    title: "Cloud Translation",
    context:
      "Cloud Translation 可讓您根據內容需求，使用預先訓練或自訂的機器學習模型，在不同語言之間進行動態互譯。",
    bottom: "Cloud",
    id: "23",
  },
  {
    classType: "ARTICLE",
    title: "Subscribe with synchronous pull",
    context: "Uses synchronous pull to receive messages.",
    bottom: "C#",
    id: "24",
  },
  {
    classType: "ARTICLE",
    title: "Publish with batching settings",
    context:
      "Creates a publisher client with custom batching settings and uses it to publish some messages.",
    bottom: "C#",
    id: "25",
  },
  {
    classType: "ARTICLE",
    title: "Create a table",
    context: "Create a table with customer-managed encryption keys.",
    bottom: "Terraform",
    id: "26",
  },
];

const productItems = [
  {
    picture: "./img/android.png",
    name: "Android",
    text: "現代風工具可協助你打造大家在所有Android裝置上都會喜愛的體驗",
    id: "1",
  },
  {
    picture: "./img/cloud.png",
    name: "Google Cloud",
    text: "在更短時間內建構應用程式、制定更明智的業務決策，並讓各地方的人員交流聯繫。",
    id: "2",
  },
  {
    picture: "./img/tensorflow.png",
    name: "TensorFlow",
    text: "這個端對端平台可讓您輕鬆在任何環境中建構及部署機器學習模型。",
    id: "3",
  },
  {
    picture: "./img/chrome.png",
    name: "Google Chrome",
    text: "提供現代化工具和功能，協助您打造優質網路體驗。",
    id: "4",
  },
  {
    picture: "./img/play.png",
    name: "Google Play",
    text: "拓展業務、提升應用程式品質、與觀眾互動及賺取收益。",
    id: "5",
  },
  {
    picture: "./img/ads.png",
    name: "Google Ads",
    text: "透過 Google Ads，向合適的使用者宣傳您的網站、產品和應用程式。",
    id: "6",
  },
  {
    picture: "./img/kaggle.png",
    name: "Kaggle",
    text: "此平台可分享機器學習資料集、探索及建構模型，並參加競爭活動。",
    id: "7",
  },
  {
    picture: "./img/Angular.png",
    name: "Angular",
    text: "因應未來趨勢的網路開發架構。",
    id: "8",
  },
];

const followers = [
  {
    picture: "./img/youtube.png",
    name: "YouTube",
    text: "歡迎訂閱創意開發人員社群，學習 Google 技術的最新資訊。",
    id: "1",
  },
  {
    picture: "./img/instagram.png",
    name: "Instagram",
    text: "追蹤及探索開發人員資源、社群活動和啟發性故事。",
    id: "2",
  },
  {
    picture: "./img/linkedin.png",
    name: "LinkedIn",
    text: "加入創意開發人員社群，瞭解如何採用最新科技產品。",
    id: "3",
  },
  {
    picture: "./img/x.png",
    name: "X",
    text: "加入對話，探索最新的開發人員工具、資源、活動和公告事項。",
    id: "4",
  },
];

const slides = [
  {
    slideTag: "熱門新聞",
    slideTitle: "Google Play 遊戲電腦版支援跨平台遊戲",
    slideText:
      "透過 Play 遊戲服務第 2 版 (PGS)功能，在行動裝置和網站上提供順暢的遊戲體驗。",
    slideImg: "./img/slide1.png",
  },
  {
    slideTag: "熱門新聞",
    slideTitle: "MakerSuite 現已在 180 個國家/地區推出",
    slideText: "立即註冊使用 PaLM 2 語言模型進行 AI 技術原型設計。",
    slideImg: "./img/slide2.png",
  },
  {
    slideTag: "熱門新聞",
    slideTitle: "透過 Chrome 進行測試來加快運送速度",
    slideText: "避免使用 Chrome 最新的瀏覽器自動更新作業解決開發問題。",
    slideImg: "./img/slide3.png",
  },
];

function Header() {
  return (
    <header id="header">
      <section className="logo">
        <img src="./img/logo.png"></img>
        <div className="navbar">
          <div className="dropdown">
            <button className="product dropbtn">Product</button>
            <div className="dropdown-content">
              <a href="#">Android</a>
              <a href="#">ChromeOS</a>
              <a href="#">Cloud</a>
              <a href="#">Firebase</a>
              <a href="#">Flutter</a>
            </div>
          </div>
          <a href="#" id="solution">
            Solutions
          </a>
          <a href="#" id="event">
            Events
          </a>
          <div className="dropdown">
            <button className="more dropbtn" id="more">
              More
            </button>
            <div className="dropdown-content">
              <a href="#">Learn</a>
              <a href="#">Community</a>
              <a href="#">Developer Profile</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className="search">
            <input
              img="./img/magnifying.png"
              className="searchBar"
              placeholder="搜尋結果"
            ></input>
          </div>
          <div className="dropdown-language">
            <button className="language-btn">中文 - 繁體</button>
            <div className="language-content">
              <a href="#">English</a>
              <a href="#">Deutsch</a>
              <a href="#">中文 - 繁體</a>
              <a href="#">日本語</a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

function Msg() {
  return (
    <div className="msg">
      <div className="msgLeft">
        <h3 data-text="聰明智慧加速運送">
          聰明智慧
          <br />
          加速運送
        </h3>
        <p>使用開放式的整合式解決方案發揮創意並簡化工作流程。</p>
      </div>
      <div className="msgRight">
        <div className="video">
          <video autoPlay muted loop src="./build-smarter.mp4"></video>
          <div className="items">
            <div className="itemText">我建立的應用程式：</div>
            <button>
              <a href="#">行動裝置 &rarr;</a>
            </button>
            <button>
              <a href="#">網路 &rarr;</a>
            </button>
            <button>
              <a href="#">AI &rarr;</a>
            </button>
            <button>
              <a href="#">Cloud &rarr;</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const InterestClass = (props) => {
  return (
    <section className="interestClass">
      <div className="interestText">選取要篩選的興趣類別</div>
      <div className="smallBtns">
        {props.interestItems.map((interestItem) => (
          <button key={interestItem.id} className="smallBtn">
            {interestItem.item}
          </button>
        ))}
      </div>
    </section>
  );
};

function ProductTitle() {
  return (
    <div className="productTitle">
      <h3>精選產品</h3>
    </div>
  );
}

const Product = (props) => {
  return (
    <div className="products">
      {props.productItems.map((item) => (
        <div key={item.id} className="productItem">
          <img src={item.picture} alt={item.name}></img>
          <h4>{item.name}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

function ProductButton() {
  return (
    <div align="center">
      <button className="productButton">查看所有開發人員產品</button>
    </div>
  );
}

const SlideShow = (props) => {
  return (
    <div className="slideShow">
      {props.slides.map((slide) => (
        <div className="slideItem">
          <div className="slideItem-left">
            <p>{slide.slideTag}</p>
            <h3>{slide.slideTitle}</h3>
            <p>{slide.slideText}</p>
            <button>瞭解詳情</button>
          </div>
          <div className="slideItem-right">
            <img src={slide.slideImg}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

function AndroidFunction() {
  return (
    <div className="androidFunction">
      <div className="androidLeft">
        <img src="./img/androidFunction.png"></img>
      </div>
      <div className="androidRight">
        <p>ANDROID 新功能</p>
        <h3>Android Studio Giraffe 現已穩定</h3>
        <p>包括即時編輯、Compose 動畫預覽、全新的裝置探索工具等更新。</p>
        <button>立即下載</button>
      </div>
    </div>
  );
}

function Activity() {
  return (
    <div className="activity">
      <div className="event">
        <div className="eventLeft">
          <img src="./img/photo1.png" alt="photo1"></img>
        </div>
        <div className="eventRight">
          <img width="150vw" src="./img/activity1.png"></img>
          <h3>尋找活動</h3>
          <p>透過線上和現場開發人員活動增進知識</p>
          <button>查看事件</button>
        </div>
      </div>
      <div className="event">
        <div className="eventRightR">
          <img src="./img/photo2.png" alt="phote2"></img>
        </div>
        <div className="eventLeftR">
          <img width="100vw" src="./img/activity2.png"></img>
          <h3>提陞技術能力</h3>
          <p>掌握 Google 技術的最新資訊。磨練技巧並精進新技能。</p>
          <button>開始學習</button>
        </div>
      </div>
      <div className="event">
        <div className="eventLeft">
          <img src="./img/photo3.png" alt="photo3"></img>
        </div>
        <div className="eventRight">
          <img width="100vw" src="./img/activity3.png"></img>
          <h3>加入社群</h3>
          <p>無論您目前處於哪個開發階段，都能盡情探索各式各樣的網路。</p>
          <button>探索社群</button>
        </div>
      </div>
    </div>
  );
}

function FollowerTitle() {
  return (
    <div className="followerTitle">
      <h2>追蹤 Google Developers 開發人員</h2>
    </div>
  );
}
const Followers = (props) => {
  return (
    <div className="followers">
      {props.followers.map((follower) => (
        <div key={follower.id} className="follower">
          <img src={follower.picture} alt={follower.name}></img>
          <h4>{follower.name}</h4>
          <p>{follower.text}</p>
        </div>
      ))}
    </div>
  );
};

function Horizen() {
  return (
    <div className="horizen">
      <hr />
    </div>
  );
}
function List() {
  return (
    <div className="lists">
      <div className="list">
        <p>論壇</p>
        <ul>
          <li>
            <a href="#">網誌</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
        </ul>
      </div>
      <div className="list">
        <p>計劃</p>
        <ul>
          <li>
            <a href="#">Women Techmakers</a>
          </li>
          <li>
            <a href="#">Google Developer Groups</a>
          </li>
          <li>
            <a href="#">Google Developer Experts</a>
          </li>
          <li>
            <a href="#">Accelerators</a>
          </li>
          <li>
            <a href="#">Google Developer Student Clubs</a>
          </li>
        </ul>
      </div>
      <div className="list">
        <p>開發人員控制台</p>
        <ul>
          <li>
            <a href="#">Google API Console</a>
          </li>
          <li>
            <a href="#">Google Cloud Platform Console</a>
          </li>
          <li>
            <a href="#">Google Play 管理中心</a>
          </li>
          <li>
            <a href="#">Firebase Console</a>
          </li>
          <li>
            <a href="#">Actions on Google Console</a>
          </li>
          <li>
            <a href="#">Cast SDK Developer Console</a>
          </li>
          <li>
            <a href="#">Chrome Web Store Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="BottomBar">
      {/*<div className="BottomLogo">
        <img src="./img/logo.png"></img>
  </div>*/}
      <div className="ButtomList">
        <nav>
          <ul>
            <li>
              <img src="./img/logo.png"></img>
            </li>
            <li>
              <a href="#">Android</a>
            </li>
            <li>
              <a href="#">Chrome</a>
            </li>
            <li>
              <a href="#">Firebase</a>
            </li>
            <li>
              <a href="#">Google Cloud Platform</a>
            </li>
            <li>
              <a href="#">所有產品</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="privacy">
        <p>條款|隱私權</p>
      </div>
      <div className="newspaper">
        <p>訂閱 Google for Developers 電子報</p>
        <button>訂閱</button>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main>
      <Msg />
      {/*<InterestClass interestItems={interestItems} />*/}
      <ProductTitle />
      <Product productItems={productItems} />
      <ProductButton />
      {/*<SlideShow slides={slides} />*/}
      <AndroidFunction />
      <Activity />
      <FollowerTitle />
      <Followers followers={followers} />
      <Horizen />
      <List />
      <Horizen />
      <BottomBar />
      <Horizen />
    </main>
  );
}

const App = (props) => {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root") //container element where our code will be rendered by React
);

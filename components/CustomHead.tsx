import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <title>{"Malza's Home"}</title>
      <meta
        name="description"
        content="This is my introduction page && portfolio! yeah!"
      />
      <meta name="author" content="Malza" />

      {/* 오픈 그래프 */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Malza's Home" />
      <meta property="og:title" content="Malza's Home" />
      <meta
        property="og:description"
        content="저의 소개를 담은 홈페이지 입니다!😆"
      />
      <meta property="og:image" content="./imgs/md_imgs/md_myWebsite.png" />
      <meta
        property="og:url"
        content="https://malza0408.github.io/my-Website/"
      />

      {/* 트위터 카드 */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="Malza's Home" />
      <meta property="twitter:title" content="Malza's Home" />
      <meta
        property="twitter:description"
        content="저의 소개를 담은 홈페이지 입니다!😆"
      />
      <meta
        property="twitter:image"
        content="./imgs/md_imgs/md_myWebsite.png"
      />
      <meta
        property="twitter:url"
        content="https://malza0408.github.io/my-Website/"
      />
    </Head>
  );
};

export default CustomHead;

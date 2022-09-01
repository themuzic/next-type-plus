import { useState, useEffect } from "react";
import Seo from "components/Seo";
import dynamic from "next/dynamic";

export default function MovieHome() {
  const ManualSliderNoSSR = dynamic(() => import("components/ManualSlider"), {
    ssr: false,
  });

  return (
    <div className="container">
      <Seo title="TV" />
      <div className="contents_row">
        <h4>Popular</h4>
        <ManualSliderNoSSR dv="tv" type="popular" />
      </div>
      <div className="contents_row">
        <h4>Latest</h4>
        <ManualSliderNoSSR dv="tv" type="latest" />
      </div>
      <div className="contents_row">
        <h4>Top Rated</h4>
        <ManualSliderNoSSR dv="tv" type="vote" />
      </div>

      <style jsx global>{`
        .container {
          display: grid;
          padding: 20px 0;
        }
        .contents_row {
          overflow-x: visible;
          overflow-y: visible;
        }
        .contents_row h4 {
          text-align: left;
        }
        h4 {
          text-align: center;
          margin: 10px 0 -10px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}

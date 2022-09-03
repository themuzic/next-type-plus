import Seo from "components/Seo";
import dynamic from "next/dynamic";

export interface Content {
  id: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string | undefined;
  original_name: string | undefined;
  production_companies: Array<Company> | undefined;
}

export interface Movie {
  id: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string | undefined;
  original_name: string | undefined;
  title: string;
  release_date: string;
  runtime: string;
  overview: string;
  genres: Array<Genre>;
}
export interface Tv {
  id: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string | undefined;
  original_name: string | undefined;
  title: string;
  overview: string;
  genres: Array<Genre>;
  first_air_date: string;
  number_of_seasons: string;
}

export interface Company {
  logo_path: string;
}
export interface Genre {
  id: string;
  name: string;
}
export interface Video {
  id: string;
  key: string;
}

export interface SliderProps {
  list: Array<Content>;
  dv: string;
}

export default function Home(): React.ReactElement {
  const AutoSliderNoSSR = dynamic(() => import("components/AutoSlider"), {
    ssr: false,
  });

  return (
    <>
      <div className="container">
        <Seo title="Home" />
        <>
          <div className="contents_row">
            <h4>Movies</h4>
            <AutoSliderNoSSR dv="movies" type="popular" />
          </div>
          <div className="contents_row">
            <h4>TV</h4>
            <AutoSliderNoSSR dv="tv" type="popular" />
          </div>
        </>

        <style jsx>{`
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
    </>
  );
}

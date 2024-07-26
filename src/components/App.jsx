import Gallery from "./Gallery/Gallery";
import SectionInfo from "./SectionInfo/SectionIfo";
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <header></header>
      <main>
        <SectionInfo/>
        <Gallery/>
      </main>
      <footer></footer>
    </div>
  );
};

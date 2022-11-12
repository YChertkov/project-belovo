import { useEffect, useState, useRef } from 'react';
import { PAGE_COUNT, VIDEO_DURATION } from './consts';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

const Page = ({ Component }) => <Component />

export const App = () => {
  const [pageIndexNow, setPageIndexNow] = useState(6);
  const [videoIndexNow, setVideoIndexNow] = useState(0);
  const [isPlus, setIsPlus] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);
  const [videosMinus, setVideosMinus] = useState({});
  const [videosPlus, setVideosPlus] = useState({});
  const [pageComponents, setPagesComponents] = useState([]);

  const viewerRef = useRef(null);

  const handlePress = ({keyCode}) => {
    if (isAnimate || (keyCode !== 37) === (keyCode !== 39)) return;

    let newPageIndex;

    if (keyCode === 37) {
      newPageIndex = pageIndexNow - 2 >= 0 ? pageIndexNow - 2 : pageIndexNow;
    }

    if (keyCode === 39) {
      newPageIndex = pageIndexNow + 2 < PAGE_COUNT ? pageIndexNow + 2 : pageIndexNow;
    }

    if (newPageIndex !== pageIndexNow) {
      setIsPlus(keyCode === 39);
      setIsAnimate(true);
      setTimeout(() => setPageIndexNow(newPageIndex), 300);
      setVideoIndexNow(newPageIndex);
    }
  }

  useEffect(() => {
    const pageComponents = [];
    for (let i = 0; i < PAGE_COUNT; i++) {
      pageComponents.push((require('./pages/page' + i))[`Page${i}`]);
    }
    setPagesComponents(pageComponents);

    const videosPlus = {};
    for (let i = 0; i <= PAGE_COUNT / 2; i += 2) {
      videosPlus[i] = require(`./videos/plus/${i}.mp4`);
    }
    setVideosPlus(videosPlus);

    const videosMinus = {};
    for (let i = 2; i <= PAGE_COUNT - 2; i += 2) {
      videosMinus[i] = require(`./videos/minus/${i}.mp4`);
    }
    setVideosMinus(videosMinus);
  }, []);

  useEffect(() => {
    if (isAnimate) setTimeout(() => setIsAnimate(false), VIDEO_DURATION);
  }, [isAnimate]);

  useEffect(() => {
    if (viewerRef) {
      viewerRef.current.focus()
    }
  }, [viewerRef]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="pageView"
        tabIndex="0"
        onKeyDown={handlePress}
        ref={viewerRef}
      >
        {pageComponents.length && (
          <>
            <div className="leftPage page">
              <Page Component={pageComponents[pageIndexNow]} />
            </div>
            <div className="rightPage page">
              {pageComponents[pageIndexNow + 1] && (
                <Page Component={pageComponents[pageIndexNow + 1]}/>
              )}
            </div>
          </>
        )}
        <video
          src={
            isPlus ?
              videosPlus[videoIndexNow - 2] :
              videosMinus[videoIndexNow + 2]
          }
          style={{
            display: isAnimate ? "block" : "none",
          }}
          autoPlay
        />
      </div>
    </DndProvider>
  );
}

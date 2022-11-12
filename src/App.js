import { useEffect, useState, useRef } from 'react';
import { PAGE_COUNT, VIDEO_DURATION } from './consts';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

const Page = ({ Component }) => <Component />

export const App = () => {
  const [pageIndexNow, setPageIndexNow] = useState(3);
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
      newPageIndex = pageIndexNow - 1 >= 0 ? pageIndexNow - 1 : pageIndexNow;
    }

    if (keyCode === 39) {
      newPageIndex = pageIndexNow + 1 < PAGE_COUNT ? pageIndexNow + 1 : pageIndexNow;
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
    <DndProvider backend={TouchBackend}>
      <div
        className="pageView"
        tabIndex="0"
        onKeyDown={handlePress}
        ref={viewerRef}
      >
        {pageComponents.length && (
          <div className="page">
            <Page Component={pageComponents[pageIndexNow]} />
          </div>
        )}
        <video
          src={
            isPlus ?
              videosPlus[videoIndexNow - 1] :
              videosMinus[videoIndexNow + 1]
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

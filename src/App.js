import { useEffect, useState, useRef } from 'react';
import { PAGE_COUNT, VIDEO_DURATION } from './consts';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import img from "./bg.jpg";

const Page = ({ Component }) => <Component />

export const App = () => {
  const [pageIndexNow, setPageIndexNow] = useState(1);
  const [videoIndexNow, setVideoIndexNow] = useState(0);
  const [isPlus, setIsPlus] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);
  const [videosMinus, setVideosMinus] = useState({});
  const [videosPlus, setVideosPlus] = useState({});
  const [pageComponents, setPagesComponents] = useState([]);
  const [opacity, setOpacity] = useState(styles.opacityUp);
  const [video, setVideo] = useState(styles.videoDown);

  const viewerRef = useRef(null);

  const handlePress = ({keyCode}) => {
    if (isAnimate || (keyCode !== 37) === (keyCode !== 39)) return;

    let newPageIndex;

    if (keyCode === 37) {
      setOpacity(styles.opacityDown);
      newPageIndex = pageIndexNow - 1 >= 0 ? pageIndexNow - 1 : pageIndexNow;
      setTimeout(() => setVideo(styles.videoUp), 601);
      setTimeout(() => setOpacity(styles.opacityUp), 800);
      setTimeout(() => setVideo(styles.videoDown), 6700);
    }

    if (keyCode === 39) {
      setOpacity(styles.opacityDown);
      newPageIndex = pageIndexNow + 1 < PAGE_COUNT ? pageIndexNow + 1 : pageIndexNow;
      setTimeout(() => setVideo(styles.videoUp), 601);
      setTimeout(() => setOpacity(styles.opacityUp), 800);
      setTimeout(() => setVideo(styles.videoDown), 6700);
    }

    if (newPageIndex !== pageIndexNow) {
      setTimeout(() => {
        setIsPlus(keyCode === 39);
        setIsAnimate(true);
        setTimeout(() => setPageIndexNow(newPageIndex),150);
        setVideoIndexNow(newPageIndex);
      }, 201);
    }
  };

  useEffect(() => {
    const pageComponents = [];
    for (let i = 0; i < PAGE_COUNT; i++) {
      pageComponents.push((require('./pages/Page' + i))[`Page${i}`]);
    }
    setPagesComponents(pageComponents);

    const videosPlus = {};
    for (let i = 0; i <= PAGE_COUNT; i += 1) {
      videosPlus[i] = require(`./videos/plus/${i}.mp4`);
    }
    setVideosPlus(videosPlus);

    const videosMinus = {};
    for (let i = 1; i <= PAGE_COUNT - 1; i += 1) {
      videosMinus[i] = require(`./videos/minus/${i}.mp4`);
    }
    setVideosMinus(videosMinus);
  }, []);

  useEffect(() => {
    if (isAnimate) setTimeout(() => setIsAnimate(false), VIDEO_DURATION);
  }, [isAnimate]);

  useEffect(() => {
    if (viewerRef) {
      viewerRef.current.focus();
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
        <img src={img} style={{width: "2160px", height: "1920px", position: "absolute", zIndex: -1}} alt=""/>
        {pageComponents.length && (
          <div style={opacity}>
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
            ...video
          }}
          autoPlay
        />
      </div>
    </DndProvider>
  );
}
const styles = {
  opacityDown: {
    opacity: 0,
    transition: "opacity 0.4s"
  },
  opacityUp: {
    opacity: 1,
    transition: "opacity 1s"
  },
  videoDown: {
    opacity: 0,
    transition: "opacity 1s"
  },
  videoUp: {
    opacity: 1,
    transition: "opacity 0.6s"
  }
}
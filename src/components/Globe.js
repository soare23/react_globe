import React from 'react';
import ReactGlobe from 'react-globe';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

function Globe({ markers }) {
  let animation = [];
  let options = {};
  let goToCoordinates = markers.markers[0].coordinates;

  if (goToCoordinates[0] === 0 && goToCoordinates[1] === 0) {
    animation = [
      {
        coordinates: goToCoordinates,
        focusDistanceRadiusScale: 5,
      },
    ];
  } else {
    animation = [
      {
        coordinates: goToCoordinates,
        focusAnimationDuration: 3000,
        focusDistanceRadiusScale: 2,
        focusEasingFunction: ['Linear', 'None'],
      },
    ];
  }

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    options = {
      enableCameraZoom: false,
    };
  } else {
    options = {
      enableCameraZoom: true,
    };
  }

  return (
    <>
      <div className="main-container">
        <div className="globe-container">
          <ReactGlobe
            markers={markers.markers}
            animations={animation}
            globeBackgroundTexture
            options={options}
          ></ReactGlobe>
        </div>
      </div>
    </>
  );
}

export default Globe;

import { Map, GoogleApiWrapper } from "google-maps-react";

export default GoogleApiWrapper({
  apiKey: "AIzaSyAniSzdehDYrZ0E95aMIh_X1Ctxm9lW0OA"
})(function App(props) {
  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "0px 1fr",
          width: "100%",
          height: "100vh"
        }}
      >
        <div></div>
        <div
          style={{
            position: "relative"
          }}
        >
          <Map
            style={{ position: "absolute", width: "100%", height: "100%" }}
            google={props.google}
            zoom={6}
            initialCenter={{
              lat: 9,
              lng: 39
            }}
          />
        </div>
      </div>
    </div>
  );
});

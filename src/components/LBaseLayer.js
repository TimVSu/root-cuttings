import { TileLayer } from 'react-leaflet';

export default function LBaseLayer(props) {

    return (
        <TileLayer
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            id={props.id}
            tileSize={512}
            zoomOffset={-1}
            accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
    );
}


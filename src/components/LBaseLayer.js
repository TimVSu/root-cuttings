import { TileLayer } from 'react-leaflet';

export default function LBaseLayer(props) {

    return (
        <TileLayer
            attribution={props.attribution}
            url={props.url}
            tileSize={512}
            zoomOffset={-1}/>
    );
}


import { TileLayer } from 'react-leaflet';

export default function LBaseLayer({ attribution, url }) {

    return (
        <TileLayer
            attribution={attribution}
            url={url}
            tileSize={512}
            zoomOffset={-1}/>
    );
}


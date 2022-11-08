
import NodeCache from "node-cache";
const cache = new NodeCache({ stdTTL: 100} );

export {
    cache
}
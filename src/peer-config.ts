import YAML from 'yaml';
import path from 'path';
import fs from 'fs';

const PEER_CONFIG_PATH = path.join(__dirname, '..', 'config', 'peer-config.yml');
const DEFAULT_PEER_CONFIG = {
	forceRelayOnly: false,
	stunServers: [
		{
			url: 'stun:stun.l.google.com:19302'
		}
	]
};

let peerConfig = DEFAULT_PEER_CONFIG;
if (fs.existsSync(PEER_CONFIG_PATH)) {
	try {
		peerConfig = YAML.parse(fs.readFileSync(PEER_CONFIG_PATH).toString('utf8'));
	} catch (err) {
		console.error(`Unable to load ICE server config file. Make sure it is valid YAML.\n${err}`);
	}
}

export default peerConfig;
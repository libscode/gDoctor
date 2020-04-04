import Namespace from './Namespace' // your custom style file
import { OsmiProvider } from 'osmicsx'

const provider = new OsmiProvider(Namespace);

const { apply, connect } = provider;

export {
  apply,
  connect
}

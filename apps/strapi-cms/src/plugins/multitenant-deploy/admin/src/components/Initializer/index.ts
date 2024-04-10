/**
 *
 * Initializer
 *
 */

import { useEffect, useRef } from 'react';
import pluginId from '../../pluginId';
// import PropTypes from 'prop-types';

type InitializerProps = {
  setPlugin: (id: string) => void;
};

const Initializer = ({ setPlugin }: InitializerProps) => {
  const ref = useRef(setPlugin);

  useEffect(() => {
    ref.current(pluginId);
  }, []);

  return null;
};

// Initializer.propTypes = {
//   setPlugin: PropTypes.func.isRequired,
// };

export default Initializer;
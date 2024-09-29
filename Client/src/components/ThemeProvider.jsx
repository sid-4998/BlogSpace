import propTypes from 'prop-types'
import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {
  // Fetch theme from Redux state, with a fallback to 'default-theme'
  const theme = useSelector((state) => state.theme?.theme || 'default-theme');

  return (
    <div className={(theme)}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
};

ThemeProvider.propTypes = {
  children: propTypes.any
}

export default ThemeProvider;

import './IFrame.css';

const IFrame = ({ baseUrl, appName, appMode, token }) => {
  if (!baseUrl || !appName || !appMode || !token) return null;

  let finalUrl = baseUrl.trim();

  if (!(baseUrl.charAt(baseUrl.length - 1) === '/')) {
    finalUrl += '/';
  }

  finalUrl += `application/${appName.trim()}/${appMode.trim()}/occurrence-info/${token.trim()}`;

  return (
    <iframe
      className='iframe'
      src={finalUrl}
      title='Instabug Dashboard'
    >
    </iframe>
  );
};

export default IFrame;
